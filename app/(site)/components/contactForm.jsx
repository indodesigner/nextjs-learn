"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { validate } from "/utils/validate";
import { FaCircleExclamation } from "react-icons/fa6";
import { LuCalendarClock } from "react-icons/lu";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { ScrollArea } from "@/components/ui/scroll-area";
// import { usePathname } from "next/navigation";

export default function ContactForm({
  indianPackDetails,
  japanesePackDetails,
  language,
  currentPack,
}) {
  const [values, setValues] = useState({
    name: "",
    countryCode: "+91",
    phone: "",
    email: "",
    selectedPackage: "",
    date: null, // Add the date property
    noOfAdults: 1, // Initialize slider value in the state
    noOfChildren: 0,
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [sentStatus, setSentStatus] = useState(false);

  const nameInputRef = useRef(null);
  const phoneInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const messageInputRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validate(values);

    if (errors && Object.keys(errors).length > 0) {
      // Set errors state and focus on the first input field with an error
      setErrors(errors);
      if (errors.name) {
        nameInputRef.current.focus();
      } else if (errors.phone) {
        phoneInputRef.current.focus();
      } else if (errors.email) {
        emailInputRef.current.focus();
      } else if (errors.message) {
        messageInputRef.current.focus();
      }
      return;
    }

    setErrors({});
    setLoading(true);

    const formattedDate = values.date
      ? new Date(values.date).toISOString().split("T")[0]
      : null;

    if (currentPack != null) {
      try {
        const dataToSend = {
          name: values.name,
          countryCode: values.countryCode,
          phone: values.phone,
          email: values.email,
          selectedPackageName: currentPack.packageName,
          selectedPackageSlug: currentPack.slug,
          date: formattedDate, // Add the selected date
          noOfAdults: values.noOfAdults,
          noOfChildren: values.noOfChildren,
          message: values.message,
        };

        const res = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        });
        if (res.ok) {
          setValues({
            name: "",
            countryCode: "",
            phone: "",
            email: "",
            selectedPackage: "",
            date: "",
            noOfAdults: "1",
            noOfChildren: "0",
            message: "",
          });
          setSentStatus(true);
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        const { name, slug } = values.selectedPackage;

        const dataToSend = {
          name: values.name,
          countryCode: values.countryCode,
          phone: values.phone,
          email: values.email,
          selectedPackageName: name,
          selectedPackageSlug: slug,
          date: formattedDate, // Add the selected date
          noOfAdults: values.noOfAdults,
          noOfChildren: values.noOfChildren,
          message: values.message,
        };

        const res = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        });
        if (res.ok) {
          setValues({
            name: "",
            countryCode: "",
            phone: "",
            email: "",
            selectedPackage: "",
            date: "",
            noOfAdults: "1",
            noOfChildren: "0",
            message: "",
          });
          setSentStatus(true);
        }
      } catch (err) {
        console.log(err);
      }
    }

    setLoading(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleChangeCountryCode = (value) => {
    setValues((prevInput) => ({
      ...prevInput,
      countryCode: value,
    }));
  };
  const handleChangePackage = (value) => {
    try {
      const packageObj = JSON.parse(value);

      setValues((prevInput) => ({
        ...prevInput,
        selectedPackage: packageObj,
      }));
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  };

  const [selectedTab, setSelectedTab] = useState("india");
  const handleTabChange = (tabValue) => {
    setSelectedTab(tabValue);
  };

  const handleDateSelect = (selectedDate) => {
    setDate(selectedDate); // Update the date state
    setValues((prevValues) => ({
      ...prevValues,
      date: selectedDate ? format(selectedDate, "yyyy-MM-dd") : null,
    }));
  };

  const handleSliderChange = (value, sliderName) => {
    const adjustedValue = value == 10 ? "10+" : value;
    setValues((prevValues) => ({
      ...prevValues,
      [sliderName]: adjustedValue, // Update the slider value in the state
    }));
  };

  const countryCodes = [
    { code: "+91", label: "India" },
    { code: "+81", label: "Japan" },
  ];

  useEffect(() => {
    if (sentStatus) {
      // Set a timer to reset sentStatus after 10 seconds
      const timer = setTimeout(() => {
        setSentStatus(false);
      }, 10000); // 10 seconds in milliseconds

      // Clear the timer if the component unmounts or sentStatus changes
      return () => clearTimeout(timer);
    }
  }, [sentStatus]);

  // const currentPath = usePathname();
  // const isPackagesPage = currentPath.includes("packages");
  const [date, setDate] = useState();

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <ScrollArea className=" h-[70vh] rounded-md border border-neutral-200 dark:border-neutral-700">
        <div className="flex flex-col gap-3 p-3">
          <Input
            value={values.name}
            onChange={(e) => {
              handleChange(e);
              setErrors({ ...errors, name: "" });
            }}
            id="name"
            name="name"
            placeholder={language === "english" ? "Name" : "名前"}
            ref={nameInputRef}
          />
          {errors.name ? (
            <Alert className="py-1 text-red-500 dark:text-red-400">
              <FaCircleExclamation />
              <AlertTitle className="text-xs font-normal pt-[3px]">
                {errors.name}
              </AlertTitle>
            </Alert>
          ) : null}

          <div className="flex gap-2">
            <div className="w-[200px]">
              <Select
                value={values.countryCode}
                onValueChange={handleChangeCountryCode}
                name="countryCode"
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {countryCodes.map((country, index) => (
                    <SelectItem key={index} value={country.code}>
                      {country.label} ({country.code})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Input
              value={values.phone}
              onChange={handleChange}
              id="phone"
              name="phone"
              placeholder={language === "english" ? "Phone Number" : "電話番号"}
              ref={phoneInputRef}
            />
          </div>
          {errors.phone ? (
            <Alert className="py-1 text-red-500 dark:text-red-400">
              <FaCircleExclamation />
              <AlertTitle className="text-xs font-normal pt-[3px]">
                {errors.phone}
              </AlertTitle>
            </Alert>
          ) : null}

          <Input
            value={values.email}
            onChange={handleChange}
            id="email"
            name="email"
            placeholder={language === "english" ? "Email" : "Eメール"}
            ref={emailInputRef}
          />
          {errors.email ? (
            <Alert className="py-1 text-red-500 dark:text-red-400">
              <FaCircleExclamation />
              <AlertTitle className="text-xs font-normal pt-[3px]">
                {errors.email}
              </AlertTitle>
            </Alert>
          ) : null}

          {currentPack != null ? (
            <div className="bg-neutral-50 dark:bg-neutral-900 p-2 rounded-xl flex flex-col gap-2">
              {/* <Tabs defaultValue={currentPack.country[0].toLowerCase()}>
            <TabsList>
              <TabsTrigger value="india" disabled>
                {language === "english"
                  ? "India Packages"
                  : "インドのパッケージ"}
              </TabsTrigger>
              <TabsTrigger value="japan" disabled>
                {language === "english" ? "Japan Packages" : "日本パッケージ"}
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <Select>
            <SelectTrigger disabled>
              <SelectValue placeholder={currentPack.packageName} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={currentPack.packageName}>
                {currentPack.packageName}
              </SelectItem>
            </SelectContent>
          </Select> */}
              <div>
                <h6>Selected Package Details</h6>
                <h5 className="text-neutral-950 dark:text-neutral-50 text-sm sm:text-lg font-medium">
                  {language === "english"
                    ? currentPack.packageName
                    : currentPack.packageNamejp || currentPack.packageName}
                </h5>
              </div>
              <div className="flex flex-row gap-2 sm:gap-0 justify-between px-2 bg-neutral-50 dark:bg-neutral-800 bg-opacity-30 dark:bg-opacity-50 rounded-lg">
                {currentPack.duration != null ? (
                  <div className="flex flex-row place-items-center">
                    <LuCalendarClock className="text-md" />

                    <h6 className="text-sm ps-2">
                      <strong>{currentPack.duration.days}</strong>{" "}
                      {language === "english" ? "Days & " : "日々 & "}
                      <strong>{currentPack.duration.nights}</strong>{" "}
                      {language === "english" ? "Nights" : "夜"}
                    </h6>
                  </div>
                ) : null}

                {currentPack.rate && (
                  <div className=" border-r border-neutral-300 dark:border-neutral-600 border-opacity-50 dark:border-opacity-70"></div>
                )}

                {currentPack.rate != null ? (
                  <h6 className="text-[10px] flex flex-col items-center">
                    Starting from
                    <strong className="text-sm">₹{currentPack.rate}</strong>
                  </h6>
                ) : null}
              </div>
            </div>
          ) : (
            <div className="bg-neutral-100 dark:bg-neutral-900 p-2 rounded-xl flex flex-col items-center gap-2">
              <Tabs defaultValue="india">
                <TabsList>
                  <TabsTrigger
                    value="india"
                    onClick={() => handleTabChange("india")}
                  >
                    {language === "english"
                      ? "India Packages"
                      : "インドのパッケージ"}
                  </TabsTrigger>
                  <TabsTrigger
                    value="japan"
                    onClick={() => handleTabChange("japan")}
                  >
                    {language === "english"
                      ? "Japan Packages"
                      : "日本パッケージ"}
                  </TabsTrigger>
                </TabsList>
              </Tabs>

              <Select onValueChange={handleChangePackage}>
                <SelectTrigger>
                  <SelectValue
                    placeholder={
                      language === "english"
                        ? "Interested Package"
                        : "興味のあるパッケージ"
                    }
                  />
                </SelectTrigger>
                <SelectContent>
                  {selectedTab === "india" &&
                    indianPackDetails &&
                    indianPackDetails.map((details, index) => (
                      <span key={index}>
                        <SelectItem value={JSON.stringify(details)}>
                          {details.name}
                        </SelectItem>
                      </span>
                    ))}
                  {selectedTab === "japan" &&
                    japanesePackDetails &&
                    japanesePackDetails.map((details, index) => (
                      <span key={index}>
                        <SelectItem value={JSON.stringify(details)}>
                          {details.name}
                        </SelectItem>
                      </span>
                    ))}
                </SelectContent>
              </Select>
            </div>
          )}

          <div className="flex items-center justify-between gap-4 px-2">
            <Label htmlFor="prefferedDate">Preffered Date</Label>
            <Popover id="prefferedDate">
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[180px] justify-start text-left font-normal border-neutral-200 dark:border-neutral-700 ",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "yyyy-MM-dd") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={handleDateSelect}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <hr className=" border-neutral-300 dark:border-neutral-700 border-opacity-50 dark:border-opacity-70 mb-2" />
          <div className="mb-2">
            <h6 className="text-center text-sm">No. of Travelers</h6>
            <p className="text-center text-xs text-neutral-600 dark:text-neutral-500">
              (Slide the knob to change the values)
            </p>
          </div>
          <div className="flex items-center gap-4 px-2 mb-4">
            <Label htmlFor="noOfAdults" className=" w-[100px]">
              <span className="bg-neutral-100 dark:bg-neutral-900 px-1 rounded-sm me-1">
                {values.noOfAdults == 10 ? "10+" : values.noOfAdults}
              </span>
              {values.noOfAdults == 1 ? "Adult" : "Adults"}
            </Label>
            <Slider
              id="noOfAdults"
              defaultValue={[0]}
              min={1}
              max={10}
              step={1}
              name="noOfAdults"
              onValueChange={(value) => handleSliderChange(value, "noOfAdults")}
            />
          </div>
          <div className="flex items-center gap-4 px-2 mb-2">
            <Label htmlFor="noOfChildren" className=" w-[100px]">
              <span className="bg-neutral-100 dark:bg-neutral-900 px-1 rounded-sm me-1">
                {values.noOfChildren == 10 ? "10+" : values.noOfChildren}
              </span>
              {values.noOfChildren == 1 ? "Child" : "Children"}
            </Label>
            <Slider
              id="noOfChildren"
              defaultValue={[0]}
              min={0}
              max={10}
              step={1}
              name="noOfChildren"
              onValueChange={(value) =>
                handleSliderChange(value, "noOfChildren")
              }
            />
          </div>

          <Textarea
            value={values.message}
            onChange={handleChange}
            id="message"
            name="message"
            placeholder={
              language === "english" ? "Message(Optional)" : "メッセージ"
            }
            ref={messageInputRef}
          />
          {/* {errors.message ? (
        <Alert className="py-1 text-red-500 dark:text-red-400">
          <FaCircleExclamation />
          <AlertTitle className="text-sm">{errors.message}</AlertTitle>
        </Alert>
      ) : null} */}
        </div>
      </ScrollArea>
      <Button type="submit" disabled={loading}>
        {!loading ? (
          sentStatus ? (
            language === "english" ? (
              "Sent Successfully"
            ) : (
              "正常に送信されました"
            )
          ) : language === "english" ? (
            "Send"
          ) : (
            "送信"
          )
        ) : (
          <div className="flex items-center justify-center w-full h-full ">
            <Image
              src="/loader.svg"
              className="animate-spin"
              width="24"
              height="24"
              alt="loading animation"
            />
          </div>
        )}
      </Button>
    </form>
  );
}

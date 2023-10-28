"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { validate } from "/utils/validate";
import { FaCircleExclamation } from "react-icons/fa6";
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
    if (currentPack != null) {
      try {
        const dataToSend = {
          name: values.name,
          countryCode: values.countryCode,
          phone: values.phone,
          email: values.email,
          selectedPackageName: currentPack.packageName,
          selectedPackageSlug: currentPack.slug,
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

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 w-full sm:w-[350px]"
    >
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
          <AlertTitle className="text-sm">{errors.name}</AlertTitle>
        </Alert>
      ) : null}

      <Select
        value={values.countryCode}
        onValueChange={handleChangeCountryCode}
        name="countryCode"
        className="mr-2"
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

      <Input
        value={values.phone}
        onChange={handleChange}
        id="phone"
        name="phone"
        placeholder={language === "english" ? "Phone Number" : "電話番号"}
        ref={phoneInputRef}
      />
      {errors.phone ? (
        <Alert className="py-1 text-red-500 dark:text-red-400">
          <FaCircleExclamation />
          <AlertTitle className="text-sm">{errors.phone}</AlertTitle>
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
          <AlertTitle className="text-sm">{errors.email}</AlertTitle>
        </Alert>
      ) : null}

      {currentPack != null ? (
        <div className="bg-neutral-100 dark:bg-neutral-900 p-2 rounded-xl flex flex-col items-center gap-2">
          <Tabs defaultValue={currentPack.country[0].toLowerCase()}>
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
          </Select>
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
                {language === "english" ? "Japan Packages" : "日本パッケージ"}
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

      <Textarea
        value={values.message}
        onChange={handleChange}
        id="message"
        name="message"
        placeholder={language === "english" ? "Message" : "メッセージ"}
        ref={messageInputRef}
      />
      {errors.message ? (
        <Alert className="py-1 text-red-500 dark:text-red-400">
          <FaCircleExclamation />
          <AlertTitle className="text-sm">{errors.message}</AlertTitle>
        </Alert>
      ) : null}
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

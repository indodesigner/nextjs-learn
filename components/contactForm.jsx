"use client";
import { useState } from "react";
import { Input } from "/components/ui/input";
import { Textarea } from "/components/ui/textarea";
import { Button } from "/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "/components/ui/tabs";

import { validate } from "/utils/validate";
import { Alert, AlertDescription, AlertTitle } from "/components/ui/alert";
import { FaCircleExclamation } from "react-icons/fa6";
import Image from "next/image";

export default function ContactForm({ indianPackNames, japanesePackNames }) {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validate(values);
    console.log("er", errors);

    if (errors && Object.keys(errors).length > 0) {
      return setErrors(errors);
    }

    setErrors({});
    setLoading(true);

    try {
      const dataToSend = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        message: values.message,
        countryCode: values.countryCode, // Include the selected country code
        selectedPackage: values.selectedPackage, // Include the selected package
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
          email: "",
          phone: "",
          message: "",
          countryCode: "+91", // Reset country code to default
          selectedPackage: "", // Reset selected package
        });
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    setValues((prevInput) => ({
      ...prevInput,
      [e.target.name]: e.target.value,
    }));
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;

  //   if (name === "countryCode") {
  //     setValues((prevInput) => ({
  //       ...prevInput,
  //       countryCode: value,
  //     }));
  //   } else if (name === "selectedPackage") {
  //     setValues((prevInput) => ({
  //       ...prevInput,
  //       selectedPackage: value,
  //     }));
  //   } else {
  //     setValues((prevInput) => ({
  //       ...prevInput,
  //       [name]: value,
  //     }));
  //   }
  // };

  const [selectedTab, setSelectedTab] = useState("india");
  // Function to handle tab change
  const handleTabChange = (tabValue) => {
    setSelectedTab(tabValue);
  };

  const countryCodes = [
    { code: "+91", label: "India" },
    { code: "+81", label: "Japan" },
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 w-full sm:w-[350px] bg-white dark:bg-neutral-800 p-4 rounded-xl shadow-xl shadow-neutral-200 dark:shadow-neutral-900"
    >
      <Input
        value={values.name}
        onChange={(e) => {
          handleChange(e);
          setErrors({ ...errors, name: "" }); // You might need to pass some arguments to setErrors if required
        }}
        id="name"
        name="name"
        placeholder="Your Name"
      />
      {errors.name ? (
        <Alert className="py-1 text-red-500 dark:text-red-400">
          <FaCircleExclamation />
          <AlertTitle className="text-sm">{errors.name}</AlertTitle>
        </Alert>
      ) : null}
      <Select
        value={values.countryCode}
        onChange={handleChange}
        name="countryCode"
        className="mr-2"
      >
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {countryCodes.map((country) => (
            <SelectItem key={country.code} value={country.code}>
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
        placeholder="Your Phone Number"
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
        placeholder="Your Email"
      />
      {errors.email ? (
        <Alert className="py-1 text-red-500 dark:text-red-400">
          <FaCircleExclamation />
          <AlertTitle className="text-sm">{errors.email}</AlertTitle>
        </Alert>
      ) : null}
      <div className="bg-neutral-100 dark:bg-neutral-900 p-2 rounded-xl flex flex-col items-center gap-2">
        <Tabs defaultValue="india">
          <TabsList>
            <TabsTrigger value="india" onClick={() => handleTabChange("india")}>
              India Packages
            </TabsTrigger>
            <TabsTrigger value="japan" onClick={() => handleTabChange("japan")}>
              Japan Packages
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <Select
          value={values.selectedPackage}
          onChange={handleChange}
          name="selectedPackage"
        >
          <SelectTrigger>
            <SelectValue placeholder="Interested Package" />
          </SelectTrigger>
          <SelectContent>
            {selectedTab === "india" &&
              indianPackNames &&
              indianPackNames.map((name) => (
                <span key={name}>
                  <SelectItem value={name}>{name}</SelectItem>
                </span>
              ))}
            {selectedTab === "japan" &&
              japanesePackNames &&
              japanesePackNames.map((name) => (
                <span key={name}>
                  <SelectItem value={name}>{name}</SelectItem>
                </span>
              ))}
          </SelectContent>
        </Select>
      </div>

      <Textarea
        value={values.message}
        onChange={handleChange}
        id="message"
        name="message"
        placeholder="Your message"
      />
      <Button type="submit" disabled={loading}>
        {!loading ? (
          "Submit"
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

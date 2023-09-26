"use client";
import { useState } from "react";
import { Input } from "/components/ui/input";
import { Textarea } from "/components/ui/textarea";
import { Button } from "/components/ui/button";
import { validate } from "/utils/validate";
import { Alert, AlertDescription, AlertTitle } from "/components/ui/alert";
import Image from "next/image";

export default function ContactForm() {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (res.ok) {
        setValues({ name: "", email: "", message: "" });
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

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 w-full sm:w-[300px]"
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
          error={!!errors.name}
          errorMessage={!!errors.name ? errors.name : ""}
        />
        {errors.name ? (
          <Alert>
            {/* <Terminal className="h-4 w-4" /> */}
            <AlertTitle></AlertTitle>
            <AlertDescription>Please fill the name</AlertDescription>
          </Alert>
        ) : null}
        <Input
          value={values.phone}
          onChange={handleChange}
          id="phone"
          name="phone"
          placeholder="Your Phone Number"
          error={!!errors.phone}
          errorMessage={!!errors.phone ? errors.phone : ""}
        />
        {errors.phone ? (
          <Alert>
            {/* <Terminal className="h-4 w-4" /> */}
            <AlertTitle></AlertTitle>
            <AlertDescription>Please fill the phone number</AlertDescription>
          </Alert>
        ) : null}

        <Input
          value={values.email}
          onChange={handleChange}
          id="email"
          name="email"
          placeholder="Your Email"
          error={!!errors.email}
          errorMessage={!!errors.email ? errors.email : ""}
        />
        {errors.email ? (
          <Alert>
            {/* <Terminal className="h-4 w-4" /> */}
            <AlertTitle></AlertTitle>
            <AlertDescription>Please fill the email</AlertDescription>
          </Alert>
        ) : null}
        <Textarea
          value={values.message}
          onChange={handleChange}
          id="message"
          name="message"
          placeholder="Your message"
          error={!!errors.message}
          errorMessage={!!errors.message ? errors.message : ""}
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
    </div>
  );
}

"use client";
import { useState } from "react";
import { Input } from "/components/ui/input";
import { Textarea } from "/components/ui/textarea";
import { Button } from "/components/ui/button";
import { validate } from "/utils/validate";
import Image from "next/image";

export default function cForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate(values);
    if (errors && Object.keys(errors).length > 0) {
      return setErrors(errors);
    }
    setErrors({});
    setLoading(true);
    try {
      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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
          onChange={handleChange}
          id="name"
          name="name"
          label="Your Name"
          placeholder="JhonDoe"
          error={!!errors.name}
          errorMessage={!!errors.name ? errors.name : ""}
        />
        <Input
          value={values.email}
          onChange={handleChange}
          id="email"
          name="email"
          label="Your Email"
          placeholder="jhondoe@gmail.com"
          error={!!errors.email}
          errorMessage={!!errors.email ? errors.email : ""}
        />
        <Textarea
          value={values.message}
          onChange={handleChange}
          id="message"
          name="message"
          label="Your message to me"
          placeholder="Hi There!"
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
                width="30"
                height="30"
              />
            </div>
          )}
        </Button>
      </form>
    </div>
  );
}

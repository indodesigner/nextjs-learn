"use client";
import { useEffect } from "react";
import { useCountry } from "/contexts/countryContext";

const GetCountry = ({ country }) => {
  const { setCountry } = useCountry();

  useEffect(() => {
    // Set the country in the context
    setCountry(country);
  }, [country]);

  return <></>;
};

export default GetCountry;

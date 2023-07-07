"use client";
import { useState } from "react";
import { write, utils } from 'xlsx';

const Form = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    test1: "",
    test2: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevformData) => ({ ...prevformData, [name]: value }));
  };
  const handleNextStep = () => {
    if (step === 1) {
      // Email validation
      if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "Please enter a valid email address.",
        }));
        return;
      }
      // Phone number validation
      if (!formData.phone || !/^[0-9]{10}$/.test(formData.phone)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          phone: "Please enter a valid 10-digit phone number.",
        }));
        return;
      }
    }
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    const worksheet = convertFormDataToSheet(formData);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, 'Form Data');
    const excelBuffer = write(workbook, { bookType: 'xlsx', type: 'buffer' });
    saveAsExcelFile(excelBuffer, 'form_data.xlsx');
  };

  const convertFormDataToSheet = (formData) => {
    const worksheet = utils.json_to_sheet([formData], { skipHeader: true });
    return worksheet;
  };

  const saveAsExcelFile = (buffer, fileName) => {
    const data = new Blob([buffer], { type: 'application/octet-stream' });
    const url = window.URL.createObjectURL(data);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const isNextButtonDisabled =
    (step === 1 &&
      !(
        formData.fname &&
        formData.lname &&
        formData.email &&
        formData.phone
      )) ||
    (step === 2 && !(formData.test1 && formData.test2));

  return (
    <div>
      <h2 className="text-3xl font-bold mb-10 text-center">Multi-step Form</h2>

      {step === 1 && (
        <div className="bg-gray-100 shadow-md p-4 rounded-lg flex flex-col justify-between min-h-[65vh] min-w-[70vw] sm:min-w-[50vw] md:min-w-[40vw] lg:min-w-[30vw] xl:min-w-[20vw]">
          <div>
            <h2 className="text-lg font-medium mb-4 text-center">Step 1</h2>

            <div className="flex flex-col mb-4">
              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                name="fname"
                className="rounded-md bg-gray-200 p-2"
                value={formData.fname}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="ltname">Last Name</label>
              <input
                type="text"
                name="lname"
                className="rounded-md bg-gray-200 p-2"
                value={formData.lname}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                className="rounded-md bg-gray-200 p-2"
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && <p>{errors.email}</p>}
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                name="phone"
                className="rounded-md bg-gray-200 p-2"
                value={formData.phone}
                onChange={handleInputChange}
              />
              {errors.phone && <p>{errors.phone}</p>}
            </div>
          </div>
          <div className="flex justify-end">
            <button
              className="bg-gray-800 text-white font-medium p-2 rounded-lg"
              disabled={isNextButtonDisabled}
              onClick={handleNextStep}
            >
              Next
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="bg-gray-800 shadow-md p-4 rounded-lg flex flex-col justify-between min-h-[65vh] min-w-[70vw] sm:min-w-[50vw] md:min-w-[40vw] lg:min-w-[30vw] xl:min-w-[20vw]">
          <div>
            <h2 className="text-lg font-medium mb-4 text-center">Step 2</h2>

            <div className="flex flex-col mb-4">
              <label htmlFor="test1">test 1</label>
              <input
                type="text"
                name="test1"
                className="rounded-md bg-gray-200 p-2"
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="test2">test 2</label>
              <input
                type="text"
                name="test2"
                className="rounded-md bg-gray-200 p-2"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="flex justify-between">
            <button
              className="bg-gray-800 text-white font-medium p-2 rounded-lg"
              onClick={handlePrevStep}
            >
              Prev
            </button>
            <button
              className="bg-gray-800 text-white font-medium p-2 rounded-lg"
              disabled={isNextButtonDisabled}
              onClick={handleNextStep}
            >
              Next
            </button>
          </div>
        </div>
      )}
      {step === 3 && (
        <div className="bg-gray-800 shadow-md p-4 rounded-lg flex flex-col justify-between min-h-[65vh] min-w-[70vw] sm:min-w-[50vw] md:min-w-[40vw] lg:min-w-[30vw] xl:min-w-[20vw]">
          <div>
            <h2 className="text-lg font-medium mb-4 text-center">
              Step 3: Confirmation
            </h2>

            <p className="mb-2">Name: {formData.fname}</p>
            <p className="mb-2">Last: {formData.lname}</p>
            <p className="mb-2">Email: {formData.email}</p>
            <p className="mb-2">Phone: {formData.phone}</p>
            <p className="mb-2">Test 1: {formData.test1}</p>
            <p className="mb-2">Test 2: {formData.test2}</p>
          </div>
          <div className="flex justify-between mt-10">
            <button
              onClick={handlePrevStep}
              className="bg-gray-800 text-white font-medium p-2 rounded-lg"
            >
              Previous
            </button>
            <button
              onClick={handleSubmit}
              className="bg-gray-800 text-white font-medium p-2 rounded-lg"
            >
              Download xlsx
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;

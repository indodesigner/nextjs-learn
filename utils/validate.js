export const validate = ({
  name,
  phone,
  email,
  date,
  noOfAdults,
  // noOfChildren,
  // message,
}) => {
  const errors = {};
  if (!name || name.trim() === "") {
    errors.name = "Name is required";
  }
  if (!phone || phone.trim() === "") {
    errors.phone = "Phone number is required";
  } else if (!/^\d{10}$/i.test(phone)) {
    errors.phone = "Invalid phone number. Please enter a 10-digit number.";
  }
  if (!email || email.trim() === "") {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = "Invalid email address";
  }
  if (!date || date.trim() === "") {
    errors.date = "Please pick a date";
  }
  if (!noOfAdults || isNaN(Number(noOfAdults))) {
    errors.noOfAdults = "Number of travelers required";
  }
  // if (!noOfChildren || isNaN(Number(noOfChildren))) {
  //   errors.noOfChildren = "Number of travelers required";
  // }
  // if (!message || message.trim() === "") {
  //   errors.message = "Message is required";
  // }
  return errors;
};

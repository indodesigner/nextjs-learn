const calculateDateTime = (fetchedDate) => {
  // Step 1: Convert fetchedDate to a JavaScript Date object
  const fetchedDateObj = new Date(fetchedDate);

  // Step 2: Get the current date and time
  const currentDateObj = new Date();

  // Step 3: Calculate the time difference between current date and fetched date in milliseconds
  const timeDifferenceMs = currentDateObj - fetchedDateObj;

  // Step 4: Calculate the time difference in hours, days, etc.
  const timeDifferenceInMinutes = Math.floor(timeDifferenceMs / (1000 * 60));
  const timeDifferenceInHours = Math.floor(timeDifferenceMs / (1000 * 60 * 60));
  const timeDifferenceInDays = Math.floor(
    timeDifferenceMs / (1000 * 60 * 60 * 24)
  );

  // Step 5: Determine the appropriate status based on the time difference
  let status;
  const options = {
    // weekday: "long", // or 'short', 'narrow'
    year: "numeric", // or '2-digit'
    month: "short", // or 'short', 'narrow'
    day: "numeric", // or '2-digit'
  };

  if (timeDifferenceInMinutes < 60) {
    status = `${timeDifferenceInMinutes} minutes ago`;
  } else if (timeDifferenceInHours < 24) {
    status = `${timeDifferenceInHours} hours ago`;
  } else if (timeDifferenceInDays === 1) {
    status = "Yesterday";
  } else if (timeDifferenceInDays < 7) {
    status = `${timeDifferenceInDays} days ago`;
  } else {
    // If the time difference is more than 7 days, you might want to show the actual date.
    // status = fetchedDateObj.toDateString();
    status = new Intl.DateTimeFormat("en-US", options).format(fetchedDateObj);
  }

  // Step 6: Display the status
  return status;
};

export default calculateDateTime;

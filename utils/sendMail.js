import sgMail from "@sendgrid/mail";
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
export const sendEmail = async (response) => {
  const {
    name,
    countryCode,
    phone,
    email,
    selectedPackageName,
    selectedPackageSlug,
    date,
    noOfAdults,
    noOfChildren,
    message,
  } = response;

  const href = "https://www.nikotravels.com/packages/"; //change this to domain after hosting <<<<<<<important>

  const msg = {
    to: "webdesigner@indocosmo.com",
    from: "webdesigner@indocosmo.com",
    subject: `New Enquiry from ${name}`,
    text: `
            Name: ${name}
            Phone: (${countryCode}) ${phone}
            Email: ${email}
            Interested Package: ${selectedPackageName}
            Link to Pack: ${href}${selectedPackageSlug}
            Preffered Date: ${date}
            No of Adults: ${noOfAdults}
            No of Children: ${noOfChildren}
            Message: ${message}`,
  };

  try {
    await sgMail.send(msg);
    console.log(`Email sent to ${to}`);
  } catch (error) {
    console.error(error);
  }
};

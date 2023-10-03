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
    message,
  } = response;

  const href = "http://localhost:3000/packages/"; //change this to domain after hosting <<<<<<<important>

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
            Message: ${message}`,
  };

  try {
    await sgMail.send(msg);
    console.log(`Email sent to ${to}`);
  } catch (error) {
    console.error(error);
  }
};

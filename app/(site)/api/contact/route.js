import { NextResponse } from "next/server";
import { sendEmail } from "/utils/sendMail";

export async function POST(request) {
  const { token, formData } = await request.json();

  try {
    // Verify ReCaptcha token
    const isVerified = await verifyReCaptcha(token);

    if (!isVerified) {
      return NextResponse.json(
        { message: "Failed to verify ReCaptcha token" },
        { status: 400 }
      );
    }

    // ReCaptcha verification successful, proceed with sending email
    await sendEmail(formData);
    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

async function verifyReCaptcha(token) {
  try {
    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
          response: token,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to verify ReCaptcha token");
    }

    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error("Error verifying ReCaptcha token:", error);
    return false;
  }
}

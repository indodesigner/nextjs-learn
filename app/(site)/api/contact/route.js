import { NextResponse } from "next/server";
import { sendEmail } from "/utils/sendMail";

export async function POST(request) {
  const response = await request.json();
  try {
    await sendEmail(response);
    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Internal Server Error" });
  }
}

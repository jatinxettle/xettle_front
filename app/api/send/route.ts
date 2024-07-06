import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import MessageUsEmail from "@/Components/EmailMessage";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, message, tel } = await req.json();

  try {
    const data = await resend.emails.send({
      from: "webform@xettle.net", // your verified domain
      to: `letstalk@xettle.net`, // the email address you want to send a message
      subject: `${name} has a message!`,
      react: MessageUsEmail({ name, email, message, tel }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}

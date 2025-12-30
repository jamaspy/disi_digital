import { ContactEmailTemplate } from "@/components/contact-email-template";
import { NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "disi digital <james@disi.au>",
      to: ["james@disi.au"],
      subject: `New Contact Form Submission from ${name}`,
      html: ContactEmailTemplate({ name, email, message }),
      replyTo: email, // This allows you to reply directly to the form submitter
    });

    if (error) {
      console.error('Resend API error:', error);
      return Response.json(
        { error: error.message || 'Failed to send email' },
        { status: 500 }
      );
    }

    return Response.json(data);
  } catch (error) {
    console.error('API route error:', error);
    return Response.json(
      { error: error instanceof Error ? error.message : 'Failed to send email' },
      { status: 500 }
    );
  }
}

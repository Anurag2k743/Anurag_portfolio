import { Resend } from "resend";
import { NextResponse } from "next/server";

// Type safety and error handling improved
export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    // Basic input validation (optional but good for spam & safety)
    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: "Missing required fields." }, { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const data = await resend.emails.send({
      from: 'Your Name <onboarding@resend.dev>', // Replace with your verified domain
      to: ['your@email.com'], // Change to your real destination
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>Contact Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Resend error:", error);
    return NextResponse.json({ success: false, error: error?.message || "Internal server error" }, { status: 500 });
  }
}

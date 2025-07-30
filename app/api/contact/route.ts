import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { name, email, phone, message } = await req.json()

  try {
    const data = await resend.emails.send({
      from: 'Your Name <onboarding@resend.dev>', // or your verified domain
      to: ['your@email.com'], // Replace with your email
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>Contact Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br/> ${message}</p>
      `,
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("Resend error:", error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}

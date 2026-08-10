"use server"

import { Resend } from "resend"

export type ContactState = {
  status: "idle" | "success" | "error"
  message: string
}

const TO_ADDRESS = "info@productcybersecurity.com"

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim()
  const email = String(formData.get("email") ?? "").trim()
  const org = String(formData.get("org") ?? "").trim()
  const regulation = String(formData.get("regulation") ?? "").trim()
  const message = String(formData.get("message") ?? "").trim()
  // Honeypot — real users leave this empty.
  const trap = String(formData.get("company_website") ?? "").trim()

  if (trap) {
    // Silently accept to avoid tipping off bots.
    return { status: "success", message: "Thanks — we'll be in touch shortly." }
  }

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  if (!name || !emailValid || !message) {
    return {
      status: "error",
      message: "Please provide your name, a valid email, and a message.",
    }
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return {
      status: "error",
      message:
        "Messaging is not configured yet. Please email info@productcybersecurity.com directly.",
    }
  }

  try {
    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from: "Product Cybersecurity <onboarding@resend.dev>",
      to: [TO_ADDRESS],
      replyTo: email,
      subject: `New inquiry${regulation ? ` — ${regulation}` : ""} from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        org ? `Organization: ${org}` : null,
        regulation ? `Regulation: ${regulation}` : null,
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    })

    if (error) {
      return {
        status: "error",
        message:
          "We couldn't send your message. Please email info@productcybersecurity.com directly.",
      }
    }

    return {
      status: "success",
      message: "Thanks — your message is on its way. We'll respond shortly.",
    }
  } catch {
    return {
      status: "error",
      message:
        "Something went wrong. Please email info@productcybersecurity.com directly.",
    }
  }
}

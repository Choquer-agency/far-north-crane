import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "hello@choquer.agency";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "Far North Crane <onboarding@resend.dev>";

export async function POST(req: Request) {
  try {
    const fd = await req.formData();
    const name = String(fd.get("Full-Name") || "").trim();
    const email = String(fd.get("Email-Address") || "").trim();
    const phone = String(fd.get("Phone") || "").trim();
    const message = String(fd.get("Message") || "").trim();

    if (!name || !email) {
      return NextResponse.json({ ok: false, error: "missing fields" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("[contact] RESEND_API_KEY not configured; logging submission only");
      console.log("[contact submission]", { name, email, phone, message });
      return NextResponse.json({ ok: true, dev: true });
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New contact form submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error("[contact] resend error", error);
      return NextResponse.json({ ok: false, error: "send failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[contact] unexpected", e);
    return NextResponse.json({ ok: false, error: "server error" }, { status: 500 });
  }
}

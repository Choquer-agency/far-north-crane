"use client";

import { useEffect } from "react";

export default function ContactFormHandler() {
  useEffect(() => {
    const form = document.getElementById("wf-form-Contact") as HTMLFormElement | null;
    if (!form) return;

    form.setAttribute("method", "post");
    form.setAttribute("action", "/api/contact");

    const onSubmit = async (e: SubmitEvent) => {
      e.preventDefault();
      const fd = new FormData(form);
      const wrapper = form.parentElement;
      const successEl = wrapper?.querySelector(".w-form-done") as HTMLElement | null;
      const failEl = wrapper?.querySelector(".w-form-fail") as HTMLElement | null;
      const submit = form.querySelector('input[type="submit"]') as HTMLInputElement | null;
      const originalValue = submit?.value;
      if (submit) {
        submit.value = submit.getAttribute("data-wait") || "Please wait...";
        submit.disabled = true;
      }
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          body: fd,
        });
        if (!res.ok) throw new Error("send failed");
        form.style.display = "none";
        if (successEl) successEl.style.display = "block";
        if (failEl) failEl.style.display = "none";
        form.reset();
      } catch {
        if (failEl) failEl.style.display = "block";
      } finally {
        if (submit && originalValue !== undefined) {
          submit.value = originalValue;
          submit.disabled = false;
        }
      }
    };

    form.addEventListener("submit", onSubmit);
    return () => form.removeEventListener("submit", onSubmit);
  }, []);

  return null;
}

"use client";

import { useState, type MouseEvent } from "react";

export function AdminSubmitButton({ children }: { children: string }) {
  const [submitting, setSubmitting] = useState(false);

  async function submit(event: MouseEvent<HTMLButtonElement>) {
    const form = event.currentTarget.form;
    if (!form || !form.reportValidity() || submitting) return;

    setSubmitting(true);

    try {
      const body = new URLSearchParams();
      new FormData(form).forEach((value, key) => body.append(key, String(value)));

      const response = await fetch(form.action, {
        method: "POST",
        body,
        credentials: "same-origin",
        redirect: "follow",
      });

      window.location.assign(response.url || "/admin");
    } catch {
      window.location.assign("/admin?error=request");
    }
  }

  return (
    <button className="button" type="button" onClick={submit} disabled={submitting}>
      {submitting ? "Saxlanılır..." : children}
    </button>
  );
}


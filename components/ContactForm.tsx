"use client";

import React, { useState } from "react";
import {
  COMPANY_SIZE_OPTIONS,
  DEVICE_COUNT_OPTIONS,
  type CompanySize,
  type DeviceCount,
  type LeadFormPayload,
} from "@/lib/lead-validation";

export default function ContactForm() {
  const [form, setForm] = useState<Partial<LeadFormPayload>>({
    companyName: "",
    yourName: "",
    workEmail: "",
    phoneNumber: "",
    companySize: undefined,
    city: "",
    deviceCount: undefined,
    additionalDetails: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof LeadFormPayload, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when editing the field
    if (errors[name as keyof LeadFormPayload]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSelectChange = (name: keyof LeadFormPayload, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value || undefined }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/lead-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok) {
        if (result.errors) {
          setErrors(result.errors);
        } else {
          setErrorMessage(result.error || "Something went wrong. Please try again.");
          setSubmitStatus("error");
        }
      } else {
        setSubmitStatus("success");
        // Reset form
        setForm({
          companyName: "",
          yourName: "",
          workEmail: "",
          phoneNumber: "",
          companySize: undefined,
          city: "",
          deviceCount: undefined,
          additionalDetails: "",
        });
      }
    } catch (err) {
      setErrorMessage("Network error. Please verify connection and try again.");
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24"
      aria-labelledby="contact-heading"
    >
      <div className="rounded-lg border border-ink/10 bg-white/60 p-6 md:p-10 shadow-sm">
        <div className="border-b border-ink/10 pb-6">
          <p className="font-display text-xs uppercase tracking-widest text-copper">
            custody intake portal
          </p>
          <h2
            id="contact-heading"
            className="mt-2 font-display text-xl font-semibold text-ink md:text-2xl"
          >
            Request a pilot conversation
          </h2>
          <p className="mt-2 text-sm text-steel">
            Fields formatted as intake manifest line-items. Your information remains confidential and stored in compliance with enterprise audit trail standards.
          </p>
        </div>

        {submitStatus === "success" && (
          <div
            className="mt-6 border border-copper/30 bg-copper/5 p-5 text-sm text-ink rounded"
            role="alert"
          >
            <p className="font-display font-semibold text-copper">TRANSMISSION CONFIRMED</p>
            <p className="mt-1">Request received — we&apos;ll follow up within 2 business days.</p>
          </div>
        )}

        {submitStatus === "error" && (
          <div
            className="mt-6 border border-red-500/30 bg-red-500/5 p-5 text-sm text-red-900 rounded"
            role="alert"
          >
            <p className="font-display font-semibold text-red-700">SUBMISSION FAILURE</p>
            <p className="mt-1">{errorMessage}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-6 space-y-0" noValidate>
          {/* Company Name */}
          <div className="manifest-line flex flex-col py-4 md:flex-row md:items-baseline md:justify-between gap-2">
            <label
              htmlFor="companyName"
              className="stamp-mark text-xs uppercase tracking-wide text-steel md:w-1/3"
            >
              Company Name <span className="text-copper" aria-hidden="true">*</span>
            </label>
            <div className="flex-1 md:w-2/3">
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={form.companyName || ""}
                onChange={handleChange}
                required
                className="w-full bg-transparent font-display text-sm text-ink placeholder:text-steel/50 focus:outline-none"
                placeholder="Enterprise Legal Name"
                aria-invalid={!!errors.companyName}
                aria-describedby={errors.companyName ? "error-companyName" : undefined}
              />
              {errors.companyName && (
                <p id="error-companyName" className="mt-1 font-display text-[11px] text-red-600">
                  {errors.companyName}
                </p>
              )}
            </div>
          </div>

          {/* Your Name */}
          <div className="manifest-line flex flex-col py-4 md:flex-row md:items-baseline md:justify-between gap-2">
            <label
              htmlFor="yourName"
              className="stamp-mark text-xs uppercase tracking-wide text-steel md:w-1/3"
            >
              Your Name <span className="text-copper" aria-hidden="true">*</span>
            </label>
            <div className="flex-1 md:w-2/3">
              <input
                type="text"
                id="yourName"
                name="yourName"
                value={form.yourName || ""}
                onChange={handleChange}
                required
                className="w-full bg-transparent font-display text-sm text-ink placeholder:text-steel/50 focus:outline-none"
                placeholder="Full Name (Authorized Signatory)"
                aria-invalid={!!errors.yourName}
                aria-describedby={errors.yourName ? "error-yourName" : undefined}
              />
              {errors.yourName && (
                <p id="error-yourName" className="mt-1 font-display text-[11px] text-red-600">
                  {errors.yourName}
                </p>
              )}
            </div>
          </div>

          {/* Work Email */}
          <div className="manifest-line flex flex-col py-4 md:flex-row md:items-baseline md:justify-between gap-2">
            <label
              htmlFor="workEmail"
              className="stamp-mark text-xs uppercase tracking-wide text-steel md:w-1/3"
            >
              Work Email <span className="text-copper" aria-hidden="true">*</span>
            </label>
            <div className="flex-1 md:w-2/3">
              <input
                type="email"
                id="workEmail"
                name="workEmail"
                value={form.workEmail || ""}
                onChange={handleChange}
                required
                className="w-full bg-transparent font-display text-sm text-ink placeholder:text-steel/50 focus:outline-none"
                placeholder="name@company.com"
                aria-invalid={!!errors.workEmail}
                aria-describedby={errors.workEmail ? "error-workEmail" : undefined}
              />
              {errors.workEmail && (
                <p id="error-workEmail" className="mt-1 font-display text-[11px] text-red-600">
                  {errors.workEmail}
                </p>
              )}
            </div>
          </div>

          {/* Phone Number */}
          <div className="manifest-line flex flex-col py-4 md:flex-row md:items-baseline md:justify-between gap-2">
            <label
              htmlFor="phoneNumber"
              className="stamp-mark text-xs uppercase tracking-wide text-steel md:w-1/3"
            >
              Phone Number <span className="text-copper" aria-hidden="true">*</span>
            </label>
            <div className="flex-1 md:w-2/3">
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={form.phoneNumber || ""}
                onChange={handleChange}
                required
                className="w-full bg-transparent font-display text-sm text-ink placeholder:text-steel/50 focus:outline-none"
                placeholder="+91 XXXXX XXXXX"
                aria-invalid={!!errors.phoneNumber}
                aria-describedby={errors.phoneNumber ? "error-phoneNumber" : undefined}
              />
              {errors.phoneNumber && (
                <p id="error-phoneNumber" className="mt-1 font-display text-[11px] text-red-600">
                  {errors.phoneNumber}
                </p>
              )}
            </div>
          </div>

          {/* Company Size */}
          <div className="manifest-line flex flex-col py-4 md:flex-row md:items-baseline md:justify-between gap-2">
            <label
              htmlFor="companySize"
              className="stamp-mark text-xs uppercase tracking-wide text-steel md:w-1/3"
            >
              Company Size <span className="text-copper" aria-hidden="true">*</span>
            </label>
            <div className="flex-1 md:w-2/3">
              <select
                id="companySize"
                name="companySize"
                value={form.companySize || ""}
                onChange={(e) => handleSelectChange("companySize", e.target.value)}
                required
                className="w-full bg-transparent font-display text-sm text-ink focus:outline-none cursor-pointer"
                aria-invalid={!!errors.companySize}
                aria-describedby={errors.companySize ? "error-companySize" : undefined}
              >
                <option value="" disabled className="bg-paper text-steel">Select size tier</option>
                {COMPANY_SIZE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt} className="bg-paper text-ink">
                    {opt} employees
                  </option>
                ))}
              </select>
              {errors.companySize && (
                <p id="error-companySize" className="mt-1 font-display text-[11px] text-red-600">
                  {errors.companySize}
                </p>
              )}
            </div>
          </div>

          {/* City */}
          <div className="manifest-line flex flex-col py-4 md:flex-row md:items-baseline md:justify-between gap-2">
            <label
              htmlFor="city"
              className="stamp-mark text-xs uppercase tracking-wide text-steel md:w-1/3"
            >
              City <span className="text-copper" aria-hidden="true">*</span>
            </label>
            <div className="flex-1 md:w-2/3">
              <input
                type="text"
                id="city"
                name="city"
                value={form.city || ""}
                onChange={handleChange}
                required
                className="w-full bg-transparent font-display text-sm text-ink placeholder:text-steel/50 focus:outline-none"
                placeholder="Office Location"
                aria-invalid={!!errors.city}
                aria-describedby={errors.city ? "error-city" : undefined}
              />
              {errors.city && (
                <p id="error-city" className="mt-1 font-display text-[11px] text-red-600">
                  {errors.city}
                </p>
              )}
            </div>
          </div>

          {/* Approx. number of devices to retire */}
          <div className="manifest-line flex flex-col py-4 md:flex-row md:items-baseline md:justify-between gap-2">
            <label
              htmlFor="deviceCount"
              className="stamp-mark text-xs uppercase tracking-wide text-steel md:w-1/3"
            >
              Retirement Volume <span className="text-steel/40 text-[10px]">(Optional)</span>
            </label>
            <div className="flex-1 md:w-2/3">
              <select
                id="deviceCount"
                name="deviceCount"
                value={form.deviceCount || ""}
                onChange={(e) => handleSelectChange("deviceCount", e.target.value)}
                className="w-full bg-transparent font-display text-sm text-ink focus:outline-none cursor-pointer"
                aria-invalid={!!errors.deviceCount}
                aria-describedby={errors.deviceCount ? "error-deviceCount" : undefined}
              >
                <option value="" className="bg-paper text-steel">Select approximate units</option>
                {DEVICE_COUNT_OPTIONS.map((opt) => (
                  <option key={opt} value={opt} className="bg-paper text-ink">
                    {opt} devices
                  </option>
                ))}
              </select>
              {errors.deviceCount && (
                <p id="error-deviceCount" className="mt-1 font-display text-[11px] text-red-600">
                  {errors.deviceCount}
                </p>
              )}
            </div>
          </div>

          {/* Additional details */}
          <div className="manifest-line flex flex-col py-4 md:flex-row md:items-start md:justify-between gap-2">
            <label
              htmlFor="additionalDetails"
              className="stamp-mark text-xs uppercase tracking-wide text-steel pt-1 md:w-1/3"
            >
              Additional Details <span className="text-steel/40 text-[10px]">(Optional)</span>
            </label>
            <div className="flex-1 md:w-2/3">
              <textarea
                id="additionalDetails"
                name="additionalDetails"
                value={form.additionalDetails || ""}
                onChange={handleChange}
                rows={3}
                className="w-full bg-transparent font-display text-sm text-ink placeholder:text-steel/50 focus:outline-none resize-none"
                placeholder="Specific inventory types, audit deadlines, or compliance requirements."
              />
            </div>
          </div>

          {/* Submit */}
          <div className="pt-8 flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper disabled:opacity-50 cursor-pointer"
            >
              {isSubmitting ? "Transmitting..." : "Request a pilot conversation"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

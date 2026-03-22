"use client";

import { useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-[#E8E4DC] bg-white p-8 text-center shadow-sm">
        <p className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#0F3D2E]">Thanks—we got it.</p>
        <p className="mt-2 text-[#4B5563]">
          We’ll reach out using your preferred contact method. For urgent needs, call or WhatsApp us directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-[#E8E4DC] bg-white p-6 shadow-sm sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[#0D0D0D]">
            Full name
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className="mt-1.5 w-full rounded-xl border border-[#E8E4DC] bg-[#F6F4EF] px-4 py-3 text-[#0D0D0D] outline-none ring-[#1F6F54] focus:ring-2"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-[#0D0D0D]">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className="mt-1.5 w-full rounded-xl border border-[#E8E4DC] bg-[#F6F4EF] px-4 py-3 text-[#0D0D0D] outline-none ring-[#1F6F54] focus:ring-2"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[#0D0D0D]">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-1.5 w-full rounded-xl border border-[#E8E4DC] bg-[#F6F4EF] px-4 py-3 text-[#0D0D0D] outline-none ring-[#1F6F54] focus:ring-2"
        />
      </div>
      <div>
        <label htmlFor="type" className="block text-sm font-medium text-[#0D0D0D]">
          Property type
        </label>
        <select
          id="type"
          name="type"
          className="mt-1.5 w-full rounded-xl border border-[#E8E4DC] bg-[#F6F4EF] px-4 py-3 text-[#0D0D0D] outline-none ring-[#1F6F54] focus:ring-2"
          defaultValue="residential"
        >
          <option value="residential">Residential</option>
          <option value="commercial">Commercial</option>
          <option value="unsure">Not sure</option>
        </select>
      </div>
      <div>
        <label htmlFor="address" className="block text-sm font-medium text-[#0D0D0D]">
          Property address
        </label>
        <input
          id="address"
          name="address"
          required
          autoComplete="street-address"
          placeholder="Street, city, ZIP"
          className="mt-1.5 w-full rounded-xl border border-[#E8E4DC] bg-[#F6F4EF] px-4 py-3 text-[#0D0D0D] outline-none ring-[#1F6F54] focus:ring-2"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#0D0D0D]">
          What do you need?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Mowing, cleanup, frequency, commercial grounds, etc."
          className="mt-1.5 w-full rounded-xl border border-[#E8E4DC] bg-[#F6F4EF] px-4 py-3 text-[#0D0D0D] outline-none ring-[#1F6F54] focus:ring-2"
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact" className="block text-sm font-medium text-[#0D0D0D]">
            Preferred contact
          </label>
          <select
            id="contact"
            name="contact"
            className="mt-1.5 w-full rounded-xl border border-[#E8E4DC] bg-[#F6F4EF] px-4 py-3 text-[#0D0D0D] outline-none ring-[#1F6F54] focus:ring-2"
            defaultValue="phone"
          >
            <option value="phone">Phone</option>
            <option value="whatsapp">WhatsApp</option>
            <option value="email">Email</option>
          </select>
        </div>
        <div>
          <label htmlFor="timing" className="block text-sm font-medium text-[#0D0D0D]">
            How soon?
          </label>
          <select
            id="timing"
            name="timing"
            className="mt-1.5 w-full rounded-xl border border-[#E8E4DC] bg-[#F6F4EF] px-4 py-3 text-[#0D0D0D] outline-none ring-[#1F6F54] focus:ring-2"
            defaultValue="flexible"
          >
            <option value="asap">ASAP</option>
            <option value="week">This week</option>
            <option value="month">This month</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>
      </div>
      <p className="text-xs text-[#4B5563]">We use your information only to respond to your request.</p>
      <button
        type="submit"
        className="w-full rounded-xl bg-[#1F6F54] py-4 text-base font-semibold text-white transition hover:bg-[#0F3D2E] focus:outline-none focus:ring-2 focus:ring-[#1F6F54] focus:ring-offset-2"
      >
        Request my quote
      </button>
    </form>
  );
}

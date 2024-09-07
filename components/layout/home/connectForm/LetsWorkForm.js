"use client";

import { useState } from "react";

import Input from "@/components/ui/input/Input";
import Textarea from "@/components/ui/input/Textarea";

export default function LetsWorkForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const res1 = await fetch("/api/email/user-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const res2 = await fetch("/api/email/form-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res1.ok) {
        throw new Error("Failed to send message");
      }

      if (!res2.ok) {
        throw new Error("Failed to send message");
      }

      await res1.json();
      await res2.json();

      setSuccess(
        "Thank you for your submission! We have received your message and will get back to you shortly."
      );

      setFormData({ name: "", email: "", service: "", message: "" });
    } catch (err) {
      setError(
        "Oops! Something went wrong while sending your message. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="w-full sm:w-10/12 md:w-8/12 max-w-4xl sm:mx-auto space-y-6 px-8"
      onSubmit={handleSubmit}
      aria-labelledby="lets-work-together-heading"
    >
      <div className="flex gap-6 flex-col md:flex-row">
        <div className="flex-1">
          <Input
            type="text"
            id="name"
            name="name"
            label="Name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="flex-1">
          <Input
            type="email"
            id="email"
            name="email"
            label="Email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </div>

      <Input
        type="text"
        id="service"
        name="service"
        label="Service"
        placeholder="Service you are interested in"
        required
        value={formData.service}
        onChange={handleChange}
      />

      <Textarea
        rows={6}
        id="message"
        name="message"
        label="Tell us a little more about your project and how we can help"
        placeholder="Tell us a little more about your project and how we can help"
        required
        value={formData.message}
        onChange={handleChange}
      />

      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}

      <button
        type="submit"
        aria-label="Send Message"
        className="btn-custom rounded-full text-black bg-primary w-full focus:ring-primary prevent-select border border-transparent hover:border-primary hover:bg-transparent hover:text-primary"
        disabled={loading}
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

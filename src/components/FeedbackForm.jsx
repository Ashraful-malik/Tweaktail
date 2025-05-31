"use client";
import { MessageSquare, X } from "lucide-react";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "sonner";

const getFormPosition = (position) => {
  switch (position) {
    case "top":
      return "bottom-full left-0 mb-2"; // above button
    case "bottom":
      return "top-full left-0 mt-2"; // below button
    case "left":
      return "right-full top-0 mr-2"; // left of button
    case "right":
    default:
      return "left-full top-0 ml-2"; // right of button
  }
};
const getVariantClass = (variant) => {
  switch (variant) {
    case "primary":
      return "rounded-full px-4 text-sm py-2 bg-primary text-text-onAccent font-medium hover:bg-primary-hover";
    case "secondary":
      return "text-gray-600 hover:text-blue-500 text-sm font-medium transition-colors";
    default:
      return "bg-primary text-text-onPrimary";
  }
};

function FeedbackForm({ position = "right", variant = "primary" }) {
  const [open, setOpen] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    toast.promise(
      emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_USER_ID
      ),
      {
        loading: "Sending...",
        success: () => {
          formRef.current?.reset();
          setOpen(false);
          return "Thank you for your feedback!";
        },
        error: "Failed to send. Try again.",
      }
    );
  };

  return (
    <div className="relative inline-block">
      <Toaster richColors position="top-center" />
      <button
        className={`${getVariantClass(variant)} flex items-center gap-2 `}
        onClick={() => setOpen(!open)}
      >
        <MessageSquare size={16} /> Feedback
      </button>

      {open && (
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className={`absolute z-50 max-w-xs flex flex-col gap-4 p-6 bg-bg rounded-lg shadow-md  border border-border
            ${getFormPosition(position)}`}
        >
          <button
            type="button"
            className="absolute top-2 right-2"
            onClick={() => setOpen(false)}
          >
            <X size={20} />
          </button>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="h-8 border border-border rounded-md text-sm pl-2"
              placeholder="example@gmail.com"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="text-sm">
              Feedback
            </label>
            <textarea
              name="message"
              required
              className="border border-border rounded-md text-sm pl-2"
              placeholder="Share your thoughts on what you like and dislike about this app."
              rows={4}
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-4 py-2 text-base font-medium w-auto rounded-md text-white bg-primary
            transition-colors duration-200 cursor-pointer hover:bg-primary-hover"
          >
            Submit Feedback
          </button>
        </form>
      )}
    </div>
  );
}

export default FeedbackForm;

"use client";
import { HoverEffect } from "../ui/card-hover-effect";

export function Feature() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={automationServices} />
    </div>
  );
}

export const automationServices = [
  {
    title: "Chat with your AI Lawyer",
    description:
      "Engage in a conversation with an expert AI lawyer to discuss your legal matters.",
    link: "/chat"
  },
  {
    title: "Consult about your documents",
    description:
      "Have a chat with your personal AI Lawyer to seek advice and guidance regarding your legal documents.",
    link: ""
  },
  {
    title: "Talk to your lawyer On-Call",
    description:
      "Get access to expert legal help by scheduling a phone call with a professional lawyer to resolve your legal queries.",
    link: ""
  },
];

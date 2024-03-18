import React from "react";
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
    link: "http://localhost:8501"
  },
  {
    title: "Talk to your lawyer On-Call",
    description:
      "Get access to expert legal help by scheduling a phone call with a professional lawyer to resolve your legal queries.",
    link: "/talk"
  },
];

export default function AutomationLinks() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      {automationServices.map((service, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-bold mb-2">{service.title}</h3>
          <p className="mb-4">{service.description}</p>
          <a href={service.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Learn more</a>
        </div>
      ))}
    </div>
  );
}

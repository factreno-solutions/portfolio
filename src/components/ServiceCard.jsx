import React from "react";

export default function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-bg-primary rounded-[16px] p-6 shadow-[0_4px_12px_rgba(30,41,59,0.07)] transition-transform duration-300 hover:-translate-y-1">
      {/* حاوية الأيقونة */}
      <div className="w-12 h-12 rounded-lg bg-primary-50 text-primary-500 flex items-center justify-center mb-4">
        {icon}
      </div>

      {/* النصوص */}
      <h3 className="text-h3 text-text-dark mb-2">{title}</h3>
      <p className="text-body-small text-text-muted">{description}</p>
    </div>
  );
}

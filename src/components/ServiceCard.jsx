import React from 'react';

export default function ServiceCard({ icon, title, description }) {
  return (
    <div className="group rounded-[20px] border border-border bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition-transform duration-300 hover:-translate-y-1 md:p-7">
      <div className="mb-12 flex items-center justify-between text-primary-700">
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-primary-100 bg-primary-50 transition-colors group-hover:bg-primary-500 group-hover:text-white">
          {icon}
        </span>
        <span className="h-px w-16 bg-border" aria-hidden="true" />
      </div>

      <h3 className="mb-3 text-h3 text-text-dark">{title}</h3>
      <p className="text-body-regular leading-7 text-text-muted">{description}</p>
    </div>
  );
}

import { ExternalLink } from "lucide-react";

const leadership = [
  ["Founder", "Founder"], ["Founder", "Founder"], ["CEO", "CEO"], ["COO", "COO"], ["CTO", "CTO"],
];
const teams = [
  ["UI/UX", ["أحمد زاهر", "أحمد فرج", "محمد أبو عيد"]],
  ["Front-end", ["أحمد فرج", "حازم محمد", "حسام البدراوي"]],
  ["Back-end", ["عمرو أحمد", "فارس محمد", "يوسف أحمد", "أحمد عبد الكريم"]],
  ["Mobile Applications", ["محمد أبو عيد", "أمجد أحمد"]],
  ["Security", ["محمود جمال"]],
  ["Business & Data", ["صالح حاتم", "أنس"]],
];

function PersonCard({ name, role }) {
  return (
    <article className="flex min-h-36 flex-col justify-between rounded-2xl border border-primary-100 bg-white p-5 shadow-sm">
      <div>
        <p className="text-body-regular font-bold text-primary-900">{name}</p>
        <p className="mt-1 text-body-small text-text-muted">{role}</p>
      </div>
      <div className="mt-5 flex gap-2">
        <a href="#" aria-label={`${name} LinkedIn`} className="inline-flex size-9 items-center justify-center rounded-full bg-primary-50 text-primary-500 transition-colors hover:bg-primary-500 hover:text-white"><span aria-hidden="true" className="text-xs font-bold">in</span></a>
        <a href="#" aria-label={`${name} portfolio`} className="inline-flex size-9 items-center justify-center rounded-full bg-primary-50 text-primary-500 transition-colors hover:bg-primary-500 hover:text-white"><ExternalLink aria-hidden="true" /></a>
      </div>
    </article>
  );
}

export default function TeamDirectory() {
  return (
    <section className="mx-auto mt-20 w-full max-w-6xl">
      <div className="flex flex-col gap-4 text-center">
        <span className="text-body-small font-semibold text-primary-500">فريق Factreno</span>
        <h2 className="text-h2 text-primary-900">الناس وراء منتجاتنا الرقمية</h2>
      </div>
      <h3 className="mt-12 text-h3 text-primary-900">القيادة</h3>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{leadership.map(([name, role], index) => <PersonCard key={`${role}-${index}`} name={name} role={role} />)}</div>
      <div className="mt-14 flex flex-col gap-12">{teams.map(([title, names]) => <div key={title}><h3 className="text-h3 text-primary-900">{title}</h3><div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{names.map((name) => <PersonCard key={`${title}-${name}`} name={name} role={title} />)}</div></div>)}</div>
    </section>
  );
}

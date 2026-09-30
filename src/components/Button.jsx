
export default function Button({ children, icon, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-primary-500 text-bg-primary font-body text-body-regular font-medium hover:bg-primary-700 transition-colors duration-200"
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
}
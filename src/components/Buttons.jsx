export function Button({ type = "primary", children }) {
  return (
    <button
      className={` ${type === "primary" ? "bg-[var(--primary-dark-blue)] text-white" : ""} ${type === "secondary" ? "border-2 text-[var(--primary-dark-blue)]" : ""} hover:bg-[var(--primary-dark-blue) h-10 min-w-[130px] cursor-pointer rounded-sm px-6 text-base transition ease-in hover:bg-[var(--primary-dark-blue)] hover:text-white md:h-11 md:min-w-[150px]`}
    >
      {children}
    </button>
  );
}

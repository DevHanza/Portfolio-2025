export function Button({
  href = "#",
  type = "primary",
  children,
  newtab = "false",
}) {
  return (
    <a href={href} target={newtab === "true" ? "_blank" : ""}>
      <button
        className={` ${type === "primary" ? "bg-[var(--primary-dark-blue)] text-white" : ""} ${type === "secondary" ? "text-[var(--primary-dark-blue)]" : ""} hover:bg-[var(--primary-dark-blue) cursor-pointer rounded-sm border-1 border-[var(--primary-dark-blue)]/50 px-5 py-2 text-base font-medium transition ease-in hover:bg-[var(--primary-dark-blue)] hover:text-white`}
      >
        {children}
      </button>
    </a>
  );
}

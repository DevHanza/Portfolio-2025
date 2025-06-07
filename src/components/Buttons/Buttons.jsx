export function Button({
  href = "#",
  type = "primary",
  children,
  newtab = "false",
}) {
  const isPrimary = type === "primary";
  const isSecondary = type === "secondary";

  return (
    <a href={href} target={newtab === "true" ? "_blank" : ""}>
      <button
        className={` ${isPrimary ? "bg-[var(--primary-dark-blue)] text-white" : ""} ${isSecondary ? "bg-white text-[var(--primary-dark-blue)] hover:bg-stone-100 hover:text-[var(--primary-dark-blue)]" : ""} cursor-pointer rounded-sm border-1 border-[var(--primary-dark-blue)]/50 px-5 py-2 text-base font-medium transition ease-in hover:bg-[var(--primary-dark-blue)]`}
      >
        {children}
      </button>
    </a>
  );
}

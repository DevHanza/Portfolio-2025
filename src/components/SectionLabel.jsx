function SectionLabel({ text = "Text" }) {
  return (
    <div className="inline-block leading-tight cursor-pointer rounded-full border-1 border-[var(--primary-blue)]/90 bg-[var(--primary-blue)]/10 px-4 py-1 text-xs md:text-sm font-medium text-[var(--primary-blue)]/90 uppercase">
      <span className="leading-tight align-middle">{text}</span>
    </div>
  );
}

export default SectionLabel;

function SectionLabel({ text = "Text" }) {
  return (
    <div className="inline-block cursor-pointer rounded-full bg-[var(--primary-blue)]/10 px-4 py-1 text-xs leading-tight font-medium text-[var(--primary-blue)]/90 uppercase md:text-sm">
      <span className="align-middle leading-tight">{text}</span>
    </div>
  );
}

export default SectionLabel;

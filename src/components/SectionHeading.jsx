import SectionLabel from "./SectionLabel";

function SectionHeading({
  label = "Label",
  title = "Your title goes here",
  title_text = "Your Text goes here.",
}) {
  return (
    <div className="mx-auto max-w-[500px] text-center">
      <SectionLabel text={label} />
      <h2 className="pt-4 text-2xl font-semibold tracking-tight md:text-3xl lg:pt-4 lg:text-4xl">
        {title}
      </h2>
      <p className="pt-1 font-normal tracking-tight text-[var(--primary-dark-blue)]/75 lg:pt-2">
        {title_text}
      </p>
    </div>
  );
}

export default SectionHeading;

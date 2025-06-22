import SectionLabel from "./SectionLabel";

function SectionHeading({
  label = "Label",
  title = "Your title goes here",
  title_text = "Your Text goes here.",
  title_m_width = "",
  text_m_width = "",
  direction = "col",
}) {
  const isRow = direction === "row";
  const isCol = direction === "col";

  return (
    <div
      className={`max-w-[var(--container-width)] ${isRow ? "text-center md:text-start" : isCol ? "text-center" : ""}`}
    >
      <SectionLabel text={label} />

      <div className="items-center pt-6">
        <div
          className={`flex ${isRow ? "flex-col md:flex-row" : isCol ? "flex-col" : ""}`}
        >
          <div
            className={`mb-3 basis-full ${isRow ? "mx-auto md:mx-0 md:mb-0" : isCol ? "mx-auto" : ""}`}
          >
            <h2
              className={`text-2xl leading-tight font-semibold tracking-tight md:text-3xl lg:text-4xl ${title_m_width}`}
            >
              {title}
            </h2>
          </div>

          <div
            className={`${isRow ? "" : isCol ? "mx-auto text-center" : ""} basis-full content-center`}
          >
            <p
              className={`${text_m_width} text-base font-normal tracking-tight text-[var(--primary-dark-blue)]/75`}
            >
              {title_text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionHeading;

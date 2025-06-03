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

  if (direction === "col") {
    return (
      <div className={`max-w-[var(--container-width)] text-center`}>
        <SectionLabel text={label} />

        <div className="items-center pt-4 lg:pt-6">
          <div className="flex flex-col">
            <div className="mx-auto mb-3">
              <h2
                className={`text-2xl font-semibold tracking-tight md:text-3xl lg:text-4xl ${title_m_width}`}
              >
                {title}
              </h2>
            </div>

            <div className="">
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

    //
    //
    //
    //
  } else if (direction === "row") {
    return (
      <div className={`max-w-[var(--container-width)]`}>
        <SectionLabel text={label} />

        <div className="items-center pt-4 lg:pt-6">
          <div className="flex flex-row">
            <div className="basis-full">
              <h2
                className={`text-2xl font-semibold tracking-tight md:text-3xl lg:text-4xl ${title_m_width}`}
              >
                {title}
              </h2>
            </div>

            <div className="basis-full content-center">
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
  } else {
  }
}

export default SectionHeading;

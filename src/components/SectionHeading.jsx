import SectionLabel from "./SectionLabel";

function SectionHeading() {
  return (
    <div className="text-center max-w-[500px]">
      <SectionLabel />
      <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-tight font-semibold pt-4">Work I'm Proud Of</h2>
      <p className="pt-2 tracking-tight text-[var(--primary-dark-blue)]/75 font-normal">
        Here's a peek at some of the projects I've built with love, curiosity,
        and a lot of coffee.
      </p>
    </div>
  );
}

export default SectionHeading;

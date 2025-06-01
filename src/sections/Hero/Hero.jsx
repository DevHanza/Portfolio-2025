import { Button } from "../../components/Buttons";

function Hero() {
  return (
    <section id="hero" className="section">
      <div className="container mx-auto flex max-w-[var(--container-width)] flex-col justify-between gap-12 text-center md:flex-row md:gap-0 md:text-start">
        <div className="hero-content flex flex-col justify-center">
          <h1 className="text-4xl font-semibold tracking-tighter md:mb-1 md:text-5xl lg:text-6xl">
            Hansana Prabath
          </h1>
          <div className="mx-auto mb-3 flex md:mx-0">
            <p className="inline text-xl tracking-tight md:text-2xl lg:text-2xl">
              Frontend Engineer
            </p>
            <img
              className="my-auto ml-2 inline-block h-6 leading-none"
              src="https://emojicdn.elk.sh/🇱🇰"
            />
          </div>

          <div className="mx-auto mb-9 max-w-[85%] text-[var(--primary-dark-blue)]/75 md:mx-0 md:max-w-[75%] md:text-lg lg:max-w-[65%]">
            <p className="inline leading-6 tracking-tight">
              Developer who fell in love with programming at the age of 16,
              driven by passion.
            </p>
          </div>

          <div className="mx-auto inline-flex flex-wrap gap-2 md:mx-0">
            <Button
              type="primary"
              href="https://linkedin.com/in/devhanza"
              newtab="true"
            >
              Hire Me
            </Button>
            <Button
              type="secondary"
              href="https://contra.com/devhanza/"
              newtab="true"
            >
              See Work
            </Button>
          </div>
        </div>

        <div className="hero-image flex content-center">
          <img
            src="./hanza-blurred.png"
            alt="Portrait Image of Hansana."
            className="w-full rounded-xl bg-stone-300 object-cover p-5 pb-0 lg:h-90 lg:w-100"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;

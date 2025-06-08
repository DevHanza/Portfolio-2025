import { Button } from "../../components/Buttons/Buttons";
import SocialButtons from "../../components/SocialButtons";

function Hero() {
  return (
    <section id="hero" className="px-[1rem] pt-[5rem] md:px-[2rem] lg:px-0">
      <div className="container mx-auto flex max-w-[var(--container-width)] flex-col gap-12">
        <div className="hero-content flex flex-col justify-between gap-12 text-center md:flex-row md:gap-8 md:text-start">
          <div className="flex basis-1/2 flex-col justify-center">
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

            <div className="mx-auto mb-9 max-w-[85%] text-[var(--primary-dark-blue)]/75 md:mx-0 md:max-w-[90%] md:text-lg lg:max-w-[90%]">
              <p className="inline leading-6 tracking-tight">
                Developer who fell in love with programming since 2019, driven
                by passion.
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

          <div className="hero-image flex basis-1/2 content-center md:justify-end">
            <img
              src="./hanza-blurred.png"
              alt="Portrait Image of Hansana."
              className="w-full rounded-xl bg-stone-300 object-cover p-5 pb-0 lg:h-90 lg:w-100"
            />
          </div>
        </div>

        <div className="flex items-center gap-10 lg:gap-14">
          <hr className="flex-grow text-gray-300" />

          <div className="flex flex-col items-center gap-4 text-center text-base font-medium tracking-tight text-stone-500 capitalize">
            <p>Stay connected — follow me!</p>
            <SocialButtons
              size="lg:h-8 lg:w-8 h-7 w-7"
              classes="gap-0 md:gap-2"
            />
          </div>

          <hr className="flex-grow text-gray-300" />
        </div>
      </div>
    </section>
  );
}

export default Hero;

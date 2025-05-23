import { Button } from "../../components/Buttons";

function Hero() {
  return (
    <section id="hero" className="section">
      <div className="container mx-auto max-w-[66rem]">
        <div className="hero-content text-center">
          <h1 className="hero-text mb-1 text-4xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
            Hansana Prabath
          </h1>
          <p className="mb-4.5 text-xl md:text-3xl lg:text-4xl">
            Frontend Engineer
          </p>

          <div className="mx-auto mb-9 max-w-[85%] text-base  text-[var(--primary-dark-blue)]/75 md:max-w-110 md:text-lg">
            <p className="inline tracking-tight leading-4">
              Here’s a look at some of the experiences that have shaped me into
              the developer I am today.
            </p>
            <img
              className="ml-1 inline-block h-5 leading-none"
              src="https://emojicdn.elk.sh/🇱🇰"
            />
          </div>

          <div className="inline-flex flex-wrap justify-center gap-2">
            <Button type="primary" href="https://linkedin.com/in/devhanza">Hire Me</Button>
            <Button type="secondary" href="https://contra.com/devhanza/">See Work</Button>
          </div>
        </div>

        <div className="hero-image mt-4.5 flex justify-center">
          <img src="./hanza-blurred.png" alt="Portrait Image of Hansana." />
        </div>
      </div>
    </section>
  );
}

export default Hero;

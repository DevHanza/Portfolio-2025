import { Button } from "../../components/Buttons";

function Hero() {
  return (
    <section id="hero" className="section">
      <div className="hero-content text-center">
        <h1 className="hero-text mb-1 text-4xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
          Hansana Prabath
        </h1>
        <p className="mb-4.5 text-xl md:text-3xl lg:text-4xl">
          Frontend Developer
        </p>

        <p className="mx-auto mb-9 max-w-[85%] text-base md:max-w-110 md:text-lg">
          Here’s a look at some of the experiences that have shaped me into the
          developer I am today. 🇱🇰
        </p>

        <div className="inline-flex flex-wrap justify-center gap-2">
          <Button type="primary">Hire Me</Button>
          <Button type="secondary">See Work</Button>
        </div>
      </div>

      <div className="hero-image mt-4.5 flex justify-center">
        <img src="./hanza-blurred.png" alt="Portrait Image of Hansana." />
      </div>
    </section>
  );
}

export default Hero;

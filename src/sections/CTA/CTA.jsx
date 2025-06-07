import "./CTA.css";
import { Button } from "../../components/Buttons/Buttons";
function CTA() {
  return (
    <section id="cta" className="section px-0!">
      <div className="container mx-auto flex max-w-[var(--container-width)] flex-col gap-12">
        <div className="cta min-h-25 rounded-3xl px-6 py-14 text-center">
          <h2 className="mx-auto mb-4 max-w-60 text-2xl leading-tight font-semibold tracking-tight text-white md:max-w-xl lg:text-3xl">
            Need a Developer You Can Count On?
          </h2>
          <p className="mx-auto mb-7 max-w-lg text-base font-light text-stone-200">
            Whether you're hiring or starting a new project, I build fast,
            modern websites that work beautifully and feel great to use.
          </p>

          <Button type="secondary" href="https://calendly.com" newtab="true">
            Book a Free Call
          </Button>
        </div>
      </div>
    </section>
  );
}

export default CTA;

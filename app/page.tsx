import Image from "next/image";
import { Reveal } from "./components/reveal";

const phoneDisplay = "(508) 265-5391";
const phoneHref = "tel:5082655391";

const services = [
  {
    number: "01",
    title: "Dumpster Trailer Rentals",
    copy: "Convenient self-service dumpster trailer rentals. Rent a trailer, have it delivered, and load it yourself — a simple, hassle-free solution for cleanouts, renovations, and more. No crew needed; just load it up and we'll haul it away.",
  },
  {
    number: "02",
    title: "Dumpster Trailer & Junk Removal",
    copy: "A stress-free cleanup: rent our dumpster trailer and our team comes to your location and loads it for you. Household junk, construction debris — we handle the heavy lifting. Quick, reliable, and hassle-free.",
  },
];

export default function Home() {
  return (
    <>
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 md:px-10">
          <a
            href="#top"
            className="font-[family-name:var(--font-display)] text-sm font-semibold tracking-[0.22em] text-bone uppercase"
          >
            Olson
          </a>
          <nav className="flex items-center gap-7 text-sm text-concrete/90">
            <a href="#services" className="transition-colors hover:text-safety">
              Services
            </a>
            <a href="#about" className="transition-colors hover:text-safety">
              About
            </a>
            <a
              href="#contact"
              className="font-semibold text-safety transition-colors hover:text-bone"
            >
              Get a quote
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="relative isolate overflow-hidden">
          <div className="hero-media relative aspect-[16/9] w-full min-h-[28rem] sm:min-h-[32rem]">
            <Image
              src="/hero.jpg"
              alt="Olson Disposal dumpster trailer parked at a residential job site"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,12,0.62)_0%,rgba(10,20,36,0.42)_38%,rgba(5,7,12,0.92)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(47,110,184,0.28),transparent_48%)]" />
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10">
            <div className="hero-copy pointer-events-auto mx-auto w-full max-w-7xl px-6 pb-10 pt-24 sm:pb-14 md:px-10 md:pb-16">
              <p className="font-[family-name:var(--font-display)] text-[clamp(4.5rem,16vw,11rem)] leading-[0.85] font-semibold tracking-tight text-bone uppercase">
                Olson
              </p>
              <div className="mt-3 flex flex-col gap-5 md:mt-4 md:flex-row md:items-end md:justify-between md:gap-10">
                <div className="max-w-xl">
                  <p className="font-[family-name:var(--font-display)] text-xl tracking-[0.18em] text-safety uppercase md:text-2xl">
                    Disposal &amp; Demolition
                  </p>
                  <div className="hero-rule mt-5 h-px w-28 bg-safety" />
                  <h1 className="mt-6 max-w-lg font-[family-name:var(--font-display)] text-3xl leading-tight font-medium tracking-wide text-bone md:text-4xl">
                    You load it or we load it for you
                  </h1>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-concrete md:text-lg">
                    Dumpster trailer rentals and full-service junk removal across
                    Worcester County — for cleanouts, renovations, and job sites.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row md:pb-1">
                  <a
                    href="#contact"
                    className="inline-flex h-12 items-center justify-center bg-safety px-7 text-sm font-bold tracking-wide text-bone uppercase transition-colors hover:bg-safety-deep"
                  >
                    Request a quote
                  </a>
                  <a
                    href={phoneHref}
                    className="inline-flex h-12 items-center justify-center border border-concrete/40 px-7 text-sm font-semibold tracking-wide text-bone uppercase transition-colors hover:border-safety hover:text-safety"
                  >
                    Call {phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="border-t border-white/10 bg-charcoal px-6 py-24 md:px-10 md:py-32"
        >
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <p className="font-[family-name:var(--font-display)] text-sm tracking-[0.24em] text-safety uppercase">
                Services
              </p>
              <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-display)] text-4xl leading-none font-semibold tracking-wide text-bone uppercase md:text-5xl">
                Two ways to clear it out
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-steel">
                Self-load a dumpster trailer, or have our crew load it for you —
                same reliable haul-away either way.
              </p>
            </Reveal>

            <div className="mt-16 grid gap-0 border-t border-white/10 md:grid-cols-2">
              {services.map((service, index) => (
                <Reveal
                  key={service.number}
                  delay={index * 120}
                  className="border-b border-white/10 py-10 md:border-r md:border-b-0 md:px-8 md:py-12 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
                >
                  <p className="font-[family-name:var(--font-display)] text-sm tracking-[0.2em] text-safety">
                    {service.number}
                  </p>
                  <h3 className="mt-6 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-wide text-bone uppercase">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-steel">
                    {service.copy}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="relative isolate overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/services.jpg"
              alt="Crew working on a construction and demolition site"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,12,0.78)_0%,rgba(10,20,36,0.88)_100%)]" />
          </div>

          <div className="mx-auto flex min-h-[70vh] max-w-7xl items-end px-6 py-24 md:px-10 md:py-32">
            <Reveal className="max-w-2xl">
              <p className="font-[family-name:var(--font-display)] text-sm tracking-[0.24em] text-safety uppercase">
                About
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl leading-none font-semibold tracking-wide text-bone uppercase md:text-5xl">
                Built for hard jobs
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-concrete">
                Olson Disposal &amp; Demolition serves the Worcester County area
                with dumpster trailer rentals and haul-away — whether you load it
                yourself or we load it for you. We show up when we say we will,
                work clean, and leave the site ready for whatever comes next.
              </p>
            </Reveal>
          </div>
        </section>

        <section
          id="contact"
          className="border-t border-white/10 bg-asphalt px-6 py-24 md:px-10 md:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <Reveal>
              <p className="font-[family-name:var(--font-display)] text-sm tracking-[0.24em] text-safety uppercase">
                Contact
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl leading-none font-semibold tracking-wide text-bone uppercase md:text-6xl">
                Ready when you are
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-steel">
                Serving homeowners and contractors throughout Worcester County.
                Tell us about the job and timeline — we&apos;ll put together a
                clear quote.
              </p>
            </Reveal>

            <Reveal delay={150} className="space-y-6">
              <a
                href={phoneHref}
                className="block font-[family-name:var(--font-display)] text-3xl font-semibold tracking-wide text-bone transition-colors hover:text-safety md:text-4xl"
              >
                {phoneDisplay}
              </a>
              <a
                href={phoneHref}
                className="inline-flex h-12 items-center justify-center bg-safety px-7 text-sm font-bold tracking-wide text-bone uppercase transition-colors hover:bg-safety-deep"
              >
                Call for a quote
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-8 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-steel sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p className="font-[family-name:var(--font-display)] tracking-[0.16em] text-bone uppercase">
              Olson Disposal &amp; Demolition
            </p>
            <p>Located in Shrewsbury, MA</p>
          </div>
          <a
            href={phoneHref}
            className="transition-colors hover:text-safety"
          >
            {phoneDisplay}
          </a>
        </div>
      </footer>
    </>
  );
}

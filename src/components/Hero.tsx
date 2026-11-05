import config from '../config/index.json';

import LiveList from './LiveList';

const Hero = () => {
  const { mainHero, company } = config;
  const { headlineLines } = mainHero;

  return (
    <section className="relative overflow-hidden" aria-label="Introduction">
      <div className="mx-auto grid min-h-[calc(100svh-88px)] max-w-[1400px] grid-cols-1 lg:min-h-[calc(100svh-96px)] lg:grid-cols-2">
        {/* Left: copy on sand */}
        <div className="order-2 flex flex-col justify-end bg-bg px-5 pb-14 pt-10 md:px-10 lg:order-1 lg:pb-16 lg:pt-20">
          <div className="max-w-[680px]">
            <h1 className="display text-[clamp(32px,4vw,56px)] text-ink">
              {headlineLines.map((line, i) => (
                <span key={i} className="mask-line">
                  <span>{line}</span>
                </span>
              ))}
            </h1>
            <p className="fade-up mt-6 max-w-[44ch] text-body text-ink">
              {mainHero.description}
            </p>
            <div className="fade-up fade-up-late mt-8 flex flex-wrap items-center gap-4">
              <a
                href={mainHero.primaryAction.href}
                className="inline-block transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                aria-label={mainHero.primaryAction.text}
              >
                <img
                  src="/assets/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                  alt="Download on the App Store"
                  className="h-[52px] w-auto"
                  width={180}
                  height={52}
                />
              </a>
              <a
                href={mainHero.secondaryAction.href}
                className="btn btn-secondary"
              >
                {mainHero.secondaryAction.text}
              </a>
            </div>
            <p className="fade-up fade-up-late mt-5 text-small text-muted">
              {company.name} · iOS and web · works offline
            </p>
          </div>
        </div>

        {/* Right: live fragment on surface */}
        <div className="order-1 flex items-center justify-center bg-surface px-5 py-10 md:px-10 lg:order-2 lg:py-16">
          <div className="fade-up flex w-full max-w-[420px] flex-col items-center gap-5">
            <LiveList />
            <p className="text-small text-ink/80">
              Tick an item — the subtotal updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

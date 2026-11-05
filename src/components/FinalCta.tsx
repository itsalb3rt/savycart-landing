import config from '../config/index.json';

import Reveal from './Reveal';

const FinalCta = () => {
  const { finalCta } = config;

  return (
    <section className="bg-bg py-24 md:py-32" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <div className="grid grid-cols-1 overflow-hidden rounded-[var(--radius-page)] lg:grid-cols-12">
            <div className="bg-field px-7 py-12 text-accent-ink md:px-12 md:py-16 lg:col-span-7 lg:py-20">
              <h2
                id="cta-heading"
                className="display text-[clamp(28px,3.2vw,40px)] leading-[1.05]"
              >
                {finalCta.title}
              </h2>
              <p className="mt-4 max-w-[38ch] text-[17px] leading-relaxed text-accent-ink">
                {finalCta.description}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={finalCta.primaryAction.href}
                  className="inline-block transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  aria-label={finalCta.primaryAction.text}
                >
                  <img
                    src="/assets/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                    alt="Download on the App Store"
                    className="h-[52px] w-auto"
                    width={180}
                    height={52}
                    loading="lazy"
                  />
                </a>
                <a
                  href={finalCta.secondaryAction.href}
                  className="btn border-accent-ink bg-transparent text-accent-ink hover:bg-accent-ink hover:text-field"
                >
                  {finalCta.secondaryAction.text}
                </a>
              </div>
            </div>
            <div className="relative min-h-[240px] lg:col-span-5 lg:min-h-full">
              <img
                src="/assets/main-demo.png"
                alt="Person holding a phone with the SavyCart product list open"
                width={2000}
                height={1600}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default FinalCta;

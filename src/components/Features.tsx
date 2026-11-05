import { useState } from 'react';

import config from '../config/index.json';

import Reveal from './Reveal';

const Features = () => {
  const { features } = config;
  const [on, setOn] = useState<boolean[]>(
    features.items.map((item) => item.defaultOn),
  );

  const toggle = (index: number) => {
    setOn((prev) => prev.map((v, i) => (i === index ? !v : v)));
  };

  return (
    <section
      id="features"
      className="bg-bg pb-8 pt-24 md:pt-32"
      aria-labelledby="features-heading"
    >
      <div className="mx-auto mb-12 max-w-[1400px] px-5 md:mb-16 md:px-10">
        <Reveal>
          <h2 id="features-heading" className="display text-head text-ink">
            {features.title}
          </h2>
          <p className="mt-4 max-w-[46ch] text-body text-ink">
            {features.description}
          </p>
        </Reveal>
      </div>

      <div>
        {features.items.map((item, index) => {
          const isOn = on[index] ?? false;
          const fieldClass = index % 2 === 0 ? 'bg-[#c9c0ab]' : 'bg-surface';
          return (
            <div
              key={item.sentence}
              className={`transition-colors duration-300 ${
                isOn ? fieldClass : index % 2 === 0 ? 'bg-bg' : 'bg-[#d6cfc0]'
              }`}
            >
              <div className="mx-auto flex min-h-[132px] max-w-[1400px] items-center gap-6 px-5 py-8 md:min-h-[20vh] md:gap-10 md:px-10">
                <div className="min-w-0 flex-1">
                  <p
                    className={`display text-[clamp(26px,3.6vw,52px)] leading-[1.05] tracking-[-0.03em] transition-colors duration-300 ${
                      isOn ? 'text-ink' : 'text-muted'
                    }`}
                  >
                    {item.sentence}
                  </p>
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ${
                      isOn
                        ? 'mt-3 grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <p className="overflow-hidden text-[15px] leading-snug text-ink/80 md:text-[17px]">
                      {item.consequence}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={isOn}
                  aria-label={item.sentence}
                  onClick={() => toggle(index)}
                  className={`relative h-[34px] w-[58px] shrink-0 rounded-full transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent md:h-[38px] md:w-[66px] ${
                    isOn ? 'bg-accent' : 'bg-ink/25'
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`absolute left-0 top-[3px] h-[28px] w-[28px] rounded-full bg-white transition-transform duration-200 md:h-[32px] md:w-[32px] ${
                      isOn
                        ? 'translate-x-[27px] md:translate-x-[31px]'
                        : 'translate-x-[3px]'
                    }`}
                  />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;

import config from '../config/index.json';

import Reveal from './Reveal';

const ListFragment = () => (
  <div
    data-ui
    className="w-full max-w-[360px] overflow-hidden rounded-[10px] border border-ink/10 bg-white" // taste-skill-ignore
  >
    <div
      data-ui
      className="border-b border-ink/10 px-4 py-3 text-[13px] font-medium text-[#0277bd]" // taste-skill-ignore
    >
      My list
    </div>
    <ul data-ui className="divide-y divide-ink/10">
      <li className="ui-row flex items-center justify-between px-4 py-3">
        <span className="text-[14px]">
          <span className="block font-medium text-[#0277bd]">Arroz</span>
          <span className="text-[12px] uppercase text-muted">Unidad</span>
        </span>
        <span className="text-[14px] font-medium">$ 270</span>
      </li>
      <li className="ui-row flex items-center justify-between px-4 py-3">
        <span className="text-[14px]">
          <span className="block font-medium text-[#0277bd]">Nuggets</span>
          <span className="text-[12px] uppercase text-muted">Unidad</span>
        </span>
        <span className="text-[14px] font-medium">$ 142</span>
      </li>
      <li className="ui-row flex items-center justify-between px-4 py-3">
        <span className="text-[14px]">
          <span className="block font-medium text-[#0277bd]">Oregano</span>
          <span className="text-[12px] uppercase text-muted">Unidad</span>
        </span>
        <span className="text-[14px] font-medium">$ 135</span>
      </li>
    </ul>
  </div>
);

const CartFragment = () => (
  <div
    data-ui
    className="w-full max-w-[360px] overflow-hidden rounded-[10px] border border-ink/10 bg-white" // taste-skill-ignore
  >
    <div
      data-ui
      className="border-b border-ink/10 px-4 py-3 text-[13px] font-medium text-[#0277bd]" // taste-skill-ignore
    >
      Shopping cart
    </div>
    <div className="space-y-3 px-4 py-4">
      <div className="flex items-center justify-between text-[14px]">
        <span className="text-muted">2 × Arroz</span>
        <span className="font-medium tabular-nums">$ 540</span>
      </div>
      <div className="flex items-center justify-between text-[14px]">
        <span className="text-muted">Subtotal</span>
        <span className="tabular-nums">$ 540</span>
      </div>
      <div className="flex items-center justify-between text-[14px]">
        <span className="text-muted">Tax (0%)</span>
        <span className="tabular-nums">$ 0</span>
      </div>
      <div
        data-ui
        className="flex items-center justify-between border-t border-ink/10 pt-3 text-[15px] font-medium" // taste-skill-ignore
      >
        <span>Total</span>
        <span className="tabular-nums">$ 540</span>
      </div>
    </div>
  </div>
);

const HistoryFragment = () => (
  <div
    data-ui
    className="w-full max-w-[520px] overflow-hidden rounded-[10px] border border-ink/10 bg-white" // taste-skill-ignore
  >
    <div
      data-ui
      className="border-b border-ink/10 px-4 py-3 text-[13px] font-medium text-[#0277bd]" // taste-skill-ignore
    >
      Shopping history
    </div>
    <ul data-ui className="divide-y divide-ink/10">
      <li className="ui-row grid grid-cols-3 gap-2 px-4 py-4 text-[14px]">
        <span className="text-muted">Place</span>
        <span className="col-span-2 text-right font-medium text-[#0277bd]">
          La sirena
        </span>
        <span className="text-muted">Date</span>
        <span className="col-span-2 text-right tabular-nums">2023-06-21</span>
        <span className="text-muted">Total price</span>
        <span className="col-span-2 text-right font-medium tabular-nums text-[#0277bd]">
          $ 9,055.32
        </span>
      </li>
      <li className="ui-row grid grid-cols-3 gap-2 px-4 py-4 text-[14px]">
        <span className="text-muted">Place</span>
        <span className="col-span-2 text-right font-medium text-[#0277bd]">
          La sirena
        </span>
        <span className="text-muted">Date</span>
        <span className="col-span-2 text-right tabular-nums">2023-04-11</span>
        <span className="text-muted">Total price</span>
        <span className="col-span-2 text-right font-medium tabular-nums text-[#0277bd]">
          $ 4,998.48
        </span>
      </li>
    </ul>
  </div>
);

const fragments = {
  list: ListFragment,
  cart: CartFragment,
  history: HistoryFragment,
};

const HowItWorks = () => {
  const { howItWorks } = config;

  return (
    <section
      id="how"
      className="bg-surface py-24 md:py-32"
      aria-labelledby="how-heading"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <div className="max-w-[560px] lg:ml-[16.666%]">
            <h2 id="how-heading" className="display text-head text-ink">
              {howItWorks.title}
            </h2>
            <p className="mt-4 text-body text-ink">{howItWorks.description}</p>
          </div>
        </Reveal>

        <div className="mt-16 flex flex-col gap-16 md:mt-20 md:gap-20">
          {howItWorks.steps.map((step, index) => {
            const Fragment =
              fragments[step.responseKind as keyof typeof fragments] ??
              ListFragment;
            const breakout = index === howItWorks.steps.length - 1;
            return (
              <Reveal key={step.lead} delayMs={index * 70}>
                <div
                  className={`max-w-[560px] ${
                    breakout
                      ? 'lg:ml-[16.666%] lg:max-w-[760px]'
                      : 'lg:ml-[16.666%]'
                  }`}
                >
                  <p className="text-body font-medium leading-snug text-ink">
                    {step.lead}
                  </p>
                  <div className="mt-4 rounded-[8px] bg-bg px-5 py-4">
                    <span className="text-small text-muted">You enter</span>
                    <p className="mt-1 text-body text-ink">{step.call}</p>
                  </div>
                  <div className="mt-5 lg:ml-14">
                    <span className="text-small text-muted">
                      {step.responseLabel}
                    </span>
                    <div className="mt-3">
                      <Fragment />
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

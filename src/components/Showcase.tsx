import config from '../config/index.json';

import Reveal from './Reveal';

const Showcase = () => {
  const { product } = config;

  return (
    <section
      id="product"
      className="bg-bg py-24 md:py-32"
      aria-labelledby="product-heading"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <div className="max-w-[640px]">
            <h2 id="product-heading" className="display text-head text-ink">
              {product.title}
            </h2>
            <p className="mt-5 max-w-[48ch] text-body text-ink">
              {product.description}
            </p>
          </div>
        </Reveal>

        <div className="mt-16 flex flex-col gap-20 md:gap-28">
          {product.items.map((item, index) => {
            const flip = index % 2 === 1;
            return (
              <Reveal key={item.title}>
                <article
                  className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14 ${
                    flip ? '' : ''
                  }`}
                >
                  <div
                    className={`lg:col-span-5 ${
                      flip ? 'lg:order-2 lg:col-start-8' : 'lg:order-1'
                    }`}
                  >
                    <h3 className="display text-lead text-ink">{item.title}</h3>
                    <p className="mt-4 max-w-[40ch] text-body text-ink">
                      {item.description}
                    </p>
                  </div>
                  <div
                    className={`lg:col-span-6 ${
                      flip
                        ? 'lg:order-1 lg:col-start-1'
                        : 'lg:order-2 lg:col-start-7'
                    }`}
                  >
                    <div className="overflow-hidden rounded-[var(--radius-page)] bg-surface">
                      <img
                        src={item.img}
                        alt={item.alt}
                        width={739}
                        height={1600}
                        loading="lazy"
                        className="h-auto w-full object-cover"
                      />
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Showcase;

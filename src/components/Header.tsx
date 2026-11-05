import { Fragment } from 'react';

import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-scroll';

import config from '../config/index.json';

const Header = () => {
  const { navigation, company, callToAction } = config;
  const { name: companyName, logo } = company;

  return (
    <header className="relative z-40">
      <nav
        className="mx-auto flex max-w-[1400px] items-center justify-between px-5 pt-6 md:px-10 md:pt-8"
        aria-label="Global"
      >
        <a
          href="#"
          className="flex items-center gap-3"
          aria-label={companyName}
        >
          <img
            src={logo}
            alt=""
            className="h-9 w-9 md:h-10 md:w-10"
            width={40}
            height={40}
          />
          <span className="display text-[17px] tracking-tight text-ink md:text-[18px]">
            {companyName}
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              href={`#${item.href}`}
              spy={true}
              smooth={true}
              duration={800}
              offset={-72}
              className="text-small cursor-pointer font-medium text-muted transition-colors hover:text-ink"
            >
              {item.name}
            </Link>
          ))}
          <a
            href={callToAction.href}
            className="btn btn-primary !px-5 !py-2.5 !text-[14px]"
          >
            {callToAction.text}
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href={callToAction.href}
            className="btn btn-primary !px-3.5 !py-2 !text-[13px]"
          >
            {callToAction.text}
          </a>
          <div>
            <Popover>
              {({ open }) => (
                <>
                  <Popover.Button
                    className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-page)] text-ink hover:bg-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    aria-label={open ? 'Close menu' : 'Open menu'}
                  >
                    {open ? (
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    )}
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 -translate-y-2"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-out duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-2"
                  >
                    {/* real overlay menu */}
                    <Popover.Panel
                      focus
                      className="absolute inset-x-4 top-4 z-50 rounded-[var(--radius-page)] bg-surface p-5 shadow-lg ring-1 ring-ink/10" // taste-skill-ignore
                    >
                      <div className="flex items-center justify-between">
                        <img
                          src={logo}
                          alt=""
                          className="h-8 w-8"
                          width={32}
                          height={32}
                        />
                        <Popover.Button
                          className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-page)] text-ink hover:bg-bg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                          aria-label="Close menu"
                        >
                          <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                      <div className="mt-5 flex flex-col gap-1">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            href={`#${item.href}`}
                            spy={true}
                            smooth={true}
                            duration={800}
                            offset={-72}
                            className="rounded-[var(--radius-page)] px-3 py-3 text-body font-medium text-ink hover:bg-bg"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                      <a
                        href={callToAction.href}
                        className="btn btn-primary mt-4 w-full"
                      >
                        {callToAction.text}
                      </a>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

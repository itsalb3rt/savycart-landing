import { useMemo, useState } from 'react';

type Item = {
  id: string;
  name: string;
  unit: string;
  price: number;
  favorite: boolean;
  checked: boolean;
};

const initialItems: Item[] = [
  {
    id: 'arroz',
    name: 'Arroz',
    unit: 'Unidad',
    price: 270,
    favorite: true,
    checked: false,
  },
  {
    id: 'nuggets',
    name: 'Nuggets',
    unit: 'Unidad',
    price: 142,
    favorite: false,
    checked: false,
  },
  {
    id: 'oregano',
    name: 'Oregano',
    unit: 'Unidad',
    price: 135,
    favorite: false,
    checked: false,
  },
  {
    id: 'atun',
    name: 'Atun',
    unit: 'Unidad',
    price: 38,
    favorite: true,
    checked: false,
  },
];

const formatMoney = (n: number) =>
  `$ ${n.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;

const LiveList = () => {
  const [items, setItems] = useState<Item[]>(initialItems);
  const [tab, setTab] = useState<'all' | 'favorites'>('all');

  const visible = useMemo(
    () => (tab === 'all' ? items : items.filter((i) => i.favorite)),
    [items, tab],
  );

  const total = useMemo(
    () => items.filter((i) => i.checked).reduce((sum, i) => sum + i.price, 0),
    [items],
  );

  const checkedCount = items.filter((i) => i.checked).length;

  const toggleCheck = (id: string) => {
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, checked: !i.checked } : i)),
    );
  };

  const toggleFavorite = (id: string) => {
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, favorite: !i.favorite } : i)),
    );
  };

  return (
    <div
      data-ui
      className="w-full max-w-[420px] overflow-hidden rounded-[12px] border border-ink/10 bg-white text-ink shadow-[0_18px_50px_-24px_rgba(42,42,38,0.45)]" // taste-skill-ignore
      role="region"
      aria-label="Interactive shopping list demo"
    >
      <div
        data-ui
        className="flex items-center justify-between border-b border-ink/10 px-5 py-4" // taste-skill-ignore
      >
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className="flex flex-col gap-[3px]">
            <span className="block h-[2px] w-5 bg-muted" />
            <span className="block h-[2px] w-5 bg-muted" />
            <span className="block h-[2px] w-5 bg-muted" />
          </span>
          <span className="text-[15px] font-medium text-[#0277bd]">
            My list
          </span>
        </div>
        <span className="text-[12px] text-muted">
          {checkedCount}/{items.length} in cart
        </span>
      </div>

      <div data-ui className="flex border-b border-ink/10" role="tablist">
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'all'}
          onClick={() => setTab('all')}
          className={`flex-1 px-4 py-3 text-[13px] font-medium tracking-wide transition-colors ${
            tab === 'all'
              ? 'border-b-2 border-[#0277bd] text-[#0277bd]'
              : 'text-muted hover:text-ink'
          }`}
        >
          All {items.length}
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'favorites'}
          onClick={() => setTab('favorites')}
          className={`flex-1 px-4 py-3 text-[13px] font-medium tracking-wide transition-colors ${
            tab === 'favorites'
              ? 'border-b-2 border-[#0277bd] text-[#0277bd]'
              : 'text-muted hover:text-ink'
          }`}
        >
          Favorites
        </button>
      </div>

      <ul
        data-ui
        className="max-h-[320px] divide-y divide-ink/10 overflow-y-auto" // taste-skill-ignore
      >
        {visible.map((item) => (
          <li key={item.id} className="ui-row px-5 py-4">
            <div className="flex items-start justify-between gap-3">
              <button
                type="button"
                onClick={() => toggleCheck(item.id)}
                aria-pressed={item.checked}
                className="group flex flex-1 items-start gap-3 text-left"
              >
                <span
                  aria-hidden="true"
                  className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-[3px] border transition-colors ${
                    item.checked
                      ? 'border-[#2e7d32] bg-[#2e7d32] text-white'
                      : 'border-ink/30 bg-white group-hover:border-ink/60'
                  }`}
                >
                  {item.checked && (
                    <svg
                      viewBox="0 0 12 12"
                      className="h-3 w-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M2 6l3 3 5-5" />
                    </svg>
                  )}
                </span>
                <span className="min-w-0">
                  <span
                    className={`block text-[14px] font-medium ${
                      item.checked
                        ? 'text-muted line-through'
                        : 'text-[#0277bd]'
                    }`}
                  >
                    {item.name}
                  </span>
                  <span className="mt-0.5 block text-[12px] uppercase tracking-wide text-muted">
                    {item.unit}
                  </span>
                  <span
                    className={`mt-1 block text-[14px] font-medium ${
                      item.checked ? 'text-muted' : 'text-ink'
                    }`}
                  >
                    {formatMoney(item.price)}
                  </span>
                </span>
              </button>
              <button
                type="button"
                onClick={() => toggleFavorite(item.id)}
                aria-pressed={item.favorite}
                aria-label={
                  item.favorite
                    ? `Remove ${item.name} from favorites`
                    : `Add ${item.name} to favorites`
                }
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors hover:bg-ink/5"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill={item.favorite ? '#f9a825' : 'none'}
                  stroke={item.favorite ? '#f9a825' : '#9e9e9e'}
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9 6.8 19.6l1-5.8L3.5 9.7l5.9-.9L12 3.5z" />
                </svg>
              </button>
            </div>
          </li>
        ))}
        {visible.length === 0 && (
          <li className="px-5 py-8 text-center text-[14px] text-muted">
            No favorites yet — tap a star to keep a staple close.
          </li>
        )}
      </ul>

      <div
        data-ui
        className="flex items-center justify-between border-t border-ink/10 bg-[#f7f5f0] px-5 py-4" // taste-skill-ignore
      >
        <span className="text-[13px] text-muted">Checked subtotal</span>
        <span
          className="text-[15px] font-medium tabular-nums text-ink"
          aria-live="polite"
        >
          {formatMoney(total)}
        </span>
      </div>
    </div>
  );
};

export default LiveList;

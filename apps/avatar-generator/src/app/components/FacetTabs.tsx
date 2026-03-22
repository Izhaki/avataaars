"use client";

interface Tab {
  key: string;
  label: string;
}

interface FacetTabsProps {
  tabs: Tab[];
  active: string;
  onSelect: (key: string) => void;
}

export function FacetTabs({ tabs, active, onSelect }: FacetTabsProps) {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex gap-1 min-w-max px-1 pb-1">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => onSelect(tab.key)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              active === tab.key
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}

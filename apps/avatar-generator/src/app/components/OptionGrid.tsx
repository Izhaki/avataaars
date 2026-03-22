"use client";

import { Avatar, type AvatarConfig } from "avataaars";

interface OptionGridProps {
  facetKey: string;
  options: string[];
  selected: string;
  baseConfig: AvatarConfig;
  colorMap?: Record<string, string>;
  onSelect: (value: string) => void;
}

function formatLabel(value: string): string {
  return value
    .replace(/([A-Z])/g, " $1")
    .replace(/(\d+)/g, " $1")
    .trim();
}

export function OptionGrid({
  facetKey,
  options,
  selected,
  baseConfig,
  colorMap,
  onSelect,
}: OptionGridProps) {
  if (colorMap) {
    return (
      <div className="flex flex-wrap gap-3 justify-center">
        {options.map((option) => {
          const hex = colorMap[option];
          return (
            <button
              key={option}
              onClick={() => onSelect(option)}
              className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-all ${
                selected === option
                  ? "ring-2 ring-blue-500 ring-offset-2"
                  : "hover:bg-gray-50"
              }`}
              title={formatLabel(option)}
            >
              <div
                className="w-10 h-10 rounded-full border border-gray-200"
                style={{ backgroundColor: hex }}
              />
              <span className="text-[10px] text-gray-500 max-w-[60px] truncate">
                {formatLabel(option)}
              </span>
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-2 w-full">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onSelect(option)}
          className={`flex flex-col items-center gap-1 p-1.5 rounded-lg transition-all ${
            selected === option
              ? "ring-2 ring-blue-500 ring-offset-1 bg-blue-50"
              : "hover:bg-gray-50 border border-transparent"
          }`}
        >
          <div className="w-full aspect-[264/280]">
            <Avatar
              {...baseConfig}
              {...{ [facetKey]: option }}
              avatarStyle="Circle"
            />
          </div>
          <span className="text-[10px] text-gray-500 leading-tight text-center truncate w-full">
            {formatLabel(option)}
          </span>
        </button>
      ))}
    </div>
  );
}

"use client";

import { useState, useCallback, useEffect } from "react";
import {
  Avatar,
  type AvatarConfig,
  TOP_TYPES,
  ACCESSORIES_TYPES,
  HAIR_COLORS,
  HAT_COLORS,
  FACIAL_HAIR_TYPES,
  FACIAL_HAIR_COLORS,
  CLOTHE_TYPES,
  CLOTHE_COLORS,
  GRAPHIC_TYPES,
  EYE_TYPES,
  EYEBROW_TYPES,
  MOUTH_TYPES,
  SKIN_COLORS,
  skinColors,
  hairColors,
  hatColors,
  clotheColors,
  facialHairColors,
} from "avataaars";
import { FacetTabs } from "./FacetTabs";
import { OptionGrid } from "./OptionGrid";
import { ConfigPanel } from "./ConfigPanel";

const DEFAULT_CONFIG: AvatarConfig = {
  avatarStyle: "Circle",
  topType: "ShortHairShortFlat",
  accessoriesType: "Blank",
  hairColor: "BrownDark",
  hatColor: "Black",
  facialHairType: "Blank",
  facialHairColor: "BrownDark",
  clotheType: "ShirtCrewNeck",
  clotheColor: "Gray01",
  graphicType: "Bat",
  eyeType: "Default",
  eyebrowType: "Default",
  mouthType: "Default",
  skinColor: "Light",
};

interface FacetDef {
  key: keyof AvatarConfig;
  label: string;
  options: readonly string[];
  colorMap?: Record<string, string>;
}

const FACETS: FacetDef[] = [
  { key: "topType", label: "Top", options: TOP_TYPES },
  { key: "accessoriesType", label: "Accessories", options: ACCESSORIES_TYPES },
  { key: "hairColor", label: "Hair Color", options: HAIR_COLORS, colorMap: hairColors },
  { key: "hatColor", label: "Hat Color", options: HAT_COLORS, colorMap: hatColors },
  { key: "facialHairType", label: "Facial Hair", options: FACIAL_HAIR_TYPES },
  { key: "facialHairColor", label: "Facial Hair Color", options: FACIAL_HAIR_COLORS, colorMap: facialHairColors },
  { key: "clotheType", label: "Clothes", options: CLOTHE_TYPES },
  { key: "clotheColor", label: "Clothe Color", options: CLOTHE_COLORS, colorMap: clotheColors },
  { key: "graphicType", label: "Graphic", options: GRAPHIC_TYPES },
  { key: "eyeType", label: "Eyes", options: EYE_TYPES },
  { key: "eyebrowType", label: "Eyebrows", options: EYEBROW_TYPES },
  { key: "mouthType", label: "Mouth", options: MOUTH_TYPES },
  { key: "skinColor", label: "Skin", options: SKIN_COLORS, colorMap: skinColors },
];

function pickRandom<T>(arr: readonly T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function configToParams(config: AvatarConfig): string {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(config)) {
    if (value !== undefined) params.set(key, value);
  }
  return params.toString();
}

function paramsToConfig(search: string): AvatarConfig | null {
  const params = new URLSearchParams(search);
  if (params.size === 0) return null;
  const config: Record<string, string> = {};
  for (const [key, value] of params) {
    if (key in DEFAULT_CONFIG) config[key] = value;
  }
  return Object.keys(config).length > 0
    ? { ...DEFAULT_CONFIG, ...config }
    : null;
}

export function AvatarEditor() {
  const [config, setConfig] = useState<AvatarConfig>(DEFAULT_CONFIG);
  const [activeTab, setActiveTab] = useState<keyof AvatarConfig>("topType");

  useEffect(() => {
    const parsed = paramsToConfig(window.location.search);
    if (parsed) setConfig(parsed);
  }, []);

  useEffect(() => {
    const url = `${window.location.pathname}?${configToParams(config)}`;
    window.history.replaceState(null, "", url);
  }, [config]);

  const updateFacet = useCallback(
    (key: keyof AvatarConfig, value: string) => {
      setConfig((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  const randomize = useCallback(() => {
    setConfig({
      avatarStyle: "Circle",
      topType: pickRandom(TOP_TYPES),
      accessoriesType: pickRandom(ACCESSORIES_TYPES),
      hairColor: pickRandom(HAIR_COLORS),
      hatColor: pickRandom(HAT_COLORS),
      facialHairType: pickRandom(FACIAL_HAIR_TYPES),
      facialHairColor: pickRandom(FACIAL_HAIR_COLORS),
      clotheType: pickRandom(CLOTHE_TYPES),
      clotheColor: pickRandom(CLOTHE_COLORS),
      graphicType: pickRandom(GRAPHIC_TYPES),
      eyeType: pickRandom(EYE_TYPES),
      eyebrowType: pickRandom(EYEBROW_TYPES),
      mouthType: pickRandom(MOUTH_TYPES),
      skinColor: pickRandom(SKIN_COLORS),
    });
  }, []);

  const activeFacet = FACETS.find((f) => f.key === activeTab)!;

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Avatar preview */}
      <div className="w-64 h-72 flex-shrink-0">
        <Avatar {...config} />
      </div>

      {/* Action buttons */}
      <div className="flex gap-3">
        <button
          onClick={randomize}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium text-sm"
        >
          Random
        </button>
        <ConfigPanel config={config} onLoad={setConfig} />
      </div>

      {/* Facet tabs */}
      <FacetTabs
        tabs={FACETS.map((f) => ({ key: f.key, label: f.label }))}
        active={activeTab}
        onSelect={(key) => setActiveTab(key as keyof AvatarConfig)}
      />

      {/* Option grid */}
      <OptionGrid
        facetKey={activeTab}
        options={activeFacet.options as string[]}
        selected={config[activeTab] as string}
        baseConfig={config}
        colorMap={activeFacet.colorMap}
        onSelect={(value) => updateFacet(activeTab, value)}
      />
    </div>
  );
}

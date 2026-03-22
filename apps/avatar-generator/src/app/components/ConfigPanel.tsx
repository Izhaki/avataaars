"use client";

import { useCallback, useRef } from "react";
import type { AvatarConfig } from "avataaars";

interface ConfigPanelProps {
  config: AvatarConfig;
  onLoad: (config: AvatarConfig) => void;
}

export function ConfigPanel({ config, onLoad }: ConfigPanelProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const downloadJSON = useCallback(() => {
    const json = JSON.stringify(config, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "avatar-config.json";
    a.click();
    URL.revokeObjectURL(url);
  }, [config]);

  const uploadJSON = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        try {
          const parsed = JSON.parse(ev.target?.result as string);
          if (typeof parsed === "object" && parsed !== null) {
            onLoad(parsed as AvatarConfig);
          }
        } catch {
          alert("Invalid JSON file");
        }
      };
      reader.readAsText(file);
      if (fileInputRef.current) fileInputRef.current.value = "";
    },
    [onLoad]
  );

  const copyLink = useCallback(() => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
  }, []);

  return (
    <>
      <button
        onClick={downloadJSON}
        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium text-sm"
      >
        Download JSON
      </button>
      <label className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium text-sm cursor-pointer">
        Upload JSON
        <input
          ref={fileInputRef}
          type="file"
          accept=".json"
          onChange={uploadJSON}
          className="hidden"
        />
      </label>
      <button
        onClick={copyLink}
        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium text-sm"
      >
        Copy Link
      </button>
    </>
  );
}

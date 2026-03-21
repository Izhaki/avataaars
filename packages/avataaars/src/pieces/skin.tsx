import type { SkinColor } from "../types";
import { skinColors } from "../colors";

export function Skin({ maskID, skinColor }: { maskID: string; skinColor: SkinColor }) {
  return (
    <g id="Skin" mask={`url(#${maskID})`} fill={skinColors[skinColor]}>
      <g transform="translate(0.000000, 0.000000)">
        <rect x="0" y="0" width="264" height="280" />
      </g>
    </g>
  );
}

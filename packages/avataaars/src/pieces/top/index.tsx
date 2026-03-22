import type { TopType } from "../../types";
import { NoHair } from "./headwear";
import { Eyepatch } from "./headwear";
import { Hat } from "./headwear";
import { Hijab } from "./headwear";
import { Turban } from "./headwear";
import { WinterHat1 } from "./headwear";
import { WinterHat2 } from "./headwear";
import { WinterHat3 } from "./headwear";
import { WinterHat4 } from "./headwear";
import { LongHairBigHair } from "./long-hair";
import { LongHairBob } from "./long-hair";
import { LongHairBun } from "./long-hair";
import { LongHairCurly } from "./long-hair";
import { LongHairCurvy } from "./long-hair";
import { LongHairDreads } from "./long-hair";
import { LongHairFrida } from "./long-hair";
import { LongHairFro } from "./long-hair";
import { LongHairFroBand } from "./long-hair";
import { LongHairMiaWallace } from "./long-hair";
import { LongHairNotTooLong } from "./long-hair";
import { LongHairShavedSides } from "./long-hair";
import { LongHairStraight } from "./long-hair";
import { LongHairStraight2 } from "./long-hair";
import { LongHairStraightStrand } from "./long-hair";
import { ShortHairDreads01 } from "./short-hair";
import { ShortHairDreads02 } from "./short-hair";
import { ShortHairFrizzle } from "./short-hair";
import { ShortHairShaggyMullet } from "./short-hair";
import { ShortHairShortCurly } from "./short-hair";
import { ShortHairShortFlat } from "./short-hair";
import { ShortHairShortRound } from "./short-hair";
import { ShortHairShortWaved } from "./short-hair";
import { ShortHairSides } from "./short-hair";
import { ShortHairTheCaesar } from "./short-hair";
import { ShortHairTheCaesarSidePart } from "./short-hair";

type TopProps = { hairColor: string; hatColor: string };

export const topMap: Record<TopType, (props: TopProps) => React.JSX.Element> = {
  NoHair,
  Eyepatch,
  Hat,
  Hijab,
  Turban,
  WinterHat1,
  WinterHat2,
  WinterHat3,
  WinterHat4,
  LongHairBigHair,
  LongHairBob,
  LongHairBun,
  LongHairCurly,
  LongHairCurvy,
  LongHairDreads,
  LongHairFrida,
  LongHairFro,
  LongHairFroBand,
  LongHairMiaWallace,
  LongHairNotTooLong,
  LongHairShavedSides,
  LongHairStraight,
  LongHairStraight2,
  LongHairStraightStrand,
  ShortHairDreads01,
  ShortHairDreads02,
  ShortHairFrizzle,
  ShortHairShaggyMullet,
  ShortHairShortCurly,
  ShortHairShortFlat,
  ShortHairShortRound,
  ShortHairShortWaved,
  ShortHairSides,
  ShortHairTheCaesar,
  ShortHairTheCaesarSidePart,
};

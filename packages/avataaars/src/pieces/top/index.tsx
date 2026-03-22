import type { TopType } from "../../types";
import { NoHair, Eyepatch, Hat, Hijab, Turban, WinterHat1, WinterHat2, WinterHat3, WinterHat4 } from "./headwear";
import {
  LongHairBigHair, LongHairBob, LongHairBun, LongHairCurly,
  LongHairCurvy, LongHairDreads, LongHairFrida, LongHairFro,
  LongHairFroBand, LongHairMiaWallace, LongHairNotTooLong,
  LongHairShavedSides, LongHairStraight, LongHairStraight2,
  LongHairStraightStrand,
} from "./long-hair";
import {
  ShortHairDreads01, ShortHairDreads02, ShortHairFrizzle,
  ShortHairShaggyMullet, ShortHairShortCurly, ShortHairShortFlat,
  ShortHairShortRound, ShortHairShortWaved, ShortHairSides,
  ShortHairTheCaesar, ShortHairTheCaesarSidePart,
} from "./short-hair";

type TopProps = { hairColor: string; hatColor: string };

export const topMap: Record<TopType, (props: TopProps) => React.JSX.Element> = {
  NoHair, Eyepatch, Hat, Hijab, Turban,
  WinterHat1, WinterHat2, WinterHat3, WinterHat4,
  LongHairBigHair, LongHairBob, LongHairBun, LongHairCurly,
  LongHairCurvy, LongHairDreads, LongHairFrida, LongHairFro,
  LongHairFroBand, LongHairMiaWallace, LongHairNotTooLong,
  LongHairShavedSides, LongHairStraight, LongHairStraight2,
  LongHairStraightStrand,
  ShortHairDreads01, ShortHairDreads02, ShortHairFrizzle,
  ShortHairShaggyMullet, ShortHairShortCurly, ShortHairShortFlat,
  ShortHairShortRound, ShortHairShortWaved, ShortHairSides,
  ShortHairTheCaesar, ShortHairTheCaesarSidePart,
};

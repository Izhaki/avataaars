export type AvatarStyle = "Circle" | "Transparent";

export type TopType =
  | "NoHair"
  | "Eyepatch"
  | "Hat"
  | "Hijab"
  | "Turban"
  | "WinterHat1"
  | "WinterHat2"
  | "WinterHat3"
  | "WinterHat4"
  | "LongHairBigHair"
  | "LongHairBob"
  | "LongHairBun"
  | "LongHairCurly"
  | "LongHairCurvy"
  | "LongHairDreads"
  | "LongHairFrida"
  | "LongHairFro"
  | "LongHairFroBand"
  | "LongHairMiaWallace"
  | "LongHairNotTooLong"
  | "LongHairShavedSides"
  | "LongHairStraight"
  | "LongHairStraight2"
  | "LongHairStraightStrand"
  | "ShortHairDreads01"
  | "ShortHairDreads02"
  | "ShortHairFrizzle"
  | "ShortHairShaggyMullet"
  | "ShortHairShortCurly"
  | "ShortHairShortFlat"
  | "ShortHairShortRound"
  | "ShortHairShortWaved"
  | "ShortHairSides"
  | "ShortHairTheCaesar"
  | "ShortHairTheCaesarSidePart";

export type AccessoriesType =
  | "Blank"
  | "Kurt"
  | "Prescription01"
  | "Prescription02"
  | "Round"
  | "Sunglasses"
  | "Wayfarers";

export type HairColor =
  | "Auburn"
  | "Black"
  | "Blonde"
  | "BlondeGolden"
  | "Brown"
  | "BrownDark"
  | "PastelPink"
  | "Blue"
  | "Platinum"
  | "Red"
  | "SilverGray";

export type HatColor =
  | "Black"
  | "Blue01"
  | "Blue02"
  | "Blue03"
  | "Gray01"
  | "Gray02"
  | "Heather"
  | "PastelBlue"
  | "PastelGreen"
  | "PastelOrange"
  | "PastelRed"
  | "PastelYellow"
  | "Pink"
  | "Red"
  | "White";

export type FacialHairType =
  | "Blank"
  | "BeardLight"
  | "BeardMedium"
  | "BeardMajestic"
  | "MoustacheFancy"
  | "MoustacheMagnum";

export type FacialHairColor =
  | "Auburn"
  | "Black"
  | "Blonde"
  | "BlondeGolden"
  | "Brown"
  | "BrownDark"
  | "Platinum"
  | "Red"
  | "SilverGray";

export type ClotheType =
  | "BlazerShirt"
  | "BlazerSweater"
  | "CollarSweater"
  | "GraphicShirt"
  | "Hoodie"
  | "Overall"
  | "ShirtCrewNeck"
  | "ShirtScoopNeck"
  | "ShirtVNeck";

export type ClotheColor =
  | "Black"
  | "Blue01"
  | "Blue02"
  | "Blue03"
  | "Gray01"
  | "Gray02"
  | "Heather"
  | "PastelBlue"
  | "PastelGreen"
  | "PastelOrange"
  | "PastelRed"
  | "PastelYellow"
  | "Pink"
  | "Red"
  | "White";

export type GraphicType =
  | "Bat"
  | "Bear"
  | "Cumbia"
  | "Deer"
  | "Diamond"
  | "Hola"
  | "Pizza"
  | "Resist"
  | "Selena"
  | "Skull"
  | "SkullOutline";

export type EyeType =
  | "Close"
  | "Cry"
  | "Default"
  | "Dizzy"
  | "EyeRoll"
  | "Happy"
  | "Hearts"
  | "Side"
  | "Squint"
  | "Surprised"
  | "Wink"
  | "WinkWacky";

export type EyebrowType =
  | "Angry"
  | "AngryNatural"
  | "Default"
  | "DefaultNatural"
  | "FlatNatural"
  | "FrownNatural"
  | "RaisedExcited"
  | "RaisedExcitedNatural"
  | "SadConcerned"
  | "SadConcernedNatural"
  | "UnibrowNatural"
  | "UpDown"
  | "UpDownNatural";

export type MouthType =
  | "Concerned"
  | "Default"
  | "Disbelief"
  | "Eating"
  | "Grimace"
  | "Sad"
  | "ScreamOpen"
  | "Serious"
  | "Smile"
  | "Tongue"
  | "Twinkle"
  | "Vomit";

export type SkinColor =
  | "Tanned"
  | "Yellow"
  | "Pale"
  | "Light"
  | "Brown"
  | "DarkBrown"
  | "Black";

export const TOP_TYPES: TopType[] = [
  "NoHair", "Eyepatch", "Hat", "Hijab", "Turban",
  "WinterHat1", "WinterHat2", "WinterHat3", "WinterHat4",
  "LongHairBigHair", "LongHairBob", "LongHairBun", "LongHairCurly",
  "LongHairCurvy", "LongHairDreads", "LongHairFrida", "LongHairFro",
  "LongHairFroBand", "LongHairMiaWallace", "LongHairNotTooLong",
  "LongHairShavedSides", "LongHairStraight", "LongHairStraight2",
  "LongHairStraightStrand",
  "ShortHairDreads01", "ShortHairDreads02", "ShortHairFrizzle",
  "ShortHairShaggyMullet", "ShortHairShortCurly", "ShortHairShortFlat",
  "ShortHairShortRound", "ShortHairShortWaved", "ShortHairSides",
  "ShortHairTheCaesar", "ShortHairTheCaesarSidePart",
];

export const ACCESSORIES_TYPES: AccessoriesType[] = [
  "Blank", "Kurt", "Prescription01", "Prescription02", "Round", "Sunglasses", "Wayfarers",
];

export const HAIR_COLORS: HairColor[] = [
  "Auburn", "Black", "Blonde", "BlondeGolden", "Brown", "BrownDark",
  "PastelPink", "Blue", "Platinum", "Red", "SilverGray",
];

export const HAT_COLORS: HatColor[] = [
  "Black", "Blue01", "Blue02", "Blue03", "Gray01", "Gray02", "Heather",
  "PastelBlue", "PastelGreen", "PastelOrange", "PastelRed", "PastelYellow",
  "Pink", "Red", "White",
];

export const FACIAL_HAIR_TYPES: FacialHairType[] = [
  "Blank", "BeardLight", "BeardMedium", "BeardMajestic", "MoustacheFancy", "MoustacheMagnum",
];

export const FACIAL_HAIR_COLORS: FacialHairColor[] = [
  "Auburn", "Black", "Blonde", "BlondeGolden", "Brown", "BrownDark", "Platinum", "Red", "SilverGray",
];

export const CLOTHE_TYPES: ClotheType[] = [
  "BlazerShirt", "BlazerSweater", "CollarSweater", "GraphicShirt",
  "Hoodie", "Overall", "ShirtCrewNeck", "ShirtScoopNeck", "ShirtVNeck",
];

export const CLOTHE_COLORS: ClotheColor[] = [
  "Black", "Blue01", "Blue02", "Blue03", "Gray01", "Gray02", "Heather",
  "PastelBlue", "PastelGreen", "PastelOrange", "PastelRed", "PastelYellow",
  "Pink", "Red", "White",
];

export const GRAPHIC_TYPES: GraphicType[] = [
  "Bat", "Bear", "Cumbia", "Deer", "Diamond", "Hola", "Pizza", "Resist", "Selena", "Skull", "SkullOutline",
];

export const EYE_TYPES: EyeType[] = [
  "Close", "Cry", "Default", "Dizzy", "EyeRoll", "Happy", "Hearts", "Side", "Squint", "Surprised", "Wink", "WinkWacky",
];

export const EYEBROW_TYPES: EyebrowType[] = [
  "Angry", "AngryNatural", "Default", "DefaultNatural", "FlatNatural", "FrownNatural",
  "RaisedExcited", "RaisedExcitedNatural", "SadConcerned", "SadConcernedNatural",
  "UnibrowNatural", "UpDown", "UpDownNatural",
];

export const MOUTH_TYPES: MouthType[] = [
  "Concerned", "Default", "Disbelief", "Eating", "Grimace", "Sad",
  "ScreamOpen", "Serious", "Smile", "Tongue", "Twinkle", "Vomit",
];

export const SKIN_COLORS: SkinColor[] = [
  "Tanned", "Yellow", "Pale", "Light", "Brown", "DarkBrown", "Black",
];

export interface AvatarProps {
  avatarStyle?: AvatarStyle;
  topType?: TopType;
  accessoriesType?: AccessoriesType;
  hairColor?: HairColor;
  hatColor?: HatColor;
  facialHairType?: FacialHairType;
  facialHairColor?: FacialHairColor;
  clotheType?: ClotheType;
  clotheColor?: ClotheColor;
  graphicType?: GraphicType;
  eyeType?: EyeType;
  eyebrowType?: EyebrowType;
  mouthType?: MouthType;
  skinColor?: SkinColor;
  className?: string;
  style?: React.CSSProperties;
}

export type AvatarConfig = Omit<AvatarProps, "className" | "style">;

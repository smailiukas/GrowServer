import { Peer } from "../structures/Peer";

export interface Jammer {
  type: "zombie" | "punch" | "signal";
  enabled: boolean;
}

export interface BlockPosition {
  x: number;
  y: number;
}

export interface DroppedItem {
  id: number;
  amount: number;
  block: BlockPosition;
  x: number;
  y: number;
  uid: number;
}

export interface Dropped {
  uid: number;
  items: DroppedItem[];
}

export interface WorldData {
  name?: string;
  width?: number;
  height?: number;
  blockCount?: number;
  blocks?: Block[];
  owner?: number;
  admins?: number[];
  playerCount?: number;
  bpm?: number;
  customMusicBlocksDisabled?: boolean;
  invisMusicBlocks?: boolean;
  jammers?: Jammer[];
  dropped?: Dropped;
}

export interface LockedBlocked {
  ownerFg?: number;
  ownerUserID?: number;
  ownerX?: number;
  ownerY?: number;
  isOwner?: boolean;
  ignoreEmptyAir?: boolean;
  adminIDs?: number[];
}

export interface Door {
  label?: string;
  destination?: string;
  id?: string;
  locked?: boolean;
}

export interface Sign {
  label?: string;
}

export interface Boombox {
  open?: boolean;
  public?: boolean;
  silenced?: boolean;
}

export interface Entrance {
  open?: boolean;
}

export interface Tree {
  fruit: number;
  fruitCount: number;
  fullyGrownAt: number;
  plantedAt: number;
}

export interface Block {
  fg?: number;
  bg?: number;
  x?: number;
  y?: number;
  lock?: LockedBlocked;
  door?: Door;
  sign?: Sign;
  damage?: number;
  resetStateAt?: number;
  worldLock?: boolean;
  boombox?: Boombox;
  rotatedLeft?: boolean;
  entrace?: Entrance;
  tree?: Tree;
}

export interface EnterArg {
  x?: number;
  y?: number;
}

export interface GetBlockArg {
  x: number;
  y: number;
  peer: Peer;
}

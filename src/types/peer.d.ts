export interface InventoryItems {
  id: number;
  amount: number;
}

export interface PeerDataType {
  x?: number;
  y?: number;
  world: string;
  inventory?: {
    max: number;
    items: InventoryItems[];
  };
  requestedName: string;
  tankIDName: string;
  netID: number;
  country: string;
  id_user: string;
  role: string;
}

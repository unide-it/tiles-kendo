export interface DropdownModel {
  text: string;
  tileId?: string;
  actionName: ActionName;
}

export enum ActionName {
  REMOVE,
  SMILES
}

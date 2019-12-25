export interface Built {
  Type: string;
  Link: string;
  Github: string;
  ListBuilt: BuiltItem[];
}

export interface BuiltItem {
  Name: string;
  Image: string;
}

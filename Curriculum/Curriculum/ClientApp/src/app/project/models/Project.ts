import { Built } from "./Built";

export interface Project {
  Creation_Date: string;
  Description: string;
  OnlyImage: boolean;
  Title: string;
  Video: string;
  Images: string[];
  Built: Built;
  Order: number;
}

import { Tag } from './tag';

export interface Project {
  id: number;
  name: string;
  summary: string;
  description: string;
  projectUrl: string;
  images: string[];
  tags: Tag[];
}

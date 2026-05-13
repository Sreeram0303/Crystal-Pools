export type BlogCategory = 'Maintenance' | 'Architecture' | 'Wellness' | 'Technology';

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  author: string;
  date: string;
  image: string;
  featured: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  initials: string;
  description: string;
}

import type { Category } from '../types/category';

export const CATEGORIES: Category[] = [
  {
    name: 'category1',
    subcategories: [
      {
        name: 'category2',
        subcategories: [],
      },
      {
        name: 'category3',
        subcategories: [
          {
            name: 'category4',
            subcategories: [],
          },
        ],
      },
    ],
  },
  {
    name: 'category5',
    subcategories: [],
  },
] as const;

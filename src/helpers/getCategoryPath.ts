import type { Category } from '../types/category';

export function getCategoryPath(
  categories: Category[],
  categoryName: string,
  path = ''
): string {
  for (const category of categories) {
    const currentPath = `${path}/${category.name}`;

    if (category.name === categoryName) {
      return currentPath;
    }

    return getCategoryPath(category.subcategories, categoryName, currentPath);
  }

  throw new Error('Category not found');
}

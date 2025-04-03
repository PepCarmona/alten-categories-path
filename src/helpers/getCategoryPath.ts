import type { Category } from '../types/category';

export function getCategoryPath(
  categories: Category[],
  categoryName: string,
  path = ''
): string | null {
  for (const category of categories) {
    const currentPath = `${path}/${category.name}`;

    if (category.name === categoryName) {
      return currentPath;
    }

    if (category.subcategories.length === 0) {
      continue;
    }

    const subCategoryPath = getCategoryPath(
      category.subcategories,
      categoryName,
      currentPath
    );

    if (subCategoryPath === null) {
      continue;
    }

    return subCategoryPath;
  }

  return null;
}

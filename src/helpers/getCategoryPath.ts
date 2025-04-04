import type { Category } from '../types/category';

/**
 * Finds the full path to a given category in a hierarchical category
 * structure.
 *
 * @param categories - The hierarchical category structure.
 * @param categoryName - The name of the category to find.
 * @param path - The current path being explored (optional, defaults to empty string).
 * @returns The full path to the category, or null if it does not exist.
 */
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

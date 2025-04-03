import { describe, expect, it } from 'vitest';
import type { Category } from '../types/category';
import { getCategoryPath } from './getCategoryPath';

describe('getCategoryPath', () => {
  it('should return category path with one name on one level depth', () => {
    const categories: Category[] = [{ name: 'category1', subcategories: [] }];

    expect(getCategoryPath(categories, 'category1')).toBe('/category1');
  });

  it('should return category path with multiple names on deeper level depth', () => {
    const categories: Category[] = [
      {
        name: 'category1',
        subcategories: [
          {
            name: 'category2',
            subcategories: [{ name: 'category3', subcategories: [] }],
          },
        ],
      },
    ];

    expect(getCategoryPath(categories, 'category3')).toBe(
      '/category1/category2/category3'
    );
  });

  it('should return category path of the first category if multiple categories have the same name', () => {
    const categories: Category[] = [
      {
        name: 'category1',
        subcategories: [
          {
            name: 'category2',
            subcategories: [{ name: 'category3', subcategories: [] }],
          },
        ],
      },
      {
        name: 'category4',
        subcategories: [
          {
            name: 'category5',
            subcategories: [{ name: 'category3', subcategories: [] }],
          },
        ],
      },
      { name: 'category3', subcategories: [] },
    ];

    expect(getCategoryPath(categories, 'category3')).toBe(
      '/category1/category2/category3'
    );
  });

  it('should throw an Error if category does not exist on first level', () => {
    const categories: Category[] = [];

    expect(() => getCategoryPath(categories, 'category1')).toThrowError(
      'Category not found'
    );
  });

  it('should throw an Error if category does not exist on deeper level', () => {
    const categories: Category[] = [
      {
        name: 'category1',
        subcategories: [{ name: 'category2', subcategories: [] }],
      },
    ];

    expect(() => getCategoryPath(categories, 'category3')).toThrowError(
      'Category not found'
    );
  });
});

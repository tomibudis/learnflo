import { describe, it, expect } from '@jest/globals';
import { cn } from '@/lib/utils';

describe('cn utility', () => {
  it('joins class names', () => {
    expect(cn('a', 'b', false, undefined, 'c')).toBe('a b c');
  });
});

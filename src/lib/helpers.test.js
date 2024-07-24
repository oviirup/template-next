import { describe, expect, it } from 'vitest';
import { slugify } from './helpers';

describe('slugify', () => {
  it('should throw an error if input is not a string', () => {
    expect(() => slugify(null)).toThrow(TypeError);
    expect(() => slugify(undefined)).toThrow(TypeError);
    expect(() => slugify(123)).toThrow(TypeError);
    expect(() => slugify({})).toThrow(TypeError);
    expect(() => slugify([])).toThrow(TypeError);
  });

  it('should return a slugified string', () => {
    expect(slugify('Hello World')).toBe('hello-world');
    expect(slugify('React is Awesome')).toBe('react-is-awesome');
    expect(slugify('  leading and trailing spaces  ')).toBe(
      'leading-and-trailing-spaces',
    );
    expect(slugify('Multiple   spaces')).toBe('multiple-spaces');
    expect(slugify('Special_chars*&^%$')).toBe('special-chars');
    expect(slugify('CamelCaseString')).toBe('camel-case-string');
    expect(slugify('Accented characters àéîôü')).toBe(
      'accented-characters-àéîôü',
    );
  });

  it('should handle strings with special characters', () => {
    expect(slugify('foo@bar.com')).toBe('foo-bar-com');
    expect(slugify('foo@bar.com/hello')).toBe('foo-bar-com-hello');
    expect(slugify('foo@bar.com#section')).toBe('foo-bar-com-section');
    expect(slugify('hello:world')).toBe('hello-world');
    expect(slugify('hello;world')).toBe('hello-world');
    expect(slugify('hello,world')).toBe('hello-world');
    expect(slugify('hello.world')).toBe('hello-world');
    expect(slugify('hello/world')).toBe('hello-world');
  });

  it('should handle strings with multiple dashes', () => {
    expect(slugify('a--b')).toBe('a-b');
    expect(slugify('a---b')).toBe('a-b');
    expect(slugify('a----b')).toBe('a-b');
  });

  it('should handle strings with leading and trailing dashes', () => {
    expect(slugify('-hello-')).toBe('hello');
    expect(slugify('--hello--')).toBe('hello');
    expect(slugify('---hello---')).toBe('hello');
  });

  it('should handle strings with no changes needed', () => {
    expect(slugify('hello-world')).toBe('hello-world');
    expect(slugify('simple-slug')).toBe('simple-slug');
  });
});

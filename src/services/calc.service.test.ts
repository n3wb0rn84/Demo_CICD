import { describe, it, expect } from 'vitest';
import calcService from './calc.service.js';

describe('calcService', () => {
  describe('isEven', () => {
    
    it('should return true if the number is zero', () => {
      expect(calcService.isEven(0)).toBe(true);
    });

    // Test pour les nombres pairs (positifs et négatifs)
    it.each([[2],[-2],[42]])('should return true if the number %i is even', (nb) => {
      expect(calcService.isEven(nb)).toBe(true);
    });

    // Test pour les nombres impairs (positifs et négatifs)
    it.each([[33],[-13]])('should return false if the number %i is odd', (nb) => {
      expect(calcService.isEven(nb)).toBe(false);
    });

  });
});
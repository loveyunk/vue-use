import { renderHook } from '../../../utils/renderHook';
import useCounter from '..';

describe('useCounter', () => {
  it('should be defined', () => {
    expect(useCounter).toBeDefined();
  });

  it('should be update counter', () => {
    renderHook(() => {
      const [count, { inc, dec, set, get, reset }] = useCounter(100, {
        max: 10,
        min: 1,
      });

      expect(count.value).toBe(10);
      expect(get()).toBe(10);
      inc();
      expect(count.value).toBe(10);
      expect(get()).toBe(10);
      inc(2);
      expect(count.value).toBe(10);
      expect(get()).toBe(10);
      dec();
      expect(count.value).toBe(9);
      expect(get()).toBe(9);
      dec(5);
      expect(count.value).toBe(4);
      expect(get()).toBe(4);
      set(100);
      expect(count.value).toBe(10);
      expect(get()).toBe(10);
      reset();
      expect(count.value).toBe(10);
      expect(get()).toBe(10);
    });
  });
});

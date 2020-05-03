import { ref, Ref } from '@vue/composition-api';

export interface Options {
  min?: number;
  max?: number;
}

export interface Actions {
  inc: (delta?: number) => void;
  dec: (delta?: number) => void;
  get: () => number;
  set: (value: number) => void;
  reset: () => void;
}

export default function useCounter(
  initialValue = 0,
  options: Options = {}
): [Ref<number>, Actions] {
  const { min, max } = options;

  let init = initialValue;

  if (typeof min === 'number') {
    init = Math.max(min, initialValue);
  }

  if (typeof max === 'number') {
    init = Math.min(max, initialValue);
  }

  const count = ref(init);

  const set = (value: number) => {
    let target = value;
    if (typeof max === 'number') {
      target = Math.min(max, target);
    }
    if (typeof min === 'number') {
      target = Math.max(min, target);
    }
    count.value = target;
  };

  const inc = (delta = 1) => set(count.value + delta);
  const dec = (delta = 1) => set(count.value - delta);
  const get = () => count.value;
  const reset = () => set(init);

  const actions = { inc, dec, get, set, reset };

  return [count, actions];
}

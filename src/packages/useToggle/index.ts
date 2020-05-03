import { ref, Ref } from '@vue/composition-api';

type IState = string | number | boolean | undefined;

export function useToggle<T = boolean | undefined>(): {
  state: Ref<boolean>;
  toggle: (value?: T) => void;
  setLeft: () => void;
  setRight: () => void;
};

export function useToggle<T = IState>(
  defaultValue: T
): {
  state: Ref<T>;
  toggle: (value?: T) => void;
  setLeft: () => void;
  setRight: () => void;
};

export function useToggle<T = IState, U = IState>(
  defaultValue: T,
  reverseValue: U
): {
  state: Ref<T> | Ref<U>;
  toggle: (value?: T | U) => void;
  setLeft: () => void;
  setRight: () => void;
};

export default function useToggle(
  defaultValue?: IState,
  reverseValue?: IState
) {
  const state = ref(defaultValue);

  const reverseValueOrigin =
    reverseValue === undefined ? !defaultValue : reverseValue;

  const toggle = (value: IState) => {
    if (value !== undefined) {
      state.value = value;
      return;
    }

    state.value =
      state.value === defaultValue ? reverseValueOrigin : defaultValue;
  };

  const setLeft = () => {
    state.value = defaultValue;
  };

  const setRight = () => {
    state.value = reverseValueOrigin;
  };

  return {
    state,
    toggle,
    setLeft,
    setRight,
  };
}

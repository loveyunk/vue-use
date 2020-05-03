# useCounter

Vue hook that tracks a numeric value.

## Usage

```jsx
import { defineComponent } from '@vue/composition-api';
import { useCounter } from '@loveyunk/vue-use';

const Demo = createComponent({
  setup() {
    const [count, { inc, dec, set, reset }] = useCounter(100, {
      max: 10,
      min: 1,
    });

    return {
      count,
      inc,
      dec,
      set,
      reset,
    };
  },

  render() {
    const { count, inc, dec, set, reset } = this;

    return (
      <div>
        <div>
          current: {count} [max: {10}; min: {1}]
        </div>
        <br />
        <button onClick={() => inc()}>Increment</button>
        <button onClick={() => dec()}>Decrement</button>
        <button onClick={() => inc(5)}>Increment (+5)</button>
        <button onClick={() => dec(5)}>Decrement (-5)</button>
        <button onClick={() => set(100)}>Set 100</button>
        <button onClick={() => reset()}>Reset</button>
      </div>
    );
  },
});
```

## API

```
const [count, {
  inc,
  dec,
  set,
  get,
  reset
}] = useCounter(initialValue, {min, max});
```

## Result

| Property | Description                | Type                      |
| -------- | -------------------------- | ------------------------- |
| count    | current count              | `number`                  |
| inc      | increment，default add 1   | `(delta?:number) => void` |
| dec      | decrement, default minus 1 | `(delta?:number) => void` |
| set      | set current count          | `(value: number) => void` |
| get      | get current count          | `() => number`            |
| reset    | reset to initial value     | `() => void`              |

## Params

| Property     | Description   | Type     | Default |
| ------------ | ------------- | -------- | ------- |
| initialValue | initial count | `number` | 0       |
| min          | min count     | `number` | -       |
| max          | max count     | `number` | -       |

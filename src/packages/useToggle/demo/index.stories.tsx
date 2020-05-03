import 'vue-tsx-support/enable-check';
import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import { defineComponent } from '@vue/composition-api';
import useToggle from '..';
import ShowDocs from '../../../components/ShowDocs';

type Inject = {
  state: any;
  toggle: Function;
  setLeft: Function;
  setRight: Function;
};

const Docs = () => <ShowDocs md={require('../index.md')} />;

const Demo = defineComponent({
  setup() {
    const { state, toggle } = useToggle();

    return { state, toggle };
  },

  render(this: Vue & Inject) {
    const { state, toggle } = this;

    return (
      <div>
        {state ? 'ON' : 'OFF'}
        <p>
          <button onClick={() => toggle()}>Toggle</button>
          <button onClick={() => toggle(false)}>Toggle False</button>
          <button onClick={() => toggle(true)}>Toggle True</button>
        </p>
      </div>
    );
  },
});

storiesOf('useToggle', module)
  // @ts-ignore
  .add('Docs', () => Docs)
  .add('Demo', () => Demo);

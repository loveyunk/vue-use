import Vue from 'vue';
import CompositionAPI, { defineComponent } from '@vue/composition-api';
import { shallowMount, createLocalVue } from '@vue/test-utils';

const localVue = createLocalVue();

export function renderHook<V, Props = unknown, Data = unknown>(setup: () => V) {
  Vue.use(CompositionAPI);

  const App = defineComponent({
    template: '<div ref="app" id="app"></div>',
    setup,
  });

  return shallowMount<Vue & V>(App, {
    localVue,
  });
}

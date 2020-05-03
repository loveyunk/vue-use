import { configure } from '@storybook/vue';
import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import 'github-markdown-css';
import './style.css';

Vue.use(VueCompositionAPI);

configure(require.context('../src', true, /\.stories\.tsx$/), module);

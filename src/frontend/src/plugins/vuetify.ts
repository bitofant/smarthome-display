import Vue from 'vue';
import transitions from 'vuetify/lib/components/transitions';
import VApp from 'vuetify/lib/components/VApp';
import VBtn from 'vuetify/lib/components/VBtn';
import VFooter from 'vuetify/lib/components/VFooter';
import VGrid from 'vuetify/lib/components/VGrid';
import VIcon from 'vuetify/lib/components/VIcon';
import VList from 'vuetify/lib/components/VList';
import VNavigationDrawer from 'vuetify/lib/components/VNavigationDrawer';
import VToolbar from 'vuetify/lib/components/VToolbar';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    transitions,
  },
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: '#ee44aa',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
      },
    },
  },
  icons: {
    iconfont: 'mdi',
  },
});

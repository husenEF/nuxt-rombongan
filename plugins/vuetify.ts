// import this after install `@mdi/font` package
import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import { VStepperVertical } from "vuetify/labs/VStepperVertical";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    components: {
      VStepperVertical,
    },
  });
  app.vueApp.use(vuetify);
});

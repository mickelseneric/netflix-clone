import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import store from "./store/index.js";
import { createAuth0 } from "@auth0/auth0-vue";

import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(faUserSecret)

const app = createApp(App)
 .use(
  createAuth0({
   domain: "https://dev-csmlbd3j.us.auth0.com",
   client_id: "Ii26ojtfciDFZoLIf4V6oDDlRpGk5ciP",
   redirect_uri: "http://localhost:8080/signin",
   responseType: "token id_token",
   scope: "openid profile email"
  })
 )
 .use(store)
 .use(router);

app.config.globalProperties.axios = axios;

/* add font awesome icon component */
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount("#app");

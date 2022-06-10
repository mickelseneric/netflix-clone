import { createRouter, createWebHistory } from "vue-router";
import Landing from "../components/mainPages/Landing.vue";
import Signin from "../components/mainPages/SignIn.vue";
import MovieMain from "../components/mainPages/MovieMain.vue";
import movieHome from "../components/mainPages/movieHome.vue";
import myList from "../components/mainPages/myList.vue";
import Auth0Callback from "../components/mainPages/Auth0Callback.vue";
import Store from "../store";
// import NodeJS from "node.js";

const routes = [
 {
  path: "/",
  name: "Landing",
  component: Landing
 },
 {
  path: "/signin",
  name: "Signin",
  component: Signin
 },
 {
  path: "/callback",
  name: "Auth0Callback",
  component: Auth0Callback
 },
 {
  path: "/moviemain",
  name: "MovieMain",
  component: MovieMain,
  meta: { authRequired: true },
  children: [
   {
    path: "/moviemain/",
    name: "movieHome",
    component: movieHome
   },
   {
    path: "/moviemain/mylist",
    name: "MyList",
    component: myList
   }
  ]
 }
];

const router = createRouter({
 history: createWebHistory(process.env.BASE_URL),
 routes
});

// Authentication
router.beforeEach((to, from, next) => {
 //  if (Store.state.justLoggedIn) {
 //   router.replace("/moviemain/");
 //  }
 //  let userIsLoggedIn = Store.state.userIsAuthorized;

 //   let inputLoginInfo = document.form.value;
 //  const acceptedLogins = localStorage.acceptedLogins;
 //  let userIsLoggedIn = acceptedLogins.forEach((login) => {
 //   return login === inputLoginInfo;
 //  });
 // Check to see if the authentication is required for the "to" path
 if (to.matched.some((record) => record.meta.authRequired)) {
  if (Store.state.userIsAuthorized) {
   next();
  } else {
   router.replace("/signin");
   alert("Please Login to Proceed");
  }
 } else {
  // Allow to move to unprotected views
  next();
 }
});

export default router;

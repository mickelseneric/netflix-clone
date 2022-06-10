<template>
 <img :src="require('../../assets/website.jpg')" id="index_background" />
 <div class="top-banner">
  <a href="/" class="logo">NETFLIX</a>
 </div>
 <div class="showcase">
  <form v-if="this.newAccount" @submit="formValidation" method="post" id="signupForm">
   <h2 id="signupTitle">SIGN UP</h2>
   <p>
    <label for="email">Email</label>
    <input id="email" v-model="email" type="email" name="email" />
   </p>
   <p>
    <label for="password">Password</label>
    <input id="password" v-model="password" type="text" name="password" />
   </p>
   <p>
    <label for="password">Confirm Password</label>
    <input id="passwordcon" v-model="passwordcon" type="text" name="passwordcon" />
   </p>
   <p>
    <input type="submit" value="Submit" class="btn" />
   </p>
   <!-- <button @click="login" class="btn">Sign Up</button> -->
   <button @click="this.newAccount = !this.newAccount" class="accountTypeToggle">Already Have an Account?</button>
   <!-- <router-link to="/moviemain/">See the movie home page here (Guests)</router-link> -->
  </form>
  <form v-else @submit="formValidation" action="https://3bycwb.csb.app/moviemain/" method="post" id="signupForm">
   <h2 id="signupTitle">SIGN IN</h2>
   <!-- <label for="firstname">First Name:</label>
   <input type="text" id="firstname" name="firstname" placeholder="Enter your first name.." />
   <label for="lastname">Last Name:</label>
   <input type="text" id="lastname" name="lastname" placeholder="Enter your last name.." /> -->
   <p>
    <label for="email">Email</label>
    <input id="email" v-model="email" type="email" name="email" />
   </p>
   <p>
    <label for="password">Password</label>
    <input id="password" v-model="password" type="text" name="password" />
   </p>
   <p>
    <label for="passwordcon">Confirm Password</label>
    <input id="passwordcon" v-model="passwordcon" type="text" name="passwordcon" />
   </p>
   <p>
    <input type="submit" value="Submit" class="btn" />
   </p>
   <button @click="this.newAccount = !this.newAccount" class="accountTypeToggle">Create New Account?</button>
   <!-- <router-link to="/moviemain/">See the movie home page here (Guests)</router-link> -->
  </form>
 </div>
</template>
<script>
// Check programatic navigation

import router from "../../router";
// import Store from "../../store";
export default {
 data() {
  return {
   newAccount: true,
   emailRequirements: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
   passwordRequirements: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
   email: null,
   password: null,
   passwordcon: null
  };
 },
 methods: {
  signupValidation() {
   //  if (this.emailRequirements.test(this.email) && this.passwordRequirements.test(this.password) && this.password === this.passwordcon) {
   //   let newAccount = { email: this.email, password: this.password };
   //   let accountsArray = [JSON.parse(localStorage.getItem("accounts")), newAccount];
   //   localStorage.setItem("accounts", JSON.stringify(accountsArray));
   //  } else if (!this.emailRequirements.test(this.email)) {
   //   alert("please check email");
   //  } else if (!this.passwordRequirements.test(this.password)) {
   //   alert("Please confirm your password meets the requirements: Minimum eight characters, at least one letter, one number and one special character");
   //  } else if (this.password !== this.passwordcon) {
   //   alert("Passwords do not match");
   //  }
  //  this.$store.commit("setUserIsAuthorized", true);
    this.$router.replace("/moviemain/");
  //  this.$store.commit("justLoggedIn");
  }
 }
};
</script>
<style scoped lang="scss">
#index_background {
 position: absolute;
 top: 0;
 left: 0;
 z-index: -1;
 animation-name: sliding;
 animation-duration: 60s;
 width: 120%;
 animation-iteration-count: infinite;
 animation-timing-function: ease-in-out;
}
.top-banner {
 display: flex;
 justify-content: space-between;
 align-items: center;
 text-align: center;
 height: 4rem;
 width: 100%;
 background-color: #000;
 z-index: 5;
}

/* Animations */

@keyframes sliding {
 0% {
  transform: translate(0);
 }
 50% {
  transform: translatex(-15%);
 }
 100% {
  transform: translate(0);
 }
}

.showcase {
 height: 100vh;
 width: 100vw;
 background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 text-align: left;

 #signupForm {
  background-color: rgba(82, 2, 2, 0.9);
  min-width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  #signupFormTitle {
   margin-top: 4rem;
  }
  p {
   display: flex;
   flex-direction: column;
   margin: 0.5rem;
   min-width: 60%;
  }
  .accountTypeToggle {
   color: rgb(233, 160, 240);
   padding-bottom: 0.5rem;
   background: none;
   border: none;
   &:hover {
    cursor: pointer;
   }
  }
 }
}
</style>
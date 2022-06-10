<template>
 <router-view />
</template>

<script>
export default {
 name: "App",
 components: {},

 data() {
  return {};
 }
};
</script>

<style lang="scss">
:root {
 --primary-color: red;
 --primary-hover: rgb(220, 3, 3);
}
#app {
 position: relative;
 font-family: Avenir, Helvetica, Arial, sans-serif;
 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;
 /* background: #000; */
 color: #ddd;
 margin: 0;
 padding: 0;
 box-sizing: border-box;
 overflow: hidden;
 .btn {
  background-color: var(--primary-color);
  color: #fff;
  font-size: 1rem;
  border: none;
  padding: 1rem 2rem;
  border-radius: 5px;
  text-decoration: none;
 }
 .btn:hover {
  background-color: var(--primary-hover);
  cursor: pointer;
 }
 #landingPageSignup {
  margin-right: 3rem;
  margin-top: 1rem;
 }
}

/* Media Query */

.logo {
 color: red;
 text-decoration: none;
 font-size: 3.5rem;
 font-weight: 900;
}
.logo:hover {
 color: var(--primary-hover);
}
</style>
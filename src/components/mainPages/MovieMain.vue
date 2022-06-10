<template>
 <div class="top-banner">
  <router-link to="/" class="logo">NETFLIX</router-link>
  <router-link to="/moviemain/" class="navlink">Genres</router-link>
  <router-link to="/moviemain/mylist" class="navlink">My List</router-link>
  <input id="searchBar" type="text" placeholder="Search.." @click="logAllMovies" @keyup="searchBarFunctionality" />
  <button v-if="this.$store.state.userIsAuthorized" @click="logout">Sign Out</button>
 </div>
 <router-view></router-view>
</template>

<script>
export default {
 name: "MovieMain"
};
</script>

<style lang="scss" scoped>
template {
 overflow: hidden;
}
.top-banner {
 display: flex;
 justify-content: space-between;
 align-items: center;
 text-align: center;
 width: 100vw;
 background-color: #000;
 z-index: 5;
 #searchBar {
  height: 2rem;
  width: 15rem;
  background-color: #666;
  margin: 0 2rem;
 }
 .navlink {
  text-decoration: none;
  background: none;
  color: #fff;
  font-size: 1.75rem;
  border: none;
  padding: 0;
  height: 3rem;
  .navlink:hover {
   cursor: pointer;
   transform: scale(1.1);
   box-shadow: inset 0 -0.1rem #fff;
  }
  .navlink.active {
   border-bottom: 1px solid #fff;
  }
 }
}
</style>
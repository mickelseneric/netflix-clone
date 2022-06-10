<template>
 <div class="fullCarousel">
  <div class="listElement">
   <h1 class="listTitle">Music</h1>
   <div class="carousel" id="musicCarousel">
    <button @click="leftScroll" class="btn-left">&lt;</button>
    <ul>
     <li v-for="object in eachObject" :key="object" class="card carouselList" :id="object.id">
      <button @click="openMovieModal" class="cardButton">
       <img v-bind:src="'http://image.tmdb.org/t/p/w185' + object.backdrop_path" />
       <h4>{{ object.title }}</h4>
       <div class="noshow">
        <button @click="closeModal" class="closing"></button>
        <img v-bind:src="'http://image.tmdb.org/t/p/w185' + object.backdrop_path" />
        <h2>{{ object.title }}</h2>
        <p>{{ object.overview }}</p>
       </div>
      </button>
     </li>
    </ul>
    <button @click="rightScroll" class="btn-right">></button>
   </div>
  </div>
 </div>
</template>
<script>
import axios from "axios";
export default {
 name: "Music",
 data() {
  return {
   eachObject: []
  };
 },
 methods: {
  async checkItOut() {
   const res = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=fa73fbb2a48739b593cdcc467151fa54&with_genres=10402`);
   res.data.results.forEach((element) => {
    this.eachObject.push(element);
    if (element.title === undefined) {
     element.title = element.name;
    }
   });
  }
 },
 beforeMount() {
  this.checkItOut();
 }
};
</script>
<style lang="scss" scoped>
.fullCarousel {
 background: #000;
 color: #ddd;
 .listElement {
  display: flex;
  flex-direction: column;
  h1 {
   margin: 1rem;
   text-align: left;
  }
  .carousel {
   display: flex;
   ul {
    display: flex;
    border-bottom: 1px solid #222;

    li {
     background: #000;
     list-style: none;
     .noshow {
      display: none;
     }
    }
   }
  }
 }
}
</style>
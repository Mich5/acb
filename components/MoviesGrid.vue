<template>
  <v-row dense>
    <v-col v-for="movie in movies" :key="movie.title" cols="6" md="3">
      <v-card class="movie-card" :to="`/movies/${movie.id}`" max-width="300">
        <v-img
          :src="movie.poster"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="200px"
        >
        </v-img>
        <v-card-text>
          <h4 class="caption">{{ movie.title }}</h4>
          <span class="caption font-weight-thin">{{ movie.year }}</span>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import MovieCard from "./MovieCard";
export default {
  components: {
    MovieCard,
  },
  name: "movies-list",
  props: {
    movies: Array,
  },
};
</script>
<style scoped>
.movie-card:hover {
  transition: 300ms;
}
.movie-card:hover {
  transform: scale(1.05);
}
</style>
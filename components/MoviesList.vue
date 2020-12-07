<template>
  <v-slide-group class="pa-4" show-arrows>
    <v-slide-item v-for="(movie, i) in movies" :key="i">
      <movie-card :movie="movie"></movie-card>
    </v-slide-item>
  </v-slide-group>
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
<template>
  <div>
    <h1 class="heading mt-12">Movies</h1>
    <movies-grid :movies="movies"></movies-grid>
    <!-- <v-row>
        <v-col v-for="movie in movies" :key="movie.id" cols="12" sm="3">
            <movie-card :movie="movie"></movie-card>
        </v-col>
    </v-row> -->
  </div>
</template>

<script>
import MovieCard from "@/components/MovieCard";
import MoviesGrid from "@/components/MoviesGrid";
import { allMovies } from "@/services/movies";
export default {
  components:{
    MovieCard,
    MoviesGrid
  },
  data: () => ({
    movies: [],
  }),
  async beforeMount() {
    this.movies = await allMovies()
  },
  head() {
    return {
      title: "Movies"
    };
  }
}
</script>

<style>

</style>
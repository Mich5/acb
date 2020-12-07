<template>
  <v-card nuxt :to="`/movies/${movie.id}`" width="300" class="ma-4 movie-card">
    <v-img
      :src="movie.poster"
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="400px"
    >
      <v-card-title v-text="movie.title"></v-card-title>
      <v-card-actions>
        <v-chip class="ma-2" small color="black" v-for="genre in movie.genre" :key="genre"> {{genre}} </v-chip>
      </v-card-actions>
    </v-img>
  </v-card>
</template>

<script>
export default {
  name: "movie-card",
  props: {
    movie: Object,
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
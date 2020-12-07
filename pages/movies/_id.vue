<template>
  <div class="container">
    <v-dialog v-model="dialog" fullscreen hide-overlay>
      <v-card color="black">
        <v-toolbar dark flat color="transparent" fixed style="z-index: 2">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
        </v-toolbar>
        <iframe
          :src="`https://player.vimeo.com/video/${movie.id}`"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
          style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
          "
        ></iframe>
      </v-card>
    </v-dialog>
    <v-card width="100%">
      <v-img
        :src="movie.poster"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="480"
      >
        <v-row>
          <v-col cols="12" xs="12" md="6">
            <v-card-title v-text="movie.title"></v-card-title>
            <v-card-text>{{ movie.plot }}</v-card-text>
            <v-card-text>
              <div class="subtitle-1" v-if="movie.genre">
                {{ movie.genre[0] }} {{ movie.rated }}, {{ movie.year }} •
                {{ movie.production }} ({{ movie.country }})
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn
                class="mx-2 px-3"
                color="white"
                @click="dialog = true"
                rounded
                outlined
                large
              >
                <v-icon left large> mdi-play-circle </v-icon>
                {{ movie.duration }}
              </v-btn>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-img>
    </v-card>

    <h1 class="heading mt-12">Related</h1>
    <movies-grid :movies="items"></movies-grid>
  </div>
</template>

<script>
import { getMovie, allMovies } from "@/services/movies";
import MoviesGrid from "@/components/MoviesGrid";
export default {
  components:{
    MoviesGrid
},
  data: () => ({
    dialog: false,
    movie: {},
    related: [],
    items:[]
  }),
  async created() {
    this.movie = await getMovie(this.$route.params.id)
    this.items = await allMovies()
    console.log(this.movie)
  },
  head() {
    return {
      title: this.movie.title
    };
  }
};
</script>

<style>
</style>
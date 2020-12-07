<template>
  <v-row>
    <v-dialog v-model="dialog" fullscreen hide-overlay>
      <v-card color="black">
        <v-toolbar dark flat color="transparent" fixed style="z-index: 2">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
        </v-toolbar>
        <iframe
          :src="`https://player.vimeo.com/video/${featured.id}`"
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
        :src="featured.poster"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="480"
      >
        <v-row>
          <v-col cols="12" xs="12" md="6">
            <v-card-title v-text="featured.title"></v-card-title>
            <v-card-text>{{ featured.plot }}</v-card-text>
            <v-card-text>
              <div class="subtitle-1" v-if="featured.genre">
                {{ featured.genre[0] }} {{ featured.rated }},
                {{ featured.year }} • {{ featured.production }} ({{
                  featured.country
                }})
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
                {{ featured.duration }}
              </v-btn>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-img>
    </v-card>

    <h1 class="heading mt-12">Latest Movies</h1>
    <movies-list v-if="!$vuetify.breakpoint.mobile" :movies="movies"></movies-list>
    <movies-grid  v-if="$vuetify.breakpoint.mobile" :movies="movies"></movies-grid  v-if="$vuetify.breakpoint.mobile">

    <h1 class="heading mt-12">Popular Movies</h1>
    <movies-list v-if="!$vuetify.breakpoint.mobile" :movies="movies"></movies-list>
    <movies-grid  v-if="$vuetify.breakpoint.mobile" :movies="movies"></movies-grid  v-if="$vuetify.breakpoint.mobile">

    <h1 class="heading mt-12">Popular Series</h1>
    <movies-list v-if="!$vuetify.breakpoint.mobile" :movies="movies"></movies-list>
    <movies-grid  v-if="$vuetify.breakpoint.mobile" :movies="movies"></movies-grid  v-if="$vuetify.breakpoint.mobile">
  </v-row>
</template>

<script>
import { featured, allMovies } from "@/services/movies";
import MoviesList from "@/components/MoviesList";
import MoviesGrid from "@/components/MoviesGrid";
export default {
  components: {
    MoviesList,
    MoviesGrid
  },
  data: () => ({
    dialog: false,
    featured: {},
    movies: [],
  }),
  async beforeMount() {
    this.featured = await featured();
    this.movies = await allMovies();
  },
  head() {
    return {
      title: "Home",
    };
  },
};
</script>

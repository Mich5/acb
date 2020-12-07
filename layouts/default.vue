<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      app
      color="black"
    >
    <v-row align="center">
      <v-col>
      <v-list shaped>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          link
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      </v-col>
    </v-row>

    </v-navigation-drawer>
    <v-app-bar color="black" fixed flat clipped-left app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />

      <v-spacer />
      <!-- <v-btn class="ml-5" icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-account-circle</v-icon>
      </v-btn> -->
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer color="black">
      <center class="mx-auto">
        <span>&copy; African Choice Box • {{ new Date().getFullYear() }}</span>
      </center>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        {
          icon: "mdi-home-roof",
          title: "Home",
          to: "/",
        },
        {
          icon: "mdi-movie-roll",
          title: "Movies",
          to: "/movies",
        },
        {
          icon: "mdi-filmstrip",
          title: "Series",
          to: "/series",
        },
        {
          icon: "mdi-music-clef-treble",
          title: "Music",
          to: "/music",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "African Choice Box",
    };
  },
  computed: {
    currentPage(path) {
      return this.$route.path;
    },
  },
  created() {
    console.log(this.$route.path);
  },
};
</script>

<style scoped>
main {
  background-color: black;
}

.nuxt-link-active {
  border-bottom: 1px solid white;
}
</style>
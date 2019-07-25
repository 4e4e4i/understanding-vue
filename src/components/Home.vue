<template>
  <div>
    <v-container fluid>
      <v-layout row>
        <v-flex xs12>
          <v-carousel>
            <v-carousel-item
              v-for="ad in promoAds"
              :key="ad.id"
              :src="ad.imageSrc"
            >
              <div class="carousel-link">
                <v-btn
                  class="error"
                  :to="'/ad/' + ad.id"
                >
                  {{ ad.title }}
                </v-btn>
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container grid-list-lg>
      <v-layout
        row
        wrap
      >
        <v-flex
          v-for="ad in ads"
          :key="ad.id"
          xs12
          sm6
          md4
        >
          <v-card
            max-width="344"
            class="mx-auto"
          >
            <v-img
              height="200px"
              :src="ad.imageSrc"
            />
            <v-card-title>
              {{ ad.title }}
            </v-card-title>
            <v-card-text>
              {{ ad.description }}
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn
                text
                :to="'/ad/' + ad.id"
              >
                Open
              </v-btn>
              <v-btn
                raised
                class="primary"
              >
                Buy
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    promoAds () {
      return this.$store.getters.promoAds
    },
    ads () {
      return this.$store.getters.ads
    }
  }
}
</script>

<style scoped>
  .carousel-link {
    position: absolute;
    bottom: 50px;
    left: 50%;
    background: rgba(0, 0, 0, .3);
    transform: translateX(-50%);

    padding: 5px 15px;
    border-radius: 5px 5px 0 0;
  }
</style>

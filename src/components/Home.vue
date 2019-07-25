<template>
  <div v-if="!loading">
    <v-container fluid>
      <v-layout row>
        <v-flex xs12>
          <v-carousel v-if="promoAds.length > 0">
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
              <app-buy-modal :ad="ad" />
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
  <div v-else>
    <v-container>
      <v-layout row>
        <v-flex
          xs12
          class="text-center pt-10"
        >
          <v-progress-circular
            :size="70"
            :width="7"
            color="blue"
            indeterminate
          />
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
    },
    loading () {
      return this.$store.getters.loading
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

<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-card>
          <v-img
            :src="ad.imageSrc"
            height="300"
          />
          <v-card-text>
            <h1 class="text--primary mb-3">
              {{ ad.title }}
            </h1>
            <p>
              {{ ad.description }}
            </p>
          </v-card-text>
          <v-card-actions>
            <v-btn class="warning">
              Edit
            </v-btn>
            <v-btn class="success">
              Buy
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: ''
    }
  },
  computed: {
    ad () {
      const id = this.id
      return this.$store.getters.adById(id)
    }
  }
}
</script>

<style scoped>

</style>

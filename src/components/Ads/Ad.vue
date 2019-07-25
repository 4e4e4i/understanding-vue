<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-card v-if="!loading">
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
            <v-spacer />
            <add-edit-modal
              v-if="isOwner"
              :ad="ad"
            />
            <app-buy-modal :ad="ad" />
          </v-card-actions>
        </v-card>
        <div
          v-else
          class="text-center pt-10"
        >
          <v-progress-circular
            :size="70"
            :width="7"
            color="blue"
            indeterminate
          />
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import EdditModal from './EditAdModal'

export default {
  components: {
    addEditModal: EdditModal
  },
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
    },
    loading () {
      return this.$store.getters.loading
    },
    isOwner () {
      return this.ad.ownerId === this.$store.getters.user.id
    }
  }
}
</script>

<style scoped>

</style>

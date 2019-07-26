<template>
  <v-container>
    <v-layout
      v-if="!loading"
      row
    >
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
            <v-spacer />
            <add-edit-modal
              v-if="isOwner"
              :ad="ad"
            />
            <app-buy-modal :ad="ad" />
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
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
  </v-container>
</template>

<script>
import EditModal from './EditAdModal'

export default {
  components: {
    addEditModal: EditModal
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
      if (this.$store.getters.user) {
        return this.ad.ownerId === this.$store.getters.user.id
      } else {
        return false
      }
    }
  }
}
</script>

<style scoped>

</style>

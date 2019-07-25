<template>
  <v-dialog
    v-model="modal"
    width="400px"
  >
    <template v-slot:activator="{ on }">
      <v-btn
        class="primary"
        v-on="on"
      >
        Buy
      </v-btn>
    </template>

    <v-card>
      <v-container>
        <v-layout row>
          <v-flex xs12>
            <v-card-title>
              <h2 class="text--primary">
                Do you want to buy it?
              </h2>
            </v-card-title>
          </v-flex>
        </v-layout>
        <v-divider />
        <v-layout row>
          <v-flex xs12>
            <v-card-text>
              <v-text-field
                v-model="name"
                label="Your name"
                name="name"
                type="text"
              />
              <v-text-field
                v-model="phone"
                label="Your phone"
                name="Phone"
                type="text"
              />
            </v-card-text>
          </v-flex>
        </v-layout>
        <v-divider />
        <v-layout row>
          <v-flex xs12>
            <v-card-actions>
              <v-spacer />
              <v-btn
                text
                :disabled="localLoading"
                @click="onCancel"
              >
                Close
              </v-btn>
              <v-btn
                text
                :disabled="localLoading"
                :loading="localLoading"
                class="success"
                @click="onSave"
              >
                Buy it!
              </v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    ad: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      modal: false,
      name: '',
      phone: '',
      localLoading: false
    }
  },
  methods: {
    onCancel () {
      this.name = ''
      this.phone = ''
      this.modal = false
    },

    onSave () {
      if (this.name !== '' && this.phone !== '') {
        this.localLoading = true
        this.$store.dispatch('createOrder', {
          name: this.name,
          phone: this.phone,
          adId: this.ad.id,
          ownerId: this.ad.ownerId
        })
          .finally(() => {
            this.modal = false
            this.name = ''
            this.phone = ''
            this.localLoading = false
          })
      }
    }
  }
}
</script>

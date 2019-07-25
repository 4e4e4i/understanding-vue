<template>
  <v-container>
    <v-layout row>
      <v-flex
        xs12
        sm6
        offset-sm-3
      >
        <h1 class="text--secondary mb-3">
          Create new ad
        </h1>
        <v-form
          ref="form"
          v-model="valid"
          validation
          class="mb-3"
        >
          <v-text-field
            v-model="title"
            label="Ad title"
            name="title"
            type="text"
            required
            :rules="[v => !!v || 'Title is required']"
          />

          <v-textarea
            v-model="description"
            label="Ad description"
            name="description"
            required
            :rules="[v => !!v || 'Description is required']"
          />
        </v-form>

        <v-container>
          <v-layout
            row
            class="mb-3"
          >
            <v-flex xs12>
              <v-btn
                class="warning"
              >
                Upload
                <v-icon
                  right
                  dark
                >
                  cloud_upload
                </v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12>
              <img
                src=""
                height="100"
                alt=""
              >
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12>
              <v-switch
                v-model="promo"
                color="primary"
                label="Add to promo?"
              />
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12>
              <v-spacer />
              <v-btn
                :disabled="!valid"
                class="success"
                @click="createAd"
              >
                Create ad
              </v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      description: '',
      promo: false,
      valid: false
    }
  },
  methods: {
    createAd () {
      if (this.$refs.form.validate()) {
        const ad = {
          title: this.title,
          description: this.description,
          promo: this.promo,
          imageSrc: 'https://miro.medium.com/max/700/1*oZqGznbYXJfBlvGp5gQlYQ.jpeg'
        }

        this.$store.dispatch('createAd', ad)
      }
    }
  }
}
</script>

<style scoped>

</style>

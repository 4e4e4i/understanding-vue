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
                @click="triggerUpload"
              >
                Upload
                <v-icon
                  right
                  dark
                >
                  cloud_upload
                </v-icon>
              </v-btn>
              <input
                ref="fileInput"
                type="file"
                style="display: none"
                accept="image/*"
                @change="onFileChange"
              >
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12>
              <img
                v-if="imageSrc"
                :src="imageSrc"
                height="100"
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
                :loading="loading"
                :disabled="!valid || !image || loading"
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
      valid: false,
      image: null,
      imageSrc: ''
    }
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  },
  methods: {
    createAd () {
      if (this.$refs.form.validate() && this.image) {
        const ad = {
          title: this.title,
          description: this.description,
          promo: this.promo,
          image: this.image
        }

        this.$store.dispatch('createAd', ad)
          .then(() => {
            this.$router.push('/list')
          })
          .catch(() => {})
      }
    },
    triggerUpload () {
      this.$refs.fileInput.click()
    },
    onFileChange (event) {
      const file = event.target.files[0]

      const reader = new FileReader()
      reader.onload = e => {
        this.imageSrc = reader.result
      }
      reader.readAsDataURL(file)
      this.image = file
    }
  }
}
</script>

<style scoped>

</style>

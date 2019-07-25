<template>
  <v-container>
    <v-layout row>
      <v-flex
        v-if="loading"
        xs12
        class="text-center pt-5"
      >
        <v-progress-circular
          :size="70"
          :width="7"
          color="blue"
          indeterminate
        />
      </v-flex>
      <v-flex
        v-else-if="!loading && orders.length !== 0"
        xs12
        sm6
        offset-sm-3
      >
        <h1 class="text--secondary mb-3">
          Orders
        </h1>
        <v-list
          subheader
          two-line
          flat
        >
          <v-list-item-group>
            <v-list-item
              v-for="order in orders"
              :key="order.id"
            >
              <v-list-item-action>
                <v-checkbox
                  color="success"
                  :input-value="order.done"
                  @change="markDone(order)"
                />
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>
                  {{ order.name }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ order.phone }}
                </v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-btn
                  :to="'/ad/' + order.adId"
                  class="primary"
                >
                  Open
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-flex>
      <v-flex
        v-else
        xs12
        class="text-center"
      >
        <h1
          class="text--secondary"
        >
          You have no orders
        </h1>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    loading () {
      return this.$store.getters.loading
    },
    orders () {
      return this.$store.getters.orders
    }
  },
  created () {
    this.$store.dispatch('fetchOrders')
  },
  methods: {
    markDone (order) {
      this.$store.dispatch('markOrderDone', order.id)
        .then(() => {
          order.done = true
        })
        .catch(() => {})
    }
  }
}
</script>

<style scoped>

</style>

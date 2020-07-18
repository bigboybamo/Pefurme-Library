<template>
    <div>
        <h1> Popular Female Fragrances</h1>
         <b-table striped hover :items="Women">
      <template v-slot:cell(name)="data">
        <router-link :to="`/perfumes/women/${data.index}`">{{ data.value }}
        </router-link>
      </template>
         </b-table>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'Women'
    ])
  }
}
</script>

<template>
    <div>
        <h1> Popular Male Fragrances</h1>
         <b-table striped hover :items="Men">
            <template v-slot:cell(name)="data">
        <router-link :to="`/perfumes/men/${data.index}`">
        {{ data.value }}
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
      'Men'
    ])
  }
}
</Script>

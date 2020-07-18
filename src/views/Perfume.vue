<template>
    <div>
  {{ Perfume().name }}

    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      gender: {}
    }
  },
  computed: {
    ...mapState([
      'Women',
      'Men'
    ])
  },
  methods: {
    Perfume () {
      const gender = this[this.$route.params.gender][this.$route.params.id]
      return gender
    }
  }
}

</script>

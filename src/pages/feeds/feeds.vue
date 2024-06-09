<template>
    <div class="x-container">
      <ul class="list">
        <li class="item" v-for="item in items" :key="item.id">
          <feed
            :feed="getFeedData(item)"
            dark
          />
        </li>
      </ul>
    </div>
</template>

<script>
import * as api from '../../api'
import { feed } from '../../components/feed'

export default {
  name: 'Feeds',
  components: { feed },
  data () {
    return {
      items: []
    }
  },
  methods: {
    getFeedData (item) {
      return {
        title: item.name,
        description: item.description,
        username: item.owner.login,
        stars: item.stargazers_count
      }
    }
  },
  async created () {
    try {
      const { data } = await api.trandings.getTrendings()
      this.items = data.items
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style lang="scss" scoped src="./feeds.scss"></style>

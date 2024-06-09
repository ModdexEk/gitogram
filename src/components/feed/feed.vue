<template>
    <div class="c-feed" :class="{dark}">
        <h1>title: {{ feed.title }}</h1>
        <h2>owner: {{ feed.username }}</h2>
        <h3>stars: {{ feed.stars }}</h3>
        <p v-if="feed.description">description: {{ feed.description }}</p>
    </div>
</template>

<script>
export default {
  name: 'Feed',
  props: {
    feed: Object,
    dark: Boolean
  }
}
</script>

<style lang="scss" scoped src="./feed.scss"></style>

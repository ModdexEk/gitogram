<template>
    <div class="topline">
        <topline>
            <template #headline>
                <div class="header">
                    <div class="logo"><img src="../../assets/logo.png" alt="" class="logo"></div>
                    <div class="icon">
                    <icon name="home" />
                    <icon name="photo" />
                    <icon name="exit" />
                    </div>
                </div>
            </template>
            <template #content>
                <ul class="stories">
                    <li class="stories-item" v-for="story in stories" :key="story.id">
                        <storyUseritem
                          :avatar="story.avatar"
                          :username="story.username"
                          @onPress="handlePress(story.id)"
                        />
                    </li>
                </ul>
            </template>
        </topline>
    </div>
    <div class="c-feed">
        <post />
        <toggler @onToggle="toogle" />
        <div class="comments" v-if="shown">
            <ul class="comments-list">
                <li class="comments-item" v-for="n in 5" :key="n">
                    <comment text="Some text" username="John Doe"/>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { topline } from '../../components/topline'
import { icon } from '../../icons'
import { storyUseritem } from '../../components/storyUseritem'
import { post } from '../../components/post'
import { comment } from '../../components/comment'
import { toggler } from '../../components/toggler'
import stories from './data.json'
export default {
  name: 'feeds',
  components: {
    topline,
    icon,
    storyUseritem,
    post,
    comment,
    toggler
  },
  data () {
    return {
      stories,
      shown: false
    }
  },
  methods: {
    toogle (isOpened) {
      this.shown = isOpened
    }
  }
}
</script>

<style lang="scss" scoped src="./feeds.scss"></style>

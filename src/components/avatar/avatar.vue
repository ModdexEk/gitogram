<template>
    <div class="avatar">
        <div class="avatar__logo">
            <img :src="avatarUrl" alt="" class="avatar__logo-img" />
        </div>
        <div class="avatar__text">
            <p>{{ nickname }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "avatar",
    props: {
        avatarUrl: String,
        nickname: String,
    },
};
</script>

<style lang="scss" scoped src="./avatar.scss"></style>
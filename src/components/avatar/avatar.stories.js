import avatar from "./avatar.vue";

export default {
    title: 'Avatar',
    components: { avatar }
}

export const defaultView = () => ({
    components: { avatar },
    template: `
     <avatar :avatarUrl="'https://loremflickr.com/300/300'" :nickname="'John Doe'">
    `
})
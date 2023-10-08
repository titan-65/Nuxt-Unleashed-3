<script setup lang="ts">
const props = defineProps<{
  onClick: (action: "follow" | "unfollow") => void;
  following: boolean;
}>();

const followUser = () => {
  props.onClick("follow");
}

const unfollowUser = () => {
  props.onClick("unfollow");
}
</script>
<template>
  <div>
    <button v-if="props.following" @click="unfollowUser">Unfollow</button>
    <button v-else class="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80" @click="followUser">
    Follow
</button>
  </div>
</template>
<template>
  <div class="home"></div>

  <div class="mt-6" v-if="user">{{ user.email }}</div>
  
</template>

<script>


import { useUser } from "@/composables/useUser";
export default {
  setup() {
    const { getUser } = useUser();
    const { user } = getUser();

    console.log(user);
    return { user };
  },
};
</script>

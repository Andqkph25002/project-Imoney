<template>
  <div class="mt-10">
    <div class="container mx-auto px-8">
      <!-- Start : Form -->
      <form
        @submit.prevent="onSubmit"
        class="flex flex-col justify-start space-y-6"
      >
        <div class="row">
          <label class="flex flex-col" for="email">
            <span class="font-semibold">Email Address</span>

            <input
              id="email"
              type="text"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              placeholder="example@gmail.com"
              autocomplete="current-password"
              v-model="email"
            />
          </label>
        </div>
        <div class="row">
          <label class="flex flex-col" for="password">
            <span class="font-semibold">Password</span>
            <input
              id="password"
              type="password"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              placeholder="Example"
              autocomplete="current-password"
              v-model="password"
            />
          </label>
        </div>

        <div class="row" v-if="!isPending">
          <button
            class="py-3 text-center w-full bg-blue-600 text-white font-bold rounded-lg"
            type="submit"
          >
            Sign In
          </button>
        </div>
        <div class="row" v-else>
          <button
            class="py-3 text-center w-full bg-gray-800 text-white font-bold rounded-lg cursor-not-allowed"
            type="button"
            disabled
          >
            Loading...
          </button>
        </div>
      </form>
      <!-- Start : Derection -->

      <!-- Start : Error -->
      <div v-if="error" class="text-left text-red-500 mt-6">
        {{ error }}
      </div>
      <!-- Start :Derection  -->

      <div class="w-full text-center mt-6">
        <span class="font-semibold">I'm a new user.</span>
        <span class="ml-1">
          <router-link
            :to="{ name: 'Register', params: {} }"
            class="text-blue-600 font-bold"
            >Sign Up</router-link
          >
        </span>
      </div>
    </div>
  </div>
</template>
  
  
  <script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useIsLogin } from "@/composables/useSignIn";
export default {
  setup() {
    const { error, isPending, signIn } = useIsLogin();
    const email = ref("");
    const password = ref("");
    const router = useRouter();
    async function onSubmit() {
      await signIn(email.value, password.value);
      if (!error.value) {
        router.push({ name: "Profile", params: {} });
      }
    }
    return { email, password, error, isPending, onSubmit };
  },
};
</script>

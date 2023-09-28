<template>
  <div class="mt-10">
    <div class="container mx-auto px-8">
      <!-- Start : Form -->
      <form
        @submit.prevent="onSubmit"
        class="flex flex-col justify-start space-y-6"
      >
        <div class="row">
          <label class="flex flex-col" for="fullname">
            <span class="font-semibold">Fullname</span>

            <input
              id="fullname"
              type="text"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              placeholder="iMonet..."
              v-model="fullname"
            />
          </label>
        </div>
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
            Register
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
        <span class="font-semibold">I'm already a member.</span>
        <span class="ml-1">
          <router-link
            :to="{ name: 'Login', params: {} }"
            class="text-blue-600 font-bold"
            >Sign In</router-link
          >
        </span>
      </div>
    </div>
  </div>
</template>


<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useSignUp } from "@/composables/useSignUp";
export default {
  setup() {
    const { error, isPending, signUp } = useSignUp();
    const router = useRouter();
    const fullname = ref("");
    const email = ref("");
    const password = ref("");

    async function onSubmit() {
      await signUp(email.value, password.value, fullname.value);
      if (!error.value) {
        router.push({ name: "Profile", params: {} });
      }
    }
    return { fullname, email, password, error, isPending, onSubmit };
  },
};
</script>

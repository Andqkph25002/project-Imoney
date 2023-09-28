<template>
  <!-- Start : Info -->

  <div class="row" v-if="user">
    <div class="container mx-auto p-8">
      <div class="text-center">
        <div class="w-24 h-24 rounded-full overflow-hidden mx-auto">
          <img
            src="https://top10tphcm.com/wp-content/uploads/2023/02/hinh-anh-doremon-cute-ngau-dep-nhat-2-1.jpg"
            class="w-full h-auto object-cover"
            alt="Users Profile Avatar"
          />
        </div>

        <div class="font-bold text-2xl text-blue-600 mt-3">
          {{ user.displayName }}
        </div>
        <p class="font-semibold text-gray-400 mt-1">{{ user.email }}</p>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="container mx-auto px-8">
      <div class="grid grid-cols-1">
        <div class="col-span-1">
          <h3 class="font-bold text-xl text-blue-500 mb-2">Ganeral</h3>
        </div>
      </div>

      <div class="grid grid-cols-1">
        <div class="col-span-1">
          <ul class="text-blac">
            <li
              class="last:text-red-500"
              v-for="profileOption in profileOptions"
              :key="profileOption.name"
            >
              <router-link
                :to="profileOption.route"
                class="flex justify-between items-center py-3"
              >
                <div class="flex items-center text-left">
                  <i class="t2ico text-2xl" :class="profileOption.icon"></i>
                  <h5 class="font-semiblod ml-3">{{ profileOption.name }}</h5>
                </div>
                <div class="text-right">
                  <i class="t2ico t2ico-arrow-right"></i>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <!-- Start : Menu -->
</template>

<script>
import { reactive } from "vue";
import { PROFILE_OPTIONS } from "@/constants/index";
import { useUser } from "@/composables/useUser";
export default {
  setup() {
    const profileOptions = reactive(PROFILE_OPTIONS);
    const { getUser } = useUser();
    const { user } = getUser();
    return { profileOptions, user };
  },
};
</script>
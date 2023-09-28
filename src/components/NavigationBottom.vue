<template>
  <footer
    id="footer"
    class="fixed w-full bottom-0 left-0 bg-slate-100 pt-4 p-b-saft-4"
  >
    <div class="container mx-auto px-8 h-full">
      <ul class="flex justify-between h-full items-center">
        <li v-for="navItem in navItems" :key="navItem.name">
          <router-link :to="{ name: navItem.name, params: {} }">
            <i class="t2ico text-2xl" :class="navItem.icon"></i>
          </router-link>
        </li>
      </ul>
    </div>

    <div
      data-circle
      class="absolute top-0 left-1/2 transform translate-x-1/2 text-white"
    >
      <div @click="goToRoute"
        class="absolute flex items-center justify-center bg-blue-700 text-white w-12 h-12 rounded-full cursor-pointer -top-6 left-1/2 transform translate-x-1/2"
      >
        <i  class="t2ico t2ico-plus text-white"></i>
      </div>
    </div>
  </footer>
</template>

<script>
import { reactive } from "vue";
import { NAV_BOTTOM_ITEMS } from "@/constants";
import { useRouter } from 'vue-router';
export default {
  setup() {
    const router = useRouter();
    const navItems = reactive(NAV_BOTTOM_ITEMS);
      function goToRoute(){
           router.push({name : "NewTransaction" , params : {}})
      }

    return { navItems , goToRoute };
  },
};
</script>


<style scoped>
footer#footer > div[data-circle],
footer#footer > div[data-circle] > div {
  left: 50%;
  pointer-events: all;
  transform: translateX(-50%);
}
footer#footer::before {
  position: absolute;
  content: "";
  width: 60px;
  height: 30px;
  border-bottom-right-radius: 60px;
  border-bottom-left-radius: 60px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
footer#footer::after {
  position: absolute;
  /* top: -1.5rem; */
  /* left: 44%; */
  /* border-radius: 9999px;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  /* cursor: pointer; */
  /* background: rgb(30 64 175); */
  /* width: 3rem;
  height: 3rem; */
  /* color: white; */

  font-family: "t2ico";
}
</style>
<template>
  <form @submit.prevent="onSubMit">
    <!-- Start : Main Form -->
    <div class="row mt-8">
      <div class="bg-white rounded-lg py-4">
        <div class="container mx-auto px-8">
          <div class="row">
            <label for="total" class="flex items-end">
              <div class="w-10 text-right leading-10 mr-4 pb-1">
                <span
                  class="inline-block px-1 text-dark border border-dark rounded text-sm font-bold"
                  >USD</span
                >
              </div>
              <div class="flex flex-col border-b border-gray-100 pb-1">
                <span class="font-semiblod test-xs text-dark">Total</span>
                <input
                  v-model="total"
                  id="total"
                  type="text"
                  class="text-4xl text-dark w-full outline-none mt-1"
                  placeholder="0"
                />
              </div>
            </label>
          </div>

          <div class="row">
            <label for="category" class="flex items-center">
              <div class="flex items-center w-10 text-right leading-10 mr-4">
                <span
                  class="inline-block ml-auto w-8 h-8 rounded-full bg-blue-300"
                ></span>
              </div>
              <div class="flex-1 border-b border-gray-100 py-3">
                <input
                  v-model="category"
                  id="category"
                  type="text"
                  class="text-xl text-dark w-full outline-none"
                  placeholder="Select a category"
                />
              </div>
            </label>
          </div>

          <div class="row">
            <label for="note" class="flex items-center">
              <div class="flex items-center w-10 text-right leading-10 mr-4">
                <span class="flex-none w-10 mr-4"
                  ><i class="t2ico t2ico-document text-2xl"></i
                ></span>
              </div>
              <div class="flex-1 border-b border-gray-100 py-3">
                <input
                  v-model="note"
                  id="note"
                  type="text"
                  class="text-dark w-full outline-none"
                  placeholder="Note"
                />
              </div>
            </label>
          </div>

          <div class="row">
            <label for="time" class="flex items-center">
              <div class="flex-none w-10 mr-4">
                <span class="flex items-center justify-end text-dark"
                  ><i class="t2ico t2ico-calendar text-2xl"></i
                ></span>
              </div>
              <div class="flex-1 py-2 border-gray-100">
                <div class="text-dark w-full">{{ new Date() }}</div>
              </div>
            </label>
          </div>

          <div class="row">
            <label for="wallet" class="flex items-center">
              <div class="flex-none w-10 mr-4">
                <span class="flex items-center justify-end text-dark"
                  ><i class="t2ico t2ico-wallet text-2xl"></i
                ></span>
              </div>
              <div class="flex-1 py-2">
                <div class="text-dark w-full">My Wallet</div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-8" v-if="!isMoreDetails">
      <button
        @click="isMoreDetails = true"
        class="bg-white rounded-lg py-8 w-full text-blue-500 font-semibold"
      >
        More Details
      </button>
    </div>

    <!-- Start : Advented Form -->

    <template v-if="isMoreDetails">
      <div class="row mt-8">
        <div class="bg-white rounded-lg py-4">
          <div class="container mx-auto px-8">
            <div class="row">
              <label for="location" class="flex items-center">
                <div class="flex items-center w-10 text-right leading-10 mr-4">
                  <span class="flex-none w-10 mr-4"
                    ><i class="t2ico t2ico-location text-2xl"></i
                  ></span>
                </div>
                <div class="flex-1 border-b border-gray-100 py-3">
                  <input
                    id="location"
                    type="text"
                    class="text-dark w-full outline-none"
                    placeholder="Select a location"
                  />
                </div>
              </label>
            </div>

            <div class="row">
              <label for="withPerson" class="flex items-center">
                <div class="flex items-center w-10 text-right leading-10 mr-4">
                  <span class="flex-none w-10 mr-4"
                    ><i class="t2ico t2ico-users text-2xl"></i
                  ></span>
                </div>
                <div class="flex-1 border-b border-gray-100 py-3">
                  <input
                    id="withPerson"
                    type="text"
                    class="text-dark w-full outline-none"
                    placeholder="With person"
                  />
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>

      <!-- Start : Upload photo -->
      <div class="row mt-8">
        <div class="bg-white rounded-lg py-4">
          <div class="container mx-auto px-8">
            <div class="row">
              <label for="file" class="flex items-center text-blue-500">
                <div class="flex items-center w-10 text-right leading-10 mr-4">
                  <span class="flex items-center justify-end"
                    ><i
                      class="t2ico t2ico-camera text-2xl font-semibold text-blue-500"
                    ></i
                  ></span>
                </div>
                <div class="flex-1 border-b border-gray-100 py-3">
                  <div class="w-full">Upload Photo</div>
                  <input
                    type="file"
                    id="file"
                    class="w-0 h-0 overflow-hidden absolute"
                    @change="onChangeFile"
                  />
                </div>
              </label>
            </div>
          </div>
        </div>
        <div class="text-red-500 m-2">
          {{ error_file }}
        </div>
      </div>
    </template>

    <button type="submit" class="bg-blue-700 text-black">
      Thực hiện giao dịch
    </button>
  </form>
</template>
   



<script>
import { ref } from "vue";
import { useUser } from "@/composables/useUser";
import useCollection from "@/composables/useCollection";
import useStorage from "@/composables/useStorage";
export default {
  setup() {
    const isMoreDetails = ref(false);

    function toggleMoreDetails() {
      isMoreDetails.value = !isMoreDetails.value;
    }

    const { error, addRecord } = useCollection("transactions");

    const total = ref(0);
    const category = ref("");
    const note = ref("");
    const createdAt = ref(new Date());
    const { getUser } = useUser();
    const { uploadFile } = useStorage("transactions");

    function onChangeFile(event) {
      const selected = event.target.files[0];
      const typesFile = ["image/png", "image/jpg", "image/jpeg"];
      if (selected && typesFile.includes(selected.type)) {
        file.value = selected;
      } else {
        file.value = null;
        error_file.value = "Plese select a file type png , jpg or jpeg";
      }
    }
    async function onSubMit() {
      if(file.value) await uploadFile(file.value);
      const { user } = getUser();
      const transaction = {
        total: parseInt(total.value),
        category: category.value,
        note: note.value,
        createdAt: createdAt.value,
        userId: user.value.uid,
      };
      await addRecord(transaction);
      console.log(error);
      console.log("Created");
    }

    const file = ref(null);
    const error_file = ref(null);

    return {
      onSubMit,
      isMoreDetails,
      toggleMoreDetails,
      total,
      category,
      note,
      createdAt,
      onChangeFile,
      error_file,
    };
  },
};
</script>
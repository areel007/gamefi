<script setup>
import UpcomingCard from "../components/UpcomingCard.vue";

components: {
  UpcomingCard;
}
</script>

<template>
  <section class="w-full bg-color-3 py-20">
    <div class="w-11/12 mx-auto">
      <div class="bg-color-1 tag !mb-10">
        <h1 class="text-white font-bold text-2xl">UPCOMING IGOS</h1>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <UpcomingCard
          :card-name="'MetaSpets Community'"
          :phase="'01d : 00h : 03m : 24s'"
          image="metaspets-community.png"
        />

        <UpcomingCard
          card-name="MetaSpets IGO"
          phase="00d:22h:48m:24s"
          image="metaspets-community.png"
        />

        <UpcomingCard
          card-name="Legends of Elumia Community"
          phase="00d:22h:48m:24s"
          image="elumia-community.png"
        />

        <UpcomingCard
          card-name="Epic War IGO"
          phase="07d:22h:48m:24s"
          image="epic-war-1.png"
        />

        <UpcomingCard
          card-name="Epic War Community"
          phase="07d:22h:48m:24s"
          image="epic-war-1.png"
        />

        <UpcomingCard
          card-name="Codyfight IGO"
          phase="07d:22h:48m:24s"
          image="cody.png"
        />

        <UpcomingCard
          card-name="Codyfight Community"
          phase="07d:22h:48m:24s"
          image="cody.png"
        />

        <UpcomingCard
          card-name="Oceanland IGO"
          phase="07d:22h:48m:24s"
          image="ocean-land-1.png"
        />

        <UpcomingCard
          card-name="Oceanland Community"
          phase="07d:22h:48m:24s"
          image="ocean-land-1.png"
        />

        <UpcomingCard
          card-name="Xana IGO"
          phase="07d:22h:48m:24s"
          image="xana-igo.png"
        />

        <UpcomingCard
          card-name="Xana Community"
          phase="07d:22h:48m:24s"
          image="xana-igo.png"
        />

        <!-- End -->
      </div>
    </div>
  </section>
</template>

<style scoped>
.tag {
  width: min-content;
  margin: 0 auto;
  padding: 20px;
}
h1 {
  white-space: nowrap;
}
</style>

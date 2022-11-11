<template>
  <div class="about">
    <h1>This is an about page</h1>
    <KossieCoder>
      <template #header="{ kossie }"> <!-- v-slot 대신에 #으로 대체 가능 -->
        <p>header slot context {{ kossie }}</p> <!-- KossieCoder 에서 아래로 내려줌 -->
      </template>
      <template v-slot:default>
        hello1
      </template>
    </KossieCoder>
  </div>
</template>

<script>
import KossieCoder from '@/components/KossieCoder.vue';
export default {
  components: {
    KossieCoder
  },
  // data() {
  //   return {
  //     title: "5"
  //   }
  // }
}
</script>
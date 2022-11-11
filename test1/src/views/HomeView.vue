<template> <!-- html code -->
  <div>
    <h1>This is Home page</h1>
    <KossieCoder title="home title" name="Home name"></KossieCoder>
  </div>
</template>

<script>
import KossieCoder from '@/components/KossieCoder.vue';
export default { // data, methods, computed ....
  components: { // 컴포넌트 등록
    KossieCoder
  },
  data() {
    return {
      name: 'Kossie Coder'
    }
  },
  methods: {

  }
}
</script>

<!-- style에 scoped를 넣어줘야 전역으로 설정안됨 -->
<style scoped>
  h1 {
    color: red;
  }
</style>
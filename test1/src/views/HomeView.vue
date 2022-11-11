<template> <!-- html code -->
  <div>
    <h1>This is Home page</h1>
    <form action="">
      <!-- <InputField :name="name" @update-name="name = $event.target.value" /> -->
      <InputField v-model="name" /> <!-- v-model은 value로 양방향 binding해주는 옵션 >> value로 props, emit하는 방법 -->
      <button>Submit</button>
    </form>
    실시간으로 자식 컴포넌트에서 <br>값을 올려받는 부모의 name : <br>{{ name }}
  </div>
</template>

<script>
import InputField from '@/components/InputField.vue';
export default { // data, methods, computed ....
  components: {
    InputField
  },
  data() {
    return {
      name: ''
    }
  },
  // methods: {
  //   updateName(name) {
  //     this.name = name; // 자식에서 올려받은 것을 넣어줌
  //   }
  // }
}
</script>

<!-- style에 scoped를 넣어줘야 전역으로 설정안됨 -->
<style scoped>
  h1 {
    color: red;
  }
</style>
<template> <!-- html code -->
  <div>
    <h1>This is Home page</h1>
    <InputField v-model="name" /> <!-- v-model은 value로 양방향 binding해주는 옵션 >> value로 props, emit하는 방법 -->
    <button @click="updateName">Submit</button>
    {{ name }}
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
      name: 'Kossie Coder'
    }
  },
  beforeCreate() {
    console.log('beforeCreate',this.name) // data 접근 불가
  },
  created() {
    console.log('created',this.name) // data 접근 가능
  },
  beforeMount() {
    alert('beforeMount')
  },
  mounted() {
    alert('mounted') // #app에 마운트
  },
  beforeUpdate() { // event 시작 부분 
    alert('beforeUpdate')
  },
  updated() {
    alert('updated')
  },
  beforeDestroy() {
    alert('beforeDestroy')
  },
  destroyed() {
    alert('destroyed')
  },
  methods: {
    updateName() { // form 태그 안에다 버튼을 눌러서 함수를 바인딩시키면 함수 동작 안됨 
      this.name = 'hello~~';
    }
  }
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
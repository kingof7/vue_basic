<template>
    <div>
        <h1>{{ title }}</h1>
        <p>{{ name }}</p>
        <button @click="updateName">Change Name</button>
    </div>
</template>

<script>
export default { // data, methods, computed ....
    //props: ['title'], //title을 받아와서 위에 h1 > {{ title }}에 바인딩 (title 속성 값을 받을 것이다 from AboutView.vue, HomeView.vue (부모태그니까) 한테서 ) >> 3번라인 {{ title }} 에 표시
    props: { // 부모태그에서 속성값을 받아오는 것
        title: {
            type: String, //type 설정 가능 (String, Number, Object ..)
            //required: true // 항상 보내줌, 아니면 에러 발생
            //required: false
            default: 'default title' // 부모 태그에서 속성 값 못받으면 기본적으로 셋팅해주는 값
        },
        name: {
            type: String,
            default: 'default name'
        }
    },
    data() {
        return {
            //name: 'Kossie Coder', > props 속성이름과 중복되면 안되서 주석처리
        }
    },    
    methods: {
        updateName() {
            this.name = 'Kossie Coder Updated'; // props로 지정한 값은 임의로 바꾸면 warning이 뜸 >> 항상 부모태그에서 바꿔야함 (AboutView, HomeView.vue) >> 부모로 이벤트를 보내서 부모가 직접 바꿔야함
        }
    }
}
</script>

<style scoped>

</style>
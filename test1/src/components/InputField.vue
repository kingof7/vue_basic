<template>
    <div>
        <label for="">Name</label>
        <!-- <input type="text" v-model="name" style="padding: 30px; border: 2px solid green;"> -->
        <!-- <input 
            type="text" 
            :value="name" 
            style="padding: 30px; border: 2px solid green;"
            @input="$emit('update-name', $event)"
        > -->
        <input 
            type="text" 
            :value="value" 
            style="padding: 30px; border: 2px solid green;"
            @input="$emit('input', $event.target.value)"
        >
    </div>
</template>

<script>
export default {
    props: {
        // name: {
        //     type: String,
        //     required: true
        // }
        value: {
            type: String,
            required: true
        }
    },
    methods: {
        // updateName(e) {
        //     console.log(e.target.value);
        //     this.$emit('update-name', e.target.value); // (이벤트명, 값) 부모로 값 올리기
        // }
    }
}
</script>
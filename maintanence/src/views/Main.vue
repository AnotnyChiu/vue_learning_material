<template>
    <div>
        <input type="text" name="" id="" v-model="userName">
        <br>
        <div v-for="c in colorList" :key="c">
            <input type="radio" :value="c" v-model="currentColor" id=""> <label for="">{{c}}</label>
        </div>

        <input type="text" name="" id="" v-model="freeColor">
        {{freeColor}}
        <h3>current color: {{currentColor}}</h3>
        <h1>
            1. first try: {{message}} 
            <span :style="{'color': currentColor}">{{userName}}</span> !
        </h1>
        <h1>
            2. Name with Free Color Selection
            <br>
            My Color Name : <span :style="{'background-color': freeColor}">{{userName}}</span> 
        </h1>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: "Hello",
                userName: "",
                colorList: ['Red','Blue','Green'],
                currentColor: "",
                freeColor:""
            }
        },
        methods: {
            name() {
                
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
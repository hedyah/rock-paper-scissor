<template>
    <div>
        <img alt="logo" src="https://camo.githubusercontent.com/527a13b5cb37766311fcbc439ce1dee183658768af869dad31fb33d5de191420/68747470733a2f2f696d616765732d6e612e73736c2d696d616765732d616d617a6f6e2e636f6d2f696d616765732f492f3631516b766d764564564c2e706e67">
        <h1>Rock Paper Scissors</h1>
        <h2>Welcome</h2>
        <h3>Sign in</h3>
        <input type="email" name="username" id="username">
        <input type="password" name="password" id="password">
        <button @click="getLogin">Login</button>
    </div>
</template>

<script>
import {useMainStore} from '@/store/main'
import {mapState} from 'pinia'

    export default {
        name: 'GameContainer',
        computed: {
            ...mapState(useMainStore, ['getLogin']),
        },

    }
</script>

<style lang="scss" scoped>
*{
    background-color: rgb(106, 180, 202);
}
input{
    background-color: white;
    margin: 6px;
    width: 25%;
    
}
button{
    color: white;
    background-color: teal;
}
h2{
    color: white;
    font-size: 26px ;
}
h3{
    border: 2px white solid;
    background-color: rgb(1, 30, 53);
    margin: 30px;
    color: white;
}
h1{
    color: white;
    font-family: cursive;
    font-size: 38px;
    font-style: italic;
    border: white 2px solid;
    background-color: teal;
}
img{
    width: 40%;
    border-radius: 55px;
}

</style>
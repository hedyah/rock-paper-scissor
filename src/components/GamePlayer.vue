<template>
    <div>
        <h1>Rock Paper Scissors</h1>
        <img alt="logo" id="logo" src="https://camo.githubusercontent.com/527a13b5cb37766311fcbc439ce1dee183658768af869dad31fb33d5de191420/68747470733a2f2f696d616765732d6e612e73736c2d696d616765732d616d617a6f6e2e636f6d2f696d616765732f492f3631516b766d764564564c2e706e67">
        <div id="scoreboard">
        <h4>Score Board</h4>
        <div id="user">User</div>
        <div id="comp">Comp</div>
        <span>{{userScoreUpdated}}</span>
        :
        <span>{{compScore}}</span>
        </div>
        <h2>Choose to Begin</h2>
        <img @click="()=>{userScore++}" class="imgs" src="https://adiihd.github.io/rock-paper-scissors-game/img/rock.png" alt="">
        
        <img @click="()=>{userScore++}" class="imgs" src="https://adsk3003.github.io/Rock_paper_scissors/img/paper.png" alt="" >
        
        <img  @click="()=>{userScore++}" class="imgs" src="https://adsk3003.github.io/Rock_paper_scissors/img/scissors.png" alt="">
        

    </div>
</template>

<script>
import {useMainStore} from '@/store/main'
import{mapState} from 'pinia'
    export default {
        name:"GamePlayer",
        computed: {
            ...mapState(useMainStore, ['doubleCounter'],['isCounterEven']),

            userScoreUpdated (){
                return this.userScore*3;
            },
            compScore(){
                return this.userScore*2;
            }
        },
        data() {
            return {
                userScore: 0,
                //compScore: 0,

            }
        },
        
    }
</script>

<style lang="scss" scoped>
#logo{
    width: 35%;
    border-radius: 55px;
    
}
#user{
    position: absolute;
    top: 60px;
    left: -25px;
    background-color:rgb(174, 0, 0);
}
#comp{
    position: absolute;
    top: 60px;
    right: -30px;
    background-color:rgb(174, 0, 0);
    
}
#scoreboard{
    margin: 20px auto;
    border: 3px solid white;
    text-align: center;
    width: 220px;
    color: white;
    background-color: rgb(1, 1, 29);
    font-size: 25px;
    padding: 15px 20px;
    position: relative;
    border-radius: 10px;
    span{
        background-color: rgb(1, 1, 29);
        font-size: 36px;
    }
}
h4{
    background-color: rgb(134, 174, 0);
    margin: 7px;
}
.imgs{
    width: 12%;
    margin: 19px;
    background-color: teal;
    border-radius: 50px;
}
h1{
    color: white;
    border: white 2px solid;
    font-family: cursive;
    font-style: italic;
    font-size: 33px;
    background-color: teal;
}
*{
    background-color: rgb(106, 180, 202);
}

</style>
import { defineStore } from "pinia";
import axios from 'axios';
import router from "@/router";
import cookies from 'vue-cookies'

export const useMainStore = defineStore ('main', {
    state: () => {
        return {
            gameResponse: undefined,
            userScore: 0,
            compScore: 0,
        }
    },
    actions: {
        getLogin (){
            axios.request({
                url: "https://reqres.in/api/login",
                method: "POST",
                headers : {
                    'Content-Type' : 'application/json'
                },
                data:{
                    "email": "eve.holt@reqres.in",
                    "password": "cityslicka"
                }
            }).then((response)=>{
                console.log(response);
                cookies.set('session',response.data.token);
                cookies.get('session');
                router.push({path: '/game'})
                
            }).catch((error)=>{
                console.log(error);
            })
        },
        logOut(){
            cookies.remove('session')
        }

        
        

    

    },
    getters:{
        doubleCounter: state => {
            return state.userScore*2;
        },
        isCounterEven : state => {
            if(state.userScore % 2 == 0){
                return true;
            }else{
                return false;
            }
        }
    },
    
})
<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import { defineComponent } from 'vue'
import { useStore } from '@/stores/store';
import { mapStores } from 'pinia'
import type { AnymatchFn } from 'vite';
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { firebase } from "../config/firebase";
import Divider from 'primevue/divider';

export default defineComponent({
    data() {
        return {
            isLogin: false,
            searchText: ""
        };
    },
    methods: {
        signOut(){
            const auth = getAuth();
            signOut(auth).then(() => {
                console.log("Sign-out successful")
                this.isLogin = true;
                window.location.reload()
                // Sign-out successful.
            }).catch((error) => {
            // An error happened.
            });
        }
    },
    components: {
        Button,
        InputText,
        Divider,
    },
    mounted() {
        //console.log(123);
        const auth = getAuth(firebase);
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User  
                const uid = user.uid;
                this.isLogin = true;
                if(user.displayName){
                    ((this.$refs.userName as any).textContent as String | null) = user.displayName; // what is a type of this.$refs.userName
                }
                else{
                    ((this.$refs.userName as any).textContent as String | null) = user.email; // what is a type of this.$refs.userName
                }
                this.mainStore.loginInfo = user;
                console.log(user);
                // ...
            } else {
                this.isLogin = false;
                this.mainStore.loginInfo = undefined;
            };
        })
    },
    computed: {
        ...mapStores(useStore),
    }
})
</script>

<template>
    <header>
        <div class="wrapper">
            <span class="p-input-icon-left">
                <i class="pi pi-search" />
                <InputText type="text" v-model="searchText" placeholder="Search" />
            </span>
            <div v-show="!isLogin" class="login">
                <Button class="loginButton" label="Register">
                    <RouterLink class="router" to="/register">Register</RouterLink>
                </Button>
                <Button class="loginButton" label="Login">
                    <RouterLink class="router" to="/login">Login</RouterLink>
                </Button>
            </div>
            <div v-show="isLogin" class = "profile">
                <div class = "userInfo">
                    <h2 ref="userName"></h2>
                </div>
                <div class = "login">
                    <Button class="signOutButton" label="Sign Out" @click="signOut()" />
                    <Button class="profileButton">
                        <RouterLink class="router" to="/profile">Profile</RouterLink>
                    </Button>
                </div>
            </div>
        </div>
    </header>
</template>

<style>
.wrapper {
    display: flex;
    flex-direction: row;
    margin-bottom: 50px;
    justify-content: space-between;
}

.router {
    color: white;
    text-decoration: none;
}

.login {
    display: flex;
    justify-content: space-between;
    width: 180px;
    right: 40px;
}
.profile{
    right: 220px;
    display: flex;
}
.userInfo h2{
    margin: 5px;
}

@media (max-width: 800px){
.userInfo h2{
    display: none;
}
.profile{
    width: 200px;
}
}
</style>
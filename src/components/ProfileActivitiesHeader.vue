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
import Menu from 'primevue/menu';

import router from "../router";

export default defineComponent({
    data() {
        return {
            isLogin: false,
            searchText: "",
            items: [
				{
					label: 'Profile',
					icon: 'pi pi-user',
                    to: '/profile'
				},
				{
					label: 'Home page',
					icon: 'pi pi-home',
                    to: '/'
				},
				{
                    label: 'Sign out',
                    icon: 'pi pi-sign-out',
                    command: () => {
                        this.signOut();
                    }
                }
			]
        };
    },
    methods: {
        signOut(){
            const auth = getAuth();
            signOut(auth).then(() => {
                console.log("Sign-out successful")
                this.isLogin = true;
                router.push({ name: "home" });
                // Sign-out successful.
            }).catch((error) => {
            // An error happened.
            });
        },
        addPost(){

        }
    },
    components: {
        Button,
        InputText,
        Menu,
        Divider
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
            <div>
                <Button class="addPostButton" label="Add post" @click="addPost()" />
                <span class="p-input-icon-left">
                    <i class="pi pi-search" />
                    <InputText class = "searchInput" type="text" v-model="searchText" placeholder="Search" />
                </span>
            </div>
            <div v-show="!isLogin" class="login">   
                <Button class="loginButton" label="Login">
                    <RouterLink class="router" to="/login">Login</RouterLink>
                </Button>
            </div>
            <div v-show="isLogin" class = "profile">
                <div class = "userInfo">
                    <h2 ref="userName"></h2>
                </div>
                <div class = "menu">
                    <Menu :model="items" />
                </div>
              <!--  <div class = "login">
                    <Button class="signOutButton" label="Sign Out" @click="signOut()" />
                    <Button class="profileButton">
                        <RouterLink class="router" to="/profile">Profile</RouterLink>
                    </Button>
                </div> -->
            </div>
        </div>
    </header>
</template>

<style>
.wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
}
.p-input-icon-left{
    height:39.6px;
}
.router {
    color: white;
    text-decoration: none;
}

.login {
    display: flex;
    justify-content: space-between;
    width: 73.26px;
    right: 40px;
}
.profile{
    right: 220px;
    display:flex;
    flex-direction: column;
}
.userInfo h2{
    margin: 5px;
}
.userInfo{
    text-align: center;
}

@media (max-width: 800px){
    .userInfo h2{
        display: none;
    }
    .profile{
        width: 200px;
    }
}
.addPostButton{
    margin-right:10px !important;
}
.menu{
    align-self:center;
}
</style>
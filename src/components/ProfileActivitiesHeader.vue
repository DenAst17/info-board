<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { defineComponent } from 'vue'
import { useStore } from '@/stores/store';
import { mapStores } from 'pinia'
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { firebase } from "../config/firebase";
import Divider from 'primevue/divider';
import Menu from 'primevue/menu';
import Dialog from 'primevue/dialog';
import Textarea from 'primevue/textarea';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

import router from "../router";

export default defineComponent({
    data() {
        return {
            userName: "",
            display: false,
            postTitle: "",
            postText: "",
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
            this.display = true;
            this.postTitle = "";
            this.postText = "";
        },
        cancel(){
            this.display = false;
            this.postTitle = "";
            this.postText = "";
        },
        toggle(event: any){
            (this.$refs.menu as any).toggle(event);
        }
        
    },
    components: {
        Button,
        InputText,
        Menu,
        Divider,
        Dialog,
        Textarea
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
                    this.userName = user.displayName;
                }
                else if(user.email) {
                    this.userName = user.email;
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
            <Dialog v-model:visible="display" :breakpoints="{'10000px': '50vw', '1200px': '75vw', '640px': '100vw'}">
                <template #header>
                    <span class="p-float-label">
                        <InputText id="username" type="text" v-model="postTitle" />
                        <label for="username">Title</label>
                    </span>
                </template>
                
                <Textarea class="postTextArea" v-model="postText" :autoResize="true" rows="5" cols="30" placeholder="Write your post here" />

                <template #footer>
                    <Button label="Cancel" @click="cancel()" icon="pi pi-times" class="p-button-text"/>
                    <Button label="Create" icon="pi pi-check" autofocus />
                </template>
            </Dialog>
            <div v-show="!isLogin" class="login">   
                <Button class="loginButton" label="Login">
                    <RouterLink class="router" to="/login">Login</RouterLink>
                </Button>
            </div>
            <div v-show="isLogin" class = "profile">
                <div class = "menu">
                    <Button type="button" @click="toggle">{{userName}}</Button>
                    <Menu ref="menu" :model="items" :popup="true" />
                </div>
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
@media (min-width: 1200px)
{
.postTextArea{
    width: 100%;
}
}
.postTextArea{
    margin-top  : 5px;
    width: 100%;
}
</style>
<script lang = "ts">

import { defineComponent } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

import { firebase } from "../config/firebase";
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import router from "../router";
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Checkbox from 'primevue/checkbox';
import Divider from 'primevue/divider';
import Menu from 'primevue/menu';

import { User } from "@/entities/User";
import useUsers from "../composition/useUsers";

import { useStore } from '@/stores/store'
import { mapStores } from 'pinia'

export default defineComponent({
    data() {
        return {
            isLogin: false,
            userName: "",
            password: "",
            items: [
                {
                    label: 'Home page',
                    icon: 'pi pi-home',
                    to: '/'
                },
                {
                    label: 'Activities',
                    icon: 'pi pi-users',
                    to: '/activities'
                },
                {
                    label: 'Sign out',
                    icon: 'pi pi-sign-out',
                    command: () => {
                        this.signOut();
                    }
                }
            ]
        }
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
    },
    components: {
        Button,
        InputText,
        Checkbox,
        Divider,
        Menu
    },
    computed: {
        ...mapStores(useStore),
    },
    mounted() {
        const auth = getAuth(firebase);
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User  
                const uid = user.uid;
                this.isLogin = true;
                const u = useUsers();
                u.search(user.email as string).then(() => {
                    this.mainStore.loginUserID = u.usersID[0];
                    this.userName = u.users.value[0].user_name as string;
                    this.isLogin = true;
                })
                this.mainStore.loginInfo = user;
                //console.log(user);
                // ...
            } else {
                this.isLogin = false;
                this.mainStore.loginInfo = undefined;
            };
        })
    }
});
</script>

<template>
    <div class="loginViewWrapper">
        <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
            <div class="text-center mb-5">
                <img src="../assets/Vuelogo.png" alt="Image" height="50" class="mb-3">
                <div class="text-900 text-3xl font-medium mb-3">Welcome to your profile, {{ userName }}</div>
            </div>
            <div class="menu">
                <Menu :model="items" />
            </div>
        </div>
    </div>

</template>

<style>
.loginViewWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
}

.surface-card {
    min-width: 500px;
    max-width: 500px;
    display: flex;
    flex-direction: column;
}

.login-with-google-btn {
    transition: background-color .3s, box-shadow .3s;

    padding: 12px 16px 12px 42px;
    border: none;
    border-radius: 3px;
    box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 1px 1px rgba(0, 0, 0, .25);

    color: #757575;
    font-size: 14px;
    font-weight: 500;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;

    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=);
    background-color: white;
    background-repeat: no-repeat;
    background-position: 12px 11px;
    border-radius: 10px;
}

.login-with-google-btn:hover {
    box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 2px 4px rgba(0, 0, 0, .25);
}

.login-with-google-btn:active {
    background-color: #eeeeee;
}

.login-with-google-btn:focus {
    outline: none;
    box-shadow:
        0 -1px 0 rgba(0, 0, 0, .04),
        0 2px 4px rgba(0, 0, 0, .25),
        0 0 0 3px #c8dafc;
}

.login-with-google-btn:disabled {
    filter: grayscale(100%);
    background-color: #ebebeb;
    box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 1px 1px rgba(0, 0, 0, .25);
    cursor: not-allowed;

}

.googleAuthContainer {
    display: flex;
    justify-content: center;
    align-items: center;
}

.menu {
    align-items: center;
}
</style>

<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import { defineComponent } from 'vue'
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { firebase } from "../config/firebase";
import Menu from 'primevue/menu';

import { useStore } from '@/stores/store';
import { mapStores } from 'pinia'
import { User } from '@/entities/User';
import useUsers from '@/composition/useUsers';

import router from "../router";

export default defineComponent({
    data() {
        return {
            userName: "",
            isLogin: false,
            searchText: "",
            items: [
                {
                    label: 'Profile',
                    icon: 'pi pi-user',
                    to: '/profile'
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
            ],
            items1: [
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
    props: {
        isHomePage: Boolean,
    },
    methods: {
        signOut() {
            const auth = getAuth();
            signOut(auth).then(() => {
                console.log("Sign-out successful")
                this.isLogin = true;
                window.location.reload()
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
            });
        },
        toggle(event: any) {
            (this.$refs.menu as any).toggle(event);
        }
    },
    components: {
        Button,
        InputText,
        Menu
    },
    mounted() {
        //console.log(123);
        const auth = getAuth(firebase);
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User  
                const uid = user.uid;
                if (user.displayName) {
                    this.userName = user.displayName; // what is a type of this.$refs.userName
                    this.isLogin = true;
                }
                else if (user.email) {
                    const u = useUsers();
                    u.search(user.email as string).then(() => {
                        this.mainStore.loginUserID = u.usersID[0];
                        this.userName = u.users.value[0].user_name as string;
                        console.log(this.userName);
                        this.isLogin = true;
                    })
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
    <div class="wrapper">
        <div v-show="!isLogin" class="login">
            <Button class="loginButton" label="Login">
                <RouterLink class="router" to="/login">Login</RouterLink>
            </Button>
        </div>
        <div v-show="isLogin" class="profile">
            <div class="menu" v-if="(this as any).isHomePage">
                <Button type="button" @click="toggle">{{ userName }}</Button>
                <Menu ref="menu" :model="items" :popup="true" />
            </div>
            <div class="menu" v-else>
                <Button type="button" @click="toggle">{{ userName }}</Button>
                <Menu ref="menu" :model="items1" :popup="true" />
            </div>

        </div>
    </div>
</template>

<style>
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

.profile {
    right: 220px;
    display: flex;
    flex-direction: column;
}

.addPostButton {
    margin-right: 10px !important;
}

.menu {
    align-self: center;
}
</style>
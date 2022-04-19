<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import { defineComponent } from 'vue'
export default defineComponent({
    data() {
        return {
            isLogin: false,
            searchText: ""
        };
    },
    components: {
        Button,
        InputText
    },
    mounted() {
        console.log(123);
        /*if(store.state.loginInfo != undefined)
        {
        this.isLogin = true;
        this.$refs.h.textContent = store.state.loginInfo.displayName;
        this.$refs.userIMG.src = store.state.loginInfo.photoURL;
        //console.log(store.state.loginInfo);
        }*/
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
            <div v-show="!isLogin" class="profile">
                <Button class="loginButton" label="Login">
                    <RouterLink class="loginRouter" to="/login">Login</RouterLink>
                </Button>
            </div>
        </div>
    </header>
</template>

<style>
.wrapper {
    display: flex;
    flex-direction: row;
    margin-bottom: 50px;
}

.loginRouter {
    color: white;
    text-decoration: none;
}

.profile {
    width: 73.26px;
    right: 40px;
    position: absolute;
    position: fixed;
}
</style>
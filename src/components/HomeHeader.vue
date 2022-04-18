<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import { defineComponent } from 'vue'
export default defineComponent({
    data() {
        return {
            isLogin: false,
            value: ""
        };
    },
    components: {
        Button,
        InputText
    }
})
</script>

<template>
    <header>
        <div class="wrapper">
            <span class= "p-input-icon-left">
                <i class="pi pi-search" />
                <InputText type="text" v-model="value" placeholder="Search" />
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
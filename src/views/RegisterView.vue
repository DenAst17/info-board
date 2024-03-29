<script lang = "ts">

import { defineComponent } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

import { firebase } from "../config/firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import router from "../router";
import useUsers from '@/composition/useUsers';

import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Checkbox from 'primevue/checkbox';
import Divider from 'primevue/divider';

import { useStore } from '@/stores/store'
import { mapStores } from 'pinia'
import { User } from '@/entities/User';

export default defineComponent({
  data() {
    return {
      checked: false,
      email: "",
      password: "",
      userName: ""
    }
  },
  methods: {
    googleSignIn() {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(firebase);
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          // const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          this.mainStore.loginInfo = user;

          const u = useUsers();
          const email = user.email;
          const password = "";
          const photo_url = user.photoURL;
          const reg_date = user.metadata.creationTime;
          const user_name = user.displayName;

          u.search(email as string).then(() => {
            if (u.users.value.length == 0) {
              u.addUser(new User({
                email,
                password,
                photo_url,
                reg_date,
                user_name
              }));
            }
            else {
              this.mainStore.loginUserID = u.usersID[0];
            }
            console.log(user.displayName);
            router.push({ name: "home" });
          })
          // ...
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    },
    emailAndPasswordRegister() {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          this.mainStore.loginInfo = user;

          const u = useUsers();
          const email = user.email;
          const password = this.password;
          const photo_url = "";
          const reg_date = Date.now();
          const user_name = this.userName;

          u.search(email as string).then(() => {
            if (u.users.value.length == 0) {
              u.addUser(new User({
                email,
                password,
                photo_url,
                reg_date,
                user_name
              })).then((res) => {
                this.mainStore.loginUserID = res.id;
              })
            }
            else {
              this.mainStore.loginUserID = u.usersID[0];
            }
            console.log(this.mainStore.loginUserID);
            console.log(user);
            router.push({ name: "home" });
          })
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    }
  },
  components: {
    Button,
    InputText,
    Checkbox,
    Divider
  },
  computed: {
    ...mapStores(useStore),
  }
});
</script>

<template>
  <div class="loginViewWrapper">
    <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
      <div class="homeRouterButtonWrapper">
        <Button label="Back to home page">
          <RouterLink class="router" to="/">Home page</RouterLink>
        </Button>
      </div>
      <div class="text-center mb-5">
        <img src="../assets/Vuelogo.png" alt="Image" height="50" class="mb-3">
        <div class="text-900 text-3xl font-medium mb-3">Register here</div>
        <span class="text-600 font-medium line-height-3">Already registered?</span>
        <RouterLink class="font-medium no-underline ml-2 text-blue-500 cursor-pointer router" to="/login">Log in!
        </RouterLink>
      </div>

      <div>
        <label for="email1" class="block text-900 font-medium mb-2">Email</label>
        <InputText v-model="email" id="email1" type="text" class="w-full mb-3" />

        <label for="password1" class="block text-900 font-medium mb-2">Password</label>
        <InputText v-model="password" id="password1" type="password" class="w-full mb-3" />

        <label for="userName1" class="block text-900 font-medium mb-2">UserName</label>
        <InputText v-model="userName" id="userName1" type="text" class="w-full mb-3" />

        <Button @click="emailAndPasswordRegister()" label="Register" icon="pi pi-user" class="w-full"></Button>
        <Divider />
        <div class="googleAuthContainer">
          <button @click="googleSignIn" class="login-with-google-btn">Sign In with Google</button>
        </div>
      </div>
    </div>
  </div>

</template>

<style>
.homeRouterButtonWrapper {
  display: flex;
  justify-content: end;
}

.loginViewWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.surface-card {
  min-width: 500px;
  max-width: 500px;
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
</style>

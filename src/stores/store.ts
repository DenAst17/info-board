import { defineStore } from 'pinia'
import type { User } from "firebase/auth";

//export type State = {loginInfo ?: User | undefined} // {loginInfo : User | undefined}

export const useStore = defineStore({
  id: 'main',
  state: () => ({
    loginInfo: undefined as User|undefined,
    loginUserID: undefined as string|undefined
  })
})

import { defineStore } from 'pinia'
import type { User } from "firebase/auth";

export type State = {loginInfo ?: User} // {loginInfo : User | undefined}

export const useStore = defineStore({
  id: 'main',
  state: ():State => ({
    loginInfo: undefined,
  })
})

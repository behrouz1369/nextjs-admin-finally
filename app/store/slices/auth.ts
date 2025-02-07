import { createSlice } from "@reduxjs/toolkit"
import { RootState } from ".."
import type {PayloadAction} from '@reduxjs/toolkit'
import User , { UserType } from "@/app/models/user"


// Define a type for the slice state
interface authState {
    tokenVerify?: string,
    user?:UserType
  }

  // Define the initial state using that type
  const initialState: authState = {
    tokenVerify: undefined,
    user:undefined
  }

  export const authSlice = createSlice({
    name: 'auth',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        updateToken : (state  , action:PayloadAction<string|undefined>) => {
            state.tokenVerify = action?.payload
        },
        updateUser: (state , action : PayloadAction<UserType|undefined>) => {
            state.user = action?.payload
        }
    },
  })

  export const { updateToken , updateUser } = authSlice.actions

  // Other code such as selectors can use the imported `RootState` type
  export const selectToken = (state: RootState) => state.auth.tokenVerify
  export const selectUser = (state: RootState) => new User(state.auth.user)

  export default authSlice.reducer

import {createSlice} from "@reduxjs/toolkit"

const formsSlice = createSlice({
    name: "forms",
    initialState: {
        forms: localStorage.getItem('forms') ? JSON.parse(localStorage.getItem('forms') || '') : []
    },
    reducers: {
        addFormR(state, action) {
            state.forms.push(action.payload)
            localStorage.setItem("forms", JSON.stringify(state.forms))
        },
        deleteFormR(state, aciton) {
            state.forms = state.forms.filter((e: any) => e.id !== aciton.payload)
            localStorage.setItem("forms", JSON.stringify(state.forms))
        }
    }
})

export default formsSlice.reducer
export const {addFormR, deleteFormR} = formsSlice.actions
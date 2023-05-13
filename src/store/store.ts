import {configureStore} from "@reduxjs/toolkit"
import formsSlice from "./slices/formsSlice"

const rtkstore = configureStore({
    reducer: {
        forms: formsSlice,
    }
})

export default rtkstore
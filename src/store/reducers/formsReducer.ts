const ADD_FORM = 'simplefeedback/forms/ADD_FORM'
const DELETE_FORM = 'simplefeedback/forms/DELETE_FORM'

let initialState: {
    forms: Form[],
} = {
    forms: localStorage.getItem('forms') ? JSON.parse(localStorage.getItem('forms') || '') : []
}

interface Form {
    id: number,
    title: string,
    source: string,
    name: boolean,
    email: boolean,
    phone: boolean,
    theme: string,
    border: string,
    button: string,
    formLink: string | null,
}


const formsReducer = (state=initialState, action: {type: string, data?: any}) => {
    switch (action.type) {
        case ADD_FORM: {
            let temp = [...state.forms]
            temp.push(action.data)
            localStorage.setItem('forms', JSON.stringify(temp))
            return {
                ...state,
                forms: [...temp]
            }
        }
        case DELETE_FORM: {
            let temp = [...state.forms].filter((e) => e.id != action.data)
            localStorage.setItem('forms', JSON.stringify(temp))
            return {
                ...state,
                forms: [...temp]
            }
        }
        default:
            return state
    }
}

// acitons
export const addFormAC = (data: Form) => {
    return {
        type: ADD_FORM,
        data
    }
}

export const deleteFormAC = (data: number) => {
    return {
        type:DELETE_FORM,
        data
    }
}

// thunks


export default formsReducer
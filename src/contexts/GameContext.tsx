import { createContext, ReactNode, useContext, useReducer } from "react"

type State = {
    points: number
}
type Action = {
    type: FormActions
    payload: any
}
type ContextType = {
    state: State
    dispatch: (action: Action) => void
}

const initialData: State = {
    points: 0
}
type FormProviderProps = {
    children: ReactNode
}

//Context
const FormContext = createContext<ContextType | undefined>(undefined)

export enum FormActions {
    setPoints
}

//Reducer
const formReducer = (state: State, action: Action) => {
    switch(action.type) {
        case FormActions.setPoints:
            return {...state, points: action.payload}
        default:
            return state
    }
}

export const FormProvide = ({children}: FormProviderProps) => {
    const [state, dispatch] = useReducer(formReducer, initialData)
    const value = {state, dispatch}

    return (
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    )
}

export const useForm = () => {
    const context = useContext(FormContext)
    if (context === undefined) {
        throw new Error('useForm precisa ser usado dentro do FormProvider')
    }
    return context
}
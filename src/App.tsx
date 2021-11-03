import * as C from './App.styles'
import { FormProvide } from './contexts/GameContext'
import { Router } from './router'

const App = () => {
    return (
        <FormProvide>
            <Router />
        </FormProvide>
        
    )
}

export default App

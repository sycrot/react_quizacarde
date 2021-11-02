import { BrowserRouter, Route } from "react-router-dom"
import { GamePage } from "./pages/GamePage/GamePage"
import { InitPage } from "./pages/InitPage/InitPage"

export const Router = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={InitPage}/>
            <Route path="/gamepage" component={GamePage}/>
        </BrowserRouter>
    )
}
import { BrowserRouter, Route } from "react-router-dom"
import { GameOver } from "./pages/GameOver/GameOver"
import { GamePage } from "./pages/GamePage/GamePage"
import { InitPage } from "./pages/InitPage/InitPage"

export const Router = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={InitPage}/>
            <Route path="/gamepage" component={GamePage}/>
            <Route path="/gameover" component={GameOver} />
        </BrowserRouter>
    )
}
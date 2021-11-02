import { Link } from 'react-router-dom'
import * as C from './InitPage.styles'

export const InitPage = () => {
    return (
        <C.Container>
            <C.TitleLogo>Quiz Acarde</C.TitleLogo>
            <C.ButtonStart>
                <Link to="/gamepage">Start</Link>
            </C.ButtonStart>
        </C.Container>
    )
}
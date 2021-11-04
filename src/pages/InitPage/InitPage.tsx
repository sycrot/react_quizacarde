import { Link } from 'react-router-dom'
import { Header } from '../../components/Header/Header'
import * as C from './InitPage.styles'

export const InitPage = () => {
    return (
        <C.Container>
            <Header/>
            <C.ContainerStart>
                <C.ButtonStart>
                    <Link to="/gamepage">Start</Link>
                </C.ButtonStart>
            </C.ContainerStart>
        </C.Container>
    )
}
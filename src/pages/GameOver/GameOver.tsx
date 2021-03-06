import { useHistory } from 'react-router'
import { Header } from '../../components/Header/Header'
import { useForm } from '../../contexts/GameContext'
import * as C from './GameOver.styles'

export const GameOver = () => {
    const {state, dispatch} = useForm()
    const history = useHistory()

    const handleLifes = () => {
        return null
    }

    const handleIcons = () => {
        if (state.points <= 2) {
            return (
                <C.PointsText>
                    <C.Icon>🤕</C.Icon>
                    <C.NumPoints>Voce acertou {state.points} perguntas!</C.NumPoints>
                </C.PointsText>
            )
        } else if (state.points > 2 && state.points <= 8) {
            return (
                <C.PointsText>
                    <C.Icon>🙂</C.Icon>
                    <C.NumPoints>Parabéns! Voce acertou {state.points} perguntas.</C.NumPoints>
                </C.PointsText>
            )
        } else if (state.points > 8 && state.points <= 12) {
            return (
                <C.PointsText>
                    <C.Icon>🤓</C.Icon>
                    <C.NumPoints>Isso aí! Voce acertou {state.points} perguntas.</C.NumPoints>
                </C.PointsText>
            )
        } else if (state.points > 12) {
            return (
                <C.PointsText>
                    <C.Icon>👽</C.Icon>
                    <C.NumPoints>Uau! Voce acertou {state.points} perguntas. Continue assim.</C.NumPoints>
                </C.PointsText>
            )
        }
    }

    const handlePage = (page: string) => {
        history.push(page)
    }

    return (
        <C.Container>
            <Header lifes={handleLifes}/>
            <C.Points>
                <C.Text>Fim do jogo</C.Text>
                {handleIcons()}
                <C.ButtonHome onClick={e => handlePage('/')}>Início</C.ButtonHome>
                <C.ButtonNewGame onClick={e => handlePage('/gamepage')}>Novo jogo
                </C.ButtonNewGame>
            </C.Points>
        </C.Container>
    )
}
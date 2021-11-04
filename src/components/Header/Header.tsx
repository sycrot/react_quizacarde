import * as C from './Header.styles'

type Props = {
    lifes?: () => any
    points?: number
}

export const Header = ({lifes, points}: Props) => {

    return (
        <C.Container>
            <C.Header>
                <C.TitleLogo>Quiz Acarde</C.TitleLogo>
                {
                    points !== undefined ?
                        <C.PointsContainer>
                            <C.PointsTitle>Pontos:</C.PointsTitle>
                            <C.Points>
                                {points}
                            </C.Points>
                        </C.PointsContainer>
                    : null
                }
                {lifes === undefined ? '' : lifes()}
            </C.Header>
            <C.SeparatorLine></C.SeparatorLine>
        </C.Container>
    )
}
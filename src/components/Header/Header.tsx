import * as C from './Header.styles'

type Props = {
    lifes: () => any
}

export const Header = ({lifes}: Props) => {

    return (
        <C.Container>
            <C.Header>
                <C.TitleLogo>Quiz Acarde</C.TitleLogo>
                {lifes()}
            </C.Header>
            <C.SeparatorLine></C.SeparatorLine>
        </C.Container>
    )
}
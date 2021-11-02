import * as C from './Header.styles'

type Props = {
    text: string
}

export const Header = ({text}: Props) => {
    return (
        <C.Container>
            {text}
        </C.Container>
    )
}
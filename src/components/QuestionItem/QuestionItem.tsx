import { useEffect, useState } from 'react'
import { Question } from '../../types/Question'
import * as C from './QuestionItem.styles'

type Props = {
    question: Question
}

export const QuestionItem = ({question}: Props) => {
    const [item, setItem] = useState<Question>()

    useEffect(() => {
        const setQuestion = () => {
            setItem(question)
        }
        setQuestion()
    }, [question])

    const getAnswers = () => {
        let answers = []
        answers.push(item?.answers)
        return answers[0]
    }

    const handleClickAnswer = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        let elements = document.querySelectorAll(`.${e.currentTarget.classList[0]}`)
        elements.forEach(e => {
            e.setAttribute('style', 'outline: none;')
        })
        e.currentTarget.style.outline = '5px solid #0d1359'
    }

    return (
        <C.Container>
            <C.Question>
                <C.QuestionText>{item?.question}</C.QuestionText>
                {
                    getAnswers()?.map((item, index) => (
                        <C.Answer onClick={e => handleClickAnswer(e)}>{item}</C.Answer>
                    ))
                }
            </C.Question>
        </C.Container>
    )
}
import { FormEvent, useEffect, useState } from 'react'
import { Question } from '../../types/Question'
import * as C from './QuestionItem.styles'

type Props = {
    question: Question
    key: number
    onChange: (item: string, result: boolean, element: React.FormEvent<HTMLElement>,id?: number) => void
}

export const QuestionItem = ({question, key, onChange}: Props) => {
    const [quest, setQuest] = useState<Question>()

    useEffect(() => {
        const setQuestion = () => {
            setQuest(question)
        }
        setQuestion()
    }, [question])

    const getAnswers = () => {
        let answers = []
        answers.push(quest?.answers)
        return answers[0]
    }

    return (
        <C.Container key={key}>
            <C.Question>
                <C.QuestionText>{quest?.question}</C.QuestionText>
                {
                    getAnswers()?.map((item, index) => (
                        <C.Answer onClick={e => onChange(item, item === quest?.correct_answer ? true : false, e,quest?.id)}>{item}</C.Answer>
                    ))
                }
            </C.Question>
        </C.Container>
    )
}
import { useEffect, useState } from 'react'
import { QuestionItem } from '../../components/QuestionItem/QuestionItem'
import { getQuestions } from '../../data/Questions'
import { Question } from '../../types/Question'
import * as C from './GamePage.styles'

export const GamePage = () => {
    const [numQuestion, setNumQuestion] = useState(0)
    const [questions, setQuestions] = useState<Question[]>([])

    useEffect(() => {
        const getListQuestions = () => {
            setQuestions(getQuestions())
        }
        getListQuestions()
    }, [])

    const handleNextQuestion = () => {
        setNumQuestion(numQuestion+1)
    }

    return (
        <C.Container>
            <C.TitleLogo>Quiz Acarde</C.TitleLogo>
            <C.SeparatorLine></C.SeparatorLine>
            <C.Questions>
                {
                    <QuestionItem question={questions[numQuestion]}/>
                }
                <C.ButtonNext onClick={handleNextQuestion}>Next</C.ButtonNext>
            </C.Questions>
        </C.Container>
    )
}
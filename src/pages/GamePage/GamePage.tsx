import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { Header } from '../../components/Header/Header'
import { QuestionItem } from '../../components/QuestionItem/QuestionItem'
import { FormActions, useForm } from '../../contexts/GameContext'
import { getQuestions } from '../../data/Questions'
import { Question } from '../../types/Question'
import * as C from './GamePage.styles'

export const GamePage = () => {
    const [numQuestion, setNumQuestion] = useState(0)
    const [questions, setQuestions] = useState<Question[]>([])
    const [lifes, setLifes] = useState(3)
    const [answer, setAnswer] = useState() as any
    const history = useHistory()
    const { state, dispatch } = useForm()

    useEffect(() => {
        const getListQuestions = () => {
            setQuestions(getQuestions())
        }
        getListQuestions()
    }, [])

    useEffect(() => {
        const handleGameOver = () => {
            if (lifes === 0) {
                dispatch({
                    type: FormActions.setPoints,
                    payload: questions.filter(e => e.point_question === true).length
                })
                setTimeout(() => {
                    history.push('/gameover')
                }, 1000)
            }
        }
        handleGameOver()
    }, [lifes])

    const handleNextQuestion = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if (questions[numQuestion].answer_option === '') {
            alert('Selecion uma opcao')
        } else {
            e.currentTarget.style.pointerEvents = 'none'
            if (questions[numQuestion].answer_option !== questions[numQuestion].correct_answer) {
                setLifes(lifes-1)
                answer.target.style.outline = '5px solid #b3261a'
            } else {
                answer.target.style.outline = '5px solid #308613'
            }
            setTimeout((el:any = e) => {
                let num = numQuestion
                setNumQuestion(num+=1)
                el.target.style.pointerEvents = 'all'
            }, 1000)
        }
    }

    const handleClickAnswer = (e: React.FormEvent<HTMLElement>) => {
        let elements = document.querySelectorAll(`.${e.currentTarget.classList[0]}`)
        elements.forEach(e => {
            e.setAttribute('style', 'outline: none;')
        })
        e.currentTarget.style.outline = '5px solid #0d1359'
    }

    const handleTrue = (item: string, result: boolean, element: React.FormEvent<HTMLElement>, id?: number) => {
        let newList = [...questions]

        for (let i in newList) {
            if (newList[i].id === id) {
                newList[i].answer_option = item
                newList[i].point_question = result
            }
        }

        handleClickAnswer(element)
        setAnswer(element)
        setQuestions(newList)
    }

    const handleLifes = () => {
        let lifesArr:any = []
        for (let i=0; i < lifes; i++) {
            lifesArr.push(`❤️`)
        }
        return lifesArr
    }

    const handleBgLifes = () => {
        let lifesArr:any = []
        for (let i=1; i <= 3; i++) {
            lifesArr.push(`🖤`)
        }
        return lifesArr
    }

    const handleElementLifes = () => {
        return (
            <C.Lifes>
                {
                    handleLifes().map((item:any) => (
                        <C.LifeItem>{item}</C.LifeItem>
                    ))
                }
                <C.BgLifes>
                    {
                        handleBgLifes().map((item:any) => (
                            <C.BgLifeItem>{item}</C.BgLifeItem>
                        ))
                    }
                </C.BgLifes>
            </C.Lifes>
        )
    }

    return (
        <C.Container>
            <Header lifes={handleElementLifes}/>
            <C.Questions>
                {
                    <QuestionItem question={questions[numQuestion]} key={numQuestion} onChange={handleTrue}/>
                }
                <C.ButtonNext onClick={e => handleNextQuestion(e)}>Next</C.ButtonNext>
            </C.Questions>
        </C.Container>
    )
}
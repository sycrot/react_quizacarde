import { Question } from "../types/Question"

export const Questions = [
    {
        question: 'Normalmente, quantos litros de sangue uma pessoa tem?',
        answers: ['Tem entre 2 a 4 litros.', 'Tem 10 litros.', 'Tem 7 litros.'],
        correct_answer: 'Tem entre 4 a 6 litros.',
    },
    {
        question: 'De quem é a famosa frase “Penso, logo existo”?',
        answers: ['Platão', 'Galileu Galilei', 'Sócrates'],
        correct_answer: 'Descartes',
    },
    {
        question: 'De onde é a invenção do chuveiro elétrico?',
        answers: ['Inglaterra', 'Austrália', 'Itália'],
        correct_answer: 'Brasil',
    },
    {
        question: 'Atualmente, quantos elementos químicos a tabela periódica possui?',
        answers: ['112', '108', '117'],
        correct_answer: '118',
    },
    {
        question: 'Quanto tempo a luz do Sol demora para chegar à Terra?',
        answers: ['12 minutos', '1 dia', 'segundos'],
        correct_answer: '8 minutos',
    },
    {
        question: 'Em que período da pré-história o fogo foi descoberto?',
        answers: ['Neolítico', 'Idade dos Metais', 'Período da Pedra Polida'],
        correct_answer: 'Paleolítico',
    },
    {
        question: 'Qual a velocidade da luz?',
        answers: ['300 000 000 metros por segundo (m/s)', '150 000 000 metros por segundo (m/s)', '199 792 458 metros por segundo (m/s)'],
        correct_answer: '299 792 458 metros por segundo (m/s)',
    },
    {
        question: 'Qual o maior animal terrestre?',
        answers: ['Baleia Azul', 'Tubarão Branco', 'Girafa'],
        correct_answer: 'Elefante africano',
    },
    {
        question: 'Que líder mundial ficou conhecida como “Dama de Ferro”?',
        answers: ['Dilma Rousseff', 'Angela Merkel', 'Hillary Clinton'],
        correct_answer: 'Margaret Thatcher',
    },
    {
        question: 'Quais são os cromossomos que determinam o sexo masculino?',
        answers: ['Os V', 'Os X', 'Os W'],
        correct_answer: 'Os Y',
    },
    {
        question: 'Em que estado australiano fica situada a cidade de Sydney?',
        answers: ['Victoria', 'Tasmânia', 'Queensland'],
        correct_answer: 'Nova Gales do Sul',
    },
    {
        question: 'Que animal gruguleja?',
        answers: ['o pavão', 'a garça', 'o papagaio'],
        correct_answer: 'o peru',
    },
    {
        question: 'Qual é o maior arquipélago da Terra?',
        answers: ['as Bahamas', 'a Finlândia', 'as Maldivas'],
        correct_answer: 'A Indonésia',
    },
    {
        question: 'Em que século o continente europeu foi devastado pela peste bubônica?',
        answers: ['No século X', 'No século XI', 'No século XII'],
        correct_answer: 'No século XIV',
    },
    {
        question: 'Quem pintou o teto da capela sistina?',
        answers: ['Leonardo da Vinci', 'Sandro Botticelli', 'Donatello'],
        correct_answer: 'Michelangelo',
    },
    {
        question: 'Jim Morrison era vocalista de que grupo?',
        answers: ['Pink Floyd', 'Nirvana', 'AC/DC'],
        correct_answer: 'The Doors',
    },
]

export const getQuestions = () => {
    let list:Question[] = []

    Questions.forEach((item, index) => {
        let answers:string[] = []

        answers.push(item.correct_answer)
        item.answers.map((i:string) => (
            answers.push(i)
        ))

        list.push({
            id: index,
            question: item.question,
            answers,
            correct_answer: item.correct_answer,
            answer_option: '',
            point_question: false
        })
    })
    return list
}
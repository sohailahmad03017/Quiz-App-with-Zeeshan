import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Button, Typography } from '@mui/material';
import { Container } from '@mui/system';

//Custome Styling
const parent = { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' };

const quizDiv = { background: 'blue', color: 'white' }

const option = { background: 'black', padding: '5px', margin: '10px' }

function App() {

  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: '_________ is also known as the brain of the computer.',
      options: ['ROM', 'Hard Drive', 'RAM', 'CPU'],
      answer: 'CPU'
    },
    {
      id: 2,
      question: 'Which of the following is a volatile memory?',
      options: ['ROM', 'RAM'],
      answer: 'RAM'
    },
    {
      id: 3,
      question: 'RAM stands for: ',
      options: ['Read Access Memory', 'Random Access Memory', 'Read Access Machine'],
      answer: 'Random Access Memory'
    },
    {
      id: 4,
      question: 'Which of the following is not an Application software?',
      options: ['Youtube', 'GTA Vice City', 'Device Driver', 'VLC Media Player'],
      answer: 'Device Driver'
    },
    {
      id: 5,
      question: 'RAM is a secondary storage device.',
      options: ['true', 'false'],
      answer: 'false'
    }
  ]
  )

  const [start, setStart] = useState(false);
  const [indexNo, setIndexNo] = useState(0);
  const [score, setScore] = useState(0);
  const [optionClass, setOptionClass] = useState('optionStyling');
  const [buttonText, setButtonText] = useState('Next');
  const [resultScreen, setResultScreen ] = useState(false);
 
  let checkAnswer = (selected, answer) => {
    if (selected == answer) {
      setScore(score + 1)
    } else if (selected != answer) {
      setScore(score - 1);
    }
    setOptionClass('optionStyling disableOption')
  }

  let nextQuestion = () => {
    
    if(indexNo + 2 == questions.length){
      setButtonText('Finish');
    }

    if (indexNo != (questions.length) - 1) {
      setIndexNo(indexNo + 1)
    }
    else {
      setResultScreen(true);
    }
    setOptionClass('optionStyling')
  }

  return (
    <div style={parent}>

      {

        resultScreen?

        <div>{score}</div>

        :
        start ?

          <Container maxWidth='sm' style={quizDiv}>
            <Typography variant="h5" style={{ marginTop: '20px' }}>Q no.{questions[indexNo].id} : {questions[indexNo].question}</Typography>

            {
              questions[indexNo].options.map((item, index) => {
                return (
                  <div id={index} className={optionClass}
                    onClick={() => checkAnswer(item, questions[indexNo].answer)}> {item}</div>
                )
              })
            }

            <Button variant='contained' style={{ marginLeft: '87%', background: 'white   ', color: 'black' }} onClick={nextQuestion} >{buttonText}</Button>
            <div>{score}</div>

          </Container>

          : <Button onClick={() => { setStart(true) }} variant='contained'>Start Quiz</Button>
      }
    </div>
  );
}

export default App;

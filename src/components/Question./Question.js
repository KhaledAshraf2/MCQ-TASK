import React, { useState, useEffect } from 'react';
import Choices from './Choices';
import { useDispatch, useSelector } from 'react-redux';
import { updateGrade, updateQuizStatus } from '../../Actions/UserActions/UserActions'
import { Typography, Button } from '@material-ui/core';



const Question = ({ questionsList, setIsQuizFinished }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const { question, choices, answer } = questionsList[currentQuestionIndex]
    const [randomChoices, setRandomChoices] = useState([])
    const [selectedSolution, setSelectedSolution] = useState(0)

    const dispatch = useDispatch()
    const currentGrade = useSelector(state => state.userData.grade)

    useEffect(() => {
        setRandomChoices(choices.sort(() => Math.random() - 0.5))
    }, [questionsList[currentQuestionIndex].id, choices])


    const endQuestionHandler = () => {
        setSelectedSolution(0);
        if (choices[selectedSolution] === answer) {
            updateGrade(dispatch, currentGrade + 2)
        }


        if (currentQuestionIndex + 1 === questionsList.length) {
            updateQuizStatus(dispatch, true)
        }
        else {

            setCurrentQuestionIndex((prevIndex) => {
                return prevIndex + 1;
            })
        }

    }
    const isQuizAboutToEnd = currentQuestionIndex + 1 === questionsList.length;
    return (
        <div>
            <Typography>
                {question}
            </Typography>
            <Choices choices={randomChoices} setSelectedSolution={setSelectedSolution} selectedSolution={selectedSolution} />
            <Button variant="outlined" color={isQuizAboutToEnd ? "secondary" : "primary"} onClick={endQuestionHandler}>
                {isQuizAboutToEnd ? "End Quiz" : "Next Question"}
            </Button>
        </div>
    );
}

export default Question;

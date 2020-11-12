import React, { useState, useEffect } from 'react';
import Question from '../Question./Question';
import { useSelector } from 'react-redux';
import questions from "../../RawData/questions.json"


const Quiz = () => {
    // const [isQuizFinished, setIsQuizFinished] = useState(false)
    const { userName, grade, isQuizFinished } = useSelector(state => state.userData)

    const [randomQuestions, setRandomQuestions] = useState([])

    useEffect(() => {
        setRandomQuestions(questions.sort(() => Math.random() - 0.5))
    }, [])
    return (
        <div>
            {!isQuizFinished && randomQuestions.length && (<>
                <Question questionsList={randomQuestions} />
            </>
            )}
            {isQuizFinished &&
                (
                    <div>
                        Thanks {userName} for your solutions
                        your grade is {grade}/10
                    </div>
                )
            }
        </div>
    );
}

export default Quiz;

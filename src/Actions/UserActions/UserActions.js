export const HandleUserNameInput = (dispatch, userName) => {
    dispatch({
        type: 'CHANGE_USERNAME',
        userName
    })
}


export const updateGrade = (dispatch, grade) => {
    dispatch({
        type: 'CHANGE_GRADE',
        grade
    })
}


export const updateQuizStatus = (dispatch, isQuizFinished) => {
    dispatch({
        type: 'CHNAGE_QUIZ_STATUS',
        isQuizFinished
    })
}
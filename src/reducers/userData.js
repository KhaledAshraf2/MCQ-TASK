

const initState = {
    userName: '',
    grade: 0,
    isQuizFinished: false
}

const Reducer = (state = initState, action) => {
    switch (action.type) {
        case "CHANGE_USERNAME": {

            return {
                ...state,
                userName: action.userName
            }
        }
        case "CHANGE_GRADE": {
            return {
                ...state,
                grade: action.grade
            }
        }
        case "CHNAGE_QUIZ_STATUS": {
            return {
                ...state,
                isQuizFinished: action.isQuizFinished
            }
        }

        default:
            return state
    }
}

export default Reducer
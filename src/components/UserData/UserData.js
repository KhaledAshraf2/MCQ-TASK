import React from 'react';
import {
    useHistory
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'

import { HandleUserNameInput } from "../../Actions/UserActions/UserActions"
import { Button, Typography, Box, TextField } from '@material-ui/core';

const UserData = () => {
    const history = useHistory();
    const dispatch = useDispatch()

    const userName = useSelector(state => state.userData.userName)




    const HandleButtonSubmit = () => {
        history.push('/quiz')
    }
    return (
        <Box>
            <Typography>
                Hello, Please Enter your name:
            </Typography>
            <Box marginTop="10px" marginBottom="10px">

                <TextField
                    error={userName.length === 0}
                    label="username"
                    variant="outlined"
                    onChange={(e) => HandleUserNameInput(dispatch, e.target.value)}
                />
            </Box>
            <Button variant="contained" color="primary" onClick={HandleButtonSubmit} disabled={userName.length === 0}>
                To the quiz
             </Button>
        </Box >
    );
}

export default UserData;

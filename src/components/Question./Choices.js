import React from 'react';
import { RadioGroup, FormControlLabel, Radio } from '@material-ui/core';

const Choices = ({ choices, selectedSolution, setSelectedSolution }) => {
    return (

        <RadioGroup name="solutions" value={selectedSolution} onChange={(e) => {
            setSelectedSolution(+e.target.value)
        }}>
            {choices.map((choice, index) => {
                return (
                    <FormControlLabel key={index} value={index} control={<Radio color="primary" />} label={choice} />)
            })}

        </RadioGroup>
    );
}

export default Choices;

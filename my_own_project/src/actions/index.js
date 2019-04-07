import React from 'react';

const selectDate = date =>{
    return{
        type: 'DATE_SELECTED',
        payload: date
    };
};

export default selectDate;

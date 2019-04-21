import React from 'react';
import photoplaceHolder from '../apis/photoplaceHolder';

const selectPhoto = () => async function(dispatch){
    const response = await photoplaceHolder.get();
    console.log("this is response")
    console.log(response);
    dispatch ({
        type: 'PHOTO_SELECTED',
        payload: response
    })
}

export default selectPhoto;
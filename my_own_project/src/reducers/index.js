import {combineReducers} from 'redux';
//dateReducer and photoReducer is for the basic data will store in the end.
//conClick will trans to action for both date and photo.
const dateReducer = () => {
    return [
        {date: '2019.04.04', photos_num : '20'},
        {date: '2019.04.02', photos_num : '10'}
    ];
};

const photoReducer = () =>{
    return [
        {name: 'brooklynbridge', photo_date: '2019-04-06'},
        {name: 'brooklynbridge', photo_date: '2019-04-06'}
    ];
};

const selectedPhotoReducer = (selectedPhoto = null, action) =>{
    if(action.type === 'PHOTO_SELECTED'){
        return action.payload;
    }
    return dateReducer;
};

const selectedDateReducer = (selectedDate = null, action) => {
     if (action.type === 'DATE_SELECTED'){
         return action.payload;
     }
     return selectedDate;
 };

export default combineReducers({
    dates: dateReducer,
    photos: photoReducer,
    selectedDate: selectedDateReducer,
    selectedPhoto: selectedPhotoReducer
});
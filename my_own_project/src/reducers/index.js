import {combineReducers} from 'redux';

const dateReducer = () => {
    return [
        {date: '2019.04.04', photos_num : '20'},
        {date: '2019.04.02', photos_num : '10'}
    ];
};
 const selectedDateReducer = (selectedDate = null, action) => {
     if (action.type === 'DATE_SELECTED'){
         return action.payload;
     }
     return selectedDate;
 };

export default combineReducers({
    dates: dateReducer,
    selectedDate: selectedDateReducer
});
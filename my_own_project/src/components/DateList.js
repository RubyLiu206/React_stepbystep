import React from 'react';
import {connect} from 'react-redux';
import selectDate from '../actions/selectDate';

class DateList extends React.Component {
  
    renderList() {
        return this.props.dates.map((date) =>{
            return(
                <div className = 'item' key = {date.date}>
                    <div className = 'right float content'>
                        <button 
                            className = 'ui button primart'
                            onClick = {() => this.props.selectDate(date)}>
                            Select
                            </button>
                    </div>
                    <div className = 'content'>
                        {date.date}
                    </div>
                </div>
            );
            
        });
    };
    render(){
        return <div className = 'ui divided list'>{this.renderList()}</div>
    }
}
const mapStateToProps = state => {
    console.log(state);
    return {dates:state.dates}
}

export default connect(mapStateToProps,{selectDate})(DateList);
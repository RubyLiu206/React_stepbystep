import React from 'react';


class SearchBar extends React.Component{

    state = { term: ' '};
    onInputChange = event =>{
        this.setState({term: event.target.value});
    }
    onFormSubmit = event =>{
        event.preventDefault();
        console.log(this.state.term);   
    }

    render(){
        return (
            <div class="ui vertical menu">
                <a class="teal item">
                    Date
                    <div class="ui teal left pointing label">2</div>
                </a>
                
                <div class="item">
                    <form onSubmit = {this.onFormSubmit} class="ui form">
                        <input 
                            type="text"
                            value = {this.state.term}
                            onChange = {this.onInputChange} />
                    </form>
                </div>
            </div>
        );
    }
}

export default SearchBar;

import React from 'react';
import SearchBar from './SearchBar';
import Header from './Header';
import DateList from './DateList';
class App extends React.Component{
    
    render(){
        return (
            <div className = 'ui container grid ' style = {{margin: 10}}>
                <Header/>
                <div className = 'ui row'>
                    <div className = 'column six wide'>
                        <SearchBar/>
                        <DateList />
                    </div> 
                        
                </div>
            
            </div>
            
        )
    }
}

export default App;

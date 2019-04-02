import React from 'react';
import SearchBar from './SearchBar';
import Header from './Header';

class App extends React.Component{

    render(){
        return (
            <div className = 'ui container'>
                <Header/>
                <SearchBar/>

            </div>
            
        )
    }
}

export default App;

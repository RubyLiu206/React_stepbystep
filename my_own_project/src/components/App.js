import React from 'react';
import SearchBar from './SearchBar';
import Header from './Header';
import DateList from './DateList';
import './App.css';
import PhotoList from './PhotoList';

class App extends React.Component{
    
    render(){
        return (
            <div>
                <header>
                    <Header/>
                </header>
                <section>
                    <nav>
                        <ul>
                            <SearchBar/>
                            <DateList />
                        </ul>
                    </nav>
                </section>
                <footer />
                <PhotoList />
            </div>
        )
    }
}

export default App;

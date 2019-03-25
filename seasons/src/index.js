import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from'./SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    //initialized state
    constructor(props) {
        super(props);
        this.state = {lat: null, errorMessage: ''};
    }


    componentDidMount() {
        console.log('my component was rendered to the screen');
        window.navigator.geolocation.getCurrentPosition(
                position => this.setState({lat : position.coords.latitude}),
                err => this.setState({errorMessage: err.message}),
                );
    }

    componentDidUpdate() {
        console.log('my component was just updated - it rerendered!');
    }
    
    renderContent(){
        if (this.state.errorMessage && ! this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>;
        }
        if (!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat = {this.state.lat}/>;
        }
        return <Spinner message = 'please accept location request'/>
    }
    //need the have render, call frequently 
    render() {
        return(
            <div className = 'border red'>
                {this.renderContent()}
            </div>
        );
    };
}


ReactDOM.render(<App />, document.getElementById('root'));

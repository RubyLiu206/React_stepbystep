import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
    //initialized state
    constructor(props) {
        super(props);
        this.state = {lat: null, errorMessage: ''};
        window.navigator.geolocation.getCurrentPosition(
                position => {
                    // use setstate to set the state 
                    this.setState({lat : position.coords.latitude});
                },
                err => {
                    this.setState({errorMessage: err.message});
                }
                );
    }
    //need the have render, call frequently 
    render() {
        if (this.state.errorMessage && ! this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>;
        }
        if (!this.state.errorMessage && this.state.lat){
            return <div>Latitude: {this.state.lat}</div>;
        }
        return <div>Loading!</div>;
    }
}


ReactDOM.render(<App />, document.getElementById('root'));

import React from 'react';

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () =>{
            window.gapi.client.init({
                clientId: '966058132811-gn8a36h3ia53labpaogds74f9o8j4ke6.apps.googleusercontent.com',
                scope: 'email'
            });
        });

    }
    render() {
        return (
            <div> GoogleAuth</div>
        );
    };
}

export default GoogleAuth;

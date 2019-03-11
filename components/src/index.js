import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
// same folder
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () =>{
    return (
        <div className = "ui container comments">
            <ApprovalCard>
                Are you sure you want to do this?
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                author = "Sam" 
                timeAgo = " Today at 4:45 PM" 
                content = "nice to meet you" 
                avatar = {faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                author = "Alex" 
                timeAgo = " Today at 3:45 PM" 
                content = "nice to meet you"
                avatar = {faker.image.avatar()}
                />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail 
                author = "Jane" 
                timeAgo = " Today at 2:45 PM" 
                content = "nice to meet you"
                avatar = {faker.image.avatar()}
                />
            </ApprovalCard>
           
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

import React from 'react';
import {connect} from 'react-redux';
import selectPhoto from '../actions/selectPhoto';

class PhotoList extends React.Component{
    componentDidMount(){
        console.log("select photo");
        console.log(this.props.selectPhoto())
        this.props.selectPhoto();
    }
    renderList(){
        return this.props.photos.map( photo =>{
            return (
                <div className = 'item' key = {photo.name}>
                    <p>{photo.name}</p>
                </div>
            );
        });
    }
    render(){
        return <div> PhotoList</div>
    }
}
const mapStateToProps = (state) =>{
    console.log("this is the photo")
    console.log(state);
    return {photos: state.photo};
}

export default connect(mapStateToProps,{selectPhoto})(PhotoList);

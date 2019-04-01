import React from 'react';
import VideoItem from './VideoItems';

const VideoList = ({videos, onVideoSelect}) =>{
    const renderList = videos.map((videos) => {
        return <VideoItem 
                    key = {videos.id.videoId} 
                    onVideoSelect = {onVideoSelect} 
                    videos ={videos} 
                />;
    });
    return (
        <div className = 'ui relax divided list'>
            {renderList}
        </div>
    );
};


export default VideoList;

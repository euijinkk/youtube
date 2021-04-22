import React, { useRef } from 'react';
import Video from '../video/video'
import styles from './videos.module.css';

const Videos = (props) => {
    // const videos = props.videos;
    // props.videos && console.log(props)
        // .videos[0].id.kind);
    const lists = useRef();
    console.log(props.widthPercent);
    lists.current && (lists.current.style.flexDirection = props.flexDirection);
    lists.current && (lists.current.childNodes.forEach(list => list.style.width = props.widthPercent));
    // props.currentVideo
    // if (props.current != undefined) {
    //     (lists.current.style.flexDirection = props.flexDirection);
    //     (lists.current.childNodes.forEach(list => list.style.width = "100%"));
    // }
    
    // lists.current && (lists.current);
    

    return (
        <ul ref={lists}>
            {
                props.videos.map(video => (
                    <Video 
                        key = {video.id.videoId}
                        video = {video}
                        onVideoClick = {props.onVideoClick}
                    />
                ))
            }
        </ul>
    )
};

export default Videos;
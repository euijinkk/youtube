import React, { memo } from 'react';
import styles from './video.module.css'

const Video = (props) => {
            // console.log(props.video.id.videoId);
            // console.log(props.video.snippet.title)
            // console.log(props.video.snippet.channelTitle)
            // console.log(props.video.id.videoId)
        // console.log(props.video.id);
        function onVideoClick (){
            console.log(!props.currentVideo);
            (!props.currentVideo) && props.onVideoClick(props.video)
            window.scrollTo(0,0);
        }
            return(
                <div className={styles.video} onClick = {onVideoClick} id={props.video.id.videoId}>
                    <img src={props.video.snippet.thumbnails.medium.url} alt=""className={styles.thumbnail}/>
                    <div className = {styles.description}>
                        <div className={styles.title}>{props.video.snippet.title}</div>
                        <div className={styles.channelTitle}>{props.video.snippet.channelTitle}</div>
                    </div>
                </div>
            )
        
};

export default Video;
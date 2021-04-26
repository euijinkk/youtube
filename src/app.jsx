import { useCallback, useEffect, useState } from 'react';
import Header from './components/header/header';
import Videos from './components/videos/videos';
import YTsearch from 'youtube-api-search';
import CurrentVideo from './components/currentVideo/currentVideo';
import styles from './app.module.css';

function App() {
  const API_KEY = "AIzaSyDCUblhXqhxEMr1kZhI7b4fnWIFSxNfk9s";
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] =useState();

  const MAX_RESULTS = 25;
  
  const videoSearch = useCallback((term) => {
    YTsearch({key: API_KEY, term: term, maxResults: MAX_RESULTS}, (videos) => {
      setVideos(videos)
      setCurrentVideo()
      // Videos.lists
    })    
  }, [])

  useEffect(()=> {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostpopular&maxResults=${MAX_RESULTS}&key=${API_KEY}`, requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);
  
  // console.log(videos)
  function selectVideo(video) {
    // console.log(video);
    setCurrentVideo(video);
    // currentVideo => video 랑 똑같은 것인가?
  }
  // const onSearch = 
  return (
    <div className={styles.app}>
      <Header videoSearch={videoSearch}/>
      <section className={styles.content}>
        {
          currentVideo && (
            <div className={styles.detail}>
              <CurrentVideo className={styles.currentVideo} video = {currentVideo}/>
            </div>
          )   
        }
        <div className={styles.list}>
          <Videos className={styles.videos} videos={videos} onVideoClick = {selectVideo}
          flexDirection={currentVideo ? 'column' : 'row'}
          widthPercent = {currentVideo ? '100%' : '49.5%'}
          currentVideo = {currentVideo}/>
        </div>
      </section>
      
    </div>
  );
}

export default App;

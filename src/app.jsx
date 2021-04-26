import { useCallback, useEffect, useState } from 'react';
import Header from './components/header/header';
import Videos from './components/videos/videos';
import YTsearch from 'youtube-api-search';
import CurrentVideo from './components/currentVideo/currentVideo';
import styles from './app.module.css';

function App({youtube}) {
  
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] =useState();

  
  
  // const videoSearch = useCallback((term) => {
  //   YTsearch({key: API_KEY, term: term, maxResults: MAX_RESULTS}, (videos) => {
  //     setVideos(videos)
  //     setCurrentVideo()
  //     // Videos.lists
  //   })    
  // }, [])
  console.log(youtube.mostPopular().then(console.log));
  const videoSearch = query => {
    youtube.search(query)
    .then(videos => setVideos(videos));

     setCurrentVideo()
    // .then()
  }
   
  

  useEffect(()=> {
    youtube.mostPopular()
    .then(videos => setVideos(videos))
  })
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

import ReactPlayer from 'react-player'
import 'reactjs-popup/dist/index.css'
import Popup from 'reactjs-popup'
import { useState } from 'react'

import '../styles/youtubeplayer.scss'


const YoutubePlayer = ({ videoKey, isOpen, setOpen }) => {
  const [loading, setLoading] = useState(true); 

  if (!isOpen) {
    return null;
  }


  const closeLogic = () => {
    setOpen(false);
    setLoading(true);
  }

  return (
    <div className="modal">
      <Popup open={isOpen} onClose={() => closeLogic()} modal nested>
        <div className="modal-content">
          <button className="close-button" onClick={() => closeLogic()}> &times; </button>
          <ReactPlayer 
            className={`video-player ${loading ? 'loading' : ''}`}
            url={`https://www.youtube.com/watch?v=${videoKey}`} 
            controls={true}
            playing={true}
            data-testid="youtube-player"
          />
        </div>
      </Popup>
      </div>  
      );
}



export default YoutubePlayer;
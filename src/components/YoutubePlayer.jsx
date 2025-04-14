import ReactPlayer from 'react-player'
import Popup from 'reactjs-popup'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import '../styles/youtubeplayer.scss'

const YoutubePlayer = ({ videoKey, isOpen, setOpen }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isOpen && videoKey === null) {
      toast.error('Sorry, trailer unavailable.')
      setOpen(false)
    }
  }, [isOpen, videoKey, setOpen])

  const closeLogic = () => {
    setOpen(false)
    setLoading(true)
  }

  if (!isOpen || videoKey === null) return null

  return (
    <div className="modal">
      <Popup open={isOpen} onClose={closeLogic} modal nested>
        <div className="modal-content">
          <button className="close-button" onClick={closeLogic}> &times; </button>
          <ReactPlayer 
            className={`video-player ${loading ? 'loading' : ''}`}
            url={`https://www.youtube.com/watch?v=${videoKey}`} 
            controls
            playing
            data-testid="youtube-player"
          />
        </div>
      </Popup>
    </div>
  )
}

export default YoutubePlayer

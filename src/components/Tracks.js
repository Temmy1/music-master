import React, { Component } from 'react';


class Tracks extends Component {
  state = { playing: false, audio: null, playingPreviewUrl: null }

  playAudio = previewUrl => () => {
    const audio = new Audio(previewUrl);

    if(!this.state.playing) {
      audio.play();
      this.setState({ playing: true, audio, playingPreviewUrl: previewUrl });
    } else {
      this.state.audio.pause();

      if(this.state.playingPreviewUrl === previewUrl) {
        this.setState({ playing: false })
      } else {
        audio.play();
        this.setState({ audio, playingPreviewUrl: previewUrl });
      }
    }
  }

  trackIcon = track => {

    if(!track.preview_url) {
      return <span>N/A</span>;
    }

    if(this.state.playing && this.state.playingPreviewUrl === track.preview_url) {
      return <span>| |</span>
    } 
    return <span>&#9654;</span>
    
  
  }
  render() {
    const { tracks } = this.props;

    return (
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
        { 
        tracks.map(track => {
          const { id, album, name, preview_url } = track;
          return (
            <div 
              className='track'
              key={id}
              onClick={ this.playAudio(preview_url)}
            >
              <div className='track__image-wrapper'>
                <img 
                style={{ maxWidth: '100%' }}
                src={album.images[1].url} 
                alt='album-image' />
                <p className='track__icon'>{this.trackIcon(track)}</p>
              </div>
              <p className='track__text'>{name}</p>
            </div>
          )
        })
      } 
    </div>
    )
  }
}

export default Tracks;

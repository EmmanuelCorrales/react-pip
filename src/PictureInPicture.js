import React, { Component } from 'react';

class PictureInPicture extends Component {

  togglePictureInPicture = async () => {
    console.log("togglePictureInPicture");
    try {
      if (this.props.pip === true
        && this.video !== document.pictureInPictureElement) {
        await this.video.requestPictureInPicture();
      } else {
        await document.exitPictureInPicture();
      }
    } catch(error) {
      console.log(`> Argh! ${error}`);
    } finally {
    }
  }

  render() {
    return (
      <div>
        <video ref={ vid => this.video = vid }
          src="https://storage.googleapis.com/media-session/caminandes/short.mp4">
        </video>
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    this.togglePictureInPicture();
  }
}

export default PictureInPicture;

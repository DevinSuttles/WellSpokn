import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ReactMic } from 'react-mic';
import Button from '@material-ui/core/Button'
 
export default class Recorder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      record: false
	}
  }
 
  startRecording = () => {
    this.setState({
      record: true
    });
  }
 
  stopRecording = () => {
    this.setState({
      record: false
    });
  }
 
  onData(recordedBlob) {
    console.log('chunk of real-time data is: ', recordedBlob);
  }
 
  onStop(recordedBlob) {
	console.log('recordedBlob is: ', recordedBlob);
	const audio = new Audio(recordedBlob.blobURL);
    audio.play();
  }
 
  render() {
    return (
      <div style={{margin: '20px', textAlign: 'center', display: 'block'}}>
        <ReactMic
          record={this.state.record}
          className="sound-wave"
          onStop={this.onStop}
          onData={this.onData}
          strokeColor="#000000"
		  backgroundColor="white"
		  width="500" />
        <Button onClick={this.startRecording} >Start</Button>
        <Button onClick={this.stopRecording} >Stop</Button>
      </div>
    );
  }
}
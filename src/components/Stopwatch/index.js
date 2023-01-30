// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {elapsedTime: 0, isTimerRunning: false}

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  renderElapsedTime = () => {
    const {elapsedTime} = this.state
    const minutes = Math.floor(elapsedTime / 60)
    const seconds = Math.floor(elapsedTime % 60)
    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`
    return <h1>{`${stringifiedMinutes}:${stringifiedSeconds}`}</h1>
  }

  onStartTimer = () => {
    this.intervalId = setInterval(this.incrementTimeElapsedInSeconds, 1000)
    this.setState({
      isTimerRunning: true,
    })
  }

  incrementTimeElapsedInSeconds = () => {
    this.setState(prevState => ({
      elapsedTime: prevState.elapsedTime + 1,
    }))
  }

  onStopTimer = () => {
    clearInterval(this.intervalId)
    this.setState({isTimerRunning: false})
  }

  onResetTimer = () => {
    clearInterval(this.intervalId)
    this.setState({elapsedTime: 0, isTimerRunning: false})
  }

  render() {
    const {isTimerRunning} = this.state
    return (
      <div className="app-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="timer-container">
          <div className="time-container">
            <div className="icon-container">
              <img
                alt="stopwatch"
                className="icon"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              />
              <div className="para">
                <p className="timer-title">Timer</p>
              </div>
            </div>
          </div>
          {this.renderElapsedTime()}
          <div className="buttons-container">
            <button
              type="button"
              onClick={this.onStartTimer}
              disabled={isTimerRunning}
              className="start btn"
            >
              Start
            </button>
            <button
              type="button"
              onClick={this.onStopTimer}
              className="stop btn"
            >
              Stop
            </button>
            <button
              type="button"
              onClick={this.onResetTimer}
              className="reset btn"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch

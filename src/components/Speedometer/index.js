// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onIncrement = () => {
    const {speed} = this.state

    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
    if (speed === 200) {
      this.setState(prevState => ({speed: prevState.speed}))
    }
  }

  onDecrement = () => {
    const {speed} = this.state
    if (speed >= 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
    if (speed === 0) {
      this.setState(prevState => ({speed: prevState.speed}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="imagelogo"
          alt="speedometer"
        />
        <h1 className="speedCount">Speed Is {speed}mph</h1>
        <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button type="button" className="button1" onClick={this.onIncrement}>
            Accelerate
          </button>
          <button type="button" className="button2" onClick={this.onDecrement}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer

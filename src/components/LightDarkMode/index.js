// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDark: true}

  changeColor = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  render() {
    const {isDark} = this.state
    const modeClass = isDark ? 'dark' : 'light'
    const buttonStatus = isDark ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="app-container">
        <div className={`container ${modeClass}`}>
          <h1 className="heading">Click To Change Mode </h1>
          <button type="button" className="button" onClick={this.changeColor}>
            {buttonStatus}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode

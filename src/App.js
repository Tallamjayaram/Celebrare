import {Component} from 'react'
import './App.css'

class App extends Component {
  state = {
    isClicked: false,
    userEnterText: '',
    fontFamily: 'Seris',
    fontSize: 12,
    color: 'black',
    noi: 0,
  }

  showFontProperties = event => {
    this.setState({isClicked: true, userEnterText: event.target.value})
  }

  changeFontFamily = e => {
    this.setState({
      fontFamily: e.target.value,
    })
  }

  changeFontSize = e => {
    this.setState({
      fontSize: parseInt(e.target.value),
    })
  }

  changeFontColor = e => {
    this.setState({
      color: e.target.value,
    })
  }

  addText = () => {
    this.setState(prevState => ({noi: prevState.noi + 1}))
  }

  render() {
    const {
      isClicked,
      userEnterText,
      fontFamily,
      fontSize,
      color,
      noi,
    } = this.state

    const renderTextBoxes = () => {
      const textBoxes = []
      for (let i = 0; i < noi; i += 1) {
        textBoxes.push(
          <input
            type="text"
            key={i}
            className="input dynamic-text-input"
            style={{fontFamily, fontSize, color}}
          />,
        )
      }
      return textBoxes
    }

    console.log(fontFamily, fontSize)

    return (
      <>
        <div className="whole">
          <div>
            <input
              type="text"
              onClick={this.showFontProperties}
              onChange={this.showFontProperties}
              className="input"
              placeholder="Enter Text"
              value={userEnterText}
              style={{fontFamily, fontSize, color}}
            />
          </div>
          {isClicked ? (
            <div>
              <select className="styling" onChange={this.changeFontFamily}>
                <option value="Serif">Serif</option>
                <option value="Sans-serif">Sans-serif</option>
                <option value="Arial">Arial</option>
                <option value="Monospace">Monospace</option>
              </select>
              <select className="styling" onChange={this.changeFontSize}>
                <option value="12">12</option>
                <option value="14">14</option>
                <option value="16">16</option>
                <option value="18">18</option>
              </select>
              <select className="styling" onChange={this.changeFontColor}>
                <option value="black">Black</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
              </select>
              <br />
              <button type="button" className="button" onClick={this.addText}>
                Add Text
              </button>
            </div>
          ) : (
            ''
          )}
        </div>
        {renderTextBoxes()}
      </>
    )
  }
}
export default App

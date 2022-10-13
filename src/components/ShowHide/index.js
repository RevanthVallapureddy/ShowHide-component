import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {showFirstname: false, showSecondname: false}

  showHideFirstname = () => {
    const {showFirstname} = this.state
    this.setState(prevState => ({showFirstname: !prevState.showFirstname}))
  }

  showHideSecondname = () => {
    const {showSecondname} = this.state
    this.setState(prevState => ({showSecondname: !prevState.showSecondname}))
  }

  render() {
    const {showFirstname, showSecondname} = this.state

    const firstName = showFirstname && <p className="name">Joe</p>

    const secondName = showSecondname && <p className="name">Jonas</p>

    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div className="content-container">
          <div className="content">
            <button
              type="button"
              className="btn"
              onClick={this.showHideFirstname}
            >
              ShowHide Firstname
            </button>
            {firstName}
          </div>
          <div className="content">
            <button
              type="button"
              className="btn"
              onClick={this.showHideSecondname}
            >
              ShowHide Lastname
            </button>
            {secondName}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide

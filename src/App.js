import React from 'react'

export class App extends React.Component {
  state = {
    data: null
  }

  async componentDidMount () {
    const response = await fetch('https://randomuser.me/api')
    const data = await response.json()
    this.setState(() => ({
      data: data
    }))
  }

  render () {
    return (
      <div>
        CodeRoad APP
        {this.state.data}
      </div>
    )
  }
}

export default App

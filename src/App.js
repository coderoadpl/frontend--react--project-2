import React from 'react'

export class App extends React.Component {
  state = {
    data: null,
    isLoading: false,
    hasError: false
  }

  componentDidMount () {
    this.loadUsers()
  }

  loadUsers = async () => {
    this.setState(() => ({
      isLoading: true,
      hasError: false
    }))

    try {
      const response = await fetch('https://randomuser.me/api')
      const data = await response.json()
      this.setState(() => ({
        data: data,
        isLoading: false
      }))
    } catch (error) {
      this.setState(() => ({
        isLoading: false,
        hasError: true
      }))
    }
  }

  render () {
    return (
      <div>
        {
        this.state.hasError ?
          'Error occurred'
          :
          this.state.isLoading ?
            'Loading...'
            :
            this.state.data === null ?
              'No data'
              :
              JSON.stringify(this.state.data)
        }
      </div>
    )
  }
}

export default App

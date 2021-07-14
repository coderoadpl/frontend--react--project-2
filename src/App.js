import React from 'react'

export class App extends React.Component {
  state = {
    data: { results: [] },
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
      <ul>
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
                !Array.isArray(this.state.data.results) ?
                  'Malformed data'
                  :
                  this.state.data.results.length === 0 ?
                    'Results is empty'
                    :
                    this.state.data.results.map((user) => {
                      return <li key={user.email}>{user.email}</li>
                    })
        }
      </ul>
    )
  }
}

export default App

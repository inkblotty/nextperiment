import initServices from 'util/init-services'
import ErrorDisplay from 'components/error-display'
import { RaisedButton } from 'material-ui'
import UserList from './view/user-list'

class UserListContainer extends React.Component {
  state = {
    activeUser: null,
    allUsers: [],
    error: null,
    loading: true,
    modalOpen: false,
    offset: 0
  }

  componentDidMount() {
    if (!global.hasOwnProperty('UserService')) {
      initServices()
    }
    this.getUsers()
  }

  getUsers = async () => {
    this.setState({
      loading: true,
      allUsers: []
    })

    try {
      const res = await UserService.getUsers(50)
      this.setState({
        activeUser: null,
        allUsers: res.data.results,
        loading: false,
        offset: 0
      })
    } catch(err) {
      this.setState({
        error: `Error grabbing users: ${err.toString()}`,
        loading: false
      })
    }
  }

  openUser = (e, email) => {
    e.preventDefault()
    this.setState({
      activeUser: this.state.allUsers.find(user => user.email === email)
    })
  }

  closeUser = (e) => {
    if (e) {
      e.preventDefault()
    }
    this.setState({
      activeUser: null
    })
  }

  paginateUsers = (offset) => {
    this.setState({
      offset
    })
  }

  render() {
    console.log(this.state.activeUser)
    return (
      <UserList
        closeUser={this.closeUser}
        getNewUsers={this.getUsers}
        openUser={this.openUser}
        paginateUsers={this.paginateUsers}
        {...this.state}
      />
    )
  }
}

export default UserListContainer

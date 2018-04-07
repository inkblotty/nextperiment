import initServices from 'util/init-services'
import UserList from './user-list'

class Index extends React.Component {
  componentDidMount() {
    initServices()
  }

  render() {
    return (
      <UserList />
    )
  }
}

export default Index

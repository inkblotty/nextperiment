import { UserService } from 'services/user-service'

const initServices = () => {
  if (global && !global.UserService) {
    global.UserService = new UserService()
  }
}

export default initServices
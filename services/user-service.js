import axios from 'axios'

export class UserService {
  constructor() {
    this.apiUrl = 'https://randomuser.me/api/?format=json'
  };

  getSingleUser = (seed) => (
    axios.get(`${this.apiUrl}${seed ? `&seed=${seed}` : ''}`)
  );

  getUsers = (limit) => (
    axios.get(`${this.apiUrl}&results=${limit}`)
  );
}

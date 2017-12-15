const AuthService = {
  isLoggedIn: function() {
    const user_token = localStorage.getItem('authToken')

    if (user_token === null || user_token === '') {
      return false
    }

    return true
  },

  logoutCurrentUser: function() {
    localStorage.removeItem('authToken')
  },

  submitLogin: function(authParams) {
    // let axios = require('axios')
    // return axios.post(process.env.REACT_APP_BASE_URL + '/identity/tokens.json', authParams)
  },

  createUser: function(userParams) {
    // let axios = require('axios')
    // return axios.post(process.env.REACT_APP_BASE_URL + '/identity/user.json', userParams)
  },

  resetPassword: function(userParams) {
    // let axios = require('axios')
    // return axios.post(process.env.REACT_APP_BASE_URL + '/identity/passwords/tokens', userParams)
  },

  getToken: function() {
    return 'Bearer ' + localStorage.getItem('authToken')
  },
}

export default AuthService

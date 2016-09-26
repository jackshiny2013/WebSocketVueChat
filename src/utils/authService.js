module.exports = {
  setToken(token) {
    localStorage.setItem('token', token)
  },

  getToken() {
    return localStorage.getItem('token')
  },

  setCurrentUser(user) {
    localStorage.setItem('user', JSON.stringify(user))
  },

  signOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },
  setCurrentInfo(user) {
    localStorage.setItem('company', JSON.stringify(user))
  },
}

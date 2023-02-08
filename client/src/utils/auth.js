import decode from 'jwt-decode';

class AuthService {

  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    return decode(this.getToken())

  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }



  login(idToken) {
    // TODO: build this function
    localStorage.setItem('id_token', idToken);
    window.location.assign('/')
  }


}

export default new AuthService();

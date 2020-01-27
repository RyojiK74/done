import firebase from '@/plugins/firebase.js';

export const state = () => ({
  displayName: null,
  email: null,
  userUid: null
});

export const mutations = {
  setUser(state, { displayName, email, userUid }) {
    state.displayName = displayName;
    state.email = email;
    state.userUid = userUid;
  }
};

export const actions = {
  async googleSignIn({ commit, state }) {
    let provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithRedirect(provider);
  },
  async googleGetRedirectResult({ commit }) {
    return firebase
      .auth()
      .getRedirectResult()
      .then(function(result) {
        const user = result.user;
        if (user != null) {
          firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
          commit('setUser', {
            displayName: user.displayName,
            email: user.email,
            userUid: user.uid
          });
          return true;
        }
        return false;
      })
      .catch(function(error) {
        let errorCode = error.code;
        let errorMessage = error.message;
        let email = error.email;
        let credential = error.credential;
        return false;
      });
  },
  async googleSignOut() {
    return firebase
      .auth()
      .signOut()
      .then()
      .catch(e => console.log(e));
  }
};
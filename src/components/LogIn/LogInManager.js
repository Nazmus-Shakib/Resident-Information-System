import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";

export const initializeLogInFramework = () => {
  if (firebase.apps.length === 0) {
    // to stop firebase duplication
    firebase.initializeApp(firebaseConfig);
  }
};

export const handleGoogleSignIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((res) => {
      const { displayName, photoURL, email } = res.user;
      const signedInUser = {
        isSignedIn: true,
        name: displayName,
        photo: photoURL,
        email: email,
        success: true,
      };
      handleUserToken();
      sessionStorage.setItem(`userInfo`, JSON.stringify(signedInUser));
      return signedInUser;
    })
    .catch((error) => {
      console.log(error);
      console.log(error.message);
    });
};

// export const handleSignOut = () => {
//   return firebase
//     .auth()
//     .signOut()
//     .then((res) => {
//       const signedOutUser = {
//         isSignedIn: false,
//         name: "",
//         photo: "",
//         email: "",
//         error: "",
//         success: false,
//       };
//       sessionStorage.removeItem("token");
//       sessionStorage.removeItem(`userInfo`);
//       return signedOutUser;
//     })
//     .catch((error) => {
//       console.log(error.message);
//     });
// };

export const createUserWithEmailAndPassword = (name, email, password) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      const newUserInfo = res.user;
      newUserInfo.isSignedIn = true;
      newUserInfo.error = "";
      newUserInfo.success = true;
      newUserInfo.name = name;
      updateUserName(name);
      handleUserToken();
      sessionStorage.setItem(`userInfo`, JSON.stringify(newUserInfo));
      return newUserInfo;
    })
    .catch((error) => {
      const newUserInfo = {};
      newUserInfo.error = error.message;
      newUserInfo.success = false;
      return newUserInfo;
    });
};

export const signInWithEmailAndPassword = (email, password) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      const newUserInfo = res.user;
      newUserInfo.isSignedIn = true;
      newUserInfo.error = "";
      newUserInfo.success = true;
      handleUserToken();
      sessionStorage.setItem(`userInfo`, JSON.stringify(newUserInfo));
      return newUserInfo;
    })
    .catch((error) => {
      const newUserInfo = {};
      newUserInfo.error = error.message;
      newUserInfo.success = false;
      return newUserInfo;
    });
};

const updateUserName = (name) => {
  const user = firebase.auth().currentUser;
  user
    .updateProfile({
      displayName: name,
    })
    .then(function () {
      alert("User Name updated successfully");
    })
    .catch(function (error) {
      console.log(error);
    });
};

const handleUserToken = () => {
  firebase
    .auth()
    .currentUser.getIdToken(/* forceRefresh */ true)
    .then((idToken) => {
      // Send token to your backend via HTTPS
      // ...
      sessionStorage.setItem(`token`, idToken);
    })
    .catch((error) => {
      // Handle error
    });
};

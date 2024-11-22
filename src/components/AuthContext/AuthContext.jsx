import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { auth } from './firebase.console';

export const AuthProvider = createContext();

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);
  //regster-Login
  const creactNewUsers = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //sigin

  const userSigin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //sinOut
  const sinOut = () => {
    return signOut(auth);
  };
  const authInfo = {
    creactNewUsers,
    userSigin,
    user,
    setUser,
    sinOut,
  };
  useEffect(() => {
    const userSubscried = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    });
    return () => {
      userSubscried();
    };
  }, []);
  return (
    <div>
      <AuthProvider.Provider value={authInfo}>{children}</AuthProvider.Provider>
    </div>
  );
};

export default AuthContext;

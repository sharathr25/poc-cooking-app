import firebase from 'firebase/app';
import 'firebase/database';
import firebaseConfig from './config/firebase';

export default firebase.initializeApp(firebaseConfig);
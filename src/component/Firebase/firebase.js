import {initializeApp} from 'firebase/app';
import { getAuth } from 'firebase/auth';

const config = {

    apiKey: "AIzaSyDd16nrVN8L78CcHuTFmALCOIF3QyPEAl8",

    authDomain: "marvel-quiz-eafbf.firebaseapp.com",

    projectId: "marvel-quiz-eafbf",

    storageBucket: "marvel-quiz-eafbf.appspot.com",

    messagingSenderId: "1092520456124",

    appId: "1:1092520456124:web:23575ace5e05a6494505b9"

};

const app = initializeApp(config);
export const auth = getAuth(app);
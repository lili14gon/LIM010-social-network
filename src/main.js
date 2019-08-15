import { init } from './router.js';

window.addEventListener('load', () => {
  const firebaseConfig = {
    apiKey: 'AIzaSyCJhteyRg-JGLrv4nRXm4NoitbnBXiOfrg',
    authDomain: 'p1-red-social.firebaseapp.com',
    databaseURL: 'https://p1-red-social.firebaseio.com',
    projectId: 'p1-red-social',
    storageBucket: '',
    messagingSenderId: '380076541838',
    appId: '1:380076541838:web:8c591a8b9d53bb4b',
  };
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  init();
});

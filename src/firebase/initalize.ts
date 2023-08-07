import { initializeApp } from 'firebase/app'
export function firebaseInit() {
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: 'AIzaSyBdd94iHFyUnccrp6L88xsdrB0tN6q8pKo',
    authDomain: 'vlisex-shop.firebaseapp.com',
    projectId: 'vlisex-shop',
    storageBucket: 'vlisex-shop.appspot.com',
    messagingSenderId: '816610519641',
    appId: '1:816610519641:web:0de299a73bd220c74e5f48'
  }

  // Initialize Firebase
  return initializeApp(firebaseConfig)
}

import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth'

export async function signInGoogle() {
  try {
    const googleProvider = new GoogleAuthProvider()
    const auth = getAuth()

    const response = await signInWithPopup(auth, googleProvider)
    console.log('success', response)
  } catch (error) {
    console.log('error', error)
  }
}

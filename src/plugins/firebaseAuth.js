import { auth, db } from '@/plugins/firebase'
import router from '@/router'
import store from '@/store'
import { ref, reactive } from 'vue'

export default function useFirebaseAuth() {
  const showSignIn = ref(true)
  const user = reactive({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })
  const error = ref('')

  function toggleForm() {
    showSignIn.value = !showSignIn.value
  }

  function signIn() {
    auth
      .signInWithEmailAndPassword(user.email, user.password)
      .then(res => store.dispatch('user/fetchUserProfile', res.user))
  }

  function signUp() {
    auth
      .createUserWithEmailAndPassword(user.email, user.password)
      .then(res => {
        db.collection('users')
          .doc(res.user.uid)
          .set({
            firstName: user.firstName,
            lastName: user.lastName,
          })
        store.dispatch('user/fetchUserProfile', res.user)
      })
      .catch(res => (error.value = res.message))
  }

  function signOut() {
    auth.signOut()

    store.commit('user/SET_USER', null)
    router.push('/signin')
  }

  return {
    user,
    error,
    toggleForm,
    signUp,
    signIn,
    signOut,
  }
}

/* eslint-disable no-underscore-dangle */
import firebase from 'firebase'
import ReduxSagaFirebase from 'redux-saga-firebase'

const myFirebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyC0GJrWfjPI3ihl3bsZajgOaU_8ETuh0vc',
	authDomain: 'random-quotes-d464b.firebaseapp.com',
	databaseURL: 'https://random-quotes-d464b.firebaseio.com',
	projectId: 'random-quotes-d464b',
	storageBucket: 'random-quotes-d464b.appspot.com',
	messagingSenderId: '102722321201'
})

const reduxSagaFirebase = new ReduxSagaFirebase(myFirebaseApp)

export default reduxSagaFirebase

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { fireStore } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDwO9fw1gFQgx2Acq1qiovD5xwnQ1Mm6NA",
	authDomain: "clone-34fbe.firebaseapp.com",
	projectId: "clone-34fbe",
	storageBucket: "clone-34fbe.appspot.com",
	messagingSenderId: "1089352955430",
	appId: "1:1089352955430:web:dfdeb1cd73ad76934218e7",
	measurementId: "G-BLRYLEF5M4",
};
const firebaseApp = initializeApp(firebaseConfig);
let auth = getAuth(firebaseApp);
let db = getFirestore(firebaseApp);
export { auth,db};

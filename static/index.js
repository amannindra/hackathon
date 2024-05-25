
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeakkn-rE6X9T-EgZqf302YdOcxcxJ4LM",
  authDomain: "wecom-bb73f.firebaseapp.com",
  projectId: "wecom-bb73f",
  storageBucket: "wecom-bb73f.appspot.com",
  messagingSenderId: "842801733369",
  appId: "1:842801733369:web:fef189a86523903a524c28"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

var uiConfig = {
    signInSuccessUrl: '/home',
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        //Phone number auth later
    ],
    // tosUrl and privacyPolicyUrl accept either url string or a callback
    // function.
    // Terms of service url/callback.
    tosUrl: '<your-tos-url>',
    // Privacy policy url/callback.
    privacyPolicyUrl: function() {
        window.location.assign('<your-privacy-policy-url>');
    }
};

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);
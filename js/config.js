// App identity. A new subject built from this engine changes only this file (plus the content in js/content/).
export const APP = {
  name: 'BizQuest',
  icon: 'trending-up', // a Lucide icon name from js/icons.js (shown in the yellow brand square)
  course: 'IB Business HL',
  // Progress is kept in localStorage under this key. Apps hosted on the same domain (e.g. one GitHub Pages
  // account) share storage, so every subject needs its own key.
  storageKey: 'bizquest.v1',
  // Google sign-in and the cloud copy of progress (Firebase project "ib-business-management-app").
  // This web config is public by design; the Firestore security rule is what keeps each user's data private.
  firebase: {
    apiKey: 'AIzaSyCXz1En7MlhRsq-phpotQJ3E-ukPbIn3IA',
    authDomain: 'ib-business-management-app.firebaseapp.com',
    projectId: 'ib-business-management-app',
    storageBucket: 'ib-business-management-app.firebasestorage.app',
    messagingSenderId: '1054598773271',
    appId: '1:1054598773271:web:2713c689e2ae0f7ae67a52'
  },
  // Level titles, one per 250 XP.
  levels: ['Intern', 'Junior Analyst', 'Analyst', 'Senior Analyst', 'Finance Manager',
    'Head of Finance', 'Finance Director', 'CFO', 'CEO', 'Business Legend'],
  voiceTest: 'Profit is not the same as cash. Remember that and you are already ahead of half the class.'
};

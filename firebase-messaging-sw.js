// firebase-messaging-sw.js
self.importScripts('https://www.gstatic.com/firebasejs/11.4.0/firebase-app-compat.js');
self.importScripts('https://www.gstatic.com/firebasejs/11.4.0/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyA1C3iYQe22zhTP5HVj19atOZLROtba3rw",
    authDomain: "jogo-do-bicho-421ff.firebaseapp.com",
    databaseURL: "https://jogo-do-bicho-421ff-default-rtdb.firebaseio.com",
    projectId: "jogo-do-bicho-421ff",
    storageBucket: "jogo-do-bicho-421ff.firebasestorage.app",
    messagingSenderId: "1023919123583",
    appId: "1:1023919123583:web:b6c561fb121fe54f9e234a",
    measurementId: "G-BPH150V2SG"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
    console.log('[firebase-messaging-sw.js] Mensagem em background:', payload);
    const notification = payload.notification;
    self.registration.showNotification(notification.title, {
        body: notification.body,
        icon: '/path/to/icon.png' // Opcional: substitua por um ícone válido
    });
});

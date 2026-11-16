importScripts("https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js");
// 只初始化一次 Firebase
if (!firebase.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyCyGbt1mWnyl1UXOZXaxjuTJSlBUE9r8W8",
        authDomain: "arbwallet-1e619.firebaseapp.com",
        projectId: "arbwallet-1e619",
        storageBucket: "arbwallet-1e619.firebasestorage.app",
        messagingSenderId: "892597940252",
        appId: "1:892597940252:web:353190024c32ce80a12fd9",
        measurementId: "G-WFYPV044M5"
    });
}
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    // console.log("收到后台消息:", payload);
    // 方法保留，内容需要注释
    // if (payload.data&&payload.data.title) {
    //     self.registration.showNotification(payload.data.title, {
    //         body: payload.data.body,
    //         icon: "/logo_192x192.png",
    //     });
    // }
});

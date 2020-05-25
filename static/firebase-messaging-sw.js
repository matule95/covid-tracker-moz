/* eslint-disable */
const options = {
  firebaseVersion: '7.14.1',
  config: {
    apiKey: 'AIzaSyDlm8ZeIzo0I_zClTrNAkFgJti3I-oGX0w',
    authDomain: 'covid-19-tracker-moz.firebaseapp.com',
    databaseURL: 'https:\u002F\u002Fcovid-19-tracker-moz.firebaseio.com',
    projectId: 'covid-19-tracker-moz',
    storageBucket: 'covid-19-tracker-moz.appspot.com',
    messagingSenderId: '536171650610',
    appId: '1:536171650610:web:26cad8c7e170c2a9f7262b',
    measurementId: 'G-8GZ5N5EZS4'
  },
  onFirebaseHosting: false
}
const version = options.firebaseVersion
const onFirebaseHosting = options.onFirebaseHosting

if (onFirebaseHosting) {
  // Only works on Firebase hosting!
  importScripts('/__/firebase/' + version + '/firebase-app.js')
  importScripts('/__/firebase/' + version + '/firebase-messaging.js')
  importScripts('/__/firebase/init.js')
} else {
  importScripts(
    'https://www.gstatic.com/firebasejs/' + version + '/firebase-app.js'
  )
  importScripts(
    'https://www.gstatic.com/firebasejs/' + version + '/firebase-messaging.js'
  )
  firebase.initializeApp(options.config)
}

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging()

messaging.setBackgroundMessageHandler(function(payload) {
  console.info('SW received the message: ', payload)
  const notification = payload.notification

  const notificationTitle = notification.title
  const notificationOptions = {
    body: notification.body,
    icon: notification.image,
    vibrate: notification.vibrate || [200, 100, 200, 100, 200, 100, 200],
    actions: [
      // First item is always taken as click action (see comment below)
      {
        title: 'Visit',
        action: notification.clickPath
      }
    ]
  }
  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  )
})

self.addEventListener('notificationclick', function(e) {
  const notification = e.notification
  // MARK 1 -> always takes first item
  const clickAction = notification.actions[0].action
  const action = e.action
  if (action === 'close') {
    notification.close()
  } else {
    clients.openWindow(clickAction)
    notification.close()
  }
})

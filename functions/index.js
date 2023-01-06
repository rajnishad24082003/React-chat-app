const admin = require("firebase-admin");
const serviceAccount = require("./service-account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://chat-application-2180a-default-rtdb.firebaseio.com",
});

const { fcmSend } = require("./src/fmc");

exports.fcmSend = fcmSend;

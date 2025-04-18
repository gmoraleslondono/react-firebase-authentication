import admin from "firebase-admin";
import { readFile } from "fs/promises";

// Load service account key
const serviceAccount = JSON.parse(
  await readFile(new URL("./firebaseServiceAccountKey.json", import.meta.url))
);

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default admin;

import { initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { writeFileSync } from "fs";

const app = initializeApp();
const firestore = getFirestore(app);

// Seed
for (let i = 0; i < 10; i++) {
 await firestore.collection('foo').add({
    "doc_num": i
 });
}

// Bundle
var bundleId = "myBundleId";
var bundle = firestore.bundle(bundleId);
var col = firestore.collection('foo').limit(10);
var docs = await col.get();
var bundleBuffer = firestore.bundle().add("myNamedQuery", docs).build();
writeFileSync('../app/src/main/res/raw/bundle.txt', bundleBuffer);
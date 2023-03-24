# Friendly Eats - Bundles and Snapshot repro


## Regenerate the bundle

1) Start firebase emulator
2) cd makebundle
3) npm install
4) npm run bundle

## Repro
1) Start firebase emulator
2) Build and run app on android emulator
3) Sign up with any test credentials
4) Click top right "..." menu
5) Click "Load Only" -> ensure the toast message shows that the bundle was loaded successfully
6) In android studio, open "Run" tab. Here you should see the output of Firebase debug log
7) Click "Query Only" -> ensure the toast indicates that a snapshot was loaded.
8) Find the "com.google.firestore.v1.ListenRequest" proto in the debug log output and observe that "read_time" is not set.


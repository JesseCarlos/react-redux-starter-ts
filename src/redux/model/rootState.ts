import { FirebaseReducer, FirestoreReducer } from "react-redux-firebase";

export interface RootState {
    firebase: FirebaseReducer.Reducer
    firestore: FirestoreReducer.Reducer
}

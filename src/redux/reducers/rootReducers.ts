import { firebaseReducer } from "react-redux-firebase";
import { combineReducers, Reducer } from "redux";
import { firestoreReducer } from "redux-firestore";
import { RootState } from "redux/model";

const rootReducers: Reducer<RootState> = combineReducers<RootState>({
  firebase: firebaseReducer,
  firestore: firestoreReducer as Reducer
});

export default rootReducers;

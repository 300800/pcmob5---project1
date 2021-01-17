import { createStore, combineReducers } from "redux";
import blogAuthReducer from "./ducks/blogAuth";
import accountPrefsReducer from "./ducks/accountsPrefs";

const reducer = combineReducers({ auth: blogAuthReducer });

const store = createStore(reducer);

export default store;

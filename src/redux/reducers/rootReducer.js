import { combineReducers } from "redux";
import mapReducer from "./mapReducer";
import searchReducer from "./searchReducer";
import userlistReducer from "./userlistReducer";

const rootReducer = combineReducers({
    search: searchReducer,
    userlist: userlistReducer,
    map: mapReducer,
})

export default rootReducer
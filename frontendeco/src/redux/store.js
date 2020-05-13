import { applyMiddleware, createStore } from "redux";
import reducer from "./reducers";
import { save, load } from "redux-localstorage-simple";


const createStoreWithMiddleware = applyMiddleware(
	save({ states: ["variables"] })
)(createStore);

const store = createStoreWithMiddleware(
	reducer,
	load({
		preloadedState:{

			nombres: "",
			cart:[],
		},
		states: ["variables"] }),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
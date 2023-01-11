import {createStore} from "redux";
import rootred from "./redux/actions/reducers/main";

const Store =createStore(
    rootred

);
export default Store;

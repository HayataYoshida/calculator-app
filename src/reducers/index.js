// src/reducers/index.jsは複数Reducerが存在したときにそれらを組み合わせるためのもの!

import { combineReducers } from "redux";
import calculator from "./calculator";

const reducer = combineReducers({
  calculator,
});

export default reducer;

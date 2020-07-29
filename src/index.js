// ここではReducerによって変更された状態(Store)をContainerに渡すという動作が行われています。
// これにより、Reduxで作成されたデータの状態がReact.jsに渡るようになります。
import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import CalculatorContainer from "./containers/CalculatorContainer";
import reducer from "./reducers";

const store = createStore(reducer);

render(
  <Provider store={store}>
    <CalculatorContainer />
  </Provider>,
  document.getElementById("root")
);

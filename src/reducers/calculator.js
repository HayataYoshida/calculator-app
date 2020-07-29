// ActionのロジックにあたるReducer
// 各状態が各アクションによってどのように変更されるのか記述
import * as actionTypes from "../utils/actionTypes";

const initialAppState = {
  //initialAppState＝初期値
  inputValue: 0, //押されたボタンの値
  resultValue: 0, //合計値
  showingResult: false, //計算結果を表示するかどうか
};

const calculator = (state = initialAppState, action) => {
  if (action.type === actionTypes.INPUT_NUMBER) {
    return {
      ...state,
      inputValue: state.inputValue * 10 + action.number,
      showingResult: false,
    };
  } else if (action.type === actionTypes.PLUS) {
    return {
      ...state,
      inputValue: 0,
      resultValue: state.resultValue + state.inputValue,
      showingResult: true,
    };
  } else {
    return state;
  }
};

export default calculator;

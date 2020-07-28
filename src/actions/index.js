// Componentで発行されるActionの定義
// 電卓アプリでいう「数字ボタンを押したとき」と「プラスボタンを押したとき」というActionの定義を作成!!!

import * as actionTypes from "../utils/actionTypes";

// 「数字ボタンを押したとき」
export const onClick = (number) => ({
  type: actionTypes.INPUT_NUMBER,
  number,
});
// プラスボタンを押したとき」
export const onPlusClick = () => ({
  type: actionTypes.PLUS,
});

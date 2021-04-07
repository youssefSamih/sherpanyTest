import { Dispatch } from 'react';
import { SAVE_SETTING, SettingActionTypes } from '../reducer/settingReducer';

export const SaveSettingData = (
  dispatch: Dispatch<SettingActionTypes>,
  data: any
) => {
  typeof localStorage !== 'undefined' &&
    localStorage.setItem('@country', data?.country);
  return dispatch({ data, type: SAVE_SETTING });
};

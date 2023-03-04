import axios from 'axios';
import {
  fetchingSuccess,
  fetchingInProgress,
  fetchingError,
} from './tasksSlice';

axios.defaults.baseURL = 'https://62584f320c918296a49543e7.mockapi.io';
export const fetchTasks = () => async dispatch => {
  try {
    // Індикатор завантаження
    dispatch(fetchingInProgress());
    // HTTP-запит
    const response = await axios.get('/tasks');
    dispatch(fetchingSuccess(response.data));
  } catch (e) {
    // Обробка помилки
    dispatch(fetchingError(e.message));
  }
};

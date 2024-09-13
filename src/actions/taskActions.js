import axios from 'axios';


export const fetchTasks = () => async (dispatch) => {
  dispatch({ type: 'FETCH_TASKS_REQUEST' });
  try {
    // const response = await axios.get('https://jorge-mhex.onrender.com');
    const response = await axios.get('https://task-app-manager-kosr.onrender.com');
    dispatch({ type: 'FETCH_TASKS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_TASKS_FAILURE', payload: error.message });
  }
};

export const deleteTask = (id) => async (dispatch) => {
  try {
    // await axios.delete(`https://jorge-mhex.onrender.com/${id}`);
    await axios.delete(`https://task-app-manager-kosr.onrender.com/${id}`);
    dispatch({ type: 'DELETE_TASK', payload: id });
  } catch (error) {
    console.error('Error deleting task:', error);
  }
};


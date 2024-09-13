import axios from 'axios';




export const fetchProjects = () => async (dispatch) => {
  dispatch({ type: 'FETCH_PROJECTS_REQUEST' });
  try {
    // const response = await axios.get('https://jorge-mhex.onrender.com');
    const response = await axios.get('https://task-app-manager-kosr.onrender.com');
    dispatch({ type: 'FETCH_PROJECTS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_PROJECTS_FAILURE', payload: error.message });
  }
};

export const deleteProject = (id) => async (dispatch) => {
  try {
    // await axios.delete(`https://jorge-mhex.onrender.com/${id}`);
    await axios.delete(`https://task-app-manager-kosr.onrender.com/${id}`);
    dispatch({ type: 'DELETE_PROJECT', payload: id });
  } catch (error) {
    console.error('Error deleting project:', error);
  }
};


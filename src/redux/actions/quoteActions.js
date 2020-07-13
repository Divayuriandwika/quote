import axios from 'axios';

const apiUrl = 'https://api.kanye.rest'



export const getAllItem = () => {
	return (dispatch) => {
		return axios
		.get(`${apiUrl}`)
		.then((response) => {
			console.log(response)
				dispatch(getItemSuccess(response.data.data))
		})
		.catch((error) => {
			console.log(error);
			throw error;
			
		})
	}
}

export const getItemSuccess = (data) => {
	return {
		type: 'GET_ITEM',
		payload: {
			data
		}
	};
};


export const addItem = (values) => {
	return (dispatch) => {
		return axios
			.post(`${apiUrl}`, values)
			.then((response) => {
				console.log(response);
				
				dispatch(postItemSuccess(response.data));
				
			})
			.catch((error) => {
				alert(error.response.data);
				console.log(error);
				throw error;
			});
	};
};

export const postItemSuccess = (data) => {
	return {
		type: 'POST_ITEM',
		payload: {
			data
		}
	};
};

export const editItem = (id) => {
	console.log(id)
	return (dispatch) => {
		console.log(id)
		return axios
		.put(`${apiUrl}${id.id}`, id)
		.then((response) => {
			console.log(response)
			dispatch(getAllItem());
		})
		.catch((error) => {
			console.log(error);
			throw error;
		});
	}
}
	


export const editItemSuccess = (data) => {
	return {
		type: 'EDIT_ITEM',
		payload: {
			data
		}
	};
};

export const deleteItem = (id) => {
	return (dispatch) => {
		return axios
		.delete(`${apiUrl}${id}`)
		.then((response) => {
			dispatch(deleteIDSuccess(response.data));
		})
		.catch((error) => {
			console.log(error);
			throw error;
			
		})
	}
}

export const deleteIDSuccess = (data) => {
	return {
		type: 'DELETE_ITEM',
		payload: {
			data
		}
	};
};
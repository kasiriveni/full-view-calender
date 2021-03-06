import { getCalenderEventsData, getEventsData,postEventsData,postNewCreateEventsData} from '../components/shared/service';

export const updateCheckbox = payload =>{
	return dispatch => {
		
		//api call update objectId with isChecked;
		if(!payload.ischecked){
			dispatch({
				type: "REMOVE_NEW_CALENDER",
				payload
			});
		} else{
			dispatch({
				type: "ADD_NEW_CALENDER",
				payload
			});
		}
			
		dispatch({
			type: "UPDATE_NEW_CALENDER",
			payload
		});
	
	};
}; 

export const model = payload => dispatch => {

	dispatch(({
		type: "SHOW_MODEL",
		payload
	})
	);
};

export const fetchData = () => {
	return async dispatch => {

		const response = await getEventsData();
		const payload = await response.json();
		
		dispatch(({
			type: "UPDATE_FETCH_EVENTS",
			payload
		})
		);
	};
};

export const fetchCalenderEvents = () => {
	return async dispatch => {

		const response = await getCalenderEventsData();
		const payload = await response.json();

		dispatch(({
			type: "FETCH_CALENDER_EVENTS",
			payload
		})
		);

		dispatch({
			type: "ALL_CALENDER_EVENTS",
			payload
		});
	};
};

export const addEvent = (payload) => {

	return async dispatch => {
		
		const response = await postEventsData(payload);
		const data = await response.json();

		if (data.ok) {
			
			const response = await getEventsData();
			const payload = await response.json();

			dispatch(({
				type: "UPDATE_FETCH_EVENTS",
				payload
			})
			);
		}
	};

};

export const addCreateEvent = (payload) => {

	return async dispatch => {
		
		const response = await postNewCreateEventsData(payload);
		const data = await response.json();
		if (data.ok) {
			
			const response = await getCalenderEventsData();
			const payload = await response.json();


			dispatch(({
				type: "FETCH_CALENDER_EVENTS",
				payload
			})
			);
		dispatch({
			type: "ALL_CALENDER_EVENTS",
			payload
		});
		}
	};

};
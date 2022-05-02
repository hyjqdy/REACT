import {CREATE_NEW_CONTACT, REMOVE_CONTACT} from './ActionTypes';

export const createContact = (contact) => {
	return {
		type: CREATE_NEW_CONTACT,
		contact: contact
	}
}


export const deleteContact = (email) => {
	return {
		type: REMOVE_CONTACT,
		email: email
	}
}
import {takeEvery, takeLatest, delay, call, put} from 'redux-saga/effects'
import {FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE} from '../Actions';
import {fetchUsersSuccess} from '../ActionCreators';
import axios from 'axios';

function getUserApi() {
    return axios.get("http://jsonplaceholder.typicode.com/users")
    .then(response => response.data);
}

// saga based on ES6 generator
function* fetchUsers() {
    try {
        yield delay(2000);
        const users = yield call(getUserApi);
        yield put(fetchUsersSuccess(users));
    } catch(e) {
        yield put({type: FETCH_USERS_FAILURE, payload: e.message})
    }
}

function* userSaga() {
    yield takeLatest(FETCH_USERS_REQUEST, fetchUsers);
}

export default userSaga;

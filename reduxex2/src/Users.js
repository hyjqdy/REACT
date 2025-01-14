import {useSelector, useDispatch} from 'react-redux';
import {FETCH_USERS_REQUEST} from './redux/Actions'; 

import {useEffect} from 'react';
export default function Users() {
    const state = useSelector(state => state); // mapStateToProps
    const dispatch = useDispatch(); // mapDispatchToProps

    let {loading, error, users} = state;

    useEffect(() => {
        dispatch({type: FETCH_USERS_REQUEST});
    }, []);

    return <div>
        <button type="button"
        onClick={() => dispatch({type: FETCH_USERS_REQUEST})}>Refresh</button>
        {
            loading? <h1>Loading....</h1> : users.map(user => <h1 key={user.email}> {user.name}, {user.email}</h1>)
        }
    </div>
}


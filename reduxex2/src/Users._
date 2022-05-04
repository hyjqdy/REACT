import {useSelector, useDispatch} from 'react-redux';
import {fetchUsers} from './redux/thunk/thunkapi';

import {useEffect} from 'react';
export default function Users() {
    const state = useSelector(state => state); // mapStateToProps
    const dispatch = useDispatch(); // mapDispatchToProps

    let {loading, error, users} = state;

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    return <div>
        {
            loading? <h1>Loading....</h1> : users.map(user => <h1 key={user.email}> {user.name}, {user.email}</h1>)
        }
    </div>
}


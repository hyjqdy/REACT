import { useApiCall } from "./ApiHook";

export default function CustomHookComponent () {
    let {done, data} = useApiCall("http://jsonplaceholder.typicode.com/users");
    if(!done) return <h1> Loading .....</h1>
    else {
        return <>
          {
            data.map(user => <h2 key={user.id}>{user.name}</h2>)
          }
        </>
    }

}
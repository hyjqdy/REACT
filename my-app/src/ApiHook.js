import React from 'react';

export function useApiCall(uri) {
    const [data, setData] = React.useState(null);
    const [done, isDone] = React.useState(false);

    React.useEffect(() => {
        // IIFE
        (async () => {
            let response = await fetch(uri);
            let retData = await response.json();
            setData(retData);
            isDone(true); 
        })();
    },[uri]);

    return {
        done,
        data
    }
}
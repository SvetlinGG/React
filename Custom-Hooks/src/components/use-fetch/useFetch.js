import { useEffect, useState } from "react";

export default function useFetch(url, initialState, transform = data => data ){
    const [data, setData] = useState(initialState);


    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(result => setData(transform(result)))
        .catch(err => alert(err.message));
    }, [url]);


    return [
        data,
        setData
    ]
}
 
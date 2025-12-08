import { useEffect, useState } from "react";

export default function useFetch(url, initialState ){
    const [data, setData] = useState(initialState);


    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(result => setData(result.results))
        .catch(err => alert(err.message));
    }, [url]);


    return [
        data,
        setData
    ]
}
 
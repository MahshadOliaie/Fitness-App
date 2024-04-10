import { useEffect, useState } from "react"



function useFetch(url , dependency) {
    const [data, setData] = useState([])

    useEffect(() => {

        fetch(url, {
            headers: { 'X-Api-Key': 'hYvUzuDQpZu/odwBI/6Abg==T3kgV51IrePL78hW' },
            contentType: 'application/json',
        })
            .then(res => res.json())
            .then(data => setData(data))

    }, [dependency])


    return data;

}

export default useFetch
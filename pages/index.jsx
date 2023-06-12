import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";

const home = () => {
    const [isData, setIsData] = useState([]);

    const { isLoading, error, data } = useQuery('portfolio', () =>
        axios.get('api/Data')
            .then(({ data }) => setIsData(data))
            .catch(error => console.error('Error fetching testimonials:', error)))


    if (isLoading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>
    console.log(isData)
    return (
        <div className="PARENT text-white text-4xl">
            hahahh
        </div>
    )
}

export default home
import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";

const home = () => {
    const [apiData, setApiData] = useState([]);

    const { isLoading, error, data } = useQuery('portfolio', () =>
        axios.get('api/Data')
            .then(({ data }) => setApiData(data[0]))
            .catch(error => console.error('Error fetching testimonials:', error)))


    if (isLoading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>
    // console.log(apiData)

    console.log("Question 1: ", apiData?.DataProvider?.global?.positions?.filter(obj => obj.type === 'DIRECTOR').length)
    console.log("Question 2: ", apiData?.DataProvider?.global?.positions?.filter(obj => obj.type === 'SHAREHOLDER').length)
    console.log("Question 3: ", apiData?.DataProvider?.global?.positions?.map(position => position.profile.name))
    console.log("Question 4: ", 'Based on the provided JSON object, "Product B" is categorized as "Hardware".')
    console.log("Question 4B: ", 'Yes, based on the provided JSON object, "Product A" has a price of 100')
    console.log("Question 4C: ", 'No, according to the provided JSON object, the launch date of "Product B" is "2010-06-01T00:00:00.000Z," which corresponds to the 1st of June 2010.')

    const effectiveDate = new Date(apiData?.DataProvider?.effectiveDate);
    const formattedDate = `${effectiveDate.getFullYear()}-${effectiveDate.toLocaleString('default', { month: 'short' })}-${effectiveDate.getDate()}`;
    console.log("Question 5: ", 'Formatted effective date:', formattedDate);
    console.log("Question 6: ", 'DataProvider.global.positions[2].profile.email');

    const positionHolders = apiData?.DataProvider.global.positions;
    const uniqueEmailDomains = [...new Set(positionHolders.map(holder => holder.profile.email.split('@')[1]))];

    console.log('Question 7: ', uniqueEmailDomains);
    console.log("Question 8: ", apiData?.DataProvider?.global?.positions?.filter(position => position.type === 'DIRECTOR').map(director => ({ name: director.profile.name, email: director.profile.email })));

    // Questin #09
    function getPositionHoldersByDomain(emailDomain) {
        const positionHolders = apiData?.DataProvider.global.positions;
        const filteredPositionHolders = positionHolders.filter(holder => holder.profile.email.endsWith(`@${emailDomain}`));
        const positionHolderDetails = filteredPositionHolders.map(holder => ({ name: holder.profile.name, email: holder.profile.email, _id: holder._id }));

        return positionHolderDetails;
    }

    // usage:
    const emailDomain = 'example.com'; // you can try gmail.com , smith.com, johnson.com etc all given in data
    console.log("Question 9: ", getPositionHoldersByDomain(emailDomain));


    // Questin #10
    function getTopShareholders() {
        const positionHolders = apiData?.DataProvider.global.positions;
        const shareholdings = apiData?.DataProvider.shareholdings;

        const shareholderDetails = positionHolders
            .filter(holder => holder.type === 'SHAREHOLDER' && holder.profile.email.endsWith('example.com'))
            .map((holder, index) => ({
                name: holder.profile.name,
                email: holder.profile.email,
                shares: shareholdings[index]
            }))
            .sort((a, b) => b.shares - a.shares)
            .slice(0, 3); //first 3

        return shareholderDetails;
    }

    // usage:
    console.log("Question 10: ", getTopShareholders());


    return (
        <div className="flex flex-col gap-y-10 items-center justify-center text-white text-3xl my-10">
            <span>Check the index page in App directory</span>
            <span>OR</span>
            <span>Check the Consoles Tab to see the results</span>
        </div>
    )
}

export default home
import React, { useEffect, useState } from 'react';

const DriverSearch = () => {
    const [drivers, setDrivers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredDrivers, setFilteredDrivers] = useState([]);

    useEffect(() => {
        // Fetch drivers data from the API
        fetch(`https://api.openf1.org/v1/drivers`)
            .then(response => response.json())
            .then(data => {
                setDrivers(data);
                setFilteredDrivers(data);
            })
            .catch(error => {
                console.error('Error fetching drivers:', error);
            });
    }, []);
    console.log(drivers);
    // Handle search input change
    const handleSearchChange = (event) => {
       
        setSearchTerm(term);
        const filtered = drivers.filter(driver =>
            driver.full_name.toLowerCase.includes(term) ||
            driver.team_name.toLowerCase().includes(term)
        );
        setFilteredDrivers(filtered);
    };

    return (
        <div>
            <h1>F1 Drivers Search</h1>
           <form action="" onSubmit={handleSearchChange}>
           <input
                type="text"
                placeholder="name, number or team..."
                value={searchTerm}  
                onChange={(e)=>{
                    setSearchTerm(e.target.value);
                    console.log(searchTerm);
                }}
            />
            <button type='submit' >Search</button>

           </form>
            
            <ul>
                {filteredDrivers.slice(0,20).map(driver => (
                    <li key={driver.driver_number} style={{ border: `2px solid #${driver.team_colour}`, marginBottom: '10px', padding: '10px' }}>
                        <img src={driver.headshot_url} alt={`${driver.full_name}`} style={{ width: '100px', borderRadius: '50%' }} />
                        <h2>{driver.full_name}</h2>
                        <p>Driver Number: {driver.driver_number}</p>
                        <p>Team: {driver.team_name}</p>
                        <p>Country: {driver.country_code}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DriverSearch;

import React, { useEffect, useState } from 'react';
import { fetchCountries } from '../services/apiService';
import './CountryTable.css';

const CountryTable = () => {
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedRegion, setSelectedRegion] = useState('');

    useEffect(() => {
        const loadCountries = async () => {
            try {
                const data = await fetchCountries();
                setCountries(data);
                setFilteredCountries(data);
            } catch (error) {
                console.error('Failed to fetch countries:', error);
            }
        };
        loadCountries();
    }, []);

    useEffect(() => {
        let filtered = countries;

        // Filter by search term
        if (searchTerm) {
            filtered = filtered.filter((country) =>
                country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Filter by selected region
        if (selectedRegion) {
            filtered = filtered.filter((country) => country.region === selectedRegion);
        }

        setFilteredCountries(filtered);
    }, [searchTerm, selectedRegion, countries]);

    return (
        <div className="table-container">
            <h1 className="table-title">Countries Dashboard</h1>

            {/* Search and Filter Options */}
            <div className="filters">
                <input
                    type="text"
                    placeholder="Search by country name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
                <select
                    value={selectedRegion}
                    onChange={(e) => setSelectedRegion(e.target.value)}
                    className="region-filter"
                >
                    <option value="">Filter by region</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>

            {/* Table */}
            <table className="countries-table">
                <thead>
                    <tr>
                        <th>Flag</th>
                        <th>Name</th>
                        <th>Population</th>
                        <th>Region</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredCountries.map((country) => (
                        <tr key={country.cca3}>
                            <td>
                                <img
                                    src={country.flags.png}
                                    alt={country.name.common}
                                    width="50"
                                    className="country-flag"
                                />
                            </td>
                            <td>{country.name.common}</td>
                            <td>{country.population.toLocaleString()}</td>
                            <td>{country.region}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CountryTable;

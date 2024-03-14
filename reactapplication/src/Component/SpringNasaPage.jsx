import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SpringNasaPage.css';

const SpringNasaPage = () => {
    const [formData, setFormData] = useState({
        selectedDate: '_',
        fromDate: '_',
        toDate: '_',
        count: 0
    });
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [clearFeedback, setClearFeedback] = useState(null);

    // Update form data
    const updateFormData = (field, value) => {
        setFormData({
            ...formData,
            [field]: value
        });
    };

    // Clear inputs and provide feedback to the user
    const clearInputs = () => {
        setFormData({
            selectedDate: '_',
            fromDate: '_',
            toDate: '_',
            count: 0
        });

        setClearFeedback('Inputs cleared successfully!');

        setTimeout(() => {
            setClearFeedback(null);
        }, 3000);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                let url = 'http://localhost:8080/springapod';
                const { selectedDate, fromDate, toDate, count } = formData;

                if (selectedDate !== '_') {
                    url += `?date=${selectedDate}`;
                } else if (fromDate !== '_' && toDate !== '_') {
                    url += `?start_date=${fromDate}&end_date=${toDate}`;
                } else if (count > 0) {
                    url += `?count=${count}`;
                } else {
                    const today = new Date().toISOString().split('T')[0];
                    url += `?date=${today}`;
                }

                const response = await axios.get(url);

                setData(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [formData]);

    return (
        <div>
            <h1>Spring Nasa Page</h1>

            <div className="navbar">
                <div className="input-container">
                    <label>
                        Select Date:
                        <input
                            type="date"
                            value={formData.selectedDate}
                            onChange={(e) => updateFormData('selectedDate', e.target.value)}
                        />
                    </label>
                </div>

                <div className="input-container">
                    <label>
                        From Date:
                        <input
                            type="date"
                            value={formData.fromDate}
                            onChange={(e) => updateFormData('fromDate', e.target.value)}
                        />
                    </label>
                </div>

                <div className="input-container">
                    <label>
                        To Date:
                        <input
                            type="date"
                            value={formData.toDate}
                            onChange={(e) => updateFormData('toDate', e.target.value)}
                        />
                    </label>
                </div>

                <div className="input-container">
                    <label>
                        Image Count:
                        <input
                            type="number"
                            value={formData.count}
                            onChange={(e) => updateFormData('count', e.target.value)}
                        />
                    </label>
                </div>
            </div>

            <button onClick={clearInputs}>Clear</button>

            {clearFeedback && <p>{clearFeedback}</p>}
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}

            {data !== null && Array.isArray(data) && data.length > 0 ? (
                <ul>
                    {data.map((item, index) => (
                        <li key={index}>
                            <h2>{item.title}</h2>
                            <p>Date: {item.date}</p>
                            <p>Explanation: {item.explanation}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No data available.</p>
            )}
        </div>
    );
};

export default SpringNasaPage;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './SpringNasaComponent.css';

const SpringNasaComponent = () => {
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [clearFeedback, setClearFeedback] = useState(null);
  const [formData, setFormData] = useState({
    selectedDate: '',
    fromDate: '',
    toDate: '',
    count: 0
  });

  const updateFormData = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  const clearInputs = () => {
    setFormData({
      selectedDate: '',
      fromDate: '',
      toDate: '',
      count: 0
    });
  setClearFeedback('Inputs cleared successfully!');
  setTimeout(() => {
      setClearFeedback(null);
    }, 3000);
  };

  const fetchAPODImage = async (date) => {
    try {
      setLoading(true);
    let url = `https://api.nasa.gov/planetary/apod?api_key=LUaz0QCBUBaFXeRpCcOpBDLLg1Sb4wydlV8r0hU3`;
    
    if (date) {
      url += `&date=${date}`;
    }
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error('Failed to fetch image');
    }
    
    const imageData = await response.json();
    setBackgroundImage(imageData.url);
    console.log(backgroundImage);
    } catch (error) {
      console.error('Error fetching image:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchData = async () => {
    try {
      setLoading(true);

      let url = 'http://localhost:8080/springapod';
      const { selectedDate, fromDate, toDate, count } = formData;

      if (selectedDate !== '') {
        url += `?date=${selectedDate}`;
      } else if (fromDate !== '' && toDate !== '') {
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

useEffect(() => {
    if (formData.selectedDate) {
      fetchAPODImage(formData.selectedDate);
    }
  }, [formData.selectedDate]);

useEffect(() => {
  console.log('Component rerendered'); 
    fetchAPODImage();
    fetchData();
  }, [formData]);

  return (
    <div>
      <section className="hero" style={{ backgroundImage: `url(${backgroundImage})`}}>
        <div className="content">
          <h1 className="explanation-font-white">Spring Nasa API</h1>
          <ul style={{ listStyle: 'none' }}>
            {data.map((item, index) => (
              <li key={index} style={{ paddingLeft: '1em' }}>
                <p className="explanation-font-white">Date: {item.date}</p>
                <h2 className="explanation-font-white">{item.title}</h2>
                {/* <img src={item.url} alt={item.title} style={{ maxWidth: '100%' }} /> */}
                <p className="explanation-font-white">Explanation: {item.explanation}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* <h1>Spring Nasa Page</h1> */}
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

      <div className="content">
      <button onClick={clearInputs}>Clear</button>

      {clearFeedback && <p>{clearFeedback}</p>}
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}

      {data !== null && Array.isArray(data) && data.length > 0 ? (
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              <h2 className="explanation-font-black">{item.title}</h2>
              <p className="explanation-font-black" >Date: {item.date}</p>              
              <img src={item.url} alt={item.title} style={{ maxWidth: '100%' }} />
              <p className="explanation-font-black" >Explanation: {item.explanation}</p>
            </li>
          ))}
        </ul>
      //   <ul style={{ listStyle: 'none' }}>
      //   {data.map((item, index) => (
      //     <li key={index} style={{ paddingLeft: '1em' }}>
      //       <p>Date: {item.date}</p>
      //       <h2>{item.title}</h2>
      //       <p className="explanation">Explanation: {item.explanation}</p>
      //     </li>
      //   ))}
      // </ul>
      ) : (
        <p>No data available.</p>
      )}
      </div>
    </div>
  );
};

export default SpringNasaComponent;
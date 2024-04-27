import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import useStore from '../store';
import axios from 'axios';
import './SpringNasaComponent.css';

const SpringNasaComponent = ({ dataFromParent }) => {
  const navigate = useNavigate();
  const [backgroundImage, setBackgroundImage] = useState(null);
  const data = useStore((state) => state.data);
  const setData = useStore((state) => state.setData);
  // const fetchData = useStore((state) => state.fetchData);
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
    // let url = `https://api.nasa.gov/planetary/apod?api_key=LUaz0QCBUBaFXeRpCcOpBDLLg1Sb4wydlV8r0hU3`;
    let url = `http://localhost:8080/springapod`;
    
    if (date) {
      const separator = url.includes('?') ? '&' : '?';
      url += `${separator}date=${date}`;
    }
    else {
      const currentDate = new Date();
      const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)
        .toString()
        .padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;
      url += `&date=${formattedDate}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      mode: 'no-cors'
    });
    // console.log(url);
    // console.log(response);

    // const response2 = await fetch(url2);
    // console.log(url2);
    // console.log(response2);
    
    if (!response.ok) {
      throw new Error('Failed to fetch image');
    }
    
    // const imageData = await response.json();
    // setBackgroundImage(imageData.url);
    // console.log(backgroundImage);
    }
     catch (error) {
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
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:8080/springapod');
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, []);

// useEffect(() => {
//   fetch_Data();
// }, [fetch_Data]);

const handleButtonClick = () => {
  navigate('/secondPage');
};
  
useEffect(() => {
    if (formData.selectedDate) {
      fetchAPODImage(formData.selectedDate);
    }
    fetchAPODImage();
    fetchData();
  }, [formData.selectedDate]);

useEffect(() => {
  console.log('Component rerendered'); 
    fetchAPODImage();
    fetchData();
  }, [formData]);

  useEffect(() => {
    fetchData();
  }, [formData]);  

  return (
    <div>
      <section className="hero" style={{ backgroundImage: `url(${backgroundImage})`}}>
        <div className="content">
          <h1 className="explanation-font-white">Spring Nasa API</h1>
          <ul style={{ listStyle: 'none' }}>
            {data.map((item, index) => (
              <li key={index} style={{ paddingLeft: '0px' }}>
                <p className="explanation-font-white">Date: {item.date}</p>
                <h2 className="explanation-font-white">{item.title}</h2>
                {/* <img src={item.url} alt={item.title} style={{ display: '100%' }} /> */}
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

      {/* Button to navigate to the second page */}
      <button onClick={handleButtonClick}>Go to Second Page</button>

      {clearFeedback && <p>{clearFeedback}</p>}
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}

      {data !== null && Array.isArray(data) && data.length > 0 ? (
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              <h2 className="explanation-font-black">{item.title}</h2>
              <p className="explanation-font-black" >Date: {item.date}</p>              
              <img className="hero" src={item.url} alt={item.title} style={{ maxWidth: '100%' }} />
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
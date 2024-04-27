import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SecondPage.css';

const SecondPage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [backgroundImage, setBackgroundImage] = useState(null);
  
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
  
    return (
      <div>
        <section className="hero" style={{ backgroundImage: `url(${backgroundImage})`}}>
            <div className="content">
                <h1 className="explanation-font-white">Spring Nasa API</h1>
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error.message}</p>}
                {data.map((item, index) => (
                <div key={index}>
                    {/* Render data from the API response */}
                    <p className="explanation-font-white">Date: {item.date}</p>
                    <p className="explanation-font-white">Title: {item.title}</p>
                    <img src={item.url} alt={item.title} />
                    <p className="explanation-font-white" >Explanation: {item.explanation}</p>
                </div>
                ))}
            </div>
        </section>
      </div>
    );
  };


{/* // const SecondPage = ({ data }) => { 
//   return (
//     <div>
//       <h1>Second Page</h1>
//       <h2>Content</h2><br/>
//       {/* Display the data received from props */}
//       {data !== null && Array.isArray(data) && data.length > 0 ? (
//         <ul>
//           {data.map((item, index) => (
//             <li key={index}>
//               <h2>{item.title}</h2>
//               <p>Date: {item.date}</p>
//               <img src={item.url} alt={item.title} style={{ maxWidth: '100%' }} />
//               <p>Explanation: {item.explanation}</p>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No data available.</p>
//       )}
//     </div>
//   );
// };*/}

export default SecondPage;

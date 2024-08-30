import React, { useState, useEffect } from "react";
import "./TaskThree.css";
import { Link } from "react-router-dom";

function TaskThree() {
  // State to hold data fetched from API
  const [data, setData] = useState([]);
  // State to manage current page
  const [currentPage, setCurrentPage] = useState(1);
  // State to manage loading status
  const [loading, setLoading] = useState(false);
  // Number of cards per page
  const cardsPerPage = 10;

  // Function to fetch data from an API
  const fetchData = async (page) => {
    setLoading(true); // loading is set to true till data is not fetched
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos`
      );
      const result = await response.json();
      // console.log(result[0]);
      setData(result);
    } catch (error) {
      console.error("Error occured in fetching data:", error);
      alert("Error occured in fetching the data");
    }
    setLoading(false); // after getting the data or not able to fetch the data set loading to false.
  };

  // Fetch data whenever the currentPage changes
  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  // Calculate the number of pages required to show all the cards
  const totalPages = Math.ceil(5000 / cardsPerPage); // 5000 is total objects in the array from API i.e 5k is the total card number.

  // Calculate the indices for slicing the data array
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentData = data.slice(indexOfFirstCard, indexOfLastCard); // extracting the 10 cards per page from the whole array of cards i.e data.
  

  // Handle page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  return (
    <div className="paginated-card-view">
      {loading ? (
        <p>Loading...</p> // till loading is true show this as data is not yet fetched from the api.
      ) : (
        // as the data is fetched from the api set the loading to false and exceutes this code.
        <div className="card-container">
          {currentData.map((item) => (
            <div key={item.id} className="card">
              <img src={item.url} width="90%" />
              <h3>{item.title}</h3>
              <p>
                <span>{item.title}</span>
                <span>{item.thumbnailUrl}</span>
              </p>
              <Link to={item.thumbnailUrl}>Click Here</Link>
            </div>
          ))}
        </div>
      )}
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default TaskThree;

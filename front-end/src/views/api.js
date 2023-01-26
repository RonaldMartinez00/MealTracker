import React, { useState, useEffect } from 'react';

function Api() {
  const [data, setData] = useState(null);

  async function fetchData() {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const json = await response.json();
    setData(json);
  }

  return (
    <div>
      <button onClick={fetchData}>Get Random Meal</button>
      {data && (
        <div>
          <img src={data.meals[0].strMealThumb} alt={data.meals[0].strMeal}/>
          <p>Meal Name: {data.meals[0].strMeal}</p>
          <p>Meal Category: {data.meals[0].strCategory}</p>
          <p>Meal Instructions: {data.meals[0].strInstructions}</p>
        </div>
      )}
    </div>
  );
}

export default Api;
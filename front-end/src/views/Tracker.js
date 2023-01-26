import React, { useContext, useState , useEffect} from 'react';
import DatePicker from "react-datepicker";
import Logoutbtn from '../components/logout';
import {CurrentUser} from '../context/currentuser';
import "react-datepicker/dist/react-datepicker.css";
 /*const [mealname, setMealname]= useState(null);
    const [calories, setCalories] = useState(null);
    const [carbs, setCarbs]= useState(null);
    const [fat, setFat]= useState(null);
    const [protein,setProtein]= useState(null);*/


function Tracker() {
    const [date, onChange] = useState( new Date());
    const {currentUser}= useContext(CurrentUser);
    const [meals,setMeals]=useState([]);
    console.log(meals)
    console.log(currentUser)
    useEffect(() =>{
        const start = new Date(date);
        start.setHours(0, 0, 0, 0);
        const end = new Date(date);
        end.setHours(23, 59, 59, 999);
        fetch(`http://localhost:5000/meals/${currentUser._id}/${start}/${end}`, {
            method: 'GET',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' }
        }) 
        .then((response) => response.json())
        .then((data) => {
            setMeals(data)// Do something with the data
            
        })
        .catch((error) => {
            console.error(error);
        });
    },[date, currentUser]);

    
    return (
        <div>
            <DatePicker 
                selected={date} 
                onChange= {onChange} value={date}
                dateFormat=	"y-MM-dd"
                timeCaption="time"
            />
            {meals.map((meal) => (
                <div key={meal._id}>
                    <h2>{meal.mealname}</h2>
                    <p>{meal.carbs}</p>
                    <p>{meal.calories}</p>
                    <p>{meal.fat}</p>
                    <p>{meal.protein}</p>
                </div>
            ))}
            <Logoutbtn />

        </div>
    );
};

export default Tracker
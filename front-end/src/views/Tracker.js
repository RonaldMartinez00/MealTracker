import React, { useContext, useState , useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import Logoutbtn from '../components/logout';
import {CurrentUser} from '../context/currentuser';
import "react-datepicker/dist/react-datepicker.css";
 /*const [mealname, setMealname]= useState(null);
    const [calories, setCalories] = useState(null);
    const [carbs, setCarbs]= useState(null);
    const [fat, setFat]= useState(null);
    const [protein,setProtein]= useState(null);*/
// GET userid from currentUser 
// getting date alr so all good 

function GetMeals() {
    const navigate = useNavigate();
    const [date, onChange] = useState( new Date());
    const {currentUser}= useContext(CurrentUser);
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
        console.log(data)// Do something with the data
    })
    .catch((error) => {
        console.error(error);
    });
    },[date]);
    console.log(date);
    return (
        <div>
            <DatePicker 
                selected={date} 
                onChange= {onChange} value={date}
                dateFormat=	"y-MM-dd"
                timeCaption="time"
            />
                    <div>
            {this.state.meals.map((meal) => (
                <div key={meal._id}>
                    <h2>{meal.name}</h2>
                    <p>{meal.description}</p>
                    <p>{meal.calories}</p>
                    <p>{meal.createdAt}</p>
                </div>
            ))}
        </div>
            <Logoutbtn />

        </div>
    );
};


export default GetMeals
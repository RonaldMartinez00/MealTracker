import React, { useContext, useState , useEffect} from 'react';
import DatePicker from "react-datepicker";
import Logoutbtn from '../components/logout';
import {CurrentUser} from '../context/currentuser';
import "react-datepicker/dist/react-datepicker.css";
import {useNavigate} from 'react-router-dom'


function Tracker() {
    const {currentUser}= useContext(CurrentUser);
    const navigate = useNavigate()
    const [date, onChange] = useState( new Date());
    const [meals,setMeals]=useState([]);
    const [updatemeals,setUpdateMeals] = useState(false)
    useEffect(() =>{
        if (currentUser) {
            if(!updatemeals){
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

            } else {
                setUpdateMeals(false)
            }
 
        }
    },[date, currentUser,updatemeals]);

    //delete route
    async function deletedMeal(id) {
        try { 
            await fetch(`http://localhost:5000/meals/${id}`, {
                method: 'DELETE'
            })  
            setUpdateMeals(true)
        } catch (err){
            console.error(err)

        }
    };



    
    return (
        <div>
            {currentUser ? <p>{currentUser.userfirstname}, {currentUser._id}</p> : null}
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
                    <button onClick={() => deletedMeal(meal._id)}>Delete Meal</button>
                </div>
            ))}
                <button onClick={() => navigate('/mealform')}>Create A Meal!</button>
            <Logoutbtn />

        </div>
    );
};

export default Tracker
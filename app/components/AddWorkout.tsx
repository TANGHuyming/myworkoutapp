"use client"
import { useState } from "react";
import { FaWeightHanging } from "react-icons/fa";
import ExerciseList from "./ExerciseList";

export default function AddWorkout() {
    const [date, setDate] = useState<Date>(new Date());
    const [sets, setSets] = useState<number>(0);
    const [reps, setReps] = useState<number>(0);
    const [weight, setWeight] = useState<number>(0);
    const [notes, setNotes] = useState<string>("");
    const [showExercises, setShowExercises] = useState<boolean>(false);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed, add 1
    const day = String(date.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    const inputStyling = "p-2 rounded-md border border-gray-500";
    const buttonStyling = "rounded-md border border-green-500 p-2 bg-green-200 cursor-pointer hover:bg-green-300 ease-in-out duration-300";
    
    const handleSubmit = (e: any) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
        setDate(new Date());
        setSets(0);
        setReps(0);
        setWeight(0);
        setNotes("")
    };

    const handleClick = () => {
        console.log("I've been clicked!");
        if(showExercises) { setShowExercises(false) }
        else {setShowExercises(true)}
    }

    return (
        <div className="p-10 bg-gray-300 flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold mb-5 flex flex-row justify-center items-center gap-5">
                <FaWeightHanging className="expand text-2xl"/>
                Add Your Workout
                <FaWeightHanging className="expand text-2xl"/>
            </h2>
            <form onSubmit={(e) => handleSubmit(e)} className="grid grid-cols-2 justify-center items-center w-9/10 gap-2 bg-gray-200 px-5 py-10 rounded-xl shadow-xl shadow-gray-400">
                <label htmlFor="date">Enter Date: </label>
                <input className={inputStyling} type="date" name="date" id="date" value={formattedDate} onChange={(e) => setDate(new Date(e.target.value))}/>

                <label htmlFor="workout">Choose Your Exercise: </label>
                <button className={buttonStyling} id="exercise" name="exercise" onClick={() => handleClick()}>Exercise List</button>

                <div className="col-span-2">
                    {showExercises && <ExerciseList />}
                </div>

                <label htmlFor="sets">Enter your sets: </label>
                <input className={inputStyling} type="number" name="sets" id="sets" value={String(sets)} onChange={(e) => setSets(Number(e.target.value))}/>

                <label htmlFor="reps">Enter your reps: </label>
                <input className={inputStyling} type="number" name="reps" id="reps" value={String(reps)} onChange={(e) => setReps(Number(e.target.value))}/>

                <label htmlFor="weight">Enter the weight (kg): </label>
                <input className={inputStyling} type="number" name="weight" id="weight" value={String(weight)} onChange={(e) => setWeight(Number(e.target.value))}/>

                <label htmlFor="notes">Additional notes: </label>
                <textarea className={inputStyling} name="notes" id="notes" rows={5} value={notes} onChange={(e) => setNotes(e.target.value)}/>

                <button className={`${buttonStyling} col-span-2`} type="submit">Submit</button>
            </form>
        </div>
    );
}
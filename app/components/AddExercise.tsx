"use client";
import { useState } from "react";
import {inputStyling, buttonStyling} from "./AddSet";
import { BsPersonArmsUp } from "react-icons/bs";
import { GiHieroglyphLegs } from "react-icons/gi";

export default function AddExercise() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log("Exercise submitted");
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
        setName("");
        setDescription("");
        setImage(null);
    }

    const handleImage = (e: any) => {
        const file = e.target.files[0];
        if(file) {
            setImage(file);
        }
    }

    return(
        <div className="p-10 flex flex-col justify-center items-center select-none">
            <h2 className="text-3xl font-bold mb-5 flex flex-row justify-center items-center gap-5">
                <BsPersonArmsUp className="expand text-2xl"/>
                Add Exercises
                <GiHieroglyphLegs className="expand text-2xl"/>
            </h2>

            <form onSubmit={(e) => handleSubmit(e)}
                className="grid grid-cols-2 w-8/10 justify-center items-center gap-2 p-5 rounded-lg bg-gray-200 shadow-lg shadow-gray-500"    
            >
                <label htmlFor="name">Enter the exercise name: </label>
                <input className={inputStyling} type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
            
                <label htmlFor="description">Enter the exercise description: </label>
                <textarea className={inputStyling} name="description" id="description" rows={5} value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            
                <label htmlFor="image">Enter the exercise image: </label>
                <input className={inputStyling} type="file" name="image" id="image" onChange={(e) => handleImage(e)}/>

                <button className={`${buttonStyling} col-span-2`} type="submit">Add Exercise</button>
            </form>

        </div>
    );
}
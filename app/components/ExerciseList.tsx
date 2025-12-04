import { useState, useEffect } from "react";
import ExerciseCard from "./ExerciseCard";
import ExerciseCard2 from "./ExerciseCard2";
import { IoIosSearch } from "react-icons/io";
import { IoFilter } from "react-icons/io5";
import { MdClear } from "react-icons/md";
import bicepCurl from "../../public/bicepCurl.jpg";

interface exerciseType {
    image: any,
    name: string,
    description: string,
    setIsAdded: any,
}

export default function ExerciseList({props} : {props: {exercise: exerciseType, setExercise: any, isAdded: boolean, setIsAdded: any}}) {
    const {exercise, setExercise, isAdded, setIsAdded} = props;

    // const {data} = props; // use later when db connection is established
    const [search, setSearch] = useState<string>("");
    const inputStyling = "p-1 rounded-md border border-gray-500 w-1/3";

    const handleClear = () => {
        console.log("Text is cleared");
        setSearch("");
    }

    const handleFilter = () => {
        console.log("Filter is clicked");
    }

    useEffect(() => {
        // query db for correct exercises
        console.log("You've searched for: ", search);
    }, [search])

    return(
        <div className="bg-gray-100 rounded-lg p-1">
            {!isAdded && 
                <>
                    <div className="flex flex-row justify-end items-center gap-2 p-2">
                        <input type="text" name="search" id="search" className={inputStyling} placeholder="search..." value={search} onChange={(e) => setSearch(e.target.value)}/>
                        <IoFilter className="text-xl cursor-pointer hover:-translate-y-1 duration-300 ease-in-out transition-all" onClick={handleFilter}/>
                        <MdClear className="text-xl cursor-pointer hover:-translate-y-1 duration-300 ease-in-out transition-all" onClick={handleClear}/>
                    </div>
                    <div className="grid grid-cols-4">
                        <ExerciseCard props={{image: bicepCurl, name: "Bicep Curl", description: "Stupinated bicep curl with dumbbells, barbell, etc", setIsAdded, setExercise}}/>
                    </div>
                </>
            }

            {isAdded &&
                <>
                    <ExerciseCard2 props={exercise}/>
                </>
            }
        </div>
    );
}
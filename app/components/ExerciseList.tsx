import ExerciseCard from "./ExerciseCard";

export default function ExerciseList() {
    // const {data} = props; // use later when db connection is established

    return(
        <div className="grid grid-cols-4 grid-rows-2 bg-gray-100">
            <ExerciseCard props={{image: "", name: "Bicep Curl", description: "Stupinated bicep curl with dumbbells, barbell, etc"}}/>
            <ExerciseCard props={{image: "", name: "Bicep Curl", description: "Stupinated bicep curl with dumbbells, barbell, etc"}}/>
            <ExerciseCard props={{image: "", name: "Bicep Curl", description: "Stupinated bicep curl with dumbbells, barbell, etc"}}/>
            <ExerciseCard props={{image: "", name: "Bicep Curl", description: "Stupinated bicep curl with dumbbells, barbell, etc"}}/>
            <ExerciseCard props={{image: "", name: "Bicep Curl", description: "Stupinated bicep curl with dumbbells, barbell, etc"}}/>
            <ExerciseCard props={{image: "", name: "Bicep Curl", description: "Stupinated bicep curl with dumbbells, barbell, etc"}}/>
            <ExerciseCard props={{image: "", name: "Bicep Curl", description: "Stupinated bicep curl with dumbbells, barbell, etc"}}/>
            <ExerciseCard props={{image: "", name: "Bicep Curl", description: "Stupinated bicep curl with dumbbells, barbell, etc"}}/>
            <ExerciseCard props={{image: "", name: "Bicep Curl", description: "Stupinated bicep curl with dumbbells, barbell, etc"}}/>
        </div>
    );
}
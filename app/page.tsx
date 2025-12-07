import AddSet from "./components/AddSet";
import AddExercise from "./components/AddExercise";
import MaxRepChart from "./components/MaxRepChart";
import WorkoutTimer from "./components/WorkoutTimer";

export default function Home() {
  return (
    <div className="">
      <AddSet />
      <AddExercise />
      <MaxRepChart />
      <WorkoutTimer />
    </div>
  );
}

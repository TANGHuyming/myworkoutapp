import AddSet from "./components/AddSet";
import AddExercise from "./components/AddExercise";
import MaxRepChart from "./components/MaxRepChart";
import WorkoutTimer from "./components/WorkoutTimer";
import Welcome from "./components/Welcome";

export default function Home() {
  return (
    <div className="">
      <Welcome />
      <AddSet />
      <AddExercise />
      <MaxRepChart />
      <WorkoutTimer />
    </div>
  );
}

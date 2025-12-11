import AddSet from "./_components/AddSet";
import AddExercise from "./_components/AddExercise";
import MaxRepChart from "./_components/MaxRepChart";
import WorkoutTimer from "./_components/WorkoutTimer";
import Welcome from "./_components/Welcome";

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

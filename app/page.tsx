import Image from "next/image";
import AddSet from "./components/AddSet";
import AddExercise from "./components/AddExercise";
import MaxRepChart from "./components/MaxRepChart";

export default function Home() {
  return (
    <div className="">
      <AddSet />
      <AddExercise />
      <MaxRepChart />
    </div>
  );
}

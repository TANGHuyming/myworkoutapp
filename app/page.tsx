import Image from "next/image";
import AddSet from "./components/AddSet";
import AddExercise from "./components/AddExercise";

export default function Home() {
  return (
    <div className="">
      <AddSet />
      <AddExercise />
    </div>
  );
}

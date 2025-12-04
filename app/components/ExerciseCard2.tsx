import Image from "next/image";
import { handleView } from "./ExerciseCard";

export default function ExerciseCard2({props} : {props: {image: any, name: string, description: string, setIsAdded: any}}) {
    const {image, name, description, setIsAdded} = props;

    return (
        <div className="bg-white grid grid-cols-2 m-2 rounded-lg shadow-md shadow-gray-300 select-none">
            <Image
                src={image}
                alt="image of exercise"
                width={1000}
                height={1000}
                className="rounded-l-lg w-full h-full overflow-clip object-cover"
            ></Image>
            <div className="grid grid-rows-3 mx-5">
                <h2 className="text-left text-xl font-semibold justify-self-start self-center">{name}</h2>
                <p className="text-left text-md justify-self-start self-start">{description}</p>
                <div className="grid grid-cols-2 justify-self-center gap-5 w-full">
                    <button type="button" className="text-md rounded-md border border-red-500 bg-red-200 cursor-pointer hover:bg-red-300 ease-in-out duration-300 h-3/5 self-center" onClick={() => setIsAdded(false)}>Remove</button>
                    <button type="button" className="text-md rounded-md border border-blue-500 bg-blue-200 cursor-pointer hover:bg-blue-300 ease-in-out duration-300 h-3/5 self-center" onClick={handleView}>View</button>
                </div>
            </div>
        </div>
    );
}
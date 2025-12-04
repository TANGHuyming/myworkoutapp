import Image from "next/image";

export default function ExerciseCard({props} : {props: {image: string, name: string, description: string}}) {
    const {image, name, description} = props;

    return(
        <div className="bg-white grid grid-cols-1 grid-rows-[minmax(100px,1fr)_35px_50px_35px] m-2 rounded-lg shadow-md shadow-gray-300 hover:scale-110 transition-all ease-in-out duration-300 select-none">
            <Image
                src={image || ""}
                alt="image of exercise"
                width={1280}
                height={720}
                className="rounded-t-lg"
            ></Image>
            <h2 className="w-full text-center text-lg font-semibold justify-self-center self-center">{name}</h2>
            <p className="w-full text-center text-sm justify-self-center self-center">{description}</p>
            <div className="grid grid-cols-2 justify-self-center gap-5 w-9/10">
                <button className="text-sm rounded-md border border-green-500 bg-green-200 cursor-pointer hover:bg-green-300 ease-in-out duration-300 h-3/4 self-center">Add</button>
                <button className="text-sm rounded-md border border-blue-500 bg-blue-200 cursor-pointer hover:bg-blue-300 ease-in-out duration-300 h-3/4 self-center">View</button>
            </div>
        </div>
    );
}
"use client";
import { useState } from "react";

interface agendaType {
    exercise: string,
    averageWeight: number,
    averageReps: number,
    target: string,
}

export default function Welcome() {
    const [name, setName] = useState("User");
    const [workout, setWorkout] = useState("Push")
    const [agenda, setAgenda] = useState<agendaType[]>([
        { exercise: "Barbell Bench Press", averageWeight: 30, averageReps: 10, target: "Chest"},
    ]);

    return (
        <div className="select-none grid grid-cols-2 justify-center items-center min-h-[500px] gap-5 p-10">
            <h1 className="col-start-1 row-start-1 text-5xl font-bold self-end">Welcome Back, {name}!</h1>
            <h2 className="col-start-1 row-start-2 text-3xl font-bold self-start">Today is {workout}.</h2>

            <div className="col-start-2 row-span-2 flex flex-col justify-start items-center h-full gap-2">
                <h2 className="text-3xl font-bold text-center">Your workout agenda:</h2>
                <div className="overflow-y-scroll h-full w-full">
                    <table className="w-full bg-gray-200 shadow-lg shadow-gray-400">
                        <thead>
                            <tr className="agenda">
                                <th>Exercise</th>
                                <th>Average Weight</th>
                                <th>Average Reps</th>
                                <th>Target</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {
                                agenda.map((a, index) => {
                                    return (
                                        <tr className="agenda" key={index}>
                                            <td>{a.exercise}</td>
                                            <td>{a.averageWeight}</td>
                                            <td>{a.averageReps}</td>
                                            <td>{a.target}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
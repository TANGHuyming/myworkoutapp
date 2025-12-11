"use client";
import Chart from "chart.js/auto";
import { useEffect, useState } from "react";
import { GiWeightLiftingUp } from "react-icons/gi";
import { inputStyling, buttonStyling } from "./AddSet";
import { pixelifySans } from "../layout";

interface dataType {
    date: Date,
    exercise: String,
    maxWeight: Number,
};

export default function MaxRepChart() {
    const [weight, setWeight] = useState(0);
    const [reps, setReps] = useState(0);
    const [estimation, setEstimation] = useState(0);
    const data = [
        {date: new Date("2025-12-06T12:41:00Z"), exercise: "Squat", maxWeight: 100},
        {date: new Date("2026-12-06T12:41:00Z"), exercise: "Squat", maxWeight: 110},
        {date: new Date("2025-12-07T12:41:00Z"), exercise: "Deadlift", maxWeight: 110},
        {date: new Date("2026-12-07T12:41:00Z"), exercise: "Deadlift", maxWeight: 200},
        {date: new Date("2025-11-08T12:41:00Z"), exercise: "Benchpress", maxWeight: 40},
        {date: new Date("2026-11-08T12:41:00Z"), exercise: "Benchpress", maxWeight: 100},
    ]

    const createChart = (canvas: any, type: any, data: dataType[], filter: String, backgroundColor: String, borderColor: String) => {
        new Chart(
            canvas,
            {
                type: type,
                data: {
                    labels: data.filter((d) => d.exercise === filter).map((d) => {
                        return `${d.date.getFullYear()}/${d.date.getMonth()}/${d.date.getDate()}`
                    }),
                    datasets: [
                        {
                            label: `1RM By Date (KG)`,
                            data: data.filter((d) => d.exercise === filter).map((d) => {
                                return d.maxWeight;
                            }),
                            backgroundColor: backgroundColor,
                            borderColor: borderColor,
                        }
                    ]
                }
            }
        )
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData.entries());
        console.log(data);

        const brzycki = weight / (1.0278 - 0.0278 * reps);
        setEstimation(parseFloat(brzycki.toFixed(2)));
        setWeight(0);
        setReps(0);
    }

    useEffect(() => {
        const squatOneRmChart : HTMLCanvasElement = document.getElementById("squatOneRmChart") as HTMLCanvasElement;
        const deadliftOneRmChart : HTMLCanvasElement = document.getElementById("deadliftOneRmChart") as HTMLCanvasElement;
        const benchOneRmChart : HTMLCanvasElement = document.getElementById("benchOneRmChart") as HTMLCanvasElement;

        const charts = [
            {canvas: squatOneRmChart, line: "line", data, filter: "Squat", bg: "#726eff", bd: "#0800ff" },
            {canvas: deadliftOneRmChart, line: "line", data, filter: "Deadlift", bg: "#ff7575", bd: "#ff0000"},
            {canvas: benchOneRmChart, line: "line", data, filter: "Benchpress", bg: "#83ff7a", bd: "#11ff00"},
        ]

        for(let i = 0; i < charts.length; i++) {
            const chart = Chart.getChart(charts[i].canvas);
            if(chart) {
                chart.destroy();
            }
        }

        charts.map((chart) => createChart(chart.canvas, chart.line, chart.data, chart.filter, chart.bg, chart.bd))

    }, []);

    useEffect(() => {
        const result = document.getElementById("result") as HTMLHeadingElement;
        result.textContent = `${String(estimation)} Kg`;
    }, [estimation])

    return(
        <div className="bg-gray-300 p-10 grid grid-cols-2 justify-center items-center gap-2 select-none">
            <h2 className="text-3xl font-bold mb-5 flex flex-row justify-center items-center gap-5 col-span-2">
                <GiWeightLiftingUp className="text-2xl expand"/>
                Your Heaviest Lifts
            </h2>

            <div>
                <h2 className="wave text-xl font-semibold mb-5 flex flex-row justify-center items-center">Back Squat 1RM</h2>
                <canvas id="squatOneRmChart" className="bg-gray-200 p-2 rounded-lg shadow-lg shadow-gray-400"></canvas>
            </div>

            <div>
                <h2 className="wave text-xl font-semibold mb-5 flex flex-row justify-center items-center">Romanian Deadlift 1RM</h2>
                <canvas id="deadliftOneRmChart" className="bg-gray-200 p-2 rounded-lg shadow-lg shadow-gray-400"></canvas>
            </div>

            <div>
                <h2 className="wave text-xl font-semibold mb-5 flex flex-row justify-center items-center">Barbell Benchpress 1RM</h2>
                <canvas id="benchOneRmChart" className="bg-gray-200 p-2 rounded-lg shadow-lg shadow-gray-400"></canvas>
            </div>

            <div className="col-span-2 mt-10 flex flex-col justify-center items-center">
                <h2 className="text-3xl font-bold mb-5 flex flex-row justify-center items-center gap-5">
                    Estimate Your 1RM
                    <GiWeightLiftingUp className="text-2xl expand"/>
                </h2>

                <div className="grid grid-cols-2 grid-rows-2 justify-center items-center gap-5">
                    <dl className="col-start-1 row-start-1">
                        <dt className="font-bold italic">Brzycki Formula:</dt>
                        <dd className="ml-5">The formula used to estimate your maximum lifting weight using a lighter load that you can lift for multiple reps.</dd>
                        <dd className="m-5 bg-gray-200 text-center p-2 rounded-md shadow-lg shadow-gray-400">Estimation = Weight / (1.0278 - 0.0278 * Reps)</dd>
                    </dl>

                    <div className="col-start-1 row-start-2 h-full flex flex-col justify-start items-start gap-2">
                        <h2 className="text-2xl font-semibold">Your Estimated Heaviest Lift is: </h2>
                        <h2 id="result" className={`text-5xl font-bold ${pixelifySans.className}`}>{estimation} Kg</h2>
                    </div>

                    <form onSubmit={(e) => handleSubmit(e)} className="h-full col-start-2 row-span-2 grid grid-cols-2 p-5 gap-2 bg-gray-200 rounded-lg shadow-lg shadow-gray-400 justify-center items-center">
                        <label htmlFor="weight">Enter the weight (kg) that you can lift: </label>
                        <input className={inputStyling} type="number" id="weight" name="weight" required value={weight} onChange={(e) => setWeight(Number(e.target.value))}/>
                        <label htmlFor="reps">Enter the number reps that you lifted (Given {weight}kg):</label>
                        <input className={inputStyling} type="number" id="reps" name="reps" required value={reps} onChange={(e) => setReps(Number(e.target.value))}/>
                    
                        <button className={`col-span-2 ${buttonStyling}`} type="submit">Submit</button>
                    </form>
                    
                </div>
            </div>
        </div>
    );
}
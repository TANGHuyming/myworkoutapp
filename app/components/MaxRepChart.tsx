"use client";
import Chart from "chart.js/auto";
import { useEffect } from "react";

interface dataType {
    date: Date,
    exercise: String,
    maxWeight: Number,
};

export default function MaxRepChart() {
    // const oneRmChart : HTMLCanvasElement = document.getElementById("oneRmChart") as HTMLCanvasElement;
    const data = [
        {date: new Date("2025-12-06T12:41:00Z"), exercise: "Squat", maxWeight: 100},
        {date: new Date("2026-12-06T12:41:00Z"), exercise: "Squat", maxWeight: 110},
        {date: new Date("2025-12-07T12:41:00Z"), exercise: "Deadlift", maxWeight: 110},
        {date: new Date("2026-12-07T12:41:00Z"), exercise: "Deadlift", maxWeight: 200},
        {date: new Date("2025-11-08T12:41:00Z"), exercise: "Benchpress", maxWeight: 40},
        {date: new Date("2026-11-08T12:41:00Z"), exercise: "Benchpress", maxWeight: 100},

    ]

    const createChart = (canvas: any, type: any, data: dataType[], filter: String) => {
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
                        }
                    ]
                }
            }
        )
    }

    useEffect(() => {
        const squatOneRmChart : HTMLCanvasElement = document.getElementById("squatOneRmChart") as HTMLCanvasElement;
        const deadliftOneRmChart : HTMLCanvasElement = document.getElementById("deadliftOneRmChart") as HTMLCanvasElement;
        const benchOneRmChart : HTMLCanvasElement = document.getElementById("benchOneRmChart") as HTMLCanvasElement;
        
        const charts = [
            {canvas: squatOneRmChart, line: "line", data, filter: "Squat"},
            {canvas: deadliftOneRmChart, line: "line", data, filter: "Deadlift"},
            {canvas: benchOneRmChart, line: "line", data, filter: "Benchpress"},
        ]

        charts.map((chart) => createChart(chart.canvas, chart.line, chart.data, chart.filter))

    }, []);

    return(
        <div className="bg-gray-300 p-10 grid grid-cols-2 justify-center items-center gap-x-2 gap-y-4">
            <h2 className="text-3xl font-bold mb-5 flex flex-row justify-center items-center gap-5 col-span-2">
                Your Heaviest Lifts
            </h2>

            <div>
                <h2 className="wave text-xl font-semibold mb-5 flex flex-row justify-center items-center gap-5">Back Squat 1RM</h2>
                <canvas id="squatOneRmChart" className="bg-gray-200 p-2 rounded-lg shadow-lg shadow-gray-400"></canvas>
            </div>

            <div>
                <h2 className="wave text-xl font-semibold mb-5 flex flex-row justify-center items-center gap-5">Romanian Deadlift 1RM</h2>
                <canvas id="deadliftOneRmChart" className="bg-gray-200 p-2 rounded-lg shadow-lg shadow-gray-400"></canvas>
            </div>

            <div>
                <h2 className="wave text-xl font-semibold mb-5 flex flex-row justify-center items-center gap-5">Barbell Benchpress 1RM</h2>
                <canvas id="benchOneRmChart" className="bg-gray-200 p-2 rounded-lg shadow-lg shadow-gray-400"></canvas>
            </div>
        </div>
    );
}
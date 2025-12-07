"use client";
import Chart from "chart.js/auto";
import { useEffect } from "react";
import { GiWeightLiftingUp } from "react-icons/gi";

interface dataType {
    date: Date,
    exercise: String,
    maxWeight: Number,
};

export default function MaxRepChart() {
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

    useEffect(() => {
        const squatOneRmChart : HTMLCanvasElement = document.getElementById("squatOneRmChart") as HTMLCanvasElement;
        const deadliftOneRmChart : HTMLCanvasElement = document.getElementById("deadliftOneRmChart") as HTMLCanvasElement;
        const benchOneRmChart : HTMLCanvasElement = document.getElementById("benchOneRmChart") as HTMLCanvasElement;
        
        const charts = [
            {canvas: squatOneRmChart, line: "line", data, filter: "Squat", bg: "#726eff", bd: "#0800ff" },
            {canvas: deadliftOneRmChart, line: "line", data, filter: "Deadlift", bg: "#ff7575", bd: "#ff0000"},
            {canvas: benchOneRmChart, line: "line", data, filter: "Benchpress", bg: "#83ff7a", bd: "#11ff00"},
        ]

        charts.map((chart) => createChart(chart.canvas, chart.line, chart.data, chart.filter, chart.bg, chart.bd))

    }, []);

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
        </div>
    );
}
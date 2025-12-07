"use client";
import { useEffect, useCallback, useState } from "react";
import { FaClock } from "react-icons/fa";
import { pixelifySans } from "../layout";

interface logType {
    no: number,
    timed: string,
};

export default function WorkoutTimer() {
    const [isActive, setIsActive] = useState(false);
    const [start, setStart] = useState<"Start" | "Stop">("Start");
    const [elapsedTime, setElapsedTime] = useState(0);
    const [startTime, setStartTime] = useState(0);
    const [logs, setLogs] = useState<logType[]>([]);
    const [count, setCount] = useState(1);

    const clock = useCallback(() => {
        const date = new Date();

        const hours = ((date.getHours() + 11) % 12 + 1);
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        const hour = hours * 30;
        const minute = minutes * 6;
        const second = seconds * 6;

        const hourHTML = document.querySelector('.hour') as HTMLElement;
        const minuteHTML = document.querySelector('.minute') as HTMLElement;
        const secondHTML = document.querySelector('.second') as HTMLElement;

        hourHTML.style.transform = `rotate(${hour}deg)`
        minuteHTML.style.transform = `rotate(${minute}deg)`
        secondHTML.style.transform = `rotate(${second}deg)`
    }, []);

    const formatElapsedTime = () => {
        const elapsed = Date.now() - startTime;
        const hours = String(Math.floor(elapsed / 3600000)).padStart(2, '0');
        const minutes = String(Math.floor(elapsed / 60000)).padStart(2, '0');
        const seconds = String(Math.floor(elapsed / 1000) % 60).padStart(2, '0');
        const miliseconds = String(Math.floor(elapsed / 10) % 100).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}:${miliseconds}`;
    }

    const updateTimer = (timer: any) => {
        setElapsedTime(Date.now() - startTime);
        const formattedTime = formatElapsedTime();
        timer.textContent = formattedTime;
    }

    const handleStart = () => {
        console.log(!isActive ? "Timer is started!" : "Timer is paused!");
        setIsActive(!isActive);
        setStart(!isActive ? "Stop" : "Start");
        setStartTime(Date.now() - elapsedTime);
    }

    const handleLog = () => {
        const formattedTime = startTime > 0 ? formatElapsedTime() : "00:00:00:00";
        const logObject = { no: count, timed: formattedTime };
        console.log(count);
        setCount(prev => prev + 1);
        setLogs(prev => [...prev, logObject]);
    }

    const handleReset = (timer: any) => {
        setIsActive(false);
        setStart("Start");
        setStartTime(0);
        setElapsedTime(0);
        setLogs([]);
        setCount(1);
        timer.textContent = "00:00:00:00";
    }

    useEffect(() => {
        const interval = setInterval(() => {
            clock();
        }, 1000)

        return () => clearInterval(interval);
    })

    useEffect(() => {
        const timer = document.getElementById("timer") as HTMLHeadingElement;
        const start = document.getElementById("start") as HTMLButtonElement;
        const log = document.getElementById("log") as HTMLButtonElement;
        const reset = document.getElementById("reset") as HTMLButtonElement;
        start.addEventListener("click", handleStart);
        log.addEventListener("click", handleLog);
        reset.addEventListener("click", () => handleReset(timer));

        let interval: any;
        if (isActive) {
            interval = setInterval(() => {
                updateTimer(timer);
            }, 10)
        }

        return () => {
            console.log("Running clean up!");
            start.removeEventListener("click", handleStart);
            log.removeEventListener("click", handleLog);
            reset.removeEventListener("click", () => handleReset(timer));
            if (interval) { clearInterval(interval) };
        };
    }, [isActive, startTime, start, count]);

    return (
        <div className="grid grid-cols-2 gap-2 select-none p-10">
            <h2 className="col-span-2 text-3xl font-bold mb-5 flex flex-row justify-center items-center gap-5">
                Time Your Workouts
                <FaClock className="expand text-2xl"/>    
            </h2>

            <div id="clock" className="clock justify-self-center items-self-center">
                <div className="wrap">
                    <span className="hour"></span>
                    <span className="minute"></span>
                    <span className="second"></span>
                    <span className="dot"></span>
                </div>
            </div>

            <div className="col-start-2 grid grid-rows-[40px_50px_1fr] gap-5">
                <h2 id="timer" className={`${pixelifySans.className} text-5xl font-semibold text-center`}>00:00:00:00</h2>
                <div className="grid grid-col-3 gap-5">
                    <button id="start" type="button" className="col-start-1 p-2 bg-green-200 border-green-400 border rounded-md shadow-gray-400 shadow-lg cursor-pointer hover:bg-green-400 transition-all duration-300 ease-in-out">{start}</button>
                    <button id="log" type="button" className="col-start-2 p-2 bg-yellow-200 border-yellow-400 border rounded-md shadow-gray-400 shadow-lg cursor-pointer hover:bg-yellow-400 transition-all duration-300 ease-in-out">Log</button>
                    <button id="reset" type="button" className="col-start-3 p-2 bg-red-200 border-red-400 border rounded-md shadow-gray-400 shadow-lg cursor-pointer hover:bg-red-400 transition-all duration-300 ease-in-out">Reset</button>
                </div>

                <div className="overflow-y-scroll max-h-[225px]">
                    <table className="bg-gray-200 text-lg text-center shadow-lg shadow-gray-400 w-full">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Timed</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                logs.map((log, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{log.no}</td>
                                            <td>{log.timed}</td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
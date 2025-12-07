"use client";
import { useEffect, useCallback, useState } from "react";

export default function WorkoutTimer() {
    const [isActive, setIsActive] = useState(false);

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

    const startTimer = () => {
        
    }

    const handleClick = () => {
        console.log("Clock is clicked!");
        setIsActive(!isActive);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            clock();
        }, 1000)
        document.getElementById("clock")?.addEventListener("click", handleClick);

        if(isActive) {
            startTimer();
        }

        return () => {
            document.getElementById("clock")?.removeEventListener("click", handleClick);
            clearInterval(interval);
        };
    }, [isActive]);

    return(
        <div className="grid grid-cols-2 justify-center items-center gap-2 select-none p-10">
            <h2 className="col-start-2 text-3xl font-bold mb-5 flex flex-row justify-center items-center gap-5 col-span-2">Time Your Workouts</h2>
        
            <div id="clock" className="col-start-1 clock justify-self-center items-self-center hover:scale-110 duration-300 transition-all ease-in-out cursor-pointer">
                <div className="wrap">
                    <span className="hour"></span>
                    <span className="minute"></span>
                    <span className="second"></span>
                    <span className="dot"></span>
                </div>
            </div>

            <div className="col-start-2">
                <h2 id="timer"></h2>
            </div>
        </div>
    );
}
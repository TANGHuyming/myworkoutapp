"use client";
import { pixelifySans } from "@/app/layout";
import { DNA } from "react-loader-spinner";
import { inputStyling, buttonStyling } from "@/app/_components/AddSet";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const router = useRouter();
    
    const handleSubmit = (e: any) => {
        e.preventDefault();
        // check password similarity
        if(password !== password2) {
            window.alert("Password is not the same!");
            setPassword2("");
            return;
        }

        setIsLoading(true);
        setUsername("");
        setPassword("");
        setPassword2("");
    }

    const handleLogin = () => {
        router.push("/login");
    }
    
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
            if(isLoading) {window.alert("Account successfully made!");}
            if(isLoading) {router.push("/login");}
        }, 3000);
    }, [isLoading])

    return(
        <div className="bg-gray-300 p-10 flex flex-col justify-center items-center select-none">
            <div className="w-8/10 bg-gray-200 shadow-lg shadow-gray-400 rounded-lg">
                <h2 className={`${pixelifySans.className} text-center text-5xl m-5 font-bold`}>Register</h2>

                <DNA visible={isLoading} height="80" width="80" wrapperClass="justify-self-center self-center" dnaColorOne="#d1d5db" dnaColorTwo="#9ca3af" ariaLabel="dna-loading"/>

                <form onSubmit={handleSubmit} className="grid grid-cols-2 p-5 gap-2">
                    <label htmlFor="username">* Enter username:</label>
                    <input className={inputStyling} type="text" required id="username" placeholder="username..." value={username} onChange={(e)=>setUsername(e.target.value)}/>

                    <label htmlFor="email">* Enter email:</label>
                    <input className={inputStyling} type="email" required id="email" placeholder="email..." value={email} onChange={(e)=>setEmail(e.target.value)}/>

                    <label htmlFor="password">* Enter password:</label>
                    <input className={inputStyling} type="password" required id="password" placeholder="password..." value={password} onChange={(e)=>setPassword(e.target.value)}/>
                
                    <label htmlFor="password2">* Confirm password:</label>
                    <input className={inputStyling} type="password" required id="password2" placeholder="confirm password..." value={password2} onChange={(e)=>setPassword2(e.target.value)}/>

                    <button className={`${buttonStyling} bg-yellow-200 border-yellow-500 hover:bg-yellow-300`} type="button" onClick={handleLogin}>Back to Login</button>
                    <button className={`${buttonStyling}`} type="submit">Register</button>
                </form>
            </div>
        </div>
    );
}
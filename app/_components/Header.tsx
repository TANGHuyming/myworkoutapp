import Link from "next/link";
import { Roboto } from "next/font/google";
import { GiWeightLiftingUp } from "react-icons/gi";

const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"],
});

export default function Header() {
    const fontStyle : Object = {
        fontSize: "1.20em",
        fontWeight: "600",
        textDecoration: "none",
    };
    const transitionColor : string = "hover:bg-gray-300 ease-in-out transition-all duration-300";
    const transitionTranslate : string = "hover:-translate-y-1 transition-all ease-in-out duration-300";

    const navItems = [
        {name: "Home", href: "/"},
        {name: "Dashboard", href: "/dashboard"},
        {name: "Workouts", href: "/workouts"},
        {name: "Login", href:"/login"},
    ]   

    return(
        <header className="bg-gray-200 grid-cols-2 grid w-full select-none">
            <div className="text-2xl font-bold col-1 flex flex-row items-center justify-center gap-2">
                <GiWeightLiftingUp className="wave"/>
                <h2 className="wave">My Workout Tracker</h2>
            </div>
            <nav className={`${roboto.className} col-2 flex flex-row justify-center items-center`}>
                {
                    navItems.map((navItem, index) => {
                        return (
                            <Link key={index} style={fontStyle} className={transitionColor} href={navItem.href}>
                                <p className={`${transitionTranslate} px-5 py-2`}>{navItem.name}</p>
                            </Link>
                        );
                    })
                }
            </nav>
        </header>
    );
}
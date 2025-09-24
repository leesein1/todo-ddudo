import { NavLink } from "react-router-dom";

const link = ({ isActive }: { isActive: boolean }) =>
    `block px-3 py-2 rounded-xl transition ${
        isActive ? "font-semibold underline" : "opacity-80 hover:opacity-100"
}`;

export default function LeftNav() {
    return (
        <aside className="w-60 border-r p-4 hidden md:block">
            <nav className="space-y-1">
                <NavLink to="/" end className={link}>Home</NavLink>
                <NavLink to="/todos" className={link}>Todos</NavLink>
                <NavLink to="/settings" className={link}>Settings</NavLink>
            </nav>
        </aside>
        
    );
}

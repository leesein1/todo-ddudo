import { NavLink } from 'react-router-dom'

const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-xl ${isActive ? 'font-semibold underline' : 'opacity-80 hover:opacity-100'}`

    export default function Nav() {
    return (
        <nav className="max-w-5xl mx-auto flex gap-3 p-4">
        <NavLink to="/" className={linkClass} end>Home</NavLink>
        <NavLink to="/todos" className={linkClass}>Todos</NavLink>
        <NavLink to="/settings" className={linkClass}>Settings</NavLink>
        </nav>
    )
}

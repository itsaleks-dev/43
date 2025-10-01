import { NavLink, Outlet } from "react-router-dom";

import routes from "./routes/routes.jsx";

export default function App() {
    return (
        <div>
            <header>
                <nav className="menu">
                    {routes[0].children.map((route, index) => {
                        if (route.index) {
                            return (
                                <NavLink key={index} to="/" end>
                                    Home
                                </NavLink>
                            );
                        }
                        return (
                            <NavLink key={index} to={`/${route.path}`}>
                                {route.label}
                            </NavLink>
                        );
                    })}
                </nav>
            </header>

            <main>
                <Outlet />
            </main>
        </div>
    );
}
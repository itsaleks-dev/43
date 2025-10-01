import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";

import App from "../App";

const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Home />, label: "Home" },
            { path: "about", element: <About />, label: "About" },
            { path: "contact", element: <Contact />, label: "Contact", }
        ],
    },
];

export default routes;

import Header from "./Header";
import Footer from "./Footer";

import { Outlet } from "react-router-dom";
export default function Layout() {
    return (
        <main>
            <Header />
            <Outlet />
            <Footer />
        </main>
    )
}
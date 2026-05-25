// importamos
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";

export function Layout({children}){
    return(
        <div>
            <Header/>
            <main>
                {children}
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
}

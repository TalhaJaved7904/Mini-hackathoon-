import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Dashboard from "../layout/Dashboard";

export default function Approuter () {
    return <>
        <BrowserRouter>
            <Routes>
                {/* <Route path="/*" element={<Dashboard/>}/> */}
                <Route path="Dashboard/*" element={<Dashboard/>}/>
                <Route path="/" element={<Login/>}/>
                <Route path="/Signup" element={<Signup/>}/>
            </Routes>
        </BrowserRouter>
    
    </>
}
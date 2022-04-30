import { Outlet, Routes, Route } from "react-router-dom"
import SousEl1 from './SousEl1';
import SousEl2 from './SousEl2';
import ParDefaut from './ParDefaut';
import NotFound from './NotFound';


export default function Autre() {
    return(
        <div>
            <h2>
                Autre
            </h2>
            <Routes>
                <Route index element={<ParDefaut/>}/>
                <Route path="*" element={<NotFound/>}/>
                <Route path="sous-element-1" element={<SousEl1/>}/>
                <Route path="sous-element-2" element={<SousEl2/>}/>
            </Routes>
        </div>
    )
}
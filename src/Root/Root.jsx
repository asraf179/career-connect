import { Outlet } from "react-router-dom";
import Navbar from "../shared components/Navbar/Navbar";

const Root = () => {
        return (
                <div>
                        <Navbar></Navbar>
                        <div className="mt-24">
                        <Outlet ></Outlet>
                        </div>
                </div>
        );
};

export default Root;
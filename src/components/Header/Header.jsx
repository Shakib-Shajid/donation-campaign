// import { NavLink } from "react-router-dom";

// const Header = () => {

//     // const links = <>
//     //     <li><NavLink to="/">Home</NavLink></li>
//     //     <li><NavLink to="/donation">Donation</NavLink></li>
//     //     <li><NavLink to="/Statistics">Statistics</NavLink></li>
//     // </>
//     return (
//         <div>
//             <div className="navbar bg-base-100 lg:px-32 lg:py-7">
//                 <div className="navbar-start">
//                     <div className="dropdown">
//                         <label tabIndex={0} className="btn btn-ghost md:hidden lg:hidden">
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//                         </label>
//                         <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
//                             <li><NavLink to="/">Home</NavLink></li>
//                             <li><NavLink to="/donation">Donation</NavLink></li>
//                             <li><NavLink to="/Statistics">Statistics</NavLink></li>
//                         </ul>
//                     </div>
//                     <img src="/Logo.png" alt="" width={150} />
//                 </div>
//                 <div className="navbar-end hidden md:flex lg:flex">
//                     <ul className="menu menu-horizontal px-1 ">
//                         {/* <li><NavLink to="/">Home</NavLink></li> */}


//                         <NavLink
//                             to="/"
//                             className={({ isActive, isPending }) =>
//                                 isPending ? "pending" : isActive ? " text-[#FF444A] underline" : ""
//                             }
//                         >
//                             Home
//                         </NavLink>

//                         <NavLink
//                             to="/Donation"
//                             className={({ isActive, isPending }) =>
//                                 isPending ? "pending" : isActive ? " text-[#FF444A] underline" : ""
//                             }
//                         >
//                             Donation
//                         </NavLink>

//                         <NavLink
//                             to="/Statistics"
//                             className={({ isActive, isPending }) =>
//                                 isPending ? "pending" : isActive ? " text-[#FF444A] underline" : ""
//                             }
//                         >
//                             Statistics
//                         </NavLink>



//                     </ul>
//                 </div>
//             </div>
//         </div >
//     );
// };

// export default Header;

import Navbar from './Navbar/Navbar';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
        </div>
    );
};

export default Header;
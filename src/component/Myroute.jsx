import React, { useContext } from 'react'
import { Routes, Route } from 'react-router';
import ProductDetail from '../pages/ProductDetail';
import Home2 from '../pages/Home2';
import Signup from '../pages/Signup';
import Loginup from '../pages/Loginup';
import { Navigate } from 'react-router';
import ContextProvider, { GlobalContext } from '../context/Context';

const Myroute = () => {
  let { state , dispatch } = useContext(GlobalContext);
  return (
    <div>
      
      <div className="pages">
        <ContextProvider>
        <Routes>
          <Route path="/home2" element={<Home2 />} />
          <Route path='/' element={<Signup />} />
          <Route path="/loginup" element={<Loginup />} />
          <Route path="/detail/:id" element={<ProductDetail />} />
          <Route path='*' element={<Navigate to={"/"} />} />
        </Routes>
        </ContextProvider>
      </div>
    </div>
  )
  }
    
  

export default Myroute;

// import React, { useContext } from 'react';
// import { Routes, Route, Navigate } from 'react-router';
// import ProductDetail from '../pages/ProductDetail';
// import Home2 from '../pages/Home2';
// import Signup from '../pages/Signup';
// import Loginup from '../pages/Loginup';
// import { GlobalContext } from '../context/Context';

// const Myroute = () => {
//   const { state, dispatch } = useContext(GlobalContext);

//   return (
//     <div className="pages">
//       {/* {state.isLoggedIn ? (
//         // If the user is logged in */}
//         <Routes>
//           <Route path="/home2" element={<Home2 />} />
//           <Route path="/" element={<Signup />} />
//           <Route path="/loginup" element={<Loginup />} />
//           <Route path="/detail/:id" element={<ProductDetail />} />
//           <Route path="*" element={<Navigate to="/" />} />
//         </Routes>
//       // 
//       //   // If the user is not logged in
//       {/* //   <Routes>
//       //     <Route path="/loginup" element={<Loginup />} />
//       //     <Route path="*" element={<Navigate to="/loginup" />} />
//       //   </Routes> */}
//       // 
//     </div>
//   );
// };

// export default Myroute;





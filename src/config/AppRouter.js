import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "../containers/Home.js";
import Check from "../containers/Check.js";
import Profile from "../containers/Profile.js";

function AppRouter() {
return ( 
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="check" element={<Check />} />
     <Route path="profile" element={<Profile />} />
     </Routes>

);
}

//  <BrowserRouter> 
//   <Routes>
//      <Route path="/" element={<Home />} />
//      <Route path="/check" element={<Check />} />
//      <Route path="/submit" element={<Submit />} />
//    </Routes>
//   </BrowserRouter> 
 
//   )
// }

export default AppRouter;
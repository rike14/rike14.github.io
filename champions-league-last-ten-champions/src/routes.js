import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/home';
import Contatos from './Pages/contato';
import Chelsea2021 from './Pages/chelsea2021';
import BayerMunchen2020 from './Pages/bayermunchen2020';
import Liverpool2019 from './Pages/liverpool2019';
import RealMadrid2018 from './Pages/realmadrid2018';
import RealMadrid2017 from './Pages/realmadrid2017';
import RealMadrid2016 from './Pages/realmadrid2016';
import Barcelona2015 from './Pages/barcelona2015';
import RealMadrid2014 from './Pages/realmadrid2014';
import BayerMunchen2013 from './Pages/bayermunchen2013';
import Chelsea2012 from './Pages/chelsea2012';

const MainRoutes = () => {
    return(
        <Routes>
            <Route
                path="/"
                element={<HomePage />}
            />
            <Route
                path="/contato"
                element={<Contatos />}
            />
            <Route
                path="/chelsea2021"
                element={<Chelsea2021 />}
            />
            <Route
                path="/bayermunchen2020"
                element={<BayerMunchen2020 />}
            />
            <Route
                path="/liverpool2019"
                element={<Liverpool2019 />}
            />
            <Route
                path="/realmadrid2018"
                element={<RealMadrid2018 />}
            />
            <Route
                path="/realmadrid2017"
                element={<RealMadrid2017 />}
            />
            <Route
                path="/realmadrid2016"
                element={<RealMadrid2016 />}
            />
            <Route
                path="/barcelona2015"
                element={<Barcelona2015 />}
            />
            <Route
                path="/realmadrid2014"
                element={<RealMadrid2014 />}
            />
            <Route
                path="/bayermunchen2013"
                element={<BayerMunchen2013 />}
            />
            <Route
                path="/chelsea2012"
                element={<Chelsea2012 />}
            />
        </Routes>
    )
}

export default MainRoutes;

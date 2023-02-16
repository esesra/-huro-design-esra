import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminNotificationPage from '../pages/admin-profile-notifications';
import CardPage from '../pages/card-page';
import CreateButtonPage from '../pages/create-button-page';
import CreateFormPage from '../pages/create-form-page';
import FormPageInput from '../pages/form-page-input';
import HomePage from '../pages/home-page';
import GeneralTemplate from '../template/general-template';




const CustomRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'>
                    <Route index element={<GeneralTemplate><HomePage /></GeneralTemplate>} />
                    <Route path="input" element={<GeneralTemplate><FormPageInput/></GeneralTemplate>} />
                    <Route path="createform" element={<GeneralTemplate><CreateFormPage  /></GeneralTemplate>} />
                    <Route path="createbutton" element={<GeneralTemplate><CreateButtonPage  /></GeneralTemplate>} />
                    <Route path="cards" element={<GeneralTemplate><CardPage /></GeneralTemplate>} />
                    <Route path="notification" element={<GeneralTemplate><AdminNotificationPage /></GeneralTemplate>} />

                    </Route>
                 
            </Routes>
        </BrowserRouter>
    )
}

export default CustomRoutes
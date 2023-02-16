import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { Layout } from '../components/common/layout/Layout';

import  capitalize from '../utils/functions/capitalize';
import dynamicTitle from '../utils/functions/dynamic-title';


const GeneralTemplate = ({ children }) => {
    const location = useLocation();
    useEffect(() => {
        const title = capitalize(location.pathname.split("/")[1])
        dynamicTitle(title);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div>
         <Layout/>
            {children}
        </div>
    )
}

export default GeneralTemplate;
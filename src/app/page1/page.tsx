import React from 'react';
import ComponentsSample from '../components/ComponentsSample';
import HomeIconButton from '../components/HomeIconButton';
import SendDataToClient from '../components/SendDataToClient';

const Page1 = () => {
    return (
        <>
        
        <div className="ml-2 mt-2 flex flex-col self-auto">
            <HomeIconButton/>
            <ComponentsSample />
            <div className="ml-12 mt-10 p-1">
                 <SendDataToClient/>
             </div>    
        </div>
         </>
    );
};

export default Page1;

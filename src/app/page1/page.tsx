import React from 'react';
import ComponentsSample from '../components/ui/ComponentsSample';
import HomeIconButton from '../components/ui/HomeIconButton';
import SendDataToClient from '../components/SendDataToClient';
import ShowRecieveClientData from '../components/ShowRecieveClientData';

const Page1 = () => {
    return (
        <>
        
        <div className="ml-2 mt-2 flex flex-col self-auto">
            <HomeIconButton/>
            <ComponentsSample />
            <div className="ml-12 mt-10 p-1 flex flex-col space-y-4 self-auto">
                <SendDataToClient />
                <ShowRecieveClientData />    
            </div>    
        </div>
         </>
    );
};

export default Page1;

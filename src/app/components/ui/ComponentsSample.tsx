"use client";

import React from 'react';
import { DismissAlert } from '../../../components/DismissAlert';
import { useLocale } from '@/hooks/useLocale';

export default function ComponentsSample() {
    const { t } = useLocale();
    
    return (
        <>
        <div className="ml-12 mt-24 flex flex-col space-y-4 self-auto">
        
            <h1 className="text-2xl text-red-500">{t.componentSample}</h1>

            <div className="ml-4 flex justify-center items-center gap-4">
                <button
                    type="button"
                    className="w-20 h-12 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 focus:outline-none focus:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-400 dark:bg-blue-800/30 dark:hover:bg-blue-800/20 dark:focus:bg-blue-800/20"
                >
                Button1
                </button>
                <button
                    type="button"
                    className="w-20 h-12 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-red-100 text-red-800 hover:bg-red-200 focus:outline-none focus:bg-red-200 disabled:opacity-50 disabled:pointer-events-none dark:text-red-400 dark:bg-red-800/30 dark:hover:bg-red-800/20 dark:focus:bg-red-800/20"
                >
                Button2
                </button>
            </div>
            <div className="flex flex-col space-y-4">
                <DismissAlert message="メッセージを書いてください。" type="success" size="large"/>
                <DismissAlert message="メッセージを書いてください。" type="error" size="middle" />
                <DismissAlert message="メッセージを書いてください。" type="error" size="small" />    
            </div>
        </div>
        </>
    );
}

//
// 稼働データCSVファイルを読み込み、グラフを表示
//
"use client";

import React, { useState } from 'react';
import { runDataChartType } from '@/types/runDataChartType ';
import ConvertCsvToChartData from './ConvertCsvToChartData';
import CsvFileUploader from './CsvFileUploader';
import RunDataChart from './RunDataRecharts';
import CustomButton from './CustomButton';
import { RunDataList } from '@/consts/sampleRunData';

function CsvRunDataGraphViewer() {
  const [data, setData] = useState<runDataChartType[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = async (file: File) => {
    try {
      const runData = await ConvertCsvToChartData(file);
      setData(runData);
      setError(null);
    } catch (err: unknown) { 
      if (err instanceof Error) {
        setError(`Failed to parse CSV file: ${err.message}. Please check the file format.`);
      } else {
        setError('Failed to parse CSV file. An unknown error occurred.');
      }
      console.error('Error convert CSV file:', error);
    }
  };

  const showSampleGraph = () => {
      setData(RunDataList);
  };

  return (
    <div className="ml-16 mt-16" >
      <div className="p-5 bg-white rounded shadow-md">
        <CsvFileUploader onFileUpload={handleFileUpload} />
        {error && <p className="mt-3 text-red-600 font-semibold">{error}</p>}
      </div>
      <CustomButton label="sample" colorScheme="blue" onClick={() => showSampleGraph()}/>
      {data && <RunDataChart data={data} />}
    </div>
  );
}

export default CsvRunDataGraphViewer;


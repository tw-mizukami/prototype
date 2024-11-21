//
// 稼働データグラフ
//
"use client";

import { useEffect, useState } from 'react';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { runDataChartType } from '@/types/runDataChartType ';

interface RechartsGraphProps {
  data: runDataChartType[];
}

const pStyle = {
  color: 'blue',
};

const divStyle = {
  background: 'linear-gradient(to right, #fff, #fff8)',
  fontWeight: 'bold',
  border: 'solid 2px blue',
};

function RunDataChart({ data }: RechartsGraphProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // クライアントサイドでのみグラフを描画
  }, []);

  if (!isClient) return null; // サーバーサイドではレンダリングしない

   // カンマ区切りのフォーマット関数
  const formatNumber = (value: number) => value.toLocaleString();
  
  return (
    <div>
      <h2>運転速度/未検査グラフ</h2>
      <LineChart
        width={800}
        height={400}
        data={data} 
        margin={{
          top: 5,
          right: 5,
          left: 5,
          bottom: 20,
        }}
      >
        <CartesianGrid strokeDasharray="5 1" />
        <XAxis
          dataKey="date"
          interval={5}
          angle={-20}
          dx={-10}
          dy={20}
          tick={{
            fontSize: 10,
            fill: '#000',
            cursor: 'pointer',
          }}
        />
        {/* Y軸のスケールを自動調整 */}
        <YAxis yAxisId="left" domain={['auto', 'auto']} tickCount={10} tickFormatter={formatNumber}/>
        <YAxis yAxisId="right" orientation="right" domain={['auto', 'auto']} tickCount={10}/>
        
        <Line yAxisId="left" type="monotone" dataKey="speed" name="運転速度" stroke="#3ba2f6" unit="pcs/min" />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="noInspRate"
          name="未検査率"
          stroke="#ff0092"
          strokeWidth={2}
          unit="%"
          activeDot={{
            cursor: 'pointer',
          }}
        />
        <Legend
          verticalAlign="top"
          height={30}
          iconSize={20}
          iconType="plainline"
        />
        <Tooltip
          formatter={(value: number) => formatNumber(value)}
          contentStyle={divStyle}
          labelStyle={pStyle}
          separator=" "
          cursor={{ stroke: 'blue', strokeWidth: 2 }}
        />
      </LineChart>
    </div>
  );
};

export default RunDataChart;

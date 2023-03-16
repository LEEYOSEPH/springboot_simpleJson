import React from 'react';

import './gsadp/css/common.css';
import './gsadp/css/layout.css';
import './gsadp/css/plugin.css';
import './gsadp/css/fonts/Pretendard/fonts.css';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';



import LineChartContainer from './component/LineChartContainer';

function App() {

 

  return (
    <div className='wrap'>
      <aside className='sidebar'></aside>
      <div className='content'>
        <div className='content-header'>
          <h2 className='fz-24 fw-smbold fc-10'>단독 조회 필터 + 더블라인 차트 + 데이터 그리드 </h2>
        </div>
        <div className='content-body'>
          <div className='container-fluid'>
            <LineChartContainer/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import React, {useState} from 'react';
import axios from 'axios';
import HighChartsReact from 'highcharts-react-official';
import * as Highcharts from 'highcharts';
import { Select , DatePicker, Space } from 'antd';
//import 'antd/dist/reset.css';
import {AgGridReact} from 'ag-grid-react';
const { RangePicker } = DatePicker;

export function App () { 
  // 하이차트
  const [title, setTitle] = useState<string>('차트 호출전');
  const [series, setSeries] = useState<any>([
    { name: '', data: []},
    { name: '', data: []}
  ]);
  const [tooltip, setTooltip] = useState<any>(
    {
      headerFormat: '' ,
      pointFormat: ''
    }
  );
  const [categories, setCategories] = useState<any>();
  const [yAxisTitle, setYAxisTitle] = useState<string>('차트 호출전');
  // ag gird
  const [rowData, setRowData] = useState<any>();
  const [cloumnDefs, setCloumnDefs] = useState<any>();
  const [isActive, setIsActive] = useState<Boolean>(false)

  // 데이터 조회 클릭 이벤트
  const onClickEvent = () => { 
    getChartData();
  }
  const getChartData = () => {

    axios.get('/api')
        .then(response =>{
          // 하이 차트
          setTitle("차트 호출 후");
          setYAxisTitle("차트 호출 후");

          setCategories(response.data.basicDate);
          setSeries(response.data.series);
         
          setTooltip({
            headerFormat: '<b>{series.name}</b><br/>' ,
            pointFormat: '날짜 = {point.x}, 판매수량 = {point.y}'
          });
          //ag grid
          setCloumnDefs([
          {"field": "날짜","headerCheckboxSelection":true, "checkboxSelection":true},
          {"field": "노출수"},
          {"field": "클릭수"},
          {"field": "전환수"},
          {"field": "광고비"},
          {"field": "판매수량"},
          {"field": "직접판매금액"},
          {"field": "간접판매금액"}]);
          
          setRowData(response.data.rowData);

        } )
        .catch(error => console.log(error))
      
      setIsActive(e => !e);
  }
  // 차트 변화
  const options = {
    
    title: {
      text:title,
    },
    // Y축
    yAxis: {
      title: {
        text: yAxisTitle
      }
    },
    //X축
    xAxis: {
      categories: categories
                    
    },
    tooltip: {
      headerFormat: tooltip.headerFormat,
      pointFormat:  tooltip.pointFormat,
    },
    series: [{
      name: series[1].name,
      data: series[1].data
    }, {
      name: series[0].name,
      data: series[0].data
    }],
  }
  // 셀렉트 박스
  const selectBoxOption =[
    {
      options: [
        { label: '광고주', value: 'client' },
        { label: '상품번호', value: 'productNo' },
        { label: '광고그룹명', value: 'adGroupName' },
        { label: '키워드명', value: 'keywordName' },
      ],
    }
  ];
  // input 박스
  const [text, setText] = useState('');
  const handleChange = (e :React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  return (
    <>
    {/* 검색 */}
    {/* <SearchContainer/> */}
     <div className='row'>
      <div className='col col-12'>
        <section className='wrap-section wrap-filter'>
          <div className='box-body'>
            <div className='filter-icon-area'>
              <i className='ico ico-filter'></i>
            </div>
            {/* <div className='filter-content'>
              <div className='filter-row'>
                <div className='filter-group'>
                  <div className='filter-label'> <p className='fz-16 fw-med fc-7'>템플릿 검색 기준</p> </div>
                  <div className='filter-box'>
                    <div className='filter-col'>
                     <div className='ant-select w-300 ant-select-single ant-select-show-arrow'>
                        <div className='ant-select-selector'>
                          <span className='ant-select-selection-search'>
                            <Select
                              defaultValue="상품번호"
                              style={{ width: 200, textAlign:'left'}}
                              options={selectBoxOption}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='filter-group'>
                  <div className='filter-label'> <p className='fz-16 fw-med fc-7'>검색어 입력</p></div>
                  <div className='filter-box'>
                    <div className='filter-col'>
                      <div className='input-group'>
                        <input type='text' name="searchText" className='tf-comm' placeholder='검색어 입력' value={text} onChange={handleChange} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='filter-group'>
                  <div className='filter-label'> <p className='fz-16 fw-med fc-7'>기간 조회</p></div>
                  <div className='filter-box'>
                    <div className='filter-col'>
                      <Space direction="vertical" size={12}>
                        <RangePicker />
                      </Space>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div className='filter-inquire'>
              <button type='button' className='btn btn-ico outline blue --ico-txt' onClick={onClickEvent}>
                <i className='ico ico-filter'></i>
                선택 조건 조회
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
    {/* 차트 */}
    <div className='row'>
      <div className='col col-12'>
        <section className='wrap-section wrap-chart'>
            <div className='box-header'>
                <div className='box-left'> 
                    <h2 className='fz-20 fw-med fc-10'> 차트차트차트</h2>
                </div>
                <div className='box-right'>
                  <div className='box-right'></div>
                </div>
            </div>
            <div className='box-body'>
              <div className='box-top'>
                  <HighChartsReact
                    highcharts={Highcharts}
                    options={options}
                    />
              </div>
            </div>
        </section>
      </div>
    </div>
    {/* 그리드 */}
    <div className='row'>
      <div className='col col-12'>
        <section className='wrap-section wrap-datagrid'>
          <div className='box-header'>
            <div className='box-left'>
              <h2 className='fz-18 fw-med fc-10'>그리드 헤더</h2>
              <span className='fz-14 fw-med fc-5'></span>
            </div>
            <div className='box-right'>
              <button type='button' className='btn outline aqua btn-ico --txt-ico small'> csv다운로드 <i className='ico ico-download IcoGuide'></i></button>
            </div>
          </div>
          <div className='box-body' >
             <div className='ag-theme-alpine' style={{height: 700, textAlign:'center'}} >
              {isActive?  
                <AgGridReact 
                  rowData={rowData}
                  columnDefs={cloumnDefs}
                  defaultColDef={{flex: 1, sortable:true,}}
                  paginationAutoPageSize={true}
                  pagination={true}
                  rowHeight={70}
                />
                 : <div><h1>데이터 호출전!!!!!</h1></div>
              }
             </div> 
          </div>
          <div className='box-footer'>
            <div className='box-left'>
              <span className='fz-16 fw-med fc-5'></span>
            </div>
            <div className='box-right'>
              <div className='pagenation'></div>
            </div>
          </div>
        </section>
      </div>
    </div>
    </>
  );
}

export default App;
import  React,{useState} from 'react';
import { Select , DatePicker, Space } from 'antd';
//import 'antd/dist/reset.css';
const { RangePicker } = DatePicker;

function App () {
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

  // 데이터 조회 클릭 이벤트
  const onClickEvent = () => { 
    
  }

  return (
    <div className='row'>
      <div className='col col-12'>
        {/* <section className='wrap-section wrap-filter'>
          <div className='box-body'>
            <div className='filter-icon-area'>
              <i className='ico ico-filter'></i>
            </div>
            <div className='filter-content'>
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
            </div>
            <div className='filter-inquire'>
              <button type='button' className='btn btn-ico outline blue --ico-txt' onClick={onClickEvent}>
                <i className='ico ico-filter'></i>
                선택 조건 조회
              </button>
            </div>
          </div>
        </section> */}
      </div>
    </div>
  );
}

export default App;

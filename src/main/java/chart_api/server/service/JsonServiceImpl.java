package chart_api.server.service;

import chart_api.server.domain.RowData;
import chart_api.server.domain.Series;
import java.util.ArrayList;
import org.springframework.stereotype.Service;

@Service
public class JsonServiceImpl implements JsonService{
    @Override
    public Series series() {
        int[] data = {1, 2,3,4,5,6,7,8,9,10};
        String name = "딸기";
        Series createSeries = new Series().createSeries(name,data);
        return  createSeries;
    }
    @Override
    public ArrayList<RowData> rowData() {
        ArrayList<RowData> rowData = new ArrayList<>();
        for (int i = 0; i < 100; i++ ){
            RowData datas = new RowData().createRowData(i);
            rowData.add(datas);
        }
        return rowData;
    }
}

package chart_api.server.service;

import chart_api.server.domain.RowData;
import chart_api.server.domain.Series;
import java.util.ArrayList;

public interface JsonService {
     Series series();
     ArrayList<RowData> rowData();
}

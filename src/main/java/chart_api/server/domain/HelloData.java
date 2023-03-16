package chart_api.server.domain;

import lombok.Getter;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

@Getter
public class HelloData {
    JSONObject productInfo = new JSONObject();
    JSONObject tooltip = new JSONObject();
    JSONArray seriesList = new JSONArray();
    JSONObject seriesFirst = new JSONObject();
    JSONObject seriesSecond = new JSONObject();
    JSONArray rowData = new JSONArray();
    JSONObject rowDatas = new JSONObject();




}

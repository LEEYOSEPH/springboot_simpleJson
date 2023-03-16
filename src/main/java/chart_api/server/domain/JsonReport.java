package chart_api.server.domain;

import lombok.RequiredArgsConstructor;
import org.json.simple.JSONObject;
import org.json.simple.JSONArray;


@RequiredArgsConstructor
public class JsonReport {

    private final HelloData helloData;

    public static JSONObject createJsonData() {
        /* 모든 데이터를 담을 JSONObject 생성*/
        HelloData helloData = new HelloData();

        JSONObject productInfo = helloData.productInfo;


        /**
         * value로 Array를 가지는 프로퍼티 처리.
         * series JSONArray 생성
         */
        JSONArray seriesList = helloData.seriesList;

        JSONArray name1 = new JSONArray();
        JSONArray name2 = new JSONArray();
        for(int i = 0; i < 31; i++){
            name1.add(Math.floor(Math.random() * 10000));
            name2.add(Math.floor(Math.random() * 10000));
        }

        /**
         * value로 Json을 가지는 프로퍼티 처리.
         * series.* JSONObject 생
         */
        helloData.seriesFirst.put("name", "딸기");
        helloData.seriesFirst.put("data", name1);
        seriesList.add(helloData.seriesFirst);

        helloData.seriesSecond.put("name", "사과");
        helloData.seriesSecond.put("data", name2);
        seriesList.add(helloData.seriesSecond);
        productInfo.put("series",seriesList);


        JSONArray rowDatas = new JSONArray();
        for(int i = 0; i < 100; i++ ){
            JSONObject rowData = new JSONObject();
            rowData.put("날짜", "202210"+i);
            rowData.put("노출수", Math.floor(Math.random() * 10000));
            rowData.put("클릭수", Math.floor(Math.random() * 10000));
            rowData.put("전환수", Math.floor(Math.random() * 10000));
            rowData.put("광고비", Math.floor(Math.random() * 10000));
            rowData.put("판매수량", Math.floor(Math.random() * 10000));
            rowData.put("직접판매금액", Math.floor(Math.random() * 10000));
            rowData.put("간접판매금액", Math.floor(Math.random() * 10000));
            rowDatas.add(rowData);
        }
        productInfo.put("rowData",rowDatas);

        JSONArray basicDate = new JSONArray();
        for(int i = 1; i< 32; i++){
            basicDate.add("2022100"+i);
        }

        productInfo.put("basicDate",basicDate);

        return productInfo;
    }

    public static String jsonToString(org.json.simple.JSONObject jsonObject) {
        return jsonObject.toString();
    }
}

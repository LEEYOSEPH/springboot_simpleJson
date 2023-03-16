package chart_api.server.controller;

import chart_api.server.domain.JsonReport;
import chart_api.server.domain.Report;
import chart_api.server.domain.RowData;
import chart_api.server.domain.Series;
import chart_api.server.service.ApiService;
import chart_api.server.service.JsonService;
import lombok.RequiredArgsConstructor;
import org.json.simple.JSONObject;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@RestController
@RequiredArgsConstructor
public class ApiController {

    private  final  ApiService apiService;
    private  final JsonService jsonService;

    @GetMapping("/api")
    public JSONObject returnDataToReact() {
        JSONObject jsonObject = JsonReport.createJsonData();
        return  jsonObject;
    }

    @GetMapping("/api/report/{id}")
    public String getReport(@PathVariable Long id) {
        String result = apiService.getReport(id);
        return  "GEt Report: "+ result.toString();
    }

    @GetMapping("/api/report")
    public String getReports(){
        String result = apiService.getReports();
        return "Get Data: "+result.toString() ;
    }

    @PostMapping("/api/report")
    public String postData(@RequestBody Report report) {
        String result =  apiService.postReport(report);
        return "Post Data: " + result.toString();
    }

    @PutMapping("/api/report/{id}")
    public String putReport(@PathVariable Long id, @RequestBody Report report){
        String result = apiService.putReport(id,report);
        return "Put Data: " +result.toString();
    }

    @DeleteMapping("/api/report/{id}")
    public String deleteReport( @PathVariable Long id) {
        String result = apiService.deleteReport(id);
            return "Delete Data: "+ result.toString();
    }

    @GetMapping("/api/v2")
    public List<Object> JsonData() {

        Series series = jsonService.series();
        ArrayList<RowData> data = jsonService.rowData();

        List list = new ArrayList();
        list.add(series);
        list.add(data);

        return list;
    }
}

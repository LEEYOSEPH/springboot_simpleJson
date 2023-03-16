package chart_api.server.controller;

import chart_api.server.domain.JsonReport;
import org.json.simple.JSONObject;

public class CreateJsonApp {
    public static void main(String[] args) {
        JSONObject jsonObject = JsonReport.createJsonData();
        System.out.println(jsonObject);
    }
}

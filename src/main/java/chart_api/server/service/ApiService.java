package chart_api.server.service;

import chart_api.server.domain.Report;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;


@Service
public class ApiService {
    Map<Long, Report> map = new HashMap<>();
    public String postReport(Report report) {
        map.put(1L,Report.builder()
                .basicDate(report.getBasicDate())
                .impCnt(report.getImpCnt())
                .clickCnt(report.getClickCnt())
                .convCnt(report.getConvCnt())
                .adspend(report.getAdspend())
                .sellCnt(report.getSellCnt())
                .directSellCost(report.getDirectSellCost())
                .indirSellCost(report.getIndirSellCost())
                .build() );
        return map.toString();
    }

    public String getReport(Long id) {
        return  map.get(id).toString();
    }

    public String getReports(){
        return map.toString();
    }

    public String putReport(Long id, Report report){
        map.put(id,Report.builder()
                .basicDate(report.getBasicDate())
                .impCnt(report.getImpCnt())
                .clickCnt(report.getClickCnt())
                .convCnt(report.getConvCnt())
                .adspend(report.getAdspend())
                .sellCnt(report.getSellCnt())
                .directSellCost(report.getDirectSellCost())
                .indirSellCost(report.getIndirSellCost())
                .build());

        return map.toString();
    }

    public String deleteReport(Long id){
        map.remove(id);
        return "삭제 완료";
    }

}

package chart_api.server.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
public class Report {
    private String basicDate; // 날짜
    private String impCnt; // 조회수
    private String clickCnt; // 클릭수
    private String convCnt; // 전환수
    private String adspend; // 광고비
    private String sellCnt; // 판매수량
    private String directSellCost; // 직접 판매 금액
    private String indirSellCost; // 간접 판매 금액



}

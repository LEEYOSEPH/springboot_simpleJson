package chart_api.server.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class RowData {
    private String basicDate;
    private int impCnt;
    private int clickCnt;
    private int convCnt;
    private int adspend;
    private int sellCnt;
    private int directSellCost;
    private int indirSellCost;
    public RowData createRowData(int i){
        return RowData.builder()
                .basicDate("2022" + i)
                .impCnt((int) Math.floor(Math.random() * 10000))
                .clickCnt((int) Math.floor(Math.random() * 10000))
                .convCnt((int) Math.floor(Math.random() * 10000))
                .adspend((int) Math.floor(Math.random() * 10000))
                .sellCnt((int) Math.floor(Math.random() * 10000))
                .directSellCost((int) Math.floor(Math.random() * 10000))
                .indirSellCost((int) Math.floor(Math.random() * 10000))
                .build();
    }
}

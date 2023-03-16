package chart_api.server.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Series {

    private String name;
    private int[] value;

    public Series createSeries(String name,int[] value){
        this.name = name;
        this.value = value;
        Series series = Series.builder()
                .name(name)
                .value(value)
                .build();
        return series;
    }
}

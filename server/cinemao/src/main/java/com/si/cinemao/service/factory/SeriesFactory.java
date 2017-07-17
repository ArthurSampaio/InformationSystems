package com.si.cinemao.service.factory;

import com.si.cinemao.pojo.Series;
import com.si.cinemao.pojo.SeriesForm;

/**
 * Created by sampaio on 17/07/17.
 */
public class SeriesFactory {

    public static Series createSeries(SeriesForm seriesForm){

        Series out = new Series(seriesForm.getUserId(), seriesForm.getImdbID());
        return out;


    }

}

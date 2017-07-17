package com.si.cinemao.service.factory;

import com.si.cinemao.pojo.Series;
import com.si.cinemao.pojo.SeriesForm;

/**
 * Created by sampaio on 17/07/17.
 */
public class SeriesFactory {

    public static Series createSeries(SeriesForm seriesForm){

        Series out = new Series(seriesForm.getUserId(), seriesForm.getImdbID());
        out.setAwards(seriesForm.getAwards());
        out.setGenre(seriesForm.getGenre());
        out.setTitle(seriesForm.getTitle());
        out.setType(seriesForm.getType());
        out.setReleased(seriesForm.getReleased());
        out.setImdbVotes(seriesForm.getImdbVotes());
        out.setRuntime(seriesForm.getRuntime());
        out.setRated(seriesForm.getRated());
        out.setPoster(seriesForm.getPoster());
        out.setPlot(seriesForm.getPlot());
        out.setImdbRating(seriesForm.getImdbRating());
        out.setInList(seriesForm.getInList());
        return out;


    }

}

package com.si.cinemao.service;

import com.si.cinemao.pojo.Series;
import com.si.cinemao.pojo.SeriesForm;

import java.util.Collection;

/**
 * Created by sampaio on 17/07/17.
 */
public interface SeriesService {

    Collection<Series> getAllSeries();

    Series addSeries (SeriesForm serie);

    Collection<Series> getSeriesByUserId(Long id);

    Series getSerieByUserIdAndImdbID (Long userId, String imdbID);

}

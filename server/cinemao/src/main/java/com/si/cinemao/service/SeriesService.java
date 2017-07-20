package com.si.cinemao.service;

import com.si.cinemao.pojo.Series;

import java.util.Collection;

/**
 * Created by sampaio on 17/07/17.
 */
public interface SeriesService {

    Collection<Series> getAllSeries();

    Series addSeries (Series serie);

    Collection<Series> getSeriesByUserId(Long id);

    Series deleteSeries (Long id);

    Series updateSeries (Series serie);


}

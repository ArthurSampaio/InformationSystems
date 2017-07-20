package com.si.cinemao.service;

import com.si.cinemao.pojo.Series;

import java.util.Collection;

/**
 * Service to deal with series method.
 * Created by sampaio on 17/07/17.
 */
public interface SeriesService {

    /**
     * Get all the series in the system
     * @return a set of series
     */
    Collection<Series> getAllSeries();

    /**
     * Add series in the system
     * @param serie to be added
     * @return a series
     */
    Series addSeries (Series serie);

    /**
     * get a set of series presents in a user
     * @param id user id
     * @return
     */
    Collection<Series> getSeriesByUserId(Long id);

    /**
     * delete a serie
     * @param id of serie
     * @return
     */
    Series deleteSeries (Long id);

    /**
     * Update some info in serie
     * @param serie
     * @return
     */
    Series updateSeries (Series serie);


}

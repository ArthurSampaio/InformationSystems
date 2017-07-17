package com.si.cinemao.service;

import com.si.cinemao.pojo.Series;
import com.si.cinemao.pojo.SeriesForm;
import com.si.cinemao.repositories.SeriesRepository;
import com.si.cinemao.service.factory.SeriesFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.stereotype.Service;

import java.util.Collection;

/**
 * Created by sampaio on 17/07/17.
 */
@Service
@Configurable
public class SeriesServiceImpl implements SeriesService {


    @Autowired
    private SeriesRepository seriesRepository;

    @Override
    public Collection<Series> getAllSeries() {

        return seriesRepository.findAll();
    }

    @Override
    public Series addSeries(SeriesForm serie) {
        Series series = SeriesFactory.createSeries(serie);
        return seriesRepository.save(series);
    }
}

package com.si.cinemao.service;

import com.si.cinemao.exception.RegisteredUserException;
import com.si.cinemao.exception.UserNotFoundException;
import com.si.cinemao.pojo.Series;
import com.si.cinemao.pojo.SeriesForm;
import com.si.cinemao.repositories.SeriesRepository;
import com.si.cinemao.repositories.UserRepository;
import com.si.cinemao.rest.UserRest;
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

    @Autowired
    private UserRepository userRepository;



    @Override
    public Collection<Series> getAllSeries() {

        return seriesRepository.findAll();
    }

    @Override
    public Series addSeries(SeriesForm serie) {

        if(seriesRepository.findByUserIdAndImdbID(serie.getUserId(), serie.getImdbID()) == null){

            Series series = SeriesFactory.createSeries(serie);
            return seriesRepository.save(series);
        }else{
            throw new RegisteredUserException();
        }
    }

    @Override
    public Collection<Series> getSeriesByUserId(Long id) {

        if(userRepository.exists(id)){

            return seriesRepository.findByUserId(id);
        }else {
            throw new UserNotFoundException();
        }

    }

    @Override
    public Series deleteSeries(Long id) {

        if(seriesRepository.exists(id)) {
            Series exist = seriesRepository.findOne(id);
            seriesRepository.delete(id);
            return exist;
        }else{
            throw new UserNotFoundException();
        }
    }


}

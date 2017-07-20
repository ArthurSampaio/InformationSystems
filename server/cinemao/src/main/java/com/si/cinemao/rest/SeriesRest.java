package com.si.cinemao.rest;

import com.si.cinemao.pojo.Series;
import com.si.cinemao.pojo.User;
import com.si.cinemao.service.SeriesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

/**
 * Created by sampaio on 17/07/17.
 */
@RestController
@RequestMapping(value = "/series")
public class SeriesRest {

    @Autowired
    private SeriesService seriesService;


    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<Collection<Series>> getAllRegisterUsers() {

        Collection<Series> users = seriesService.getAllSeries();

        return new ResponseEntity<>(users, HttpStatus.OK);

    }

    @RequestMapping(method = RequestMethod.POST, value = "/add/{userId}")
    public ResponseEntity<User> addSerieToUser(@RequestBody Series series, @PathVariable Long userId){

        series.setUserId(userId);
        Series serie = seriesService.addSeries(series);

        return (serie != null) ? new ResponseEntity(serie, HttpStatus.OK) : new ResponseEntity(HttpStatus.BAD_REQUEST);

    }

    @RequestMapping(method = RequestMethod.GET, value = "/{id}")
    public ResponseEntity<Collection<Series>> findSeriesByUserId (@PathVariable Long id){
        Collection<Series> series = seriesService.getSeriesByUserId(id);

        return new ResponseEntity(series, HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/{id}")
    public ResponseEntity<Series> deleteSerieID (@PathVariable Long id){

        Series serieDeleted = seriesService.deleteSeries(id);
        return new ResponseEntity(serieDeleted, HttpStatus.OK);

    }

    @RequestMapping(method = RequestMethod.PUT)
    public ResponseEntity<Series> updateSeriesById (@RequestBody Series serie){

        Series seriesUpdated = seriesService.updateSeries(serie);

        return new ResponseEntity(seriesUpdated, HttpStatus.OK);

    }

}

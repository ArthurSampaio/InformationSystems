package com.si.cinemao.repositories;

import com.si.cinemao.pojo.Series;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;

/**
 * Created by sampaio on 17/07/17.
 */
public interface SeriesRepository extends JpaRepository<Series, Long> {

    Collection<Series> findByUserId(Long userId);

    Series findByUserIdAndImdbID(Long userId, String imdbId);

}

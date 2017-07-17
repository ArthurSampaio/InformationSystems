package com.si.cinemao.repositories;

import com.si.cinemao.pojo.Series;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by sampaio on 17/07/17.
 */
public interface SeriesRepository extends JpaRepository<Series, Long> {
}

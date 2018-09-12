package com.ability.emp.mobile.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ability.emp.base.BaseDao;
import com.ability.emp.mobile.entity.MobileSortDropLetEntity;


@Mapper
public interface MobileSortDropLetDao<T> extends BaseDao<T> {
	
	
	
	public List<MobileSortDropLetEntity> selectSortData(MobileSortDropLetEntity me);

}

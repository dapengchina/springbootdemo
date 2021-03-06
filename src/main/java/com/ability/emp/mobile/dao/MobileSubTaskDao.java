package com.ability.emp.mobile.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ability.emp.base.BaseDao;
import com.ability.emp.mobile.entity.MobileSubTaskEntity;


@Mapper
public interface MobileSubTaskDao<T> extends BaseDao<T> {
	
	
	public MobileSubTaskEntity selectSubTask(MobileSubTaskEntity mste);
	
	public List<MobileSubTaskEntity> selectSubTaskList(MobileSubTaskEntity mste);

}

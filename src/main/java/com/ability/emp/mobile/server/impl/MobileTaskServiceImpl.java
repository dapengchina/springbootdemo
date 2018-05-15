package com.ability.emp.mobile.server.impl;



import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.ability.emp.mobile.dao.MobileTaskDao;
import com.ability.emp.mobile.entity.MobileTaskEntity;
import com.ability.emp.mobile.server.MobileTaskService;

@Service("MobileTaskService") 
public class MobileTaskServiceImpl implements MobileTaskService{
	
	
	@SuppressWarnings("rawtypes")
	@Resource
	private MobileTaskDao mobileTaskDao;

	@Override
	public MobileTaskEntity queryById(String id) {
		return (MobileTaskEntity) mobileTaskDao.queryById(id);
	}
	
	
}
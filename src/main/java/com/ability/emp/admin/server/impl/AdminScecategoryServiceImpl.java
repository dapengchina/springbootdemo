package com.ability.emp.admin.server.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.ability.emp.admin.dao.AdminScecategoryDao;
import com.ability.emp.admin.entity.AdminScecategoryEntity;
import com.ability.emp.admin.server.AdminScecategoryService;


@Service("AdminScecategoryService")
public class AdminScecategoryServiceImpl implements AdminScecategoryService{
	
	
	@SuppressWarnings("rawtypes")
	@Resource
	private AdminScecategoryDao adminScecategoryDao;

	@SuppressWarnings("unchecked")
	@Override
	public List<AdminScecategoryEntity> getCourse(AdminScecategoryEntity ase) {
		return adminScecategoryDao.selectCourse(ase);
	}

	@Override
	public AdminScecategoryEntity getCourseByID(AdminScecategoryEntity ase) {
		return adminScecategoryDao.selectCourseByID(ase);
	}

}

package com.ability.emp.mobile.server;

import java.util.List;

import com.ability.emp.mobile.entity.MobileSceCategoryEntity;

public interface MobileSceCategoryService {
	
	
	
	
	public List<MobileSceCategoryEntity> getScenListDropLetData(MobileSceCategoryEntity me);
	
	public List<MobileSceCategoryEntity> getCourseData(MobileSceCategoryEntity me);
	
	public MobileSceCategoryEntity getCourse(MobileSceCategoryEntity me);
	
	public void chooseCourse(MobileSceCategoryEntity me);

}

package com.ums.tables;

import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;

import com.ums.university.University;
import com.ums.utilities.Trace;

public class UniversityTable {
	private Logger logger = Trace.getInstance().getLogger("opreation_file");
	List<University> universityList = new ArrayList<University>();
	
	private static class UniversityListHolder {
		private static final UniversityTable INSTANCE = new UniversityTable();
	}
	
	private UniversityTable() {
		
	}
	
	public static final UniversityTable getInstance() {
		return UniversityListHolder.INSTANCE;
	}
}

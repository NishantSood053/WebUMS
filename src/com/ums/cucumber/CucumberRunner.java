package com.ums.cucumber;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		plugin = {"pretty", "html:output/cucumber.html"},
		features = {"src/com/ums/cucumber/features"}
		)
public class CucumberRunner {

}

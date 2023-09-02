//package com.practice.springboot.firstwebapp.login;
//
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.ModelMap;
//import org.springframework.web.bind.annotation.*;
//
//@Controller
//@SessionAttributes("name")
//public class WelcomeController {
//
//	@GetMapping("/")
//	public String login(ModelMap modelMap) {
//		modelMap.put("name",getLoggedInUsername());
//		return "welcome";
//	}
//
//	private String getLoggedInUsername(){
//		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
//		return authentication.getName();
//	}
//
//}

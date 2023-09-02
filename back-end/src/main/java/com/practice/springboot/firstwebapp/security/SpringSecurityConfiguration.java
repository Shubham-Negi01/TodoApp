//package com.practice.springboot.firstwebapp.security;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.http.HttpMethod;
//import org.springframework.security.config.Customizer;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.http.SessionCreationPolicy;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.security.provisioning.InMemoryUserDetailsManager;
//import org.springframework.security.web.SecurityFilterChain;
//
//import java.util.function.Function;
//
//import static org.springframework.security.config.Customizer.withDefaults;
//
//@Configuration
//public class SpringSecurityConfiguration {
////    @Bean
////    public InMemoryUserDetailsManager createUserDetailsManager(){
////        UserDetails userDetails1 = createNewUserDetails("Sonali","12345");
////        UserDetails userDetails2 = createNewUserDetails("Shubham","54321");
////        return new InMemoryUserDetailsManager(userDetails1, userDetails2);
////    }
////
////    @Bean
////    public PasswordEncoder passwordEncoder(){
////        return new BCryptPasswordEncoder();
////    }
//
//    @Bean
//    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
//        //enable authentication for all the requests.
//        httpSecurity.authorizeHttpRequests(auth -> auth
//                .requestMatchers(HttpMethod.OPTIONS,"/**").permitAll()
//                .anyRequest().authenticated());
//
//        //telling the authentication in Basic Authentication(username and password)
//        httpSecurity.httpBasic(Customizer.withDefaults());
//
//        //when disabling csrf, session should be stateless
//        httpSecurity.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));
//
//        //disabling csrf for POST requests
//        httpSecurity.csrf().disable();
//        return httpSecurity.build();
//    }
//
////    private UserDetails createNewUserDetails(String username, String password){
////        Function<String, String> encoder = input -> passwordEncoder().encode(input);
////        UserDetails userDetails = User.builder()
////                .passwordEncoder(encoder)
////                .username(username)
////                .password(password)
////                .roles("ADMIN","USER")
////                .build();
////        return userDetails;
////    }
//
//}

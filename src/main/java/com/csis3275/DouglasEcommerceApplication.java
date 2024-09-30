package com.csis3275;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.csis3275.model_hja_73.CustomerDAO_hja_73;
import com.csis3275.model_hja_73.Customer_hja_73;

@SpringBootApplication
public class DouglasEcommerceApplication {

	public static void main(String[] args) {
		SpringApplication.run(DouglasEcommerceApplication.class, args);
	}
	
	@Bean
	CommandLineRunner preStoreCustomerData ( CustomerDAO_hja_73 dao) {
		return (args) ->{
			//Password has issues, so I changed the code 
			dao.addCustomer(new Customer_hja_73("John", "Doe", "johndoe@outlook.com", "abc123"));
			dao.addCustomer(new Customer_hja_73("Brown", "Doe", "johndoe@outlook.com","abc123"));
			dao.addCustomer(new Customer_hja_73("Yellow", "Doe", "johndoe@outlook.com","abc123"));
		};
	}
}

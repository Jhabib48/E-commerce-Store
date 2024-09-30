package com.csis3275.controller_hja_73;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.csis3275.model_hja_73.CustomerDAO_hja_73;
import com.csis3275.model_hja_73.Customer_hja_73;

@RestController
@RequestMapping("/customer")
public class CusotmerController_hja_72 {
	
	@Autowired
	private CustomerDAO_hja_73 dao; 
	
	@GetMapping("/customerList")
	public List<Customer_hja_73> getCustomerList() {
		return dao.readCustomer();
	}
	
	@PostMapping("/addCustomer")
	public ResponseEntity<?> addCustomer(@RequestBody Customer_hja_73 customer) {
		List<Customer_hja_73> listOfCustomer = dao.readCustomer();
		Set<String> emailSet = new HashSet<>(); 
		
		for(Customer_hja_73 customerInformation : listOfCustomer ) {
			emailSet.add(customerInformation.getEmailAddress());
		}
		
		if(emailSet.contains(customer.getEmailAddress())) {
			return ResponseEntity.status(HttpStatus.CONFLICT).body("Customer with the same email address already exists");
		}
			 
		Customer_hja_73 addedCustomer = dao.addCustomer(customer);
	    addedCustomer.setPassword(customer.getPassword());
	    return ResponseEntity.ok(addedCustomer);		
	}
	
	@GetMapping("/findCustomer/{id}")
	public Customer_hja_73 findCustomer(@PathVariable Long id) {
		return dao.findById(id);
	}
	
	@PutMapping("/updateCustomer/{id}")
	public ResponseEntity<?> updateCustomer( @PathVariable Long id, @RequestBody Customer_hja_73 customer ) {	
		Set<String> emailSet = new HashSet<>(); 
		List<Customer_hja_73> listOfCustomer = dao.readCustomer();

		for( Customer_hja_73 existingCustomer : listOfCustomer ) {
			if(!existingCustomer.getId().equals(id) && existingCustomer.getEmailAddress().equals(customer.getEmailAddress())) {
				emailSet.add(existingCustomer.getEmailAddress());
			}
		}
		
		if(emailSet.contains(customer.getEmailAddress())) {
			return ResponseEntity.status(HttpStatus.CONFLICT).body("Customer with the same email address already exists");
		}
		
		Customer_hja_73 updatedCustomer = dao.updateCar(id, customer);
	    updatedCustomer.setPassword(customer.getPassword());
	    return ResponseEntity.ok(updatedCustomer);
	}
	
    @DeleteMapping("/deleteCustomer/{id}")
	public void deleteCustomer(@PathVariable Long id) {
		dao.deleteCustomer(id);
	}
}

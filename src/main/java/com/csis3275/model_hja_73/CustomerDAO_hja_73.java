package com.csis3275.model_hja_73;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerDAO_hja_73 {
	
	@Autowired
	ICustomerRepository_hja_73 customerRepo; 
	
	public List<Customer_hja_73> readCustomer(){
		return (List<Customer_hja_73>) customerRepo.findAll();
	}
	
	public Customer_hja_73 addCustomer(Customer_hja_73 customer) {
		return customerRepo.save(customer);
	}
	
	public Customer_hja_73 findById(Long id) {
		return customerRepo.findById(id).get();
	}
	
	public Customer_hja_73 updateCar(Long id, Customer_hja_73 updatedCustomer) {
		 Customer_hja_73 customer = customerRepo.findById(id).orElse(null);
		    if (customer != null) {
		        // Update the customer object with the new values
		        customer.setEmailAddress(updatedCustomer.getEmailAddress());
		        customer.setLastName(updatedCustomer.getLastName());
		        customer.setFirstName(updatedCustomer.getFirstName());
		        customer.setPassword(updatedCustomer.getPassword());
		        // Save and return the updated customer object
		        return customerRepo.save(customer);
		    } else {
		        return null;
		    }			
	}
	
	public void deleteCustomer(Long id) {
		customerRepo.deleteById(id);
	}
}

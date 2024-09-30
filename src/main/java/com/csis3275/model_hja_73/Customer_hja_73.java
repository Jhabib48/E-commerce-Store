package com.csis3275.model_hja_73;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="customer")
public class Customer_hja_73 {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id; 
	private String firstName; 
	private String lastName; 
	@Column(name="emailAddress") // Add this annotation to map to the correct column name
	private String emailAddress; 
	private String password; 
	
	
	public Customer_hja_73() {}
	
	public Customer_hja_73 (String fName, String lName, String eAdress, String password) {
		this.emailAddress = eAdress; 
		this.firstName = fName; 
		this.lastName = lName; 
		this.password = password; 
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}


	public String getEmailAddress() {
		return emailAddress;
	}

	public void setEmailAddress(String emailAddress) {
		this.emailAddress = emailAddress;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
}

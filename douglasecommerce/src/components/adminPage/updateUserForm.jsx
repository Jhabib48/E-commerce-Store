import {useState, useEffect} from 'react';

const UpdateUserForm = ({updateUser, onUpdateForm = f => f, userId}) => {

    //declared state varibles
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailAddress, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //get id
    const id = userId;
    console.log(id);

    //get user to edit by id
    useEffect(()=>{ 
        const fetchData = async () => {
            const url = `http://localhost:8080/customer/findCustomer/${userId}`;
            try {
              const response = await fetch(url);
              if (!response.ok) {
                throw new Error('Failed to fetch customer');
              }
              const { firstName, lastName, emailAddress, password } = await response.json();
              setFirstName(firstName);
              setLastName(lastName);
              setEmail(emailAddress);
              setPassword(password);
            } catch (error) {
              console.error(`Error while fetching data from database: ${error}`);
            }
          };
          
        fetchData();
    },[id])

    const onSubmit = (event) =>{
        event.preventDefault();
        onUpdateForm(id, firstName, lastName, emailAddress, password )
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
    }

  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <div className="flex justify-center mb-6">
           
        </div>
        <h2 className="text-2xl font-semibold text-center mb-4">URBANGLOW</h2>
        <p className="text-gray-600 text-center mb-6"> {updateUser.firstName}'s Account</p>
        <form method="dialog">
            <div className="mb-4">
            <label htmlFor="updateFirstName" className="block text-gray-700 text-sm font-semibold mb-2">
                 First Name
            </label>                
            <input 
                type="text" 
                id="updateFirstName" 
                className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-red-500" 
                required placeholder={updateUser.firstName}
                onChange={(event)=>setFirstName(event.target.value)}
                />
            </div>
            <div className="mb-4">
                <label for="fullName" className="block text-gray-700 text-sm font-semibold mb-2">Last Name</label>
                <input 
                type="text" 
                id="FullName" 
                className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-red-500" 
                required placeholder={updateUser.lastName}
                onChange={(event)=>setLastName(event.target.value)}
                />
            </div>
            <div className="mb-4">
                <label for="email" className="block text-gray-700 text-sm font-semibold mb-2">Email Address</label>
                <input 
                type="email" 
                id="updateEmail" 
                className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-red-500" 
                required placeholder={updateUser.emailAddress}
                onChange={(event)=>setEmail(event.target.value)}
                />
            </div>
            <div className="mb-6">
                <label for="password" className="block text-gray-700 text-sm font-semibold mb-2">Password</label>
                <input 
                type="password" 
                id="updatePassword" 
                className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-red-500" 
                required placeholder="••••••••"
                onChange={(event)=>setPassword(event.target.value)}
                />
                <p className="text-gray-600 text-xs mt-1">Must contain 1 uppercase letter, 1 number, min. 8 characters.</p>
            </div>
            <button onClick={onSubmit} type="submit" className="w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">Update {updateUser.firstName}'s Accout</button>
        </form>
    </div>
</div>
  );
};

export default UpdateUserForm;

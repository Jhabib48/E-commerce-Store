import { useState } from "react";

const NewUser = ({onAdd = f => f}) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (event) =>{
        event.preventDefault();
        onAdd(firstName, lastName, email, password);
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
        <h2 className="text-2xl font-semibold text-center mb-4">DRIVESAFE</h2>
        <p className="text-gray-600 text-center mb-6">Account</p>
        <form method="dialog">
            <div className="mb-4">
                <label for="firstName" className="block text-gray-700 text-sm font-semibold mb-2">First Name</label>
                <input 
                type="text" 
                id="firstName" 
                className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-red-500" 
                required placeholder="James Brown"
                onChange={(event)=>setFirstName(event.target.value)}
                />
            </div>
            <div className="mb-4">
                <label for="fullName" className="block text-gray-700 text-sm font-semibold mb-2">Last Name</label>
                <input 
                type="text" 
                id="fullName" 
                className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-red-500" 
                required placeholder="Booby Green"
                onChange={(event)=>setLastName(event.target.value)}
                />
            </div>
            <div className="mb-4">
                <label for="email" className="block text-gray-700 text-sm font-semibold mb-2">Email Address</label>
                <input 
                type="email" 
                id="email" 
                className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-red-500" 
                required placeholder="test@alignui.com"
                onChange={(event)=>setEmail(event.target.value)}
                />
            </div>
            <div className="mb-6">
                <label for="password" className="block text-gray-700 text-sm font-semibold mb-2">Password</label>
                <input 
                type="password" 
                id="password" 
                className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-red-500" 
                required placeholder="••••••••"
                onChange={(event)=>setPassword(event.target.value)}
                />
                <p className="text-gray-600 text-xs mt-1">Must contain 1 uppercase letter, 1 number, min. 8 characters.</p>
            </div>
            <button onClick={onSubmit} type="submit" className="w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">Create New Account</button>
           
        </form>
    </div>
</div>



     );
}
 
export default NewUser;
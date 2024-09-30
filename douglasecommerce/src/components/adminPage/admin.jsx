import { useState } from "react";
import NewUser from "./addNewUser";
import UpdateUserForm from "./updateUserForm"; 

const AdminPage = ({userData, onRemove = f => f, onUpdateForm = f => f, onAdd = f => f}) => {
  const [user, setUser] = useState([]);
        return (
          <div className="flex flex-col mt-5 w-full ml-5 mr-5">
            <div className="overflow-x-auto">
              <div className="p-1.5 w-full inline-block align-middle">
                <div className="overflow-hidden border rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">ID</th>
                        <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">First Name</th>
                        <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">Last Name</th>
                        <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">Password</th>
                        <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">Email</th>
                        <th scope="col" className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase ">Edit</th>
                        <th scope="col" className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase " > Delete</th>
                        <th scope="col" className="px-6 py-3 text-xs font-bold text-right  uppercase text-blue-500 hover:text-blue-700 " onClick={() => {
                                      window.my_modal_3.showModal();
                                  }}>Add</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                          {
                            userData.map((user) => (
                              <tr key={user.id}>
                                <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{user.id}</td>
                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{user.firstName}</td>
                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{user.lastName}</td>
                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{user.password}</td>
                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                  {user.emailAddress ? user.emailAddress : "-"}
                                </td>
                                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                  <a
                                    onClick={() => {
                                      window.my_modal_4.showModal();
                                      setUser(user);
                                    }}
                                    className="text-green-500 hover:text-green-700"
                                    href="#">
                                    Edit
                                  </a>
                                </td>
                                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                  <a className="text-red-500 hover:text-pink-700" href="#" onClick={() => onRemove(user)}>Delete</a>
                                </td>
                              </tr>
                            ))
                          }
                        <div>
                        <dialog id="my_modal_4" className="modal">
                            <UpdateUserForm onUpdateForm={onUpdateForm} updateUser={user} userId={user.id} />
                          </dialog>
                        </div>

                        <div>
                          <dialog id="my_modal_3" className="modal_3">
                            <NewUser onAdd={onAdd}/>
                          </dialog>
                        </div>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
        </div>
        );
      };
export default AdminPage;



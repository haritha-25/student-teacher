import React, { useContext, useState } from 'react'
import { useNavigate,useParams } from 'react-router'


import { UsersContext } from './Users';

function CreateUser() {
    const [UsersData, setUsersData] = useContext(UsersContext);
    const navigate = useNavigate();
    let localdata = JSON.parse(localStorage.getItem('users')) || null;

    // For edit Users
    let edituser={}; 
   
    if(navigate.location.pathname.includes('editUser')){
        
       
        console.log(edituser)
    }

    /* Assigning initial values based on -EDIT or CREATE */ 
   
    
    const [studentname, setStudentname] = useState(edituser.studentname || '');
    const [email, setEmail] = useState(edituser.email || '');
   
    const [branch,setbranch] = useState(edituser.branch || '');
    const [school, setSchool] = useState(edituser.school || '');

    /* Handling Form Submittion */
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(navigate.location.pathname.includes('CreateUser')){
            let createdUser = [...UsersData,{
              
              
                studentname,
                email,
                branch,
                school,
               
            }]
            localStorage.removeItem('users');
            setUsersData(createdUser)
            localStorage.setItem('users',JSON.stringify(createdUser))
        }
        else{
           
            let updatedUser = [{
                
              
                studentname,
                email,
                branch,
                school,
               
            },]
            localStorage.removeItem('users');
            setUsersData(updatedUser);
            localStorage.setItem('users',JSON.stringify(updatedUser))
        }
        navigate.push('/users');
    }

    return (
        <div className="container-fluid">
            {
                !navigate.location.pathname.includes('CreateUser') ? 
                <div className="text-primary mb-3">Note : Updated data will be in the top of the Users List</div> : ''
            }
            <div className="card shadow">
                <div className="card-header">
                    <h4 className="float-left text-info">{navigate.location.pathname.includes('CreateUser') ? 'Create User' : 'Update User'}</h4>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        
                        <div className="mb-3">
                            <label htmlFor="studentname" className="form-label">Studentname</label>
                            <input type="text" className="form-control" value={studentname} onChange={(e)=>{setStudentname(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="text" className="form-control" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                        </div>
                       
                               
                           
                       
                        <div className="mb-3">
                            <label htmlFor="branch" className="form-label">branch</label>
                            <input type="text" className="form-control" value={branch} onChange={(e)=>{setbranch(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="school" className="form-label">School</label>
                            <input type="text" className="form-control" value={school} onChange={(e)=>{setSchool(e.target.value)}} />
                        </div>
                        <button type="submit" className="btn btn-primary">{navigate.location.pathname.includes('CreateUser') ? 'Create' : 'Update'}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateUser
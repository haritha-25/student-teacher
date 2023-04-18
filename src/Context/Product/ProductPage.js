import React from 'react'

function ProductPage() {
    const products = [   
        {
           "id": 3562,
          
           "teacher_name": "Ponanna",
           "subject": "maths",
           "salary": "30000",
           "school": "sms",
        
         
        },   
        {
           "id": 3598,
          
           "teacher_name": "kwacha",
           "subject": "GK",
           "salary": "40000",
           "school": "loods",
        
        },   
        {
           "id": 8518,
          
           "teacher_name": "adarsh",
           "subject": "sports",
           "salary": "50000",
           "school": "roots",
           
          
        },   
        {
           "id": 270,
         
           "teacher_name": "mithu",
           "subject": "maths",
           "salary": "22000",
           "school": "little flower",
           
        
        },   
        {
           "id": 8941,
          
           "teacher_name": "somaiah",
           "subject": "production",
           "salary": "80000",
           "school": "roots",
          
          
        },   
        {
           "id": 1294,
       
           "teacher_name": "tejaswini",
           "subject": "networks",
           "salary": "70000",
           "school": "antonys",
           
           
        },   
        {
           "id": 9487,
          
           "teacher_name": "chumanna",
           "subject": "english",
           "salary": "35000",
           "school": "lions",
          
          
        },   
        {
           "id": 5646,
          
           "teacher_name": "kavitha",
           "subject": "kavitha",
           "salary": "23000",
           "school": "antonys",
           
          
        },   
        {
           "id": 6637,
           
           "teacher_name": "Dimple",
           "subject": "english",
           "salary": "10000",
           "school": "lions",
          
         
        },   
        {
           "id": 9025,
          
           "teacher_name": "rupesh",
           "subject": "social",
           "salary": "5000",
           "school": "sms",
          
          
        }
     ]
    return (
        <div className="container-fluid mb-4">
            <div className="card shadow">
                <div className="card-header">
                    <h4 className="float-left text-info">Products</h4>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-info table-striped" style={{borderRadius:"10px"}}>
                            <thead style={{color:"rgb(105, 54, 156)"}}>
                                <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Teacher Name</th>
                                <th scope="col">subject</th>
                                <th scope="col">salary</th>
                                <th scope="col">school</th>
                              
                                </tr>
                            </thead>
                            <tbody  style={{color:"rgba(110, 71, 145, 0.966)"}}>
                            {
                                products.map(product => {
                                    return (
                                        <tr key ={product.id}>
                                            <th scope="row">{product.id}</th>
                                            <td>{product.teacher_name}</td>
                                            <td>{product.subject}</td>
                                            <td>{product.salary}</td>
                                            <td>{product.school}</td>
                                             
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage
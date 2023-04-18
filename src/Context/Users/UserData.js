const Users = [   
    {
      
     
      " studentname": "bopanna",
       "email": "bops@email.com",
       "branch": "Marketing ",
       "school": "sms",
      
    },  
    {
      
    
       "studentname": "chinnu",
       "email": "chinnu@email.com",
       "branch": "coading",
       "school": "lions",
       
    },   
    {
       
     
       "studentname": "dumma",
       "email": "dms@email.com",
       "branch": "Future Community-Services Planner",
       "school": "roots",
       
    },   
    {
       
      
       "studentname": "ponni",
       "email": "pon@email.com",
       "branch": "National Developer",
       "school": "sms",
       
    },   
    {
       
    
       "studentname": "uthappa",
       "email": "uthu@email.com",
       "branch": "Internal Hospitality Developer",
       "school": "antonys",
      
    },   
    {
       
      
       "studentname": "arun",
       "email": "aru@email.com",
       "branch": "Construction Specialist",
       "school": "sms",
       
    },   
    {
      
      
       "studentname": "vivek",
       "email": "viv@email.com",
       "branch": "Design Producer",
       "school": "lions",
      
    },   
    {
       
       "studentname": "sajan",
       "email": "sajju@email.com",
       "branch": "Community-Services Representative",
       "school": "lions",
       "feeplan": "Bronze"
    },   
    {
      
     
       "studentname": "dilhan",
       "email": "dilly@email.com",
       "branch": "Technology Architect",
       "school": "sms",
      
    },   
    {
      
    
       "studentname": "cheethu",
       "email": "cheethu@email.com",
       "branch": "Government Developer",
       "school": "loods",
       
    }
 ]
let UserData = Users;
 if(!localStorage.getItem('users')){
    localStorage.setItem('users',JSON.stringify(Users))
 }
 else{
    UserData = JSON.parse(localStorage.getItem('users'));
 }

 export {UserData};
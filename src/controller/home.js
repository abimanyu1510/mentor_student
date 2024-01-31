
let homePage = (req,res)=>{
    try{
    res.status(200).send( `<body style="background-image: linear-gradient(324deg, transparent 0%, transparent 45%,rgba(186, 186, 186,0.04) 45%, rgba(186, 186, 186,0.04) 47%,transparent 47%, transparent 100%),linear-gradient(208deg, transparent 0%, transparent 40%,rgba(186, 186, 186,0.04) 40%, rgba(186, 186, 186,0.04) 80%,transparent 80%, transparent 100%),linear-gradient(202deg, transparent 0%, transparent 20%,rgba(186, 186, 186,0.04) 20%, rgba(186, 186, 186,0.04) 40%,transparent 40%, transparent 100%),linear-gradient(338deg, transparent 0%, transparent 10%,rgba(186, 186, 186,0.04) 10%, rgba(186, 186, 186,0.04) 72%,transparent 72%, transparent 100%),linear-gradient(90deg, rgb(0,0,0),rgb(0,0,0));">
    <div style="background-color:white;color:black; padding:18px;border-radius:250px;margin:11em;box-shadow: 0px 0px 15px #e78267">
   <h1 style="text-align:center; color:green">WEB DEVELOPER TASK</h1>
    <ul>
        <h2 style="text-align:center;">Mentor and Student Assigning with Database</h2>
        <h2 style="text-align:center;color:blue">Database:MongoDB</h2>  
        <h2 style="text-align:center;">👨‍💻🧑‍🎓👩‍🎓👩‍💻</h2>        
    </ul>
    </div></body>`)}
    catch(error){
        res.status(500).send("Internal Server Error")
    }
     
    
}
export default { homePage }


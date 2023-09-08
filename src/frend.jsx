export default function Friend ({friend}){
    console.log(friend)
 return(
    <div style={{border:'2px solid gray', marginBottom:'5px'}}>
        <h4>Name: {friend.name}</h4>
        <p>Phone: {friend.phone}</p>
        <p>Email: {friend.email}</p>
        <p>Website: {friend.website}</p>
    </div>
 )   
}
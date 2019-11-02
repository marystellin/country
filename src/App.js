import React from 'react';
import Axios from 'axios';
import Link from './Link';
const App=()=>{
    const[input,setInput]=React.useState("")
    const[list,setlist]=React.useState([])
    React.useEffect(()=>{
        getString1()
    },[])
    const getString1=()=>{
        Axios.get("https://restcountries.eu/rest/v2/all").then(res=>{
            setlist(res.data);
        });
       }
    const getString=(e)=>{
         setInput(e.target.value)
    }
    const getCountry=(input)=>{
        Axios.get("https://restcountries.eu/rest/v2/name/"+input).then(result=>{
            setlist(result.data);
            setInput("");
        });
    }

return(
    <div>
        <h1><center>Country App</center></h1>
        <h5>{"Enter search string:"}</h5><input type="text" onChange={getString} value={input}></input>
        <button onClick={()=>
            getCountry(input)}>search</button>
        <Link List={list}/>
    </div>
)    
}
export default App;


























// import React from 'react';

// const App=({getPost,setlist})=>{
// const[input,setInput]=React.useState("")


// return(
//   <div>
//     <input type="text" onChange={e=>setInput(e.target.value)} value={input}></input>
//     <button onClick={()=>getPost(input)}>Post</button>
//     {
//     setlist.map((i)=>{
//         return(
        
//             <li key={i.id}> </li>
//         )})} 
//      </div>
//         )
// }
// export default App;
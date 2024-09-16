import { useState } from 'react';
import DrawerAppBar from '../components/Appbar';
import axios from 'axios';


export default function Profile() {
    const [file, Setfile] = useState({});
    const uploadFile = () => {
        const formData = new FormData();
        formData.append("file", file)
     axios.post('http://localhost:8000/api/upload', formData)
     .then(res => console.log("res---",res))
     .catch(err => console.log("err---", err))
     console.log(file)
    }
  return ( 
    <div >
    <DrawerAppBar />
    <h1 style={{paddingTop: 60}}>Profile</h1>
   <input type="file" onChange={(e)=>Setfile(e.target.files[0])}/>
   <button onClick={uploadFile}>Upload</button>
</div>
  )
}

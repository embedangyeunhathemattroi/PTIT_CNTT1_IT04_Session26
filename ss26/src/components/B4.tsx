import {useState,type ChangeEvent} from 'react'
import { useSearchParams } from 'react-router-dom'

export default function StudentName() {
   const[studentName, setStudentName]=useState("");
   const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
    setStudentName(e.target.value);
   }
const[name,setSearchParamName]=useSearchParams();  //lay dc querry, truyen du lieu len url theo kieu obj
//co the loc dc dsach sinh vien
const handleClick=()=>{
    setSearchParamName({
        name:studentName,
        age:'18'
    })
}

    
  return (
    <div>Trang Hoc Sinh -B4
        <input type='text' placeholder='nhap ten sinh vien' onChange={handleChange}>Tim kiem </input>
        <p>Gia tri vua tim kiem {name.get('name')}</p>
       
    </div>
  )
}

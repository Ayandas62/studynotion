import React,{useState,useEffect} from 'react'

const RequirementFeilds = ({name,label,error,register,setValue,getValue}) => {
    const[requirment,setRequirment] = useState("");
    const [requirmentList,setRequirmentList] = useState([]);

    const handleAddRequirment = ()=>{
        if(requirment){
            setRequirmentList([...requirmentList,requirment])
            setRequirment("")
        }
    }

    const handleRemoveRequirment = (index)=>{
        const updatedRequirmentList = [...requirmentList];
        updatedRequirmentList.splice(index,1)
        setRequirmentList(updatedRequirmentList);
    }

    useEffect(()=>{
       register(name,{required:true})
    },[])

  return (
    <div>
        <label htmlFor={name}>{label}</label>
        <div className="">
            <input 
            type="text"
            name={name} 
            id={name} 
            value={requirment}
            onChange={(e)=>setRequirment(e.target.value)}
            className="form-style"
            
            />
            <button type="button"
            onClick={handleAddRequirment}
            className="font-semibold text-yellow-50"
            >Add</button>
        </div>
        {
            requirmentList.length >0 &&(
                <ul>
                    {
                        requirmentList.map((requirment,index)=>(
                            <li key={index}>
                                <span className="text-richblack-5">{requirment}</span>
                                <button type="button"
                                onClick={()=>handleRemoveRequirment(index)}>Remove</button>
                            </li>
                        ))
                    }
                </ul>
            )
        }
        {/* {error[name]&& (
            <span> {label} is required</span>
        )} */}
    </div>
  )
}

export default RequirementFeilds
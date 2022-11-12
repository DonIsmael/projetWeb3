import {  FC, ChangeEvent,useState } from "react";


interface IPerson {
    id:number ; 
    name:string;
    number:number;
}


export const AddPerson: FC = () => {


    const [newPersonName , setNewPersonName] = useState<string>('');
    const [newPersonNumber , setNewPersonNumber] = useState<number>(0);
    const [persons , setPersons] = useState<IPerson[]>([]);


 
   const handleChange = (event : ChangeEvent<HTMLInputElement>):void =>{
    if(event.target.name ==="name"){
        setNewPersonName(event.target.value)
    }else if(event.target.name === "number"){
        setNewPersonNumber(Number(event.target.value)) // string --> number.
    }
   };

   const addPerson = ():void =>{
    const newPerson = { id : persons.length+1 , name : newPersonName , number : newPersonNumber}
    setPersons([...persons , newPerson]);
    console.log(persons);
   }
   

    return(
        <div>
            <div>
                <div>
                    <input type={"text"} placeholder={"name"} name="name" onChange={handleChange}/>
                    <input type={"text"} placeholder={"number"} name="number" onChange={handleChange}/>
                </div>
                <button onClick={addPerson} > add person </button>
            </div>
            {persons.map((part) =>
         (
        <li>{part.name} , {part.number}</li>
        ))}

        </div>
    );
};

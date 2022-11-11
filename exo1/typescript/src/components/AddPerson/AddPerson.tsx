import {  useState } from "react";

type FormElement = React.FormEvent<HTMLFormElement>;

interface IPerson {
    id:number ; 
    name:string;
}


export const AddPerson =() => {

    const [newPerson , setNewPerson] = useState<string>('');

    const [persons , setPersons] = useState<IPerson[]>([]);

   /* const updatePerson =(event :ChangeEvent<HTMLInputElement>)=>{
        setPersons(event.target.value);

    }
    */

     const handleSubmit = (event:FormElement ) =>{
        event.preventDefault();
        AddPerson(newPerson);
        console.log(persons);
    }

    const AddPerson = (name:string) =>{
        const newPersons = [...persons , {id :persons.length+1,name}]
        setPersons(newPersons);
    }

    return(
        <div>
        <h2> Add persons  : </h2>
        <form onSubmit={handleSubmit}>
            <input type={"text"} onChange={e =>
             setNewPerson(e.target.value)} value={newPerson} placeholder={"name"} >
            </input>
            <button >Add person</button>
        </form>
        {persons.map((part) =>
         (
        <li>{part.name}</li>
        ))}
    </div>
    );
};

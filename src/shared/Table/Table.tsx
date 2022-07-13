
import React from "react";
import { Container } from "react-bootstrap";
import  Table  from "react-bootstrap/Table";

interface CustomTableProps{
    data:any[];
    primaryKey?:string;
    childtoParent(a:any):void
    
    
}

const CustomTable:React.FC<CustomTableProps>=({data,primaryKey,childtoParent})=>{

    let mioId:any=""
   const findId=(e:any)=>{
    primaryKey=e.target.id
    mioId=primaryKey
    childtoParent(primaryKey)
    console.log(primaryKey)
   }
   
   

    return(
        <>
        <Container>
                <Table className="space" responsive striped bordered hover>
                    <thead>
                    <tr>
                    <th>Title</th>
                    <th>Authors</th>
                    <th>Publisher</th>
                    <th>Description</th>
                    <th>Date</th>
               
                
                
                    </tr>
                    </thead>
                    <tbody>
                    {
                    data.map((tr:any, index:number)=><tr onClick={findId} key={primaryKey?tr.id:index}>
                    <td id={tr.id}>{tr.volumeInfo.title}</td>
                    <td id={tr.id}>{tr.volumeInfo.authors}</td>
                    <td id={tr.id}>{tr.volumeInfo.publisher}</td>
                    <td id={tr.id}>{tr.volumeInfo.description?tr.volumeInfo.description.substring(0,100):"No description"}...</td>
                    <td id={tr.id}>{tr.volumeInfo.publishedDate}</td>
                    
                    {/* <td>{tr.volumeInfo.imageLinks.smallThumbnail}</td> */}
                    </tr>)
                     }
                    </tbody>
                </Table>
        </Container>       
        </>
                    )
                    }

export default CustomTable
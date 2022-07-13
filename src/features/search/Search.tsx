import React from "react";
import { Form } from "react-bootstrap";


const Search=(props:any)=>{

    const text:string=props.text
    const writtenText=(e:any)=>{
        props.myText(e.target.value)
    }

    return(
<div id="search">
<Form.Control onChange={writtenText} value={text}  type="text" placeholder="Search your book" />
</div>
    )

}

export default Search
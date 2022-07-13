import React from "react";

const BookDetail=(props:any)=>{

    const title:string=props.title
    const img:string=props.img
    const description:string=props.description
    const author:string=props.author
    const link:string=props.link

    return(
<ul>
    
    <li><b>Title:</b> {title}</li>
    <li><b>Author:</b> {author}</li>
    <li><b>Description:</b> {description}</li>
    <li><b>Info Link:</b> <a href={link}>{link}</a></li>
    
</ul>

    )
}

export default BookDetail
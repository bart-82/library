import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table'
import CustomTable from "../../shared/Table/Table";
import { Button } from "react-bootstrap";
import DropdownMenu from "../dropdownMenu/DropdownMenu";
import Search from "../search/Search";
import BookDetail from "../bookDetail/BookDetail";


const Books=()=>{
    //Calls
const[books,setBooks]=useState<any>([])
const[bookDetail,setBookDetail]=useState<any>({})
const bookdata={...bookDetail,...bookDetail.volumeInfo}

const[selectedId,setSelectedId]=useState("a")


const[paginator, setPaginator]=useState(0)
const[paginator2,setPaginator2]=useState(5)

//Search
const[written,setWritten]=useState('')
const[search,setSearch]=useState('')
console.log(search)
//4 Filters
const [maxResults,setResults]=useState(5)
const[filter,setFilter]=useState("ebooks")
const[relevance,setRelevance]=useState("relevance")
const[type,setType]=useState("all")


const childParent=(data:any)=>{
    setSelectedId(data)
    
    console.log(selectedId)
}

//Filter maxResults
function first5(){
    setResults(5)
    console.log(maxResults)
    return maxResults
}

function first10(){
    setResults(10)
    console.log(maxResults)
}

function first15(){
    setResults(15)
}

function first20(){
    setResults(20)
}

//Filter filter
function filterBooks1(){
    setFilter("ebooks")
}

function filterBooks2(){
    setFilter("free-ebooks")
}

function filterBooks3(){
    setFilter("full")
}

function filterBooks4(){
    setFilter("paid-ebooks")
}

function filterBooks5(){
    setFilter("partial")
}

//Filter relevance
function onRelevance(){
    setRelevance("relevance")
}

function onNewest(){
    setRelevance("newest")
}

//Filter type
function onAll(){
    setType("all")
}

function onBoooks(){
    setType("books")
}

function onMagazines(){
    setType("magazines")
}

useEffect(()=>{
    fetch(`https://books.googleapis.com/books/v1/volumes?q=${search}&maxResults=${maxResults}&filter=${filter}&orderBy=${relevance}&printType=${type}`).then(res=>res.json()).then(res=>setBooks(res.items))
},[maxResults,filter,relevance,type,search])

useEffect(()=>{
    fetch(`https://www.googleapis.com/books/v1/volumes/${selectedId}`).then(res=>res.json()).then(res=>setBookDetail(res))
},[selectedId])


console.log(books)
console.log(bookDetail)


const singlePage=books?books.slice(paginator,paginator2):{}
//const detail=bookDetail?bookDetail.volumeInfo.imageLinks.small:""




function nextPage(){
 
if(paginator2<books.length-1){

    return setPaginator(paginator+5),setPaginator2(paginator2+5)
}
}

function prevPage(){
    if(paginator>0){
        return setPaginator(paginator-5),setPaginator2(paginator2-5)
    }
}

const filterBooks=books?singlePage.filter((ele:any)=>ele.volumeInfo.title.trim().toLowerCase().includes(written)):{}

console.log(written)


return(
   

    <>
    
    <Search text={search} myText={setSearch}></Search>
    
    <DropdownMenu  five={first5} ten={first10} oneFive={first15} twenty={first20} filterOne={filterBooks1} filterTwo={filterBooks2}
    filterThree={filterBooks3} filterFour={filterBooks4} filterFive={filterBooks5} new={onNewest} relevant={onRelevance}
    all={onAll} books={onBoooks} magazines={onMagazines}></DropdownMenu>
    <div id="buttons">
    <Button id="btn1" onClick={()=>prevPage()}>Previous</Button>
    <Button onClick={()=>nextPage()}>Next</Button>
    </div>
    {selectedId=="a"?<div></div>:<BookDetail author={bookdata.authors} title={bookdata.title} 
    description={bookdata.description} link={bookdata.infoLink} ></BookDetail>}
    
    {written}
    {books?<CustomTable childtoParent={childParent} data={books?filterBooks:[]} primaryKey={'id'}></CustomTable>:<div>No records found</div>}
    
    
     
    </>
    )


}

export default Books

//<img src={`${bookDetail.volumeInfo.imageLinks.smallThumbnail}`} alt="" />
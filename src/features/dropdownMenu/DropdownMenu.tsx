import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";



const DropdownMenu=(props:any)=>{


// Select items
const clickOne=(event:any)=>{
    props.five(event)
    
}

const clickTwo=(event:any)=>{
    props.ten(event)
}

const clickThree=(event:any)=>{
    props.oneFive(event)
}

const clickFour=(event:any)=>{
    props.twenty(event)
}

// Filter
const clickFive=(event:any)=>{
    props.filterOne(event)
}

const clickSix=(event:any)=>{
    props.filterTwo(event)
}

const clickSeven=(event:any)=>{
    props.filterThree(event)
}

const clickEight=(event:any)=>{
    props.filterFour(event)
}

const clickNine=(event:any)=>{
    props.filterFive(event)
}

// Newest/relevance
const clickTen=(event:any)=>{
    props.new(event)
}

const clickEleven=(event:any)=>{
    props.relevant(event)
}

//Type
const click12=(event:any)=>{
    props.all(event)
}

const click13=(event:any)=>{
    props.books(event)
}

const click14=(event:any)=>{
    props.magazines(event)
}
    return(
        <>
        <div id="dropdown">
        <Dropdown className="d-inline mx-2 marg">
        <DropdownButton variant="secondary" id="dropdown-item-button" title="Select items">
        <Dropdown.ItemText>Elements number</Dropdown.ItemText>
        <Dropdown.Item onClick={clickOne} as="button">5</Dropdown.Item>
        <Dropdown.Item onClick={clickTwo} as="button">10</Dropdown.Item>
        <Dropdown.Item onClick={clickThree} as="button">15</Dropdown.Item>
        <Dropdown.Item onClick={clickFour} as="button">20</Dropdown.Item>
      </DropdownButton>
      </Dropdown>

      <Dropdown className="d-inline mx-2 marg">
        <DropdownButton variant="secondary" id="dropdown-item-button" title="Filter">
        <Dropdown.ItemText>Filter Options</Dropdown.ItemText>
        <Dropdown.Item onClick={clickFive} as="button">ebooks</Dropdown.Item>
        <Dropdown.Item onClick={clickSix} as="button">free-ebooks</Dropdown.Item>
        <Dropdown.Item onClick={clickSeven} as="button">full</Dropdown.Item>
        <Dropdown.Item onClick={clickEight} as="button">paid-ebooks</Dropdown.Item>
        <Dropdown.Item onClick={clickNine} as="button">partial</Dropdown.Item>
      </DropdownButton>
      </Dropdown>

      <Dropdown className="d-inline mx-2 marg">
        <DropdownButton variant="secondary" id="dropdown-item-button" title="Newest/Relevance">
        <Dropdown.Item onClick={clickTen} as="button">newest</Dropdown.Item>
        <Dropdown.Item onClick={clickEleven} as="button">relevance</Dropdown.Item>
      </DropdownButton>
      </Dropdown>

      <Dropdown className="d-inline mx-2 marg" >
        <DropdownButton variant="secondary" id="dropdown-item-button" title="Type">
        <Dropdown.ItemText>Filter Options</Dropdown.ItemText>
        <Dropdown.Item onClick={click12} as="button">all</Dropdown.Item>
        <Dropdown.Item onClick={click13} as="button">books</Dropdown.Item>
        <Dropdown.Item onClick={click14} as="button">magazines</Dropdown.Item>
        
      </DropdownButton>
      </Dropdown>
      </div>

      
      </>
    )
}

export default DropdownMenu
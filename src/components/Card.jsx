import React from 'react'
function Card(props){
    return(
        <div>
            <p>{props.title.name.first} {props.title.name.last}</p>
            <img src={props.title.picture.large} alt="" />
        </div>
    )
}
export default Card;
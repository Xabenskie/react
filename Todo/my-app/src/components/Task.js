import './Task.css'
import React,{useState} from 'react'

function Task(props){
    return (
    <div className='all'>
        <div className='border'>
            <h2>{props.info}</h2>
        </div>
    </div>
    )   
}

export default Task
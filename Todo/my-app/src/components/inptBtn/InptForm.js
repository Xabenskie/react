import './inptForm.css'
import React,{ useState } from 'react'



function InptForm(props){

    const [inptinfo,setInptInfo] = useState('')

    const changeNameHandler = (event) =>{
        setInptInfo(event.target.value)
    }

    function submitHandler(event){
        event.preventDefault()


        const info = {
            info: inptinfo
        }

        props.onSaveInfo(info)

        setInptInfo('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label>Задача</label>
                <input type='text' value={inptinfo} placeholder='Введите задачу' onChange={changeNameHandler}/>
            </div>
            <div>
                <button type="submit" >Подтвердить</button>
            </div>
        </form>
    )
}

export default InptForm
import React,{ useState } from 'react'
import InptForm from './InptForm'

function InptTask(props){

    const [isFormVisible, setIsFormVisible] = useState()

    function inputInfoHandler(){
        setIsFormVisible(1)
    }

    function saveInfoHandler(inptSaveInfo){

        const saveInfo = {
            ...inptSaveInfo,
            id: Math.random().toString()
        }
        props.onAddInfo(saveInfo)
    }

    return (
        <div>
            {!isFormVisible && <button onClick={inputInfoHandler}>Добавить Задачу</button>}
            {isFormVisible &&<InptForm onSaveInfo = {saveInfoHandler} />}
        </div>
    )
}

export default InptTask
import React from 'react';
import './Model.css';
import * as data from '../../jsonData.json';
import ModelList from '../ModelList/ModelList';

class Model extends React.Component{
    render(){
        console.log("json data", data);
        const modalList = data.categories.map((item , i)=>{
            return (
                <div className="model_Item" key = {i}> 
                    <div className="modelName" > {item.name} </div>
                    <ModelList  parentModelData={item} key={i} />
                </div>
            );
        })
        return(
            <div className="modalList-container" >
                <div className="modalList" >
                    { modalList }
                </div>
            </div>
        )
    }
}

export default Model;
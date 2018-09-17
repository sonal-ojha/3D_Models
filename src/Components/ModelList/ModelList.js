import React from 'react';
import './ModelList.css';

class ModelList extends React.Component{
    render(){
        console.log("props data", this.props.parentModelData);
        const ListOfItems = this.props.parentModelData.models.map((item,i)=>{
            return(
                <div className="ListItem" key={i}>
                    <div>{item.name} </div>
                    <img src={item.thumb} className="model_Image" />
                </div>
            );
        })
        return(
            <div className="Item-container" >
                <div>
                    {/* <button className="" >  </button> */}
                </div>
                { ListOfItems }
                <div>
                    {/* <button className="" >  </button> */}
                </div>
            </div>
        )
    }
}

export default ModelList;
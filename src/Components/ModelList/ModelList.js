import React from 'react';
import './ModelList.css';
import ThreeDModel from '../../Three';

class ModelList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            displayModel : false ,
            mtlFilePath : '' ,
            objFilePath : '' ,
        }
        this.handleDisplay3DModel = this.handleDisplay3DModel.bind(this);
    }

    handleDisplay3DModel(e, materialPath, objPath ){
        console.log("display log", this.state.displayModel)
        var toggleDisplay = ! this.state.displayModel
        this.setState({
            ...this.state, displayModel : toggleDisplay , mtlFilePath : materialPath , objFilePath : objPath
        })
    }
    render(){
        console.log("props data", this.props.parentModelData);
        const ListOfItems = this.props.parentModelData.models.map((item,i)=>{
            return(
                <div className="ListItem" key={i}>
                    <div>{item.name}</div>
                    <img src={item.thumb} className="model_Image" onClick= {(e)=>this.handleDisplay3DModel(e,item.mtl , item.obj)} alt="3D_Model" />
                </div>
            );
        })
        return(
            <div>
                <div className="Item-container" >
                    <div>
                        <button className="arrow arrowLeft" ><strong> &rarr; </strong></button>
                    </div>
                    {ListOfItems}
                    {/* {this.state.displayModel ? <ThreeDModel materialPath={this.state.mtlFilePath} objectPath ={this.state.objFilePath} /> : ListOfItems } */}
                    <div>
                        <button className="arrow arrowRight" ><strong> &larr; </strong></button>
                    </div>
                </div>
                {   this.state.displayModel && <ThreeDModel materialPath={this.state.mtlFilePath} objectPath ={this.state.objFilePath} />
                }
                <div>
                    
                </div>
            </div>
            
        )
    }
}

export default ModelList;
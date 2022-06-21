import React,{useState} from 'react';
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd"
import '../css/roundSixteen.css'
import fifa from "../img/fifa-qatar-2022-logo.png";
import { connect } from 'react-redux'
import {save8} from '../actions'
import round8 from '../data/round8'
import { useNavigate } from "react-router-dom";





const Round16 = ({data2, onSave8}) => {

    const [round16Data, setRound16Data] = useState(data2)
    let navigate = useNavigate();


    const onDragEnd = (result) => {
        if (!result.destination) return;
        const { source, destination } = result;
    
        if( source.droppableId === destination.droppableId) return;

        if(source.droppableId + "r" === destination.droppableId && round16Data[destination.droppableId].items.length === 0){

            const sourceColumn = round16Data[source.droppableId];
            const destColumn = round16Data[destination.droppableId];
            const copiedItems = [...sourceColumn.items];
            const destItems = [...destColumn.items];
            const [removed] = copiedItems.splice(source.index, 1);
            destItems.splice(destination.index, 0, removed);
            setRound16Data({
                ...round16Data,
                [source.droppableId]: {
                  ...sourceColumn,
                  items: copiedItems
                },
                [destination.droppableId]: {
                  ...destColumn,
                  items: destItems
                }
              });

        }else if(source.droppableId  === destination.droppableId + "r" && round16Data[destination.droppableId].items.length === 1){
            const sourceColumn = round16Data[source.droppableId];
            const destColumn = round16Data[destination.droppableId];
            const copiedItems = [...sourceColumn.items];
            const destItems = [...destColumn.items];
            const [removed] = copiedItems.splice(source.index, 1);
            destItems.splice(destination.index, 0, removed);
            setRound16Data({
                ...round16Data,
                [source.droppableId]: {
                  ...sourceColumn,
                  items: copiedItems
                },
                [destination.droppableId]: {
                  ...destColumn,
                  items: destItems
                }
              });
        }
    }

    const onConfirmSelection = () =>{
        let data = []
        Object.entries(round16Data).forEach(([coulmnID, column]) => {
          if(coulmnID.includes("r")){
            data.push(column.items[0])
          }
          
        })
        const round8data = round8(
          data[4],data[5],
          data[0],data[1],
          data[6],data[7],
          data[3],data[2],
      )
        onSave8(round8data)
        navigate("/round8")
    }

    return(
        <>
        { round16Data &&  <div className="mainContainerRound16">
                <div className="container-info-round16">
                    <img src={fifa} alt="fifa world cup logo" className="world-cup-logo-round16"></img>
                    <div className="container-info-heading-round16">
                        <h1>WORLD CUP QATAR 2022</h1>
                        <h2>World Cup ROUND of 16</h2>
                    </div>
                </div>
               <div className="gridContainerRound16">
                        <DragDropContext
                        onDragEnd={result => onDragEnd(result)}
                        
                        >
                        {Object.entries(round16Data).map(([columnId, column], index) => {
                            return (
                            <div
                                className="mainItemRound16"
                                key={columnId}
                            >
                                <h3>{column.name}</h3>
                                <div>
                                <Droppable droppableId={columnId} key={columnId}>
                                    {(provided, snapshot) => {
                                    return (
                                        <div
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                        className="droppableRound16"
                                        >
                                        {column.items.map((item, index) => {
                                            return (
                                            <Draggable
                                                key={item.id}
                                                draggableId={item.id}
                                                index={index}
                                            >
                                                {(provided, snapshot) => {
                                                return (
                                                    <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    style={{
                                                        ...provided.draggableProps.style
                                                    }}
                                                    className="column-selector-round16"
                                                    >

                                                    <span className="positionRound16">{item.position}</span>  
                                                    <img src={item.imgUrl} alt={item.content} className="flag-img-round16"></img>
                                                    <span className="contentRound16">{item.content}</span>    
                                                   
                                                     
                                                    </div>
                                                );
                                                }}
                                            </Draggable>
                                            );
                                        })}
                                        {provided.placeholder}
                                        </div>
                                    );
                                    }}
                                </Droppable>
                                </div>
                            </div>
                            );
                        })}
                        </DragDropContext>
                    </div>
                    <button className="container-btn-round16" onClick={onConfirmSelection}>Go To Quarterfinals</button>
                  
            </div>  }
        </>
        
    )
}
const mapStateToProps = state => {
    return {
        data2: state.data2
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        onSave8: (d) => dispatch(save8(d))
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Round16);
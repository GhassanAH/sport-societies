import React,{useState} from 'react';
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd"
import '../css/roundSixteen.css'
import fifa from "../img/fifa-qatar-2022-logo.png";
import { connect } from 'react-redux'
import {save4} from '../actions'
import round4 from '../data/round4'
import { useNavigate } from "react-router-dom";




const Round8 = ({data3, onSave4}) => {

    const [round8Data, setRound8Data] = useState(data3)
    let navigate = useNavigate();


    const onDragEnd = (result) => {
        if (!result.destination) return;
        const { source, destination } = result;
    
        if( source.droppableId === destination.droppableId) return;

        if(source.droppableId + "r" === destination.droppableId && round8Data[destination.droppableId].items.length === 0){

            const sourceColumn = round8Data[source.droppableId];
            const destColumn = round8Data[destination.droppableId];
            const copiedItems = [...sourceColumn.items];
            const destItems = [...destColumn.items];
            const [removed] = copiedItems.splice(source.index, 1);
            destItems.splice(destination.index, 0, removed);
            setRound8Data({
                ...round8Data,
                [source.droppableId]: {
                  ...sourceColumn,
                  items: copiedItems
                },
                [destination.droppableId]: {
                  ...destColumn,
                  items: destItems
                }
              });

        }else if(source.droppableId  === destination.droppableId + "r" && round8Data[destination.droppableId].items.length === 1){
            const sourceColumn = round8Data[source.droppableId];
            const destColumn = round8Data[destination.droppableId];
            const copiedItems = [...sourceColumn.items];
            const destItems = [...destColumn.items];
            const [removed] = copiedItems.splice(source.index, 1);
            destItems.splice(destination.index, 0, removed);
            setRound8Data({
                ...round8Data,
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
        Object.entries(round8Data).forEach(([coulmnID, column]) => {
          if(coulmnID.includes("r")){
            data.push(column.items[0])
          }
          
        })
        const round4data = round4(
          data[0],data[1],
          data[2],data[3],
 
      )
        onSave4(round4data)
        navigate("/round4")
    }

    return(
        <>
        { round8Data &&  <div className="mainContainerRound16">
            <div className="container-info-round16">
                <img src={fifa} alt="fifa world cup logo" className="world-cup-logo-round16"></img>
                <div className="container-info-heading-round16">
                    <h1>WORLD CUP QATAR 2022</h1>
                    <h2>World Cup Quarterfinals</h2>
                </div>
            </div>
               <div className="gridContainerRound16">
                        <DragDropContext
                        onDragEnd={result => onDragEnd(result)}
                        
                        >
                        {Object.entries(round8Data).map(([columnId, column], index) => {
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
                    <button className="container-btn-round16" onClick={onConfirmSelection}>Go To Semifinals</button>
                  
            </div>  }
        </>
        
    )
}
const mapStateToProps = state => {
    return {
        data3: state.data3
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        onSave4: (d) => dispatch(save4(d))
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Round8);

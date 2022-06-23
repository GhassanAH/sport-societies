import React,{useState} from 'react';
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd"
import '../css/roundSixteen.css'
import fifa from "../img/fifa-qatar-2022-logo.png";
import { connect } from 'react-redux'
import {final} from '../actions'
import finald from '../data/finald'
import { useNavigate } from "react-router-dom";





const Round4 = ({data4, onSaveFinal}) => {

    const [round4Data, setRound4Data] = useState(data4)
    const [alertState, setOpenAlert] = useState(false)
    let navigate = useNavigate();


    const onDragEnd = (result) => {
        if (!result.destination) return;
        const { source, destination } = result;
    
        if( source.droppableId === destination.droppableId) return;

        if(source.droppableId + "r" === destination.droppableId && round4Data[destination.droppableId].items.length === 0){

            const sourceColumn = round4Data[source.droppableId];
            const destColumn = round4Data[destination.droppableId];
            const copiedItems = [...sourceColumn.items];
            const destItems = [...destColumn.items];
            const [removed] = copiedItems.splice(source.index, 1);
            destItems.splice(destination.index, 0, removed);
            setRound4Data({
                ...round4Data,
                [source.droppableId]: {
                  ...sourceColumn,
                  items: copiedItems
                },
                [destination.droppableId]: {
                  ...destColumn,
                  items: destItems
                }
              });

        }else if(source.droppableId  === destination.droppableId + "r" && round4Data[destination.droppableId].items.length === 1){
            const sourceColumn = round4Data[source.droppableId];
            const destColumn = round4Data[destination.droppableId];
            const copiedItems = [...sourceColumn.items];
            const destItems = [...destColumn.items];
            const [removed] = copiedItems.splice(source.index, 1);
            destItems.splice(destination.index, 0, removed);
            setRound4Data({
                ...round4Data,
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
        Object.entries(round4Data).forEach(([coulmnID, column]) => {
          if(coulmnID.includes("r") && column.items.length !== 0){
            data.push(column.items[0])
          }
          
        })
        if(data.length === 2){
            const round1data = finald(
                data[0],data[1],
      
            )
              onSaveFinal(round1data)
              navigate("/final")
        }else{
            setOpenAlert(true)
        }
    }

    return(
        <>
        { round4Data &&  <div className="mainContainerRound16">
            <div className="container-info-round16">
                <img src={fifa} alt="fifa world cup logo" className="world-cup-logo-round16"></img>
                <div className="container-info-heading-round16">
                    <h1>WORLD CUP QATAR 2022</h1>
                    <h2>World Cup Semifinals</h2>
                </div>
            </div>
            {alertState && 
                    <div className="alert">
                        <span className="closebtn" onClick={() => setOpenAlert(false)}>&times;</span>
                        Please complete all winner boxes
                    </div>
             }
               <div className="gridContainerRound16">
                        <DragDropContext
                        onDragEnd={result => onDragEnd(result)}
                        
                        >
                        {Object.entries(round4Data).map(([columnId, column], index) => {
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
                    <button className="container-btn-round16" onClick={onConfirmSelection}>Go To The Final</button>
                  
            </div>  }
        </>
        
    )
}
const mapStateToProps = state => {
    return {
        data4: state.data4
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        onSaveFinal: (d) => dispatch(final(d))
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Round4);

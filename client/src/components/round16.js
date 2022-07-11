import React,{useState} from 'react';
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd"
import '../css/roundSixteen.css'
import fifa from "../img/fifa-qatar-2022-logo.png";
import { connect } from 'react-redux'
import {save8} from '../actions'
import round8 from '../data/round8'
import { useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet-async';





const Round16 = ({data2, onSave8}) => {

    const [round16Data, setRound16Data] = useState(data2)
    const [alertState, setOpenAlert] = useState(false)
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
          if(column && coulmnID.includes("r") && column.items.length !== 0){
            data.push(column.items[0])
          }
          
        })
        if(data.length === 8){
            const round8data = round8(
                data[4],data[5],
                data[0],data[1],
                data[6],data[7],
                data[3],data[2],
            )
              const serializedround8 = JSON.stringify(round8data);
              window.localStorage.setItem('round8', serializedround8);
              onSave8(round8data)
              navigate("/round8")
        }else{
            setOpenAlert(true)
        }

    }

    return(
        <>
        <Helmet>
                <title>World Cup Qatar 2022 | Round of 16 Predictions</title>
                <meta name="description" content="Pick the ROUND of 16 qualifiers in the World Cup Qatar 2022"/>
                <meta name="keywords" content="Round of 16, Quarterfinal, World cup Qatar 2022, Round of 16 stage, prediction"/>
                <link rel="canonical" href="/round16"/>
        </Helmet>
        { round16Data &&  <div className="mainContainerRound16">
                <div className="container-info-round16">
                    <img src={fifa} alt="fifa world cup logo" className="world-cup-logo-round16"></img>
                    <div className="container-info-heading-round16">
                        <h2>WORLD CUP QATAR 2022</h2>
                        <h3>Round of 16</h3>
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
                                        style={{ backgroundColor: snapshot.isDraggingOver ? '#49bce4' : '#FFD700' }}
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
import React,{useState} from 'react';
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd"
import '../css/roundSixteen.css'
import fifa from "../img/fifa-qatar-2022-logo.png";
import trophy from "../img/worldCup.png";
import { connect } from 'react-redux'
import {saveWinner} from '../actions'
import winner from '../data/winner'
import { useNavigate } from "react-router-dom";





const Fianl = ({data5, onSaveWinner}) => {

    const [final, setFinalData] = useState(data5)
    let navigate = useNavigate();


    const onDragEnd = (result) => {
        if (!result.destination) return;
        const { source, destination } = result;
    
        if( source.droppableId === destination.droppableId) return;

        if(source.droppableId + "r" === destination.droppableId && final[destination.droppableId].items.length === 0){

            const sourceColumn = final[source.droppableId];
            const destColumn = final[destination.droppableId];
            const copiedItems = [...sourceColumn.items];
            const destItems = [...destColumn.items];
            const [removed] = copiedItems.splice(source.index, 1);
            destItems.splice(destination.index, 0, removed);
            setFinalData({
                ...final,
                [source.droppableId]: {
                  ...sourceColumn,
                  items: copiedItems
                },
                [destination.droppableId]: {
                  ...destColumn,
                  items: destItems
                }
              });

        }else if(source.droppableId  === destination.droppableId + "r" && final[destination.droppableId].items.length === 1){
            const sourceColumn = final[source.droppableId];
            const destColumn = final[destination.droppableId];
            const copiedItems = [...sourceColumn.items];
            const destItems = [...destColumn.items];
            const [removed] = copiedItems.splice(source.index, 1);
            destItems.splice(destination.index, 0, removed);
            setFinalData({
                ...final,
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
        Object.entries(final).forEach(([coulmnID, column]) => {
          if(coulmnID.includes("r")){
            data.push(column.items[0])
          }
          
        })
        const winnerw = winner(
          data[0]

      )
        onSaveWinner(winnerw)
        navigate("/summary")
    }

    return(
        <>
        { final &&  <div className="mainContainerRound16">
                <div className="container-info-round16">
                    <img src={fifa} alt="fifa world cup logo" className="world-cup-logo-round16"></img>
                    <div className="container-info-heading-round16">
                        <h1>WORLD CUP QATAR 2022</h1>
                        <h2>World Cup Final</h2>
                        
                    </div>
                    
                </div>
               <img src={trophy} alt="world cup trophy" className="world-cup-trophy-round16"></img>
               <div className="gridContainerRound16">
                        <DragDropContext
                        onDragEnd={result => onDragEnd(result)}
                        
                        >
                        {Object.entries(final).map(([columnId, column], index) => {
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
                    <button className="container-btn-round16" onClick={onConfirmSelection}>Go To Summary</button>
                  
            </div>  }
        </>
        
    )
}
const mapStateToProps = state => {
    return {
        data5: state.data5
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        onSaveWinner: (d) => dispatch(saveWinner(d))
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Fianl);

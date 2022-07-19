import React,{useState} from 'react';
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd"
import '../css/roundSixteen.css'
import fifa from "../img/fifa-qatar-2022-logo.png";
import { connect } from 'react-redux'
import {final} from '../actions'
import finald from '../data/finald'
import { useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet-async';





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
              const serializedfinal = JSON.stringify(round1data);
              window.localStorage.setItem('final', serializedfinal);
              onSaveFinal(round1data)
              navigate("/final")
        }else{
            setOpenAlert(true)
        }
    }

    return(
        <>
        <Helmet>
                <title>World Cup Qatar 2022 | Semifinal Predictions</title>
                <meta name="description" content="Sport Societies, Pick the semifinal qualifiers in the World Cup Qatar 2022"/>
                <meta name="keywords" content="Sport Societies, sport societies, semifinals, semifinal, World cup Qatar 2022, semifinals stage, prediction"/>
                <link rel="canonical" href="/round4"/>
        </Helmet>
        { round4Data &&  <div className="mainContainerRound16">
            <div className="container-info-round16">
                <img src={fifa} alt="fifa world cup logo" className="world-cup-logo-round16"></img>
                <div className="container-info-heading-round16">
                    <h2>WORLD CUP QATAR 2022</h2>
                    <h3>Semifinals</h3>
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
                                        style={{ backgroundColor: snapshot.isDraggingOver ? '#49bce4' : '#FFD700' }}
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
                                                    style={{
                                                        ...provided.draggableProps.style
                                                    }}
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
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

const round4 = 
(
w_q1, w_q2,
w_q3, w_q4,


) => {
    const id1 = "Game 1 4"
    const id2 = "Game 1 4r"
    const id3 = "Game 2 4"
    const id4 = "Game 2 4r"
   return { 
    [id1]:{
        name:"Game 1",
        items:[w_q1, w_q2,]
    },
    [id2]:{
        name:"Winner of Game 1",
        items:[]
    },
    [id4]:{
        name:"Winner of Game 2",
        items:[]
    },
    [id3]:{
        name:"Game 2",
        items:[w_q3, w_q4,]
    },
   
}
}
export default round4;
const round16 = 
(
firstA, secondA,
firstB, secondB,
firstC, secondC,
firstD, secondD,
firstE, secondE,
firstF, secondF,
firstG, secondG,
firstH, secondH
) => {
    const id1 = "Game 1 16"
    const id2 = "Game 1 16r"
    const id3 = "Game 2 16"
    const id4 = "Game 2 16r"
    const id5 = "Game 3 16"
    const id6 = "Game 3 16r"
    const id7 = "Game 4 16"
    const id8 = "Game 4 16r"
    const id9 = "Game 5 16"
    const id10 = "Game 5 16r"
    const id11 = "Game 6 16"
    const id12 = "Game 6 16r"
    const id13 = "Game 7 16"
    const id14 = "Game 7 16r"
    const id15 = "Game 8 16"
    const id16 = "Game 8 16r"
   return { 
    [id1]:{
        name:"Round of 16 Game 1",
        items:[firstA, secondB,]
    },
    [id2]:{
        name:"Winner of Game 1",
        items:[]
    },
    [id5]:{
        name:"Round of 16 Game 2",
        items:[firstC, secondD,]
    },
    [id6]:{
        name:"winner of Game 2",
        items:[]
    },
    [id7]:{
        name:"Round of 16 Game 3",
        items:[firstD, secondC,]
    },
    [id8]:{
        name:"Winner of Game 3",
        items:[]
    },
    [id3]:{
        name:"Round of 16 Game 4",
        items:[firstB, secondA,]
    },
    [id4]:{
        name:"Winner of Game 4",
        items:[]
    },    
    [id9]:{
        name:"Round of 16 Game 5",
        items:[firstE, secondF,]
    },
    [id10]:{
        name:"Winner of 16 Game 5",
        items:[]
    },
    [id13]:{
        name:"Round of 16 Game 6",
        items:[firstG, secondH,]
    },
    [id14]:{
        name:"Winner of 16 Game 6",
        items:[]
    },   
    [id11]:{
        name:"Round of 16 Game 7",
        items:[firstF, secondE,]
    },
    [id12]:{
        name:"Winner of 16 Game 7",
        items:[]
    },   
    [id15]:{
        name:"Round of 16 Game 8",
        items:[firstH, secondG]
    },
    [id16]:{
        name:"Winner of Game 8",
        items:[]
    },  
}
}
export default round16;
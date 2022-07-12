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
    const id1 = "Game116"
    const id2 = "Game116r"
    const id3 = "Game216"
    const id4 = "Game216r"
    const id5 = "Game316"
    const id6 = "Game316r"
    const id7 = "Game416"
    const id8 = "Game416r"
    const id9 = "Game516"
    const id10 = "Game516r"
    const id11 = "Game616"
    const id12 = "Game616r"
    const id13 = "Game716"
    const id14 = "Game716r"
    const id15 = "Game816"
    const id16 = "Game816r"
   return { 
    [id1]:{
        name:"Game 1",
        items:[firstA, secondB,],
        id:"Game1"
    },
    [id2]:{
        name:"Winner of Game 1",
        items:[]
    },
    [id6]:{
        name:"winner of Game 2",
        items:[],    },
    [id5]:{
        name:"Game 2",
        items:[firstC, secondD,],
        id:"Game2"

    },
    [id7]:{
        name:"Game 3",
        items:[firstD, secondC,],
        id:"Game3"

    },
    [id8]:{
        name:"Winner of Game 3",
        items:[]
    },
    [id4]:{
        name:"Winner of Game 4",
        items:[]
    },    
    [id3]:{
        name:"Game 4",
        items:[firstB, secondA,],
        id:"Game4"

    },
    [id9]:{
        name:"Game 5",
        items:[firstE, secondF,],
        id:"Game5"

    },
    [id10]:{
        name:"Winner of Game 5",
        items:[]
    },
    [id14]:{
        name:"Winner of Game 6",
        items:[]
    },   
    [id13]:{
        name:"Game 6",
        items:[firstG, secondH,],
        id:"Game6"

    },
    [id11]:{
        name:"Game 7",
        items:[firstF, secondE,],
        id:"Game7"

    },
    [id12]:{
        name:"Winner of Game 7",
        items:[]
    },   
    [id16]:{
        name:"Winner of Game 8",
        items:[]
    },  
    [id15]:{
        name:"Game 8",
        items:[firstH, secondG],
        id:"Game8"

    },
}
}
export default round16;
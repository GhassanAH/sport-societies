const round8 = 
(
w_e1_f2, w_g1_h2,
w_a1_b2, w_c1_d2,
w_f1_e2, w_h1_g2,
w_b1_a2, w_d1_c2,

) => {
    const id1 = "Game 1 8"
    const id2 = "Game 1 8r"
    const id3 = "Game 2 8"
    const id4 = "Game 2 8r"
    const id5 = "Game 3 8"
    const id6 = "Game 3 8r"
    const id7 = "Game 4 8"
    const id8 = "Game 4 8r"
   return { 
    [id1]:{
        name:"Game 1",
        items:[w_e1_f2, w_g1_h2,]
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
        items:[w_a1_b2, w_c1_d2,]
    },
    [id5]:{
        name:"Game 3",
        items:[w_f1_e2, w_h1_g2,]
    },
    [id6]:{
        name:"Winner of Game 3",
        items:[]
    },
    [id8]:{
        name:"Winner of Game 4",
        items:[]
    },    
    [id7]:{
        name:"Game 4",
        items:[w_b1_a2, w_d1_c2,]
    },
}
}
export default round8;
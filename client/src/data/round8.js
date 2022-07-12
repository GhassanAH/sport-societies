const round8 = 
(
w_e1_f2, w_g1_h2,
w_a1_b2, w_c1_d2,
w_f1_e2, w_h1_g2,
w_b1_a2, w_d1_c2,

) => {
    const id1 = "Game18"
    const id2 = "Game18r"
    const id3 = "Game28"
    const id4 = "Game28r"
    const id5 = "Game38"
    const id6 = "Game38r"
    const id7 = "Game48"
    const id8 = "Game48r"
   return { 
    [id1]:{
        name:"Game 1",
        items:[w_e1_f2, w_g1_h2,],
        id:"q1"
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
        items:[w_a1_b2, w_c1_d2,],
        id:"q2"
    },
    [id5]:{
        name:"Game 3",
        items:[w_f1_e2, w_h1_g2,],
        id:"q3"
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
        items:[w_b1_a2, w_d1_c2,],
        id:"q4"
    },
}
}
export default round8;
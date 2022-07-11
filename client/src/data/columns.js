import { v4 as uuidv4 } from 'uuid';
import Qatar from '../img/qa-flag.gif'
import Ecuador from '../img/ec-flag.gif'
import Senegal from '../img/sg-flag.gif'
import Netherlands from '../img/nl-flag.webp'
import England from '../img/UNKG0100.png'
import Iran from '../img/ir-flag.gif'
import USA from '../img/us-flag.webp'
import Wales from '../img/Flag-Wales.webp'
import Argentina from '../img/ar-flag.gif'
import Saudi from '../img/sa-flag.webp'
import Mexico from '../img/mx-flag.webp'
import Poland from '../img/pl-flag.gif'
import France from '../img/fr-flag.webp'
import Australia from '../img/as-flag.webp'
import Denmark from '../img/da-flag.gif'
import Tunisia from '../img/ts-flag.gif'
import Spain from '../img/sp-flag.webp'
import Costa from '../img/cs-flag.gif'
import Germany from '../img/gm-flag.webp'
import Japan from '../img/ja-flag.webp'
import Belgium from '../img/be-flag.gif'
import Canada from '../img/ca-flag.webp'
import Morocco from '../img/mo-flag.gif'
import Croatia from '../img/hr-flag.gif'
import Brazil from '../img/br-flag.gif'
import Serbia from '../img/sa-flag.webp'
import Switzerland from '../img/sz-flag.webp'
import Cameroon from '../img/cm-flag.gif'
import Portugal from '../img/po-flag.gif'
import Ghana from '../img/gh-flag.gif'
import Uruguay from '../img/uy-flag.gif'
import South from '../img/ks-flag.webp'
const data = {
    [uuidv4()]:{
        name:"Group A",
        items:[
            { id: uuidv4(), position:1, content: "Qatar ", imgUrl:Qatar },
            { id: uuidv4(), position:2, content: "Ecuador " ,imgUrl:Ecuador},
            { id: uuidv4(), position:3, content: "Senegal " ,imgUrl:Senegal},
            { id: uuidv4(), position:4, content: "Netherlands " ,imgUrl:Netherlands},
           
        ]
    },
    [uuidv4()]:{
        name:"Group B",
        items:[
            { id: uuidv4(), position:1, content: "England " ,imgUrl:England},
            { id: uuidv4(), position:2, content: "Iran " ,imgUrl:Iran},
            { id: uuidv4(), position:3, content: "USA " ,imgUrl:USA},
            { id: uuidv4(), position:4, content: "Wales " ,imgUrl:Wales},
        ]
    },
    [uuidv4()]:{
        name:"Group C",
        items:[
            { id: uuidv4(), position:1, content: "Argentina " ,imgUrl:Argentina},
            { id: uuidv4(), position:2, content: "Saudi Arabia " ,imgUrl:Saudi},
            { id: uuidv4(), position:3, content: "Mexico " ,imgUrl:Mexico},
            { id: uuidv4(), position:4, content: "Poland " ,imgUrl:Poland},
           
        ]
    },
    [uuidv4()]:{
        name:"Group D",
        items:[
            { id: uuidv4(), position:1, content: "France " ,imgUrl:France},
            { id: uuidv4(), position:2, content: "Australia " ,imgUrl:Australia},
            { id: uuidv4(), position:3, content: "Denmark " ,imgUrl:Denmark},
            { id: uuidv4(), position:4, content: "Tunisia " ,imgUrl:Tunisia},
            
        ]
    },    [uuidv4()]:{
        name:"Group E",
        items:[
            { id: uuidv4(), position:1, content: "Spain " ,imgUrl:Spain},
            { id: uuidv4(), position:2, content: "Costa Rica " ,imgUrl:Costa},
            { id: uuidv4(), position:3, content: "Germany " ,imgUrl:Germany},
            { id: uuidv4(), position:4, content: "Japan " ,imgUrl:Japan},
           
           
        ]
    },
    [uuidv4()]:{
        name:"Group F",
        items:[
            { id: uuidv4(), position:1, content: "Belgium " ,imgUrl:Belgium},
            { id: uuidv4(), position:2, content: "Canada " ,imgUrl:Canada},
            { id: uuidv4(), position:3, content: "Morocco " ,imgUrl:Morocco},
            { id: uuidv4(), position:4, content: "Croatia " ,imgUrl:Croatia},
        ]
    },
    [uuidv4()]:{
        name:"Group G",
        items:[
            { id: uuidv4(), position:1, content: "Brazil " ,imgUrl:Brazil},
            { id: uuidv4(), position:2, content: "Serbia " ,imgUrl:Serbia},
            { id: uuidv4(), position:3, content: "Switzerland " ,imgUrl:Switzerland},
            { id: uuidv4(), position:4, content: "Cameroon " ,imgUrl:Cameroon},
           
        ]
    },
    [uuidv4()]:{
        name:"Group H",
        items:[
            { id: uuidv4(), position:1, content: "Portugal " ,imgUrl:Portugal},
            { id: uuidv4(), position:2, content: "Ghana " ,imgUrl:Ghana},
            { id: uuidv4(), position:3, content: "Uruguay " ,imgUrl:Uruguay},
            { id: uuidv4(), position:4, content: "South Korea " ,imgUrl:South},
        ]
    }
}
export default data;
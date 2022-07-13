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
import Serbia from '../img/ri-flag.gif'
import Switzerland from '../img/sz-flag.webp'
import Cameroon from '../img/cm-flag.gif'
import Portugal from '../img/po-flag.gif'
import Ghana from '../img/gh-flag.gif'
import Uruguay from '../img/uy-flag.gif'
import South from '../img/ks-flag.webp'
const data = {
    [uuidv4()]:{
        name:"GP A",
        items:[
            { id: uuidv4(), position:1, content: "Qat", imgUrl:Qatar },
            { id: uuidv4(), position:2, content: "Ecu" ,imgUrl:Ecuador},
            { id: uuidv4(), position:3, content: "Sen" ,imgUrl:Senegal},
            { id: uuidv4(), position:4, content: "Net" ,imgUrl:Netherlands},
           
        ]
    },
    [uuidv4()]:{
        name:"GP B",
        items:[
            { id: uuidv4(), position:1, content: "Eng" ,imgUrl:England},
            { id: uuidv4(), position:2, content: "Ira" ,imgUrl:Iran},
            { id: uuidv4(), position:3, content: "USA" ,imgUrl:USA},
            { id: uuidv4(), position:4, content: "Wal" ,imgUrl:Wales},
        ]
    },
    [uuidv4()]:{
        name:"GP C",
        items:[
            { id: uuidv4(), position:1, content: "Arg" ,imgUrl:Argentina},
            { id: uuidv4(), position:2, content: "KSA" ,imgUrl:Saudi},
            { id: uuidv4(), position:3, content: "Mex" ,imgUrl:Mexico},
            { id: uuidv4(), position:4, content: "Pol" ,imgUrl:Poland},
           
        ]
    },
    [uuidv4()]:{
        name:"GP D",
        items:[
            { id: uuidv4(), position:1, content: "Fra" ,imgUrl:France},
            { id: uuidv4(), position:2, content: "Aus" ,imgUrl:Australia},
            { id: uuidv4(), position:3, content: "Den" ,imgUrl:Denmark},
            { id: uuidv4(), position:4, content: "Tun" ,imgUrl:Tunisia},
            
        ]
    },    [uuidv4()]:{
        name:"GP E",
        items:[
            { id: uuidv4(), position:1, content: "Spa" ,imgUrl:Spain},
            { id: uuidv4(), position:2, content: "CR" ,imgUrl:Costa},
            { id: uuidv4(), position:3, content: "Ger" ,imgUrl:Germany},
            { id: uuidv4(), position:4, content: "Jap" ,imgUrl:Japan},
           
           
        ]
    },
    [uuidv4()]:{
        name:"GP F",
        items:[
            { id: uuidv4(), position:1, content: "Bel" ,imgUrl:Belgium},
            { id: uuidv4(), position:2, content: "Can" ,imgUrl:Canada},
            { id: uuidv4(), position:3, content: "Mor" ,imgUrl:Morocco},
            { id: uuidv4(), position:4, content: "Croa" ,imgUrl:Croatia},
        ]
    },
    [uuidv4()]:{
        name:"GP G",
        items:[
            { id: uuidv4(), position:1, content: "Braz" ,imgUrl:Brazil},
            { id: uuidv4(), position:2, content: "Ser" ,imgUrl:Serbia},
            { id: uuidv4(), position:3, content: "Swi" ,imgUrl:Switzerland},
            { id: uuidv4(), position:4, content: "Cam" ,imgUrl:Cameroon},
           
        ]
    },
    [uuidv4()]:{
        name:"GP H",
        items:[
            { id: uuidv4(), position:1, content: "Por" ,imgUrl:Portugal},
            { id: uuidv4(), position:2, content: "Gha" ,imgUrl:Ghana},
            { id: uuidv4(), position:3, content: "Uru" ,imgUrl:Uruguay},
            { id: uuidv4(), position:4, content: "SK" ,imgUrl:South},
        ]
    }
}
export default data;
import React, {useState} from 'react'
import '../css/home.css'
import splogo from "../img/splogo.png"
import ls from "local-storage"


const Header = () => {

    const languages = [
        { value: 'en', text: "English" },
        { value: 'ar', text: "العربية" },

    ]

    const handleChange = (e) => { 
        if(window.location.href.includes("?")){
            let loc = window.location.href.indexOf("?");
            loc = window.location.href.slice(0,loc)
            ls.set("lan", e.target.value)
            window.location.replace(loc + "?lng=" + e.target.value);
        }else{
            let loc = window.location.href
            ls.set("lan", e.target.value)
            window.location.assign(loc + "?lng=" + e.target.value);
        }

    }

    return (
        <div className="header">
            <div className="content">
                <div className="title">
                    <img className="logo-img" width="50" height="50" src={splogo}/>
                    <a href="/"><h1 className="he1">Sport Societies</h1></a>

                </div>
                <div className="he-navs">
                    <div className="he-nav">
                        <select className="sel" value={ls.get("lan")} onChange={handleChange}>
                            {languages.map(item => {
                                return (
                                    <option key={item.value}  value={item.value}>{item.text}</option>
                                );
                            })}
                        </select>
                    </div>

                </div>

            </div>

    </div>
    )
}

export default Header

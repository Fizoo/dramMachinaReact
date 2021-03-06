import './App.scss';
import {bankOne, bankTwo} from "./component/state";
import React, { useState} from "react";
import Drum from "./component/Drum";
import 'antd/dist/antd.css';
import Pad from "./component/Pad";
import {Switch} from "antd";

function App() {

    const [value, setValue] = useState('')
    const [isTrue, setIsTrue] = useState(false)
    const [volume, setVolume] = useState(0.5)
    const [isPower,setIsPower] = useState(true)

    let [...arrayBank] =  isTrue ? [...bankTwo] : [...bankOne];

    return (
        <div id='drum-machine' >
            <div className='power1'>
                <h2>Power</h2>
                <Switch checkedChildren="On" unCheckedChildren="Off" defaultChecked onChange={(checked)=>{setIsPower(!!checked)}} />
            </div>
            <div id='display' className="main">
                {
                     arrayBank.map(a => {return (
                            <Drum
                                key={a.id}
                                a={a}
                                volume={volume}
                                setValue={setValue}
                                isPower={isPower}
                            />)})
                }
            </div>
            <Pad values={value}
                 setVolume={setVolume}
                 setIsTrue={setIsTrue}
                 setIsPower={setIsPower}
                 volume={volume}
            isPower={isPower}/>

        </div>

    )
}

export default App;

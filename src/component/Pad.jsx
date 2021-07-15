import React from 'react';
import {Slider, Switch} from "antd";
import './style.scss'

const Pad = ({ values,setVolume,setIsTrue,setIsPower,volume}) => {


    return (
        <div className="pad">
            <div className='power'>
                <h2>Power</h2>
                <Switch checkedChildren="On" unCheckedChildren="Off" defaultChecked onChange={(checked)=>{setIsPower(!!checked)}} />

            </div>
            <div>
                <input type="text" value={values}/>
            </div>
            <div className='ant'>
                <Slider defaultValue={volume}  min={0} max={1} step={0.01} onChange={(value)=>{setVolume(value)}}/>
            </div>
            <div className='bank'>

                <h2>Bank</h2>
                <Switch checkedChildren="On" unCheckedChildren="Off" defaultChecked onChange={()=>setIsTrue(isTrue=>!isTrue)} />
            </div>
        </div>
    );
};

export default Pad;

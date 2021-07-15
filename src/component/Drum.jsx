import React, {useEffect, useState} from 'react';


const Drum = ({a,setValue,volume,isPower}) => {

    const [isActive,setIsActive]=useState(false)

    const eventKey = e => {
        if(e.keyCode===a.keyCode){
            getOnClick()
        }

    };
    useEffect(() => {
        document.addEventListener('keydown', eventKey);
        return () => document.removeEventListener('keydown', eventKey);
    }, []);

    const getOnClick =() => {

        const audioTag= document.getElementById(a.keyTrigger)
        audioTag.volume=volume;
        audioTag.currentTime =0;
        setIsActive(true);
        setTimeout(()=>setIsActive(false),100)
        audioTag.play();
        setValue(a.id)

    };

    return(
        <div className={`drum-pad ${isActive && 'warn'}`} onClick={isPower && getOnClick}>
        <audio id={a.keyTrigger} src={a.url}/>{a.keyTrigger}
    </div>
    )
};

export default Drum;

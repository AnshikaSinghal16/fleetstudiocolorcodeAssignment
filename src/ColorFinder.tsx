import React, { useEffect, useState } from "react";
import namedColors from 'color-name-list';

const ColorFinder =  () =>{
    const colorList =['black','blue','red','orange','green','gray'];
    const [colorText,setColorText] =useState("");
    const [colorOutputList,setColorOutputList] = useState<any>();

    useEffect(()=>{
        let someNamedColor = colorList.filter(color => color.includes(colorText));
        console.log(someNamedColor);
        setColorOutputList(someNamedColor)
    },[colorText]);
   
    const getHexcode = (colorName:string)=>{
        let someNamedColor:any = namedColors.find(color => color.name === colorName);
        console.log(someNamedColor);
        if(someNamedColor){
            return someNamedColor.hex;
        }
        else{
            return "";
        }
    }

    return(
        <>
        <div style={{"fontSize":"24px","fontWeight":400,"margin":"20px"}}>Please enter color you want to search</div>
        <input style={{"width":"500px","margin":"20px"}} type="text" onChange={(e)=>setColorText(e.target.value)}></input>
        <div style={{"display":"flex",justifyContent:"center",'alignContent':"center"}}>
            {colorOutputList && colorOutputList.length>0 &&colorOutputList.map((color:string)=> {
                return( <div style={{"backgroundColor":color,"maxWidth":"100px","maxHeight":"100px","display":"flex","width":"50px","height":"50px","margin":"20px",justifyContent:"center",'alignContent':"center",textAlign:"center"}}>
                    {color}
                    {getHexcode(color)}
                </div>)
            } )}
        </div>
        </>
    )
}

export default ColorFinder;
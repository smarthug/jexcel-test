import React, { useEffect, useRef } from "react";
import jexcel from "jexcel";
import './spreadSheet.css'

//삘이 onbeforechange , onbeforepaste 에서 작업 해주어야할듯 ... 확인필요 .... 

export default function Table() {
  const jexcelContainerRef = useRef();

  useEffect(()=>{
    let data = [
        ['Mazda', 2001, 2000],
        ['Pegeout', 2010, 5000],
        ['Honda Fit', 2009, 3000],
        ['Honda CRV', 2010, 6000],
    ];
    
    const ji = jexcel(jexcelContainerRef.current, {
        data:data,
        columns:[
            { title:'Model', width:300, type:"string" },
            { title:'Price', width:80, type:"numeric" },
            { title:'Model', width:100, type:"numeric"},
            {title:"sum", width:100, type:"string" }
        ],
        copyCompatibility:false, // <-Change
        onchange:(instance, cell, x, y, value)=>{
            // let cellName = jexcel.getColumnNameFromId([x, y]);
            // console.log("New change on cell " + cellName + " to: " + value);


            if(ji.options.columns[x].type==="numeric"){
                ji.options.data[y][x] = Number(value);
            }

            const data = ji.getData(false,false);
            console.log(data);

            //setProperty(data);
        },
        updateTable: (instance, cell, col, row, val, label, cellName)=>{
            //조졌
            //console.log(cellName)
        },
        onbeforechange:(instance, cell, x, y, value)=>{
            // console.log(cell)
            // value = parseInt(value,10)
        },
        onafterchanges:(el, records)=>{
            //obj.options.data
            // console.log(el);
            // console.log(records)
            // ji.options.data[records.x][records.y] = parseInt(records.newValue, 10);
            // console.log(ji.options.data[records[0].y][records[0].x])
            // console.log(ji)
            // console.log(ji.options.columns[records[0].col].type)
// 
            
            // if(ji.options.columns[records[0].col].type==="numeric"){
// 
                // ji.options.data[records[0].y][records[0].x] = parseInt(records[0].newValue,10);
            // }
// 
            // console.log(data);
        }
    });

    ji.insertRow([100,200,300])
  },[])

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
        ref={jexcelContainerRef}
      />
    </div>
  );
}

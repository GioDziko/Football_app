import React from "react";
import "./Table.css"
export default function Table({info}) {
    if(!info){
      return (
       <p></p>
    )
    }
    return (
      <div className="table-grid" >

         <div  className="table-container" >
          <div className="Table" >
          <p >#</p>
          <div></div>
            <p>Team</p>
            <p>MP</p>
            <p>W</p>
            <p>D</p>
            <p>L</p>
            <p>Pts</p>
          </div>
          <hr/>
        </div>  

        {info.map((item,index)=>
        
        <div key={index} className="table-container" >
          <div className="Table" >
          <p className={`team_${index}`} >{item.position}</p>
          <img src={item.team.crestUrl} alt="Logo" ></img>
            <p>{item.team.name}</p>
            <p>{item.playedGames}</p>
            <p>{item.won}</p>
            <p>{item.draw}</p>
            <p>{item.lost}</p>
            <p>{item.points}</p>
          </div>
          <hr/>
        </div>  )} 
        
      </div>
    )
  }
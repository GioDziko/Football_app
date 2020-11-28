import React from "react";
import "./Matchday.css";

export default function Matchday({info,liveMatches}){
    
    if(!info){
        return (
            <div className="bouncer" >
                <div className="ball" ></div>
                <div className="ball" ></div>
                <div className="ball" ></div>
                <div className="ball" ></div>
            </div>
        )
    }
    
  
    var matchindex=info[0].matchday;
    return(
        <div className="matchday-container" >
            
            <h1> Upcoming matches</h1>         
        {
            info.map((item,index)=>{
                if(item.matchday===matchindex){
                    return(
                        <div key={index} className="matchday" >
                        <p className="date" >{new Date(item.utcDate).toDateString()}</p>
                        <p>{item.homeTeam.name}</p>
                        <p>VS</p>
                        <p>{item.awayTeam.name}</p>
                    </div>
                    )
                }
            })
        }

            <h1 className="live-matches" > Live matches </h1>         
        {
            liveMatches.map((item,index)=>{ 
                    return(
                        <div key={index} className="matchday" >
                        <p className="date" >{new Date(item.utcDate).toDateString()}</p>
                        <p>{item.homeTeam.name}</p>
                        <p>{item.score.fullTime.homeTeam} : {item.score.fullTime.awayTeam}</p>
                        <p>{item.awayTeam.name}</p>
                    </div>
                    )
               
            })
        }
        </div>
    );
}


    
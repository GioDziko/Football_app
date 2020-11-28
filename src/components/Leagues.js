import React from "react";
import "./Leagues.css";

import Spain from "../Photos/spain.png";
import Italy from "../Photos/italy.png";
import England from "../Photos/england.png";
import Germany from "../Photos/germany.png";
import France from "../Photos/france.png";
export default function Leagues({changeCountry}){
    return(
        <div className="leagues-container" >
            <p className="leagues-title" >My leagues</p>
            <div className="leagues" onClick={e=>{changeCountry("PD")}} >
                <img src={Spain} ></img>
                <p  >La League</p>
            </div>
            <div className="leagues" onClick={e=>{changeCountry("PL")}} >
                <img src={England} ></img>
                <p>Premier League</p>
            </div>
            <div className="leagues" onClick={e=>{changeCountry("SA")}} >
                <img src={Italy} ></img>
                <p>Seria A</p>
            </div>
            <div className="leagues" onClick={e=>{changeCountry("BL1")}} >
                <img src={Germany} ></img>
                <p>Bundes League</p>
            </div>
            <div className="leagues" onClick={e=>{changeCountry("FL1")}} >
                <img src={France} ></img>
                <p>League 1</p>
            </div>
        </div>
    );
} 
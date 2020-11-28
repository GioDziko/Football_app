import React , {Component} from "react"
import Table from "./components/Table";
import "./App.css"
import Navbar from"./components/Navbar";
import League from "./components/Leagues";
import Matchday from "./components/Matchday";


class App extends Component{

  state={
    data:undefined,
    matches:undefined,
    liveMatches:undefined
  }
  changeApi= async (data)=>{
    try {
      
    if(!data){
      var uri = `https://api.football-data.org/v2/competitions/PD/standings`;
    }else{
      uri = `https://api.football-data.org/v2/competitions/${data}/standings`;
    }
    var fetched = undefined;
    let h = new Headers();
    h.append('X-Auth-Token' , '088d44810ef34850a0d6fd66a9a706d2');
    let req = new Request(uri , {
      method:"GET",
      headers:h,
      mode:'cors'
    })
    await fetch(req)
    .then((response) => {
      return response.json()
    })
    .then((jsonData) => {
      fetched = jsonData.standings[0].table;
    })
    this.setState({
      data:fetched
     
    })
    } catch (error) {
      console.log(error)
    }
  }

  matchChanger= async (data)=>{
    try {
      
    if(!data){
      var url = 'https://api.football-data.org/v2/competitions/PD/matches?status=SCHEDULED';
    }else{
      url = `https://api.football-data.org/v2/competitions/${data}/matches?status=SCHEDULED`;
    }
    var fetched = undefined;
    let header = new Headers();
    header.append('X-Auth-Token' , '088d44810ef34850a0d6fd66a9a706d2');
    let r = new Request(url , {
      method:"GET",
      headers:header,
      mode:'cors'
    })
    await fetch(r)
    .then((response) => {
      return response.json()
    })
    .then((jsonData) => {
      fetched = jsonData.matches;
    })
    this.setState({
      matches:fetched
     
    })
    
    } catch (error) {
      console.log(error)
    }
  }
  
  liveMatch= async (data)=>{
    try {
      
    if(!data){
      var url = 'https://api.football-data.org/v2/competitions/PD/matches?status=IN_PLAY';
    }else{
      url = `https://api.football-data.org/v2/competitions/${data}/matches?status=IN_PLAY`;
    }
    var fetched = undefined;
    let header = new Headers();
    header.append('X-Auth-Token' , '088d44810ef34850a0d6fd66a9a706d2');
    let r = new Request(url , {
      method:"GET",
      headers:header,
      mode:'cors'
    })
    await fetch(r)
    .then((response) => {
      return response.json()
    })
    .then((jsonData) => {
      fetched = jsonData.matches;
    })
    this.setState({
      liveMatches:fetched
     
    })
    console.log(fetched);
    } catch (error) {
      console.log(error)
    }
  }

  async componentDidMount(){
   this.changeApi();
   this.matchChanger();
   this.liveMatch();
  }

  changeCountry=(data)=>{
    this.changeApi(data);
    this.matchChanger(data);
    this.liveMatch(data);
  }

  render(){
    const {data , matches, liveMatches}=this.state;
    return (
      <div className="App">
        <Navbar/>
        <div className="information-container" >
        <League changeCountry={this.changeCountry} />
        <Matchday info={matches} liveMatches={liveMatches} />
        <Table info={data} />
        </div>
        
      </div>
    );
  }
}
export default App;
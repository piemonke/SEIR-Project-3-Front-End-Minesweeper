import './App.css';
import React, { useState, useEffect } from "react";
import dotenv from "dotenv";


import Board from "./components/Board/Board";
import ToggleFlag from "./components/ToggleFlag/ToggleFlag";

dotenv.config();

function App() {

  const backEndURI = process.env.BACKEND_URI;

  const tileDefault = {
    variant: "contained",
    color: "primary",
  }
  

  //include in state later to make these modifiable
  //total number of tiles and bombs, make variable based off difficulty later
  const tileTotal = 100;
  const bombNum = 10;
  
  //number of columns per row, make variable based off difficulty later
  const rowLength = 10;

  const generateBoardData = () => {
    //array for storing tiles and their data
    const tiles = [];
    //possible unnecessary variable
    // const bombIndex = [];
    
    
    //fill array of Tiles
    //Tiles have tile index, x coordinate, y coordinate
    let row = 0;
    let col = 0;
    for(let i = 0; i < tileTotal; i++) {
      tiles.push({
        tIndex: i,
        coord: {x: col, y: row},
        mine: false,
        nearby: 0,
        // ...tileDefault,
        // disabled: false,
      });
      if(col < rowLength - 1) {
        col++;
      } else {
        col = 0;
        row++;
      }
    }
    
    //randomly distribute bombs amongst 
    for(let c = 0; c < bombNum; c++) {
      let index = Math.floor(Math.random() * tileTotal);
      
      let tile = tiles.find(tile => tile.tIndex === index);
      
      //account for duplicate rolls
      if(!(tile.mine)) {
        tile.mine = true;
        // bombIndex.push(index);
      } else {
        c--;
      }
    }
    
    //set nearby mines value for each tile
    tiles.forEach(tile => {
      let currentTile = tile;
      let x = tile.coord.x;
      let y = tile.coord.y;
      
      //assign all nearby tiles into array
      let nearby = [];
      //8 rules for finding nearby mines
      nearby.push(tiles.find(tile => (tile.coord.x === x - 1 && tile.coord.y === y - 1)));
      nearby.push(tiles.find(tile => (tile.coord.x === x - 1 && tile.coord.y === y)));
      nearby.push(tiles.find(tile => (tile.coord.x === x - 1 && tile.coord.y === y + 1)));
      nearby.push(tiles.find(tile => (tile.coord.x === x && tile.coord.y === y - 1)));
      nearby.push(tiles.find(tile => (tile.coord.x === x && tile.coord.y === y + 1)));
      nearby.push(tiles.find(tile => (tile.coord.x === x + 1 && tile.coord.y === y - 1)));
      nearby.push(tiles.find(tile => (tile.coord.x === x + 1 && tile.coord.y === y)));
      nearby.push(tiles.find(tile => (tile.coord.x === x + 1 && tile.coord.y === y + 1)));
      
      //iterate over array, increment currentTile.nearby if tile.mine in array is truthy
      nearby.forEach(tileCheck => {
        if(tileCheck){
          if(tileCheck.mine) {
            currentTile.nearby++;
          }
        }
      });
    });

    return tiles;
  }
  
  

  const [tiles, setTiles] = useState([]);
  const [toggleFlag, setToggleFlag] = useState();
  const [boardId, setBoardId] = useState();
  const [flagged, setFlagged] = useState([]);

  useEffect(() => {
    let tilesData = generateBoardData();
    //send data to backend API
    //function to send board data
    //only call at first render or at new board creation
    //sends board data to back end
    //back end returns board database ID
    async function sendBoardData() {
      const boardUid = await fetch(`https://flubbsweeper-back-end.herokuapp.com/api/board/create`, 
        {method: "POST", 
        mode: "cors",
        headers: {"Content-type": "Application/json"},
        body: JSON.stringify({tiles: tilesData})})
        .then(res => res.json());
      setBoardId(boardUid);
    }

    sendBoardData();

    //create new array of tiles with no props for mined
    // let tilesRender = [];
    // let row = 0;
    // let col = 0;
    // for(let i = 0; i < tileTotal; i++) {
    //   tilesRender.push({
    //     tIndex: i,
    //     coord: {x: col, y: row},
    //     mine: false,
    //     nearby: 0,
    //     // ...tileDefault,
    //     // disabled: false,
    //   });
    //   if(col < rowLength - 1) {
    //     col++;
    //   } else {
    //     col = 0;
    //     row++;
    //   }
    // }
    
    setTiles(tilesData);
    setToggleFlag(false);
  }, [/*set rules to generate data */]);

  //function to send tile data
  //called on clicking button
  //sends tile Index and coordinates to server
  //server returns json data of all tile IDs to reveal
  //function updates state of those tiles
  async function handleTileSelect(e, tileIdx, boardId) {
    e.preventDefault();
    //change to send data(Index and Coordinates of selected tile) to backend
    let indexes = await fetch(`https://flubbsweeper-back-end.herokuapp.com/api/board/tile`,
      {method: "Post",
      mode: "cors",
      headers: {"Content-type": "Application/json"},
      body: JSON.stringify({ id: boardId, tile: tileIdx })})
      .then(res => res.json());
    // console.log(indexes);
    //recieve array of indexes to disable

    //lose condition
    //if indexes array is empty
    //trigger lose

    let newTiles = tiles.map(tile => indexes.tiles.includes(tile.tIndex) ? {...tile, disabled: true} : tile);
    setTiles(newTiles);
  }

  function handleTileFlag(e, tileIdx) {
    e.preventDefault();
    //change behavior of tiles to not be interactive unless for removing flag
    //win condition
    //if all and only mined tiles are flagged, declare victory
    //store all flagged tiles in array, check array against backend
    
    //if tileIdx exists in flagged, meaning that the tile has been flagged, remove it and toggle it off
    // console.log(flagged);
    // if(flagged.includes(tileIdx)){
    //   setFlagged(flagged.splice(flagged.indexOf(tileIdx), 1));
    // } else {
    //   //else add tileIdx to flagged array
    //   setFlagged(flagged.push(tileIdx));
    // }
    let newTiles = tiles.map(tile => (tile.tIndex === tileIdx && !(tile.flag === true))? {...tile, flag: !tile.flag} : tile);
    setTiles(newTiles);
  }

  function updateToggleFlag(e) {
    e.preventDefault();
    setToggleFlag(!toggleFlag);
  }

  return (
    <div className="App">
    <p>WARNING! This app is still an extreme work in progress. It is missing a million and a half features and what is currently here in production is only to show functionality.</p>
    <p>The most Extreme missing features include:</p>
    <ul>
      <li>Not showing tile data on front end</li>
      <li>Functional Win condition</li>
      <li>Functional Lose condition</li>
      <li>Difficulty selector</li>
    </ul>
    {/* <button onClick={() => tiles = generateBoardData()}>gen board</button> */}

    <ToggleFlag toggleFlag={toggleFlag} event={updateToggleFlag}/>
    <Board tiles={tiles}
      board={boardId} 
      tileDetails={tileDefault} 
      event={toggleFlag ? handleTileFlag : handleTileSelect}
      toggleFlag={toggleFlag}/>
  </div>
  );
}

export default App;

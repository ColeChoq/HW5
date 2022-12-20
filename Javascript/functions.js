//This Array allows me to traverse the ScrabbleTiles associative array with numbers as inputs instead of using the letters themselves
//I use this so I can use a random number generator to pick which letter is being chosen
var aInd = ['A', 'B', 'C', 'D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','_']

//This was the associative array provided in the assignemnt description
/*  File:  /~heines/91.461/91.461-2015-16f/461-assn/Scrabble_Pieces_AssociativeArray_Jesse.js
 *  Jesse M. Heines, UMass Lowell Computer Science, heines@cs.uml.edu
 *  Copyright (c) 2015 by Jesse M. Heines.  All rights reserved.  May be freely 
 *    copied or excerpted for educational purposes with credit to the author.
 *  updated by JMH on November 21, 2015 at 10:27 AM
 *  updated by JMH on November 25, 2015 at 10:58 AM to add the blank tile
 *  updated by JMH on November 27, 2015 at 10:22 AM to add original-distribution
 * 
 * 
 * Edited for use in GUI1 HW5 by:Colton Brian Choquette
 * 
 *  updated by CBC on December 17, 2022 at 12:40 PM to add 
 */
var ScrabbleTiles = [] ;
ScrabbleTiles["A"] = { "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9  } ;
ScrabbleTiles["B"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["C"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["D"] = { "value" : 2,  "original-distribution" : 4,  "number-remaining" : 4  } ;
ScrabbleTiles["E"] = { "value" : 1,  "original-distribution" : 12, "number-remaining" : 12 } ;
ScrabbleTiles["F"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["G"] = { "value" : 2,  "original-distribution" : 3,  "number-remaining" : 3  } ;
ScrabbleTiles["H"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["I"] = { "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9  } ;
ScrabbleTiles["J"] = { "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1  } ;
ScrabbleTiles["K"] = { "value" : 5,  "original-distribution" : 1,  "number-remaining" : 1  } ;
ScrabbleTiles["L"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4  } ;
ScrabbleTiles["M"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["N"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6  } ;
ScrabbleTiles["O"] = { "value" : 1,  "original-distribution" : 8,  "number-remaining" : 8  } ;
ScrabbleTiles["P"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["Q"] = { "value" : 10, "original-distribution" : 1,  "number-remaining" : 1  } ;
ScrabbleTiles["R"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6  } ;
ScrabbleTiles["S"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4  } ;
ScrabbleTiles["T"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6  } ;
ScrabbleTiles["U"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4  } ;
ScrabbleTiles["V"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["W"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["X"] = { "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1  } ;
ScrabbleTiles["Y"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["Z"] = { "value" : 10, "original-distribution" : 1,  "number-remaining" : 1  } ;
ScrabbleTiles["_"] = { "value" : 0,  "original-distribution" : 2,  "number-remaining" : 2  } ;

//The input array to hold the id's of the letter tiles
var inpt = ['','','','','','',''];

var score = 0;
    
//This function adds a tile with an Id of the parameter string til
function addTile(til){
    var tile = "<li id='"+ til + "' class='ui-state-default'><button id='replace' type='button' onclick='replaceTile(\""+ til +"\")'>x</button></li>";
    $( "#sortable" ).append( tile );
    var pieceID = "#" + til;
    $(pieceID).draggable({  snap: ".ui-widget-header", snapMode: "inner",  revert: "invalid"    })

}

//this function replaces a single tile
function replaceTile(til){
  delTile(til);
  createTile();
}

//this function removes a single tile with the id of the parameter
function delTile(til){

  let d = document.getElementById("sortable");
  let del = document.getElementById(til);
  let throwawayNode = d.removeChild(del);
}

//this Function deals with submission by validating that there are no spaces in the word 
//then adds up the values and updates the scores. It also removes the tiles from the board 
function submit(){
    var tempscore = 0;
    var drop;
    var teeth;
    //if there is a gap in the input i.e. tiles are not all adjacent to eachother
    if(!Strcheck()){
        //goes through the input array one by one and replaces the tiles resetting the array to empty
        //then it enables the draggables again
        for(let i=0; i<7; i++){
            if(inpt[i] != ''){
                delTile(inpt[i]);
                addTile(inpt[i]);
                inpt[i]='';
                teeth = i + 1;
                document.getElementById(teeth).innerHTML =inpt[i];
                drop = "droppable" + (i+1);
                $("#" + drop).droppable('option', 'accept', '*');
                document.getElementById("word").innerHTML = " All tiles in use must be placed directly adjacent to at least on other tile."
            }
        }
        return;
    }
    else{
        //Goes through the array one by one and add the values of the tiles to score
        for(let i=0; i<7; i++){
            if(inpt[i] != ''){
                //the id's also take into account which occurance of the letter they are so this just takes the letter and not the number of the id
                var letter = inpt[i].charAt(0);
                //bonus spaces are worth double the letter value
                if(i == 1 || i == 4){
                    tempscore = tempscore + (ScrabbleTiles[letter]['value'] * 2);
                }
                //just add the value of the letter
                else{
                    tempscore = tempscore +ScrabbleTiles[letter]['value'] ;
                }
                //remove the tiles and rest the array and droppables
                delTile(inpt[i]);
                inpt[i] = ''
                teeth = i + 1;
                document.getElementById(teeth).innerHTML =inpt[i];
                drop = "droppable" + (i+1);
                $("#" + drop).droppable('option', 'accept', '*');
                                
            }
        }
        //update the scores
        document.getElementById("word").innerHTML = "Last Word Value: "+ tempscore;
        score = score + tempscore;
        document.getElementById("total").innerHTML = "Total Score: "+ score;
    }
}

//this function ensures that there are no gaps in the tiles ie all are adjacent
function Strcheck(){
    var emtyChk = true;
    var spceChk = 0;
    var success = 1;
    for(let i=0; i<7; i++){
        if (inpt[i] != '' && emtyChk == true){
            emtyChk = false;
        }
        if(inpt[i] == '' && emtyChk == false){
            spceChk = 1;
        }
        if(inpt[i] != '' && spceChk == 1){
            success = 0;
        }	
    }

    if(success == 1){
        return 1;
    }
    else{
        return 0;
    }

}


//This function looks to see how many tiles are in the rack and creates as many as are needed to get back to 7
function refill(){

    var lilist = document.getElementById("sortable").getElementsByTagName("li");
    var numElem = lilist.length;
    var CrTiles = (7-numElem);

    for(var i = 0; i< CrTiles; i++){
        createTile();
    }


}




//This function ensures that none of the tiles are created if they have reached their limit
function check(){
    var chk = 0;
    for(var i = 0; i < 27; i++){
        var ind = aInd[i];
        chk = chk + ScrabbleTiles[ind]['number-remaining'];
    }
    if(chk == 0){
    //Display GAME OVER
    document.getElementById("set").innerHTML = '';
    return 0;
    }
    return 1;
}

//This function deletes and replaces all seven tiles and erases the array
function setRack(){

    var e = document.getElementById("sortable");

    for(let i=0; i<7; i++){
        inpt[i]='';
    }
        
    //e.firstElementChild can be used.

    var child = e.lastElementChild; 
    while (child) {
        e.removeChild(child);
        child = e.lastElementChild;
    }
    for(var i = 0; i < 7; i++){
        if (!check()){
            return;
        }
        createTile();
    }
    document.getElementById("set").innerHTML = 'Reset Rack';
    //document.getElementById("set").onclick('resetRack()');
}


//random number generator 1-27 for A-Z and _ for blank
function randNum(){return Math.floor(Math.random() * 27);}

//this function gets a random number then finds the letter associated with it and creates the id for that tile and then adds it to the list with addTile
function createTile(){	

    var num = randNum();
    var ind = aInd[num];
    while(ScrabbleTiles[ind]['number-remaining'] == 0){
        num = randNum();
        ind = aInd[num];
    }
    var id = ind + (ScrabbleTiles[ind]['original-distribution'] - ScrabbleTiles[ind]['number-remaining']);
    ScrabbleTiles[ind]['number-remaining'] = ScrabbleTiles[ind]['number-remaining'] - 1;
    addTile(id);

}



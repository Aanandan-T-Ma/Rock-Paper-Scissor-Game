var yp = 0
var cp = 0
var arr = ["paper","rock","scissor"]
var started = false
var finished = false

function select(selected, uns1, uns2){
    selected = String(selected)
    uns1 = String(uns1)
    uns2 = String(uns2)
    document.getElementById(selected.substr(0,2)).style.fontSize = "40px"
    document.getElementById(selected.substr(0,2)).style.backgroundImage = "url('./images/green.jpg')"
    document.getElementById(uns1.substr(0,2)).style.fontSize = "20px"
    document.getElementById(uns1.substr(0,2)).style.backgroundImage = "url('./images/"+uns1+".png')"
    document.getElementById(uns2.substr(0,2)).style.fontSize = "20px"
    document.getElementById(uns2.substr(0,2)).style.backgroundImage = "url('./images/"+uns2+".png')"
}

function play(choice){
    if(document.getElementById("res").style.fontSize == "40px"){
        document.getElementById("res").style.fontSize = "0px"
        cp = yp = 0
        document.getElementById("c").innerHTML = cp
        document.getElementById("y").innerHTML = yp
    }

    started = true
    finished = false
    
    var i = Math.floor(Math.random()*10)%3
    var j = arr.indexOf(choice)

    if(j == (i+1)%3) cp++
    else if(i == (j+1)%3) yp++

    select(arr[i], arr[(i+1)%3], arr[(i+2)%3])
    document.getElementById("c").innerHTML = cp
    document.getElementById("y").innerHTML = yp
}

function finish(){
    var result
    if(finished)
        result = "Game already finished!"
    else if(!started)
        result = "Game hasn't started yet!"
    else if(cp > yp)
        result = "Computer Wins!"
    else if(cp<yp)
        result = "You Win!"
    else
        result = "It's a DRAW!"

    document.getElementById("res").innerHTML = result
    document.getElementById("res").style.fontSize = "40px"
    resetBtns()
    finished = started
    started = false
}

function restart(){
    cp = yp = 0
    document.getElementById("c").innerHTML = cp
    document.getElementById("y").innerHTML = yp
    document.getElementById("res").style.fontSize = "0px"
    started = false
    resetBtns()
}

function resetBtns(){
    document.getElementById("ro").style.fontSize = "20px"
    document.getElementById("ro").style.backgroundImage = "url('./images/rock.png')"
    document.getElementById("pa").style.fontSize = "20px"
    document.getElementById("pa").style.backgroundImage = "url('./images/paper.png')"
    document.getElementById("sc").style.fontSize = "20px"
    document.getElementById("sc").style.backgroundImage = "url('./images/scissor.png')"
}
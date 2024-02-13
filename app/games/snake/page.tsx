"use client"

let blockSize = 25;
let rows = 20;
let cols = 20;

let velocityX = 0;
let velocityY = 0;
let foodX, foodY;
let snakeX = blockSize * 5;
let snakeY = blockSize * 5;
import React, { useRef, useEffect } from 'react'

const Canvas = props => {
  
  const canvasRef = useRef(null)
  


  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    canvas.height = rows * blockSize;
    canvas.width = cols * blockSize
    //Our first draw
    context.fillStyle = 'black'
    context.fillRect(0, 0, cols*blockSize, rows*blockSize)
    document.addEventListener("keyup", changeDirection);
    update();
    context.fillStyle = 'lime'
    context.fillRect(snakeX, snakeY, blockSize, blockSize);
    snakeX += velocityX * blockSize;
    snakeY += velocityY * blockSize;

    setInterval(update, 1000/10); //100 milliseconds
  }, [])
  
  return <canvas ref={canvasRef} {...props}/>
}


function update(){
    //snake head

      
}

function changeDirection(e){
    if(e.code === "ArrowUp" && velocityY !== 1){
        velocityX = 0;
        velocityY = -1;
    }
    else if (e.code === "ArrowDown" && velocityY !== -1){
        velocityX = 0;
        velocityY = 1;
    }
    else if ( e.code === "ArrowLeft" && velocityX !== 1){
        velocityX = -1;
        velocityY = 0;
    }
    else if ( e.code === "ArrowRight" && velocityX !== -1){
        velocityX = 1;
        velocityY = 0;
    }
}


export default Canvas
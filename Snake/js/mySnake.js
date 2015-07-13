
document.onkeydown = onSnakekeyPress;
document.onkeypress = onSnakekeyPress;

var boundary;
var table = document.createElement('table');

table.style.margin = 'auto';
table.style.height = '650px';
table.style.width = '650px';
                        


var mySnakeBoard = [];
var score;



for(var i =0 ; i <61 ; i++)

{	var mySnakeBoardRow = [];

	var tr = document.createElement('tr');

	for(var j =0 ; j <61 ; j++)

					{

						var td =document.createElement('td');

						td.style.width = '8px';
                        td.style.border = '1px solid black';
                        td.style.height = '8px';
                        td.style.backgroundColor = 'red';
						tr.appendChild(td);



						
					}

	mySnakeBoardRow = tr.children;

	table.appendChild(tr);

	mySnakeBoard[i] = mySnakeBoardRow;

}

document.getElementById('myGamingBoard').appendChild(table);

var direction,gameOverAlert,gameOver,x,y,tail,head,mySnake,aliveFrog,eatenFrog;



createMySnakeBoard();
createMySnake();
createMyFrog();
					
x =11;
y =3;

direction = 'E';

gameOver = false;

gameOverAlert =true;

var keyFlag =true;
function onSnakekeyPress(e) {
//debugger;
if(keyFlag)
{
		e = e || window.event;

		if (e.keyCode == '38')
		{
			if(direction!= 'S')
			direction = 'N';
			keyFlag = false;
            return  false;

		}
			
		else if (e.keyCode == '40')
		{
			if(direction!= 'N')
			direction = 'S';
			keyFlag = false;
            return  false;
			

		}
		else if (e.keyCode == '39') 
		{
			if(direction!= 'W')
			direction = 'E' ;
			keyFlag = false;
            return  false;

		}
		else if (e.keyCode == '37') 
		{
			if(direction!= 'E')
			direction = 'W';
			keyFlag = false;
            return  false;

		}
		

}
}

var moveSnake = function () {
		
		keyFlag = true;
        if(gameOverAlert)
		return;


		if(!gameOver)
		{
            
            if(boundary)
                table.style.border = '6px solid yellow';



					if(direction == 'N')

							x--;

					else if(direction == 'S')

							x++;

					else if(direction == 'E')

							y++;

					else 

							y--;


					
            if(boundary)
            {
            
                if(x>=61 || y>=61 || x<0 || y<0 )

						{
							
							gameOver = true;

							return;

							

						}
            }
				
            else{
					if(y<0 )

						{
							
						y = 60;
							

						}
					if(y>=61)

						{
							
						y =0;
							

						}
					if(x<0)

						{
							
						x=60;
							

						}
					if(x>=61)

						{
							
						x=0;
							

						}
						
            }

					if(eatenFrog.indexOf(tail) == -1)
					{
										tail.style.backgroundColor='red';

										mySnake.shift();
										
										tail =mySnake[0];
										
										tail.style.backgroundColor='brown' ;
										
										
					}
					else

					{

										eatenFrog.pop(tail);
										

					}
					

					head.style.backgroundColor='yellow' ;
					
					mySnakeBoard[x][y].style.backgroundColor='brown' ;

					
					
					if(mySnake.indexOf(mySnakeBoard[x][y])!= -1)
					{
					
							gameOver = true;

							return;

					
					
					} 
					
					mySnake.push(mySnakeBoard[x][y]);
					
					
					head = mySnakeBoard[x][y];
					
					
					
					if(head == aliveFrog)
					
					{
						
						eatenFrog.push(aliveFrog);
						
						score = score + 1;
						
						document.getElementById('myScore').innerHTML = score;
						
						createMyFrog();
					
					}



		}

		else

		{


		gameOverAlert =true;

		clearInterval(interval);
		
		var btn = confirm('Game Over!!! Try Again ??');

			if (btn)

				{



					createMySnakeBoard();
					createMySnake();
					createMyFrog();

					
					x =11 ;
					y =3;

					direction = 'E';

					gameOver = false;

					gameOverAlert =false;
					
					interval = setInterval(moveSnake,75);

				}
			else
				window.close();


	} 

}

var interval = setInterval(moveSnake, 75);

function createMySnake(){

				mySnake = [mySnakeBoard[11][0],mySnakeBoard[11][1],mySnakeBoard[11][2],mySnakeBoard[11][3]];
									
				tail =mySnake[0];

				head = mySnake[mySnake.length-1];

									
				for(var a = 0 ; a< mySnake.length ;a++)
					mySnake[a].style.backgroundColor = 'yellow';
				
				eatenFrog = [];
				score = 0;
				document.getElementById('myScore').innerHTML = score;

}

function createMyFrog(){

				var xf = Math.floor(Math.random() * 20) + 1 ;
				var yf = Math.floor(Math.random() * 20) + 1 ;
				if(mySnake.indexOf(mySnakeBoard[xf][yf])==-1)
				
				{
						aliveFrog = 	mySnakeBoard[xf][yf];
						
						aliveFrog.style.backgroundColor = 'rgb(5, 255, 8)';
				}
				else
				{
				createMyFrog();
				
				}

}


function createMySnakeBoard(){


				for(var a = 0 ; a< mySnakeBoard.length ;a++)
					for(var b = 0 ; b< mySnakeBoard.length ;b++)
						mySnakeBoard[a][b].style.backgroundColor = 'red';



}



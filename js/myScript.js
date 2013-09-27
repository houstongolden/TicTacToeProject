var turn = 1;
var cellArray = [["", "", ""], ["", "", ""], ["", "", ""]];
function playBox(){
	switch(turn) {
		case 1:
		event.target.innerHTML = "X";
		break;
		case 2:
		event.target.innerHTML = "<img src=\"http://cloud-media.com/wp-content/uploads/2013/09/my-baby-photo.jpg\" />";
		break;
		case 3:
		event.target.innerHTML = "X";
		break;
		case 4:
		event.target.innerHTML = "<img src=\"http://cloud-media.com/wp-content/uploads/2013/09/my-baby-photo.jpg\" />";
		break;
		case 5:
		event.target.innerHTML = "X";
		break;
		case 6:
		event.target.innerHTML = "<img src=\"http://cloud-media.com/wp-content/uploads/2013/09/my-baby-photo.jpg\" />";
		break;
		case 7:
		event.target.innerHTML = "X";
		break;
		case 8:
		event.target.innerHTML = "<img src=\"http://cloud-media.com/wp-content/uploads/2013/09/my-baby-photo.jpg\" />";
		break;
		case 9:
		event.target.innerHTML = "X";
		break;


	} 
	turn = turn+1;


	for(var r=0;r<=2;++r)
	{	
		for(c=0;c<=2;++c)
		{
		cellArray[r][c] = 
		document.getElementById("cell"+(r+1)+"_"+(c+1)).innerHTML;
		}


	for(c=0;c<=2;++c)
		{	
		if(cellArray[0][c] == cellArray[1][c] &&
			cellArray[1][c] == cellArray[2][c] &&
			cellArray[0][c] != "")

		{if(cellArray [0][c].indexOf("my-baby-photo")>=0)
		// alert("Houston won in column " + (c+1));
		document.getElementById("pop_up").style.display = "block";
		else
		alert("X won in column " + (c+1));
		}

		if(cellArray[r][0] == cellArray[r][1] &&
			cellArray[r][1] == cellArray[r][2] &&
			cellArray[r][0] != "")

		{if(cellArray [r][0].indexOf("my-baby-photo")>=0)
		// alert("Houston won in column " + (r+1));
		document.getElementById("pop_up").style.display = "block";
		else
		alert("X won in column " + (r+1));
		}

		}
	}
		if(cellArray[0][0] == cellArray[1][1] &&
			cellArray[1][1] == cellArray[2][2] &&
			cellArray[0][0] != "")

		{if(cellArray [0][0].indexOf("my-baby-photo")>=0)
		document.getElementById("pop_up").style.display = "block";
		else
		alert("X won diagonally ");
		}

		if(cellArray[0][2] == cellArray[1][1] &&
			cellArray[1][1] == cellArray[2][0] &&
			cellArray[0][2] != "")

		{if(cellArray [0][2].indexOf("my-baby-photo")>=0)
		// alert("Houston won diagonally ");
		document.getElementById("pop_up").style.display = "block";
		else
		alert("X won diagonally ");
}
}

// document.getElementById("pop_up").style.zIndex = "2";
// document.getElementById("pop_up").innerHTML = "Houston won in column " + (c+1));



var sessionData = sessionStorage.getItem('result')

var request = new XMLHttpRequest();
request.onload = function() {
    // get the file contents
    var fileContent = this.responseText;
    // split into lines
    var fileContentLines = fileContent.split( '\n' );
    // get a random index (line number)
    var randomLineIndex = Math.floor( Math.random() * fileContentLines.length );
    // extract the value
    var randomLine = fileContentLines[ randomLineIndex ];
	
	var randomLineIndex2 = Math.floor( Math.random() * fileContentLines.length );
	var randomLine2 = fileContentLines[ randomLineIndex2 ];
	
	
    // add the random line in a div
    document.getElementById( 'random-phrase' ).innerHTML = randomLine;
	
	document.getElementById( 'random-phrase2' ).innerHTML = randomLine2;
	
//	document.getElementById( 'count1' ).innerHTML = randomLineIndex;
//	document.getElementById( 'count2' ).innerHTML = randomLineIndex2;
	
	
	$('#random-phrase').click(function() {
		if(randomLineIndex < randomLineIndex2){
			document.getElementById( 'text-js' ).innerHTML = ('Hey bruv, you were right!');
			request.onload(); sessionStorage.setItem('result','Hey bruv, you were right!');
			window.open ('right-data.html','_self',false);
		}
		else{
			document.getElementById( 'text-js' ).innerHTML = ("Sorry bruv, that's not right, try another one!");
			request.onload(); sessionStorage.setItem('result',"Sorry bruv, that's not right, try another one!");
			window.open ('wrong-data.html','_self',false);
    		return; 
		}
   
  	});
	
	$('#random-phrase2').click(function() {
		if(randomLineIndex < randomLineIndex2){
			document.getElementById( 'text-js' ).innerHTML = ("Sorry bruv, that's not right, try another one!");
			request.onload(); sessionStorage.setItem('result',"Sorry bruv, that's not right, try another one!");
    		window.open ('wrong-data.html','_self',false);
    		return;			
		}
		else{
			document.getElementById( 'text-js' ).innerHTML = ('Hey bruv, you were right!');
			request.onload(); sessionStorage.setItem('result','Hey bruv, you were right!');
    		window.open ('right-data.html','_self',false);
    		return;
		}
  	});
};
request.open( 'GET', 'js/evilList.txt', true );
request.send();


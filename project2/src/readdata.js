function getdata() {
    var fff=document.getElementById("FIELD").value;
    //firebase data retrieval function
    //path of your data
    //.once will get all your data in one time
	fff= fff+'/';
	var row=0;
    firebase.database().ref(fff).on("value" ,function(snapshot) {
		//var content ='';
		var r=0;
		snapshot.forEach(function(childSnapshot) {
        var pname=childSnapshot.val().Product;
        var cprice=childSnapshot.val().Cost;
        var contact=childSnapshot.val().Mobile;
		var linkk = childSnapshot.val().Imge;
		let content ='';
		r++;
		if(r>3 && r%3==1){
		//document.write("<hr/>");
		document.getElementById("list").getElementsByTagName("tbody")[0].insertRow();
		//$("#list tbody").append('<hr style:"border:1px solid black;"></hr>');
		document.getElementById("list").getElementsByTagName("tbody")[0].insertRow();
		//content +='<br><hr style:"border:1px solid black;"></hr>';
		//content +='<tr>';
		//content +='</tr>';
		}
		//document.getElementById("list").getElementsByTagName("tbody")[0].insertRow();
		//$("#list tbody").append('<hr style:"border:1px solid black;"></hr>');
		content +='<th>';
		console.log("hi");
		content +=  "<div class='card-group' ><div class='card' style='width: 28.5rem;'><img src ='" +linkk+ "'class='card-img-top' alt='...' width='100%' height='250px'><div class='card-body'><h5 style='text-align:left; font-size:27px;' class='card-title'>" +pname+ "</h5><p style='text-align:left;font-size:22px;' class='card-text'>cost: <strong>" +cprice+ "</strong></p><p style='text-align:left;' class='card-text' >contact: " +contact+ "</p><a href='index.html' class='btn btn-primary btn-lg disabled' tabindex='-1' role='button' aria-disabled='true'><button style='float:left;background-color:#33B2FF;color:white;border-radius: 15px;width:100px; height:40px;'>Add to cart</button></a></div></div></div>";
		//if(r%4==0){
        content += '</th>';
		//if(r%4==0){
		//content += '</tr>';}
		$("#list tbody").append(content);
		
        //content += '<td><button><buy></button></td>';
		//content
		//console.log(linkk);
        //document.getElementById("product").innerHTML=pname;
        //document.getElementById("mobile").innerHTML=contact;
        //document.getElementById("price").innerHTML=cprice;
		//document.getElementById("pic").src=linkk;
		//document.getElementById("button1").innerHTML="Buy";
    });
	//document.getElementById("tab").append(content);
	});
	
}
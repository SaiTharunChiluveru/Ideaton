function upload() {
	var Name1 = document.getElementById("name").value;
    var product=document.getElementById("product").value;
    var cost=document.getElementById("cost").value;
    var mobile=document.getElementById("mobile").value;
	var field = document.getElementById("field").value
	var image=document.getElementById("image").files[0];
    var imageName=image.name;
    var storageRef=firebase.storage().ref('images/'+imageName);
    var uploadTask=storageRef.put(image);
	var imgdata;
	var ff=field+'/';
    uploadTask.on('state_changed',function (snapshot) {
		
        var progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
        console.log("upload is " + progress +" done");
    },function (error) {
		
        console.log(error.message);
    },function () {
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
			console.log(downloadURL);
			firebase.database().ref(ff+product+field).set({
			Name: Name1,
			Mobile: mobile,
			Product: product,
			Cost: cost,
			Imge:downloadURL
		//Img: uploadTask.snapshot.downloadURL
			});
        });
    });
	//console.log(imgdata);
    

}
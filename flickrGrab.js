/* 
	Flickr Image Grabber
	Dan Wallace
	09/30/2020
	www.brick.technology
	Update 2: Enhanced Load Times + Gallery Thumbnail System
*/

//Edit these variables with your flickr API key + user ID + photo set ID
var apiKey = "YOUR_API_KEY_HERE" // Replace text with your Flickr API key
var userID = "YOUR_USER_ID_HERE" // Replace with your user id  (ex: 137267481@N04)
var photoSetID = "YOUR_PHOTO_SET_ID_HERE" // Replace with your photoset id (ex: 72157716193056353")
var imageSize = "b" // Visit https://www.flickr.com/services/api/misc.urls.html for image size codes

//Begin Code - Do not edit below
function myFunction(imgs) {
var expandImg = document.getElementById("expandedImg");
var imgText = document.getElementById("imgtext");
expandImg.src = imgs.src;
imgText.innerHTML = imgs.alt;
expandImg.parentElement.style.display = "block";
}

var AlbumSettings = {
"async": true,
"crossDomain": true,
"url": "https://www.flickr.com/services/rest/?method=flickr.photosets.getInfo&api_key="+apiKey+"&photoset_id="+photoSetID+"&user_id="+userID+"&format=json&nojsoncallback=1",
"method": "GET",
"headers": {}
}

var PhotoSettings = {
"async": true,
"crossDomain": true,
"url": "https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key="+apiKey+"&photoset_id="+photoSetID+"&user_id="+userID+"&format=json&nojsoncallback=1",
"method": "GET",
"headers": {}
}

$.getJSON(AlbumSettings).done(function (data) {

});

$.getJSON(PhotoSettings).done(function (data) {

$.each(data.photoset.photo, function (i, photoParse) {

    var farmId = photoParse.farm;
    var serverId = photoParse.server;
    var id = photoParse.id;
    var secret = photoParse.secret;
    var title = photoParse.title;

    $("#menuLeft").append('<div class="row"><div class="column"><img src="https://farm' + farmId + '.staticflickr.com/' + serverId + '/' + id + '_' + secret + '_'+imageSize+".jpg" alt="' + title + '" id="flickrIMG" onclick="myFunction(this);"></div></div>');
});
});

// <(^_^<)end(>^_^)>

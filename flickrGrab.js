/* 
	Flickr Image Grabber
	Dan Wallace
	09/30/2020
	www.brick.technology
*/

var apiKey = "a47fd20d3568e7e66e5a2f44fc7a986c" // Replace text with your Flickr API key
var userID = "190267471@N04" // Replace with your user id  (ex: 137267481@N04)
var photoSetID = "72157716193056353" // Replace with your photoset id (ex: 72157716193056353")
var imageSize = "c" // Visit https://www.flickr.com/services/api/misc.urls.html for image size codes

function myPhotos(setId) {
    var URL = "https://api.flickr.com/services/rest/" + "?method=flickr.photosets.getPhotos" + "&api_key=" + apiKey + "&user_id=" + userID + "&photoset_id=" + setId + "&privacy_filter=1" + "&per_page=20" + "&format=json&nojsoncallback=1";

    $.getJSON(URL, function (data) {
        $.each(data.photoset.photo, function (i, item) {
            var img_src = "https://live.staticflickr.com/" + item.server + "/" + item.id + "_" + item.secret + "_c.jpg";
            var img_thumb = $("<img/>").attr("src", img_src).attr("class", "galleryPhoto")
            $(img_thumb).appendTo("#flickr-images");
        });
    });
}

$(document).ready(function () {
    myPhotos(photoSetID);
});

// <(^_^<)end(>^_^)>

/**
 * Created by JetBrains WebStorm.
 * User: shaikhgousep
 * Date: 20/8/13
 * Time: 12:13 PM
 * To change this template use File | Settings | File Templates.
 */

(function(){
    var albums=ko.observableArray([]);
    var gallery=ko.observableArray([]);
    var galTitle=ko.observable('');
    var galCount=ko.observable('');
  /*  album1.name("first Album")
          .count("12");
    albums.push(album1);
    */
function mapToAlbum(albumModel,data){
    albumModel.id(data.id);
    albumModel.name(data.name);
    albumModel.count(data.count);
    albums.push(albumModel);
}
function mapToPhotos(photoModel,data){
    photoModel.id(data.id);
    photoModel.title(data.name);
    photoModel.picureUri(data.source);
    gallery.push(photoModel);
}
function fetchAlbums(){
    $.each(ALBUM.albumData.data,function(){
        mapToAlbum(new ALBUM.albumModel(),this);
    })
}
function showGallery(data)
{     gallery([]);
     galTitle('');
    galCount('');
    galTitle(data.name());
    galCount(data.count());
var match=ko.utils.arrayFirst(ALBUM.photoData,function(item){
           console.log(item);

             if(item.albId==data.id()){
              return  item.data[0].picture;
             }
         })
            if(match){
             $.each(match.data,function(){
                 mapToPhotos(new ALBUM.photoModel(),this);
             })
            }
            else{
            //return "images/default.jpg";
            }
}
    $(function(){
        fetchAlbums();
    })
    var vm={
        albums:albums,
        fetchAlbums:fetchAlbums,
        gallery:gallery,
        showGallery:showGallery,
        galTitle:galTitle,
        galCount:galCount
    }
  ko.applyBindings(vm);
})();
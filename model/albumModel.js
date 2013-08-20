/**
 * Created by JetBrains WebStorm.
 * User: shaikhgousep
 * Date: 20/8/13
 * Time: 11:40 AM
 * To change this template use File | Settings | File Templates.
 */
var ALBUM=ALBUM||{}
ALBUM.albumModel=function(){
    var self=this;
    self.id=ko.observable('');
    self.name=ko.observable('');
    self.count=ko.observable('');
    self.coverPhoto=ko.computed(function()
    {
        if(self.id())
        {
       var match=ko.utils.arrayFirst(ALBUM.photoData,function(item){
           console.log(item);
           console.log(self.id())
             if(item.albId==self.id()){
              return  item.data[0].picture;
             }
         })
            if(match){
             return  match.data[0].picture;
            }
            else{
            return "images/default.jpg";
            }
        }
    })
  //  self.photos=new ALBUM.photoModel();
    /*self.click=function(){
    }
    */
    return self;
}
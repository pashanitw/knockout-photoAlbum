/**
 * Created by JetBrains WebStorm.
 * User: shaikhgousep
 * Date: 20/8/13
 * Time: 11:16 AM
 * To change this template use File | Settings | File Templates.
 */
var ALBUM=ALBUM||{}
 ALBUM.photoModel=function(){
    var self=this;
    self.id=ko.observable('');
    self.title=ko.observable('');
     self.picureUri=ko.observable('')
    //this.caption='';
}
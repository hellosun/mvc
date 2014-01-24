/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 14-1-14
 * Time: 下午4:50
 * To change this template use File | Settings | File Templates.
 */
/**
 * 实现 Object.create();
 */

if(typeof Object.create !== "function"){
    Object.create = function(o){
        function F(){
            F.prototype = o;
            return new F();
        }
    }
};

Math.guid = function(){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c){
        var r = Math.random()*16| 0, v = c == 'x' ? r : (r&0x3 | 0X8);
        return v.toString(16);
    }).toUpperCase();
};

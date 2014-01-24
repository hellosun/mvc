/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 14-1-13
 * Time: 下午7:31
 * To change this template use File | Settings | File Templates.
 */
define(function(require, exports, module){
   /*
    exports.doSomething = function(){
        console.log('Test');
    }
    */

    var PubSub =function(){}
    PubSub.prototype.subscribe = function(ev,callback){
        var calls = this._callbacks || (this._callbacks = {});
        (this._callbacks[ev] || (this._callbacks[ev] = [])).push(callback);
        return this;
    }
    PubSub.prototype.publish = function(ev,callback){
        var args = Array.prototype.slice.call(arguments,0);
        var ev = args.shift();

        var list,calls, i,l;
        if(!(calls = this._callbacks)) return this;
        if(!(list = this._callbacks[ev])) return this;
        for(i = 0,l = list.length; i < l; i++){
            list[i].apply(this,args);
            return this;
        }
    }


    module.exports = new PubSub();

});

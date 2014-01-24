/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 14-1-14
 * Time: 下午4:41
 * To change this template use File | Settings | File Templates.
 */
define(function(require, exports, module){

   var Model = {
       inherited: function(){},
       created: function(){},

       prototype: {
           init: function(){}
       },

       create: function(){
           var object = Object.create(this);
           object.parent = this;
           object.prototype = object.fn = Object.create(this.prototype);

           object.created();
           this.inherited(object);
           return object;
       },

       init: function(){
           var instance = Object.create(this.prototype);
           instance.init.apply(instance, arguments);
           console.log(instance);
           return instance;
       },

       extend: function(o){
           var extended = o.extended;
           for(var k in o){
               this[k] = o[k];
           }
           if(extended) extended(this);
       },

       include: function(o){
           var included = o.included;
           for(var k in o){
               this.prototype[k] = o[k] ;
           }
           if(included) included(this);
       }

   };

    Model.extend({
        created: function(){
            this.records = {};
        }
    });

    module.exports = Model;

});

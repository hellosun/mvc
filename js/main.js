/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 14-1-13
 * Time: 下午7:01
 * To change this template use File | Settings | File Templates.
 */

define(function(require, exports, module){

    //var $ = require('jQuery');
    var test = require("test");
    var $ = require("jquery");
    var model = require("model");


    exports.doSomething = function(){

        var Asset = model.create();



        Asset.extend({
            find: function(id){
                var record = this.records[id];
                if( !record) throw("Unknown record");
                return record.dup();
            },
            populate: function(values){
                this.records = {};
                for(var i= 0, il = values.length; i < il; i++){
                    var record = this.init(values[i]);
                    record.newRecord = false;
                    this.records[record.id] = record;
                }
            }
        });

        Asset.include({

            newRecord: true,

            create: function(){
                if( !this.id) this.id = Math.guid();
                this.newRecord = false;
                Asset.created();
                Asset.records[this.id] = this.dup();
            },

            destroy: function(){
                delete Asset.records[this.id];
            },

            update: function(){
                Asset.records[this.id] = this.dup();
            },

            save: function(){
                this.newRecord ? this.create() : this.update();
            },

            dup: function(){
                 return $.extend(true,{},this);
            }


        });

        var asset = Asset.init();

        asset.name = "same, same";


         asset.save();

        //asset.destroy();

       // console.log(Asset.find(asset.id).name);
        asset.name = "same";
        asset.update();
       // console.log(Asset.find(asset.id).name);
        $.getJSON("js/data.js",function(result){
            Asset.populate(result.data);
        });
/*       console.dir(module)
       console.log(module.uri);
        console.log(module.dependencies);
        console.log(module.exports );*/

    }

});
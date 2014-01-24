/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 13-10-14
 * Time: 下午15:00
 * To change this template use File | Settings | File Templates.
 */

/**
 * author: 汪洋
 * email: wangyang@adtime.com
 * date：2013-10-14 am
 *function: jquery自定义事件
 */

jQuery.fn.tabs = function(control){
   var element = $(this);
   control = $(control);
   
  /* element.delegate("li", "click" , function(){
	   var tabName = $(this).attr("data-tab");
	   element.trigger("change.tabs", tabName); 
   });*/
   
   element.on("click", "li" , function(){
	   var tabName = $(this).attr("data-tab");
	   element.trigger("change.tabs", tabName); 
   }); 
   
   element.bind("change.tabs", function(e, tabName){
	   element.find("li").removeClass("active");
	   element.find(">[data-tab='" + tabName + "']").addClass("active");
   });
   
   element.bind("change.tabs", function(e, tabName){
	   control.find(">[data-tab]").removeClass("active");
	   control.find(">[data-tab='" + tabName + "']").addClass("active");
   });
   
   element.bind("change.tabs", function(e, tabName){
	   window.location.hash = tabName;
   });
   
  $(window).bind("hashchange", function(){
	   var tabName = window.location.hash.slice(1);
	   element.trigger("change.tabs", tabName);
   });
    
/*
   $(window).bind("hashchange", function(){
	   var tabName = $.hash();
	   element.trigger("change.tabs", tabName);
   });
*/   
   
   
   var firstName = element.find("li:first").attr("data-tab");
   element.trigger("change.tabs", firstName);
   
   return this;
} 

$("#tabs").tabs("#tabsContent");

var PubSub = {
	
	subscribe: function(ev, callback){
		var calls = this._callbacks || (this._callbacks = {});
		(this._callbacks[ev] || (this._callbacks[ev] = [])).push(callback);
		return this;	
	},
	
	publish: function(){
		var args = Array.prototype.slice.call(arguments, 0);
		var ev = args.shift();
		
		var list,calls,i,l;
		if(!(calls = this._callbacks)) return this;
		if(!(list = this._callbacks[ev])) return this;
		
		for(i = 0, l = list.length; i < l; i++){
			list[i].apply(this, args);
			return this;
		}
	}
	
};

/*PubSub.subscribe("wem", function(){
	alert("Wem!");
});
*/
//PubSub.publish("wem");

var Asset = {};
jQuery.extend(Asset, PubSub);
Asset.subscribe("wem", function(){
	//alert("Wem!");
});
 
//Asset.publish("wem");

var x = 1;
function foo(x){
	//alert(x);
}

~function(){
	//var x = 2;
	foo(x);               //1
}(x);

//alert($("#myapp").scrollTop());

//alert($(window).scrollTop());
var $window = $(window);
$(window).scroll(function(){
	if($window.scrollTop() == 100){
		$("#aaaa").show();
		$("#aaaa").scrollTop();
		
	}
});
//alert($("#aaaa").scrollTop());
//alert($(window).height());

		 var json = [];  
         
		 
		 var ssss = '({'+'"week"'+':'+'"aaa"'+',"paiqiTime":'+'"2012-1021"'+',"paiqiCishu":'+'"sdsdsdsd"'+'})';
		 var kkk = eval(ssss);
		 
		 for(var k = 0; k<3; k++){
			 json.push(kkk);
	     }
		 var ttt = eval(json);
		 alert(json);
		
		 var jsonss = [{'username':'张三','userage':'20'},{'username':'李四','userage':'30'}];  
         //alert(jsonss[0]);

 
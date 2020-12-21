(function(f){var c=function(h){return typeof h==="undefined"};var e=function(h){return h===null};var d=function(h){return !c(h)&&!e(h)};var a=function(h){return c(h)||e(h)||h===""};var g=function(h,j){if(d(j)){var i=f('<div class="dialog-buttons"></div>');f.each(j,function(n,l){var k=function(){return typeof l.disabled==="function"&&l.disabled.call()===true};var m=f('<div class="button"></div>').append(f("<span></span>").text(l.buttonText));if(d(l.clazz)){m.addClass(l.clazz)}if(d(l.color)){m.css({background:l.color.base,color:l.color.text})}if(k()){m.addClass("disabled-button")}else{if(d(l.color)){m.hover(function(){f(this).css("background-color",l.color.hover)},function(){f(this).css("background-color",l.color.base)})}m.click(function(){var o=f(this).data("handler");if(d(o)&&typeof o.click==="function"){o.click.call(h)}})}m.data("handler",l.handler).appendTo(i)});h.append(i).data("buttonModel",j)}};var b={init:function(h){return this.each(function(){var k=f(this).addClass("dialog cancellable modal");k.css("display","none");var l={};if(d(k.data("nf-dialog"))){l=k.data("nf-dialog")}if(d(h)){f.extend(l,h);k.data("nfDialog",l)}if(!d(l.header)||l.header){var i=f('<span class="dialog-header-text"></span>');var j=f('<div class="dialog-header"></div>').prepend(i);if(!a(l.headerText)){i.text(l.headerText)}k.prepend(j)}if(!d(l.footer)||l.footer){g(k,l.buttons)}})},setCloseHandler:function(h){return this.each(function(i,j){var k={};if(d(f(this).data("nf-dialog"))){k=f(j).data("nf-dialog")}if(!d(k.handler)){k.handler={}}k.handler.close=h;f(j).data("nfDialog",k)})},setOpenHandler:function(h){return this.each(function(i,j){var k={};if(d(f(this).data("nf-dialog"))){k=f(j).data("nf-dialog")}if(!d(k.handler)){k.handler={}}k.handler.open=h;f(j).data("nfDialog",k)})},setResizeHandler:function(h){return this.each(function(i,j){var k={};if(d(f(this).data("nf-dialog"))){k=f(j).data("nf-dialog")}if(!d(k.handler)){k.handler={}}k.handler.resize=h;f(j).data("nfDialog",k)})},setButtonModel:function(h){return this.each(function(){if(d(h)){var i=f(this);i.children(".dialog-buttons").remove();g(i,h)}})},refreshButtons:function(){return this.each(function(){var h=f(this);var i=h.data("buttonModel");h.children(".dialog-buttons").remove();g(h,i)})},setHeaderText:function(h){return this.each(function(){f(this).find("span.dialog-header-text").text(h)})},resize:function(){var i=f(this);var l=i.find(".dialog-content");var k={};if(d(i.data("nf-dialog"))){k=i.data("nf-dialog")}if(!d(k.responsive)){k.responsive={};if(!d(k.responsive.x)){k.responsive.x=true}if(!d(k.responsive.y)){k.responsive.y=true}}else{if(!d(k.responsive.x)){k.responsive.x=true}else{k.responsive.x=(k.responsive.x=="true"||k.responsive.x==true)?true:false}if(!d(k.responsive.y)){k.responsive.y=true}else{k.responsive.y=(k.responsive.y=="true"||k.responsive.y==true)?true:false}}if(k.responsive.y||k.responsive.x){var h;var m;if(d(k.responsive["fullscreen-height"])){h=parseInt(k.responsive["fullscreen-height"],10)}else{k.responsive["fullscreen-height"]=i.height()+"px";h=parseInt(k.responsive["fullscreen-height"],10)}if(d(k.responsive["fullscreen-width"])){m=parseInt(k.responsive["fullscreen-width"],10)}else{k.responsive["fullscreen-width"]=i.width()+"px";m=parseInt(k.responsive["fullscreen-width"],10)}if(!d(k.width)){k.width=i.css("width")}if(!d(k["min-width"])){if(parseInt(i.css("min-width"),10)>0){k["min-width"]=i.css("min-width")}else{k["min-width"]=k.width}}if(k["min-width"].indexOf("%")>0){k["min-width"]=(f(window).width()*(parseInt(k["min-width"],10)/100))+"px"}if(!d(k.height)){k.height=i.css("height")}if(!d(k["min-height"])){if(parseInt(i.css("min-height"),10)>0){k["min-height"]=i.css("min-height")}else{k["min-height"]=k.height}}if(k["min-height"].indexOf("%")>0){k["min-height"]=(f(window).height()*(parseInt(k["min-height"],10)/100))+"px"}if(f(window).height()<h){if(k.responsive.y){i.css("height","100%");i.css("min-height","100%")}}else{i.css("min-height",k["min-height"]);if(k.responsive.y){if(k.height.indexOf("px")>0){k.height=(parseInt(k.height,10)/f(window).height()*100)+"%"}i.css("height",k.height)}}if(f(window).width()<m){if(k.responsive.x){i.css("width","100%");i.css("min-width","100%")}}else{i.css("min-width",k["min-width"]);if(k.responsive.x){if(k.width.indexOf("px")>0){k.width=(parseInt(k.width,10)/f(window).width()*100)+"%"}i.css("width",k.width)}}i.center();i.data("nfDialog",k)}if(l[0].offsetHeight<l[0].scrollHeight){if(d(k.scrollableContentStyle)){l.addClass(k.scrollableContentStyle)}}else{if(d(k.scrollableContentStyle)){l.removeClass(k.scrollableContentStyle)}}if(d(k.handler)){var j=k.handler.resize;if(d(j)&&typeof j==="function"){j.call(i)}}},show:function(){var j=f(this);var m=j.css("z-index");if(m==="auto"){if(d(j.data("nf-dialog"))){m=(d(j.data("nf-dialog")["z-index"]))?j.data("nf-dialog")["z-index"]:1301}else{m=1301}}var i=f.makeArray(f(".dialog:visible"));if(i.length>=1){var l=i.map(function(n){var o;return isNaN(o=parseInt(f(n).css("z-index"),10))?0:o});m=Math.max.apply(null,l)+2}j.css("z-index",m);var k={};if(d(j.data("nf-dialog"))){k=j.data("nf-dialog")}var h;if(d(k.glasspane)){h=k.glasspane}else{k.glasspane=h=j.find(".dialog-header").css("background-color")}if(top!==window||!d(k.glasspane)){k.glasspane=h="transparent"}if(!f("body").find("[data-nf-dialog-parent='"+j.attr("id")+"']").is(":visible")){f("<div></div>").attr("data-nf-dialog-parent",j.attr("id")).addClass("modal-glass").css({"background-color":h,"z-index":m-1}).appendTo(f("body"))}j.data("nfDialog",k);return this.each(function(){if(!j.is(":visible")){j.show();j.modal("resize");j.center();if(d(k.handler)){var n=k.handler.open;if(d(n)&&typeof n==="function"){n.call(j)}}}})},hide:function(){return this.each(function(){var h=f(this);var j={};if(d(h.data("nf-dialog"))){j=h.data("nf-dialog")}if(d(j.handler)){var i=j.handler.close;if(d(i)&&typeof i==="function"){i.call(h)}}f("body").find("[data-nf-dialog-parent='"+h.attr("id")+"']").remove();if(h.is(":visible")){h.hide()}})}};f.fn.modal=function(h){if(b[h]){return b[h].apply(this,Array.prototype.slice.call(arguments,1))}else{return b.init.apply(this,arguments)}}})(jQuery);
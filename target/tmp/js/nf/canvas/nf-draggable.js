(function(a,b){if(typeof define==="function"&&define.amd){define(["jquery","d3","nf.Storage","nf.Connection","nf.Birdseye","nf.CanvasUtils","nf.Common","nf.Dialog","nf.Client","nf.ErrorHandler"],function(g,l,h,j,c,e,d,f,k,i){return(nf.Draggable=b(g,l,h,j,c,e,d,f,k,i))})}else{if(typeof exports==="object"&&typeof module==="object"){module.exports=(nf.Draggable=b(require("jquery"),require("d3"),require("nf.Storage"),require("nf.Connection"),require("nf.Birdseye"),require("nf.CanvasUtils"),require("nf.Common"),require("nf.Dialog"),require("nf.Client"),require("nf.ErrorHandler")))}else{nf.Draggable=b(a.$,a.d3,a.nf.Storage,a.nf.Connection,a.nf.Birdseye,a.nf.CanvasUtils,a.nf.Common,a.nf.Dialog,a.nf.Client,a.nf.ErrorHandler)}}}(this,function(g,q,i,l,a,d,c,f,p,k){var m;var h;var o=8;var n=true;var j=function(s){var v=q.map();var u=s.datum();var w={x:u.x-u.original.x,y:u.y-u.original.y};if(w.x===0&&w.y===0){return}var r=q.selectAll("g.connection.selected");var t=q.selectAll("g.component.selected");if(d.canModify(r)===false||d.canModify(t)===false){f.showOkDialog({headerText:"Component Position",dialogContent:"Must be authorized to modify every component selected."});return}r.each(function(y){var x=e.updateConnectionPosition(y,w);if(x!==null){v.set(y.id,x)}});t.each(function(y){var x=l.getComponentConnections(y.id);g.each(x,function(B,A){if(!v.has(A.id)&&d.getConnectionSourceComponentId(A)===d.getConnectionDestinationComponentId(A)){var z=e.updateConnectionPosition(l.get(A.id),w);if(z!==null){v.set(A.id,z)}}});v.set(y.id,e.updateComponentPosition(y,w))});e.refreshConnections(v)};var b=function(s){var r=q.selectAll("g.component.selected, g.connection.selected").classed("selected",false);if(d.canModify(r)===false){f.showOkDialog({headerText:"Component Position",dialogContent:"Must be authorized to modify every component selected."});return}if(d.canModify(s)===false){f.showOkDialog({headerText:"Component Position",dialogContent:"Not authorized to modify the destination group."});return}d.moveComponents(r,s)};var e={init:function(r){m=r;h=q.drag().on("start",function(){q.event.sourceEvent.stopPropagation()}).on("drag",function(){var t=q.select("rect.drag-selection");if(t.empty()){var u=q.selectAll("g.component.selected");var s=null,w=null,x=null,v=null;u.each(function(A){if(s===null||A.position.x<s){s=A.position.x}if(x===null||A.position.y<x){x=A.position.y}var z=A.position.x+A.dimensions.width;var y=A.position.y+A.dimensions.height;if(w===null||z>w){w=z}if(v===null||y>v){v=y}});q.select("#canvas").append("rect").attr("rx",6).attr("ry",6).attr("x",s).attr("y",x).attr("class","drag-selection").attr("pointer-events","none").attr("width",w-s).attr("height",v-x).attr("stroke-width",function(){return 1/d.getCanvasScale()}).attr("stroke-dasharray",function(){return 4/d.getCanvasScale()}).datum({original:{x:s,y:x},x:s,y:x})}else{n=!q.event.sourceEvent.shiftKey;t.attr("x",function(y){y.x+=q.event.dx;return n?(Math.round(y.x/o)*o):y.x}).attr("y",function(y){y.y+=q.event.dy;return n?(Math.round(y.y/o)*o):y.y})}}).on("end",function(){q.event.sourceEvent.stopPropagation();var s=q.select("rect.drag-selection");if(s.empty()){return}var t=q.select("g.drop").classed("drop",false);if(t.empty()){j(s)}else{b(t)}s.remove()})},updateComponentPosition:function(t,u){var s={x:n?(Math.round((t.position.x+u.x)/o)*o):t.position.x+u.x,y:n?(Math.round((t.position.y+u.y)/o)*o):t.position.y+u.y};var r={revision:p.getRevision(t),disconnectedNodeAcknowledged:i.isDisconnectionAcknowledged(),component:{id:t.id,position:s}};return g.Deferred(function(v){g.ajax({type:"PUT",url:t.uri,data:JSON.stringify(r),dataType:"json",contentType:"application/json"}).done(function(w){d.getComponentByType(t.type).set(w);v.resolve({type:t.type,id:t.id})}).fail(function(y,w,x){k.handleAjaxError(y,w,x);v.reject()})}).promise()},updateConnectionPosition:function(t,u){if(t.bends.length===0){return null}var s=g.map(t.bends,function(v){return{x:v.x+u.x,y:v.y+u.y}});var r={revision:p.getRevision(t),disconnectedNodeAcknowledged:i.isDisconnectionAcknowledged(),component:{id:t.id,bends:s}};return g.Deferred(function(v){g.ajax({type:"PUT",url:t.uri,data:JSON.stringify(r),dataType:"json",contentType:"application/json"}).done(function(w){l.set(w);v.resolve({type:t.type,id:t.id})}).fail(function(y,w,x){k.handleAjaxError(y,w,x);v.reject()})}).promise()},refreshConnections:function(r){if(r.size()>0){g.when.apply(window,r.values()).done(function(){var s=g.makeArray(arguments);var t=q.set();g.each(s,function(w,v){if(v.type==="Connection"){t.add(v.id)}else{var u=l.getComponentConnections(v.id);g.each(u,function(y,x){t.add(x.id)})}});t.each(function(u){l.refresh(u)})}).always(function(){a.refresh()})}},activate:function(r){r.classed("moveable",true).call(h)},deactivate:function(r){r.classed("moveable",false).on(".drag",null)}};return e}));
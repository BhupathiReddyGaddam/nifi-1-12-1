(function(a,b){if(typeof define==="function"&&define.amd){define(["jquery","d3","nf.Connection","nf.Common","nf.Client","nf.CanvasUtils"],function(f,e,h,g,c,d){return(nf.Port=b(f,e,h,g,c,d))})}else{if(typeof exports==="object"&&typeof module==="object"){module.exports=(nf.Port=b(require("jquery"),require("d3"),require("nf.Connection"),require("nf.Common"),require("nf.Client"),require("nf.CanvasUtils")))}else{nf.Port=b(a.$,a.d3,a.nf.Connection,a.nf.Common,a.nf.Client,a.nf.CanvasUtils)}}}(this,function(d,A,k,i,C,w){var o;var t;var l;var j;var u;var p=15;var m=25;var y={width:240,height:48};var q={width:240,height:80};var h=function(D){return D.allowRemoteAccess===true?q:y};var e;var z;var c;var g;var s=function(){return g.selectAll("g.input-port, g.output-port").data(e.values(),function(D){return D.id})};var B=function(D){return D.allowRemoteAccess!==true};var x=function(D){return function(E){return D+(B(E)?0:m)}};var n=function(F,E){if(F.empty()){return F}var D=F.append("g").attrs({id:function(G){return"id-"+G.id},"class":function(G){if(G.portType==="INPUT_PORT"){return"input-port component"}else{return"output-port component"}}}).classed("selected",E).call(w.position);D.append("rect").attrs({"class":"border",width:function(G){return G.dimensions.width},height:function(G){return G.dimensions.height},fill:"transparent",stroke:"transparent"});D.append("rect").attrs({"class":"body",width:function(G){return G.dimensions.width},height:function(G){return G.dimensions.height},filter:"url(#component-drop-shadow)","stroke-width":0});D.append("rect").attrs({"class":"remote-banner",width:q.width,height:m,fill:"#e3e8eb"}).classed("hidden",B);D.append("text").attrs({"class":"port-icon",x:10,y:x(38)}).text(function(G){if(G.portType==="INPUT_PORT"){return"\ue832"}else{return"\ue833"}});D.append("text").attrs({x:70,y:x(25),width:95,height:30,"class":"port-name"});D.call(l.activate).call(u.activate).call(j.activate);D.filter(function(G){return G.permissions.canWrite&&G.permissions.canRead}).call(t.activate).call(o.activate);return D};var r=function(D){if(D.empty()){return}D.select("rect.border").classed("unauthorized",function(E){return E.permissions.canRead===false}).attrs({height:function(E){return E.dimensions.height}});D.select("rect.body").classed("unauthorized",function(E){return E.permissions.canRead===false}).attrs({height:function(E){return E.dimensions.height}});D.each(function(F){var E=A.select(this);var G=E.select("g.port-details");w.editable(E,o,t);if(E.classed("visible")){if(G.empty()){G=E.append("g").attr("class","port-details");G.append("text").attrs({"class":"port-transmission-icon",x:10,y:18}).classed("hidden",B);G.append("rect").attrs({"class":"bulletin-background",x:q.width-m,width:m,height:m}).classed("hidden",B);G.append("text").attrs({"class":"bulletin-icon",x:q.width-18,y:18}).text("\uf24a").classed("hidden",B);G.append("text").attrs({"class":"run-status-icon",x:50,y:x(25)});G.append("path").attrs({"class":"component-comments",transform:"translate("+(F.dimensions.width-2)+", "+(F.dimensions.height-10)+")",d:"m0,0 l0,8 l-8,0 z"});G.append("text").attrs({"class":"active-thread-count-icon",y:x(43)}).text("\ue83f");G.append("text").attrs({"class":"active-thread-count",y:x(43)})}if(F.permissions.canRead){E.select("rect.remote-banner").classed("hidden",B);E.select("text.port-icon").attrs({y:x(38)});G.select("text.port-transmission-icon").classed("hidden",B);G.select("rect.bulletin-background").classed("hidden",B);G.select("rect.bulletin-icon").classed("hidden",B);E.select("text.port-name").each(function(K){var J=A.select(this);var H=K.component.name;var I=H.split(/\s+/);J.text(null).selectAll("tspan, title").remove();if(I.length===1){w.ellipsis(J,H)}else{w.multilineEllipsis(J,2,H)}}).attrs({y:x(25)}).append("title").text(function(H){return H.component.name});E.select("path.component-comments").style("visibility",i.isBlank(F.component.comments)?"hidden":"visible").attr("transform","translate("+(F.dimensions.width-2)+", "+(F.dimensions.height-10)+")").each(function(){var H=A.select("#comments-tip-"+F.id);if(i.isBlank(F.component.comments)){if(!H.empty()){H.remove()}}else{if(H.empty()){H=A.select("#port-tooltips").append("div").attr("id",function(){return"comments-tip-"+F.id}).attr("class","tooltip nifi-tooltip")}H.text(F.component.comments);w.canvasTooltip(H,A.select(this))}})}else{E.select("text.port-name").text(null);E.select("path.component-comments").style("visibility","hidden");E.call(b)}E.call(f);k.getComponentConnections(F.id).forEach(function(H){k.refresh(H.id)})}else{if(F.permissions.canRead){E.select("text.port-name").text(function(I){var H=I.component.name;if(H.length>p){return H.substring(0,p)+String.fromCharCode(8230)}else{return H}})}else{E.select("text.port-name").text(null)}E.call(b);if(!G.empty()){G.remove()}}})};var f=function(D){if(D.empty()){return}D.select("text.run-status-icon").attrs({fill:function(F){var E="#728e9b";if(F.status.aggregateSnapshot.runStatus==="Invalid"){E="#cf9f5d"}else{if(F.status.aggregateSnapshot.runStatus==="Running"){E="#7dc7a0"}else{if(F.status.aggregateSnapshot.runStatus==="Stopped"){E="#d18686"}}}return E},"font-family":function(F){var E="FontAwesome";if(F.status.aggregateSnapshot.runStatus==="Disabled"){E="flowfont"}return E},y:x(25)}).text(function(F){var E="";if(F.status.aggregateSnapshot.runStatus==="Disabled"){E="\ue802"}else{if(F.status.aggregateSnapshot.runStatus==="Invalid"){E="\uf071"}else{if(F.status.aggregateSnapshot.runStatus==="Running"){E="\uf04b"}else{if(F.status.aggregateSnapshot.runStatus==="Stopped"){E="\uf04d"}}}}return E}).each(function(F){var E=A.select("#run-status-tip-"+F.id);if(F.permissions.canRead&&!i.isEmpty(F.component.validationErrors)){if(E.empty()){E=A.select("#port-tooltips").append("div").attr("id",function(){return"run-status-tip-"+F.id}).attr("class","tooltip nifi-tooltip")}E.html(function(){var G=i.formatUnorderedList(F.component.validationErrors);if(G===null||G.length===0){return""}else{return d("<div></div>").append(G).html()}});w.canvasTooltip(E,A.select(this))}else{if(!E.empty()){E.remove()}}});D.select("text.port-transmission-icon").attrs({"font-family":function(E){if(E.status.transmitting===true){return"FontAwesome"}else{return"flowfont"}}}).text(function(E){if(E.status.transmitting===true){return"\uf140"}else{return"\ue80a"}}).classed("transmitting",function(E){if(E.status.transmitting===true){return true}else{return false}}).classed("not-transmitting",function(E){if(E.status.transmitting!==true){return true}else{return false}});D.each(function(G){var E=A.select(this);var F=0;w.activeThreadCount(E,G,function(H){F=H});E.select("text.active-thread-count-icon").attr("y",x(43));E.select("text.active-thread-count").attr("y",x(43));E.select("rect.bulletin-background").classed("has-bulletins",function(){return !i.isEmpty(G.status.aggregateSnapshot.bulletins)});w.bulletins(E,G,function(){return A.select("#port-tooltips")},F)})};var v=function(D){if(D.empty()){return}D.call(b).remove()};var b=function(D){D.each(function(E){d("#run-status-tip-"+E.id).remove();d("#bulletin-tip-"+E.id).remove();d("#comments-tip-"+E.id).remove()})};var a={init:function(F,G,D,E,H){o=F;t=G;l=D;u=E;j=H;e=A.map();z=A.map();c=A.map();g=A.select("#canvas").append("g").attrs({"pointer-events":"all","class":"ports"})},add:function(G,E){var I=false;if(i.isDefinedAndNotNull(E)){I=i.isDefinedAndNotNull(E.selectAll)?E.selectAll:I}var D=new Date().getTime();var J=function(K){c.set(K.id,D);e.set(K.id,d.extend({type:"Port",dimensions:h(K),status:{activeThreadCount:0}},K))};if(d.isArray(G)){d.each(G,function(L,K){J(K)})}else{if(i.isDefinedAndNotNull(G)){J(G)}}var F=s();var H=n(F.enter(),I);r(F.merge(H))},set:function(D,L){var E=false;var I=false;var F=false;if(i.isDefinedAndNotNull(L)){E=i.isDefinedAndNotNull(L.selectAll)?L.selectAll:E;I=i.isDefinedAndNotNull(L.transition)?L.transition:I;F=i.isDefinedAndNotNull(L.overrideRevisionCheck)?L.overrideRevisionCheck:F}var J=function(M){var N=e.get(M.id);if((C.isNewerRevision(N,M)&&!z.has(M.id))||F===true){e.set(M.id,d.extend({type:"Port",dimensions:h(M),status:{activeThreadCount:0}},M))}};if(d.isArray(D)){d.each(e.keys(),function(N,O){var P=e.get(O);var M=d.grep(D,function(Q){return Q.id===P.id});if(M.length===0&&!c.has(O)){e.remove(O)}});d.each(D,function(N,M){J(M)})}else{if(i.isDefinedAndNotNull(D)){J(D)}}var K=s();var H=n(K.enter(),E);var G=K.merge(H);G.call(r).call(w.position,I);K.exit().call(v)},get:function(D){if(i.isUndefined(D)){return e.values()}else{return e.get(D)}},refresh:function(D){if(i.isDefinedAndNotNull(D)){A.select("#id-"+D).call(r)}else{A.selectAll("g.input-port, g.output-port").call(r)}},pan:function(){A.selectAll("g.input-port.entering, g.output-port.entering, g.input-port.leaving, g.output-port.leaving").call(r)},reload:function(E){if(e.has(E)){var D=e.get(E);return d.ajax({type:"GET",url:D.uri,dataType:"json"}).done(function(F){a.set(F)})}},position:function(D){A.select("#id-"+D).call(w.position)},remove:function(E){var D=new Date().getTime();if(d.isArray(E)){d.each(E,function(F,G){z.set(G,D);e.remove(G)})}else{z.set(E,D);e.remove(E)}s().exit().call(v)},removeAll:function(){a.remove(e.keys())},expireCaches:function(E){var D=function(F){F.each(function(G,H){if(E>G){F.remove(H)}})};D(c);D(z)}};return a}));
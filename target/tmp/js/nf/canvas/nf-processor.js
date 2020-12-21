(function(a,b){if(typeof define==="function"&&define.amd){define(["jquery","d3","nf.Common","nf.Client","nf.ClusterSummary","nf.CanvasUtils"],function(g,f,h,d,c,e){return(nf.Processor=b(g,f,h,d,c,e))})}else{if(typeof exports==="object"&&typeof module==="object"){module.exports=(nf.Processor=b(require("jquery"),require("d3"),require("nf.Common"),require("nf.Client"),require("nf.ClusterSummary"),require("nf.CanvasUtils")))}else{nf.Processor=b(a.$,a.d3,a.nf.Common,a.nf.Client,a.nf.ClusterSummary,a.nf.CanvasUtils)}}}(this,function(e,A,i,B,h,v){var m;var r;var k;var j;var u;var n=25;var g={width:352,height:128};var y;var z;var c;var s;var q=function(){return s.selectAll("g.processor").data(y.values(),function(C){return C.id})};var d=function(E,D){if(E.empty()){return E}var C=E.append("g").attrs({id:function(F){return"id-"+F.id},"class":"processor component"}).classed("selected",D).call(v.position);C.append("rect").attrs({"class":"border",width:function(F){return F.dimensions.width},height:function(F){return F.dimensions.height},fill:"transparent",stroke:"transparent"});C.append("rect").attrs({"class":"body",width:function(F){return F.dimensions.width},height:function(F){return F.dimensions.height},filter:"url(#component-drop-shadow)","stroke-width":0});C.append("text").attrs({x:75,y:18,width:230,height:14,"class":"processor-name"});C.append("rect").attrs({x:0,y:0,width:50,height:50,"class":"processor-icon-container"});C.append("text").attrs({x:9,y:35,"class":"processor-icon"}).text("\ue807");C.append("circle").attrs({r:9,cx:12,cy:12,"class":"restricted-background"});C.append("text").attrs({x:7.75,y:17,"class":"restricted"}).text("\uf132");C.append("circle").attrs({r:9,cx:38,cy:36,"class":"is-primary-background"});C.append("text").attrs({x:34.75,y:40,"class":"is-primary"}).text("P").append("title").text(function(F){return"This component is only scheduled to execute on the Primary Node"});C.call(k.activate).call(u.activate).call(j.activate);return C};var x=function(C){if(C.empty()){return}C.select("rect.border").classed("unauthorized",function(D){return D.permissions.canRead===false}).classed("ghost",function(D){return D.permissions.canRead===true&&D.component.extensionMissing===true});C.select("rect.body").classed("unauthorized",function(D){return D.permissions.canRead===false});C.each(function(I){var F=A.select(this);var D=F.select("g.processor-canvas-details");v.editable(F,m,r);if(F.classed("visible")){if(D.empty()){D=F.append("g").attr("class","processor-canvas-details");D.append("text").attrs({"class":"run-status-icon",x:55,y:23,width:14,height:14});D.append("text").attrs({"class":"processor-type",x:75,y:32,width:230,height:12});D.append("text").attrs({"class":"processor-bundle",x:75,y:45,width:200,height:12});D.append("rect").attrs({width:function(){return I.dimensions.width},height:19,x:0,y:50,fill:"#f4f6f7"});D.append("rect").attrs({width:function(){return I.dimensions.width},height:1,x:0,y:68,fill:"#c7d2d7"});D.append("rect").attrs({width:function(){return I.dimensions.width},height:19,x:0,y:69,fill:"#ffffff"});D.append("rect").attrs({width:function(){return I.dimensions.width},height:1,x:0,y:87,fill:"#c7d2d7"});D.append("rect").attrs({width:function(){return I.dimensions.width},height:20,x:0,y:88,fill:"#f4f6f7"});D.append("rect").attrs({width:function(){return I.dimensions.width},height:1,x:0,y:106,fill:"#c7d2d7"});D.append("rect").attrs({width:function(){return I.dimensions.width},height:19,x:0,y:107,fill:"#ffffff"});var L=D.append("g").attrs({transform:"translate(10, 55)"});L.append("text").attrs({width:73,height:10,y:9,"class":"stats-label"}).text("In");L.append("text").attrs({width:73,height:10,y:27,"class":"stats-label"}).text("Read/Write");L.append("text").attrs({width:73,height:10,y:46,"class":"stats-label"}).text("Out");L.append("text").attrs({width:73,height:10,y:65,"class":"stats-label"}).text("Tasks/Time");var E=D.append("g").attrs({transform:"translate(85, 55)"});var K=E.append("text").attrs({width:180,height:9,y:9,"class":"processor-in stats-value"});K.append("tspan").attrs({"class":"count"});K.append("tspan").attrs({"class":"size"});E.append("text").attrs({width:180,height:10,y:27,"class":"processor-read-write stats-value"});var G=E.append("text").attrs({width:180,height:10,y:46,"class":"processor-out stats-value"});G.append("tspan").attrs({"class":"count"});G.append("tspan").attrs({"class":"size"});E.append("text").attrs({width:180,height:10,y:65,"class":"processor-tasks-time stats-value"});var J=D.append("g").attr("transform","translate(305, 55)");J.append("text").attrs({width:25,height:10,y:9,"class":"stats-info"}).text("5 min");J.append("text").attrs({width:25,height:10,y:27,"class":"stats-info"}).text("5 min");J.append("text").attrs({width:25,height:10,y:46,"class":"stats-info"}).text("5 min");J.append("text").attrs({width:25,height:10,y:65,"class":"stats-info"}).text("5 min");D.append("path").attrs({"class":"component-comments",transform:"translate("+(I.dimensions.width-2)+", "+(I.dimensions.height-10)+")",d:"m0,0 l0,8 l-8,0 z"});D.append("text").attrs({"class":"active-thread-count-icon",y:46}).text("\ue83f");D.append("text").attrs({"class":"active-thread-count",y:46});D.append("rect").attrs({"class":"bulletin-background",x:function(M){return I.dimensions.width-24},width:24,height:24});D.append("text").attrs({"class":"bulletin-icon",x:function(M){return I.dimensions.width-17},y:17}).text("\uf24a")}if(I.permissions.canRead){F.select("text.processor-name").each(function(N){var M=A.select(this);M.text(null).selectAll("title").remove();v.ellipsis(M,N.component.name)}).append("title").text(function(M){return M.component.name});F.select("text.processor-type").each(function(N){var M=A.select(this);M.text(null).selectAll("title").remove();v.ellipsis(M,i.formatType(N.component))}).append("title").text(function(M){return i.formatType(M.component)});F.select("text.processor-bundle").each(function(N){var M=A.select(this);M.text(null).selectAll("title").remove();v.ellipsis(M,i.formatBundle(N.component.bundle))}).append("title").text(function(M){return i.formatBundle(M.component.bundle)});F.select("path.component-comments").style("visibility",i.isBlank(I.component.config.comments)?"hidden":"visible").each(function(){var M=A.select("#comments-tip-"+I.id);if(i.isBlank(I.component.config.comments)){if(!M.empty()){M.remove()}}else{if(M.empty()){M=A.select("#processor-tooltips").append("div").attr("id",function(){return"comments-tip-"+I.id}).attr("class","tooltip nifi-tooltip")}M.text(I.component.config.comments);v.canvasTooltip(M,A.select(this))}})}else{F.select("text.processor-name").text(null);F.select("text.processor-type").text(null);F.select("text.processor-bundle").text(null);F.select("path.component-comments").style("visibility","hidden");F.call(b)}F.call(f)}else{if(I.permissions.canRead){F.select("text.processor-name").text(function(N){var M=N.component.name;if(M.length>n){return M.substring(0,n)+String.fromCharCode(8230)}else{return M}})}else{F.select("text.processor-name").text(null)}F.call(b);if(!D.empty()){D.remove()}}F.select("rect.processor-icon-container").classed("unauthorized",!I.permissions.canRead);F.select("text.processor-icon").classed("unauthorized",!I.permissions.canRead);F.select("rect.border").classed("unauthorized",!I.permissions.canRead);if(I.permissions.canRead){if(i.isDefinedAndNotNull(I.component.style["background-color"])){var H=I.component.style["background-color"];F.select("rect.processor-icon-container").style("fill",function(M){return H});F.select("rect.border").style("stroke",function(M){return H})}}F.select("text.processor-icon").style("fill",function(N){var M=p.defaultIconColor();if(!N.permissions.canRead){return M}if(i.isDefinedAndNotNull(N.component.style["background-color"])){M=N.component.style["background-color"];if(M.toLowerCase()==="#ffffff"){M=p.defaultIconColor()}else{M=i.determineContrastColor(i.substringAfterLast(M,"#"))}}return M});F.select("circle.restricted-background").style("visibility",l);F.select("text.restricted").style("visibility",l);F.select("circle.is-primary-background").style("visibility",o);F.select("text.is-primary").style("visibility",o)})};var l=function(C){if(!C.permissions.canRead){return"hidden"}return C.component.restricted?"visible":"hidden"};var o=function(C){return h.isClustered()&&C.status.aggregateSnapshot.executionNode==="PRIMARY"?"visible":"hidden"};var w=function(C){return(C.permissions.canRead&&!i.isEmpty(C.component.validationErrors))||C.status.aggregateSnapshot.runStatus==="Validating"};var a=function(D){if(D.permissions.canRead&&!i.isEmpty(D.component.validationErrors)){var C=i.formatUnorderedList(D.component.validationErrors);if(C===null||C.length===0){return""}else{return C}}else{return"Validating..."}};var f=function(C){if(C.empty()){return}C.select("text.run-status-icon").attrs({fill:function(E){var D="#728e9b";if(E.status.aggregateSnapshot.runStatus==="Validating"){D="#a8a8a8"}else{if(E.status.aggregateSnapshot.runStatus==="Invalid"){D="#cf9f5d"}else{if(E.status.aggregateSnapshot.runStatus==="Running"){D="#7dc7a0"}else{if(E.status.aggregateSnapshot.runStatus==="Stopped"){D="#d18686"}}}}return D},"font-family":function(E){var D="FontAwesome";if(E.status.aggregateSnapshot.runStatus==="Disabled"){D="flowfont"}return D}}).classed("fa-spin",function(D){return D.status.aggregateSnapshot.runStatus==="Validating"}).text(function(E){var D="";if(E.status.aggregateSnapshot.runStatus==="Disabled"){D="\ue802"}else{if(E.status.aggregateSnapshot.runStatus==="Validating"){D="\uf1ce"}else{if(E.status.aggregateSnapshot.runStatus==="Invalid"){D="\uf071"}else{if(E.status.aggregateSnapshot.runStatus==="Running"){D="\uf04b"}else{if(E.status.aggregateSnapshot.runStatus==="Stopped"){D="\uf04d"}}}}}return D}).each(function(E){var D=A.select("#run-status-tip-"+E.id);if(w(E)){if(D.empty()){D=A.select("#processor-tooltips").append("div").attr("id",function(){return"run-status-tip-"+E.id}).attr("class","tooltip nifi-tooltip")}D.html(function(){return e("<div></div>").append(a(E)).html()});v.canvasTooltip(D,A.select(this))}else{if(!D.empty()){D.remove()}}});C.select("text.processor-in tspan.count").text(function(D){return i.substringBeforeFirst(D.status.aggregateSnapshot.input," ")});C.select("text.processor-in tspan.size").text(function(D){return" "+i.substringAfterFirst(D.status.aggregateSnapshot.input," ")});C.select("text.processor-read-write").text(function(D){return D.status.aggregateSnapshot.read+" / "+D.status.aggregateSnapshot.written});C.select("text.processor-out tspan.count").text(function(D){return i.substringBeforeFirst(D.status.aggregateSnapshot.output," ")});C.select("text.processor-out tspan.size").text(function(D){return" "+i.substringAfterFirst(D.status.aggregateSnapshot.output," ")});C.select("text.processor-tasks-time").text(function(D){return D.status.aggregateSnapshot.tasks+" / "+D.status.aggregateSnapshot.tasksDuration});C.each(function(E){var D=A.select(this);v.activeThreadCount(D,E);D.select("rect.bulletin-background").classed("has-bulletins",function(){return !i.isEmpty(E.status.aggregateSnapshot.bulletins)});v.bulletins(D,E,function(){return A.select("#processor-tooltips")},286)})};var t=function(C){if(C.empty()){return}C.call(b).remove()};var b=function(C){C.each(function(D){e("#run-status-tip-"+D.id).remove();e("#bulletin-tip-"+D.id).remove();e("#comments-tip-"+D.id).remove()})};var p={init:function(E,F,C,D,G){m=E;r=F;k=C;u=D;j=G;y=A.map();z=A.map();c=A.map();s=A.select("#canvas").append("g").attrs({"pointer-events":"all","class":"processors"})},add:function(C,E){var H=false;if(i.isDefinedAndNotNull(E)){H=i.isDefinedAndNotNull(E.selectAll)?E.selectAll:H}var D=new Date().getTime();var I=function(J){c.set(J.id,D);y.set(J.id,e.extend({type:"Processor",dimensions:g},J))};if(e.isArray(C)){e.each(C,function(J,K){I(K)})}else{if(i.isDefinedAndNotNull(C)){I(C)}}var F=q();var G=d(F.enter(),H);x(F.merge(G))},set:function(H,K){var C=false;var G=false;var D=false;if(i.isDefinedAndNotNull(K)){C=i.isDefinedAndNotNull(K.selectAll)?K.selectAll:C;G=i.isDefinedAndNotNull(K.transition)?K.transition:G;D=i.isDefinedAndNotNull(K.overrideRevisionCheck)?K.overrideRevisionCheck:D}var I=function(M){var L=y.get(M.id);if((B.isNewerRevision(L,M)&&!z.has(M.id))||D===true){y.set(M.id,e.extend({type:"Processor",dimensions:g},M))}};if(e.isArray(H)){e.each(y.keys(),function(M,N){var O=y.get(N);var L=e.grep(H,function(P){return P.id===O.id});if(L.length===0&&!c.has(N)){y.remove(N)}});e.each(H,function(L,M){I(M)})}else{if(i.isDefinedAndNotNull(H)){I(H)}}var J=q();var F=d(J.enter(),C);var E=J.merge(F);E.call(x);E.call(v.position,G);J.exit().call(t)},get:function(C){if(i.isUndefined(C)){return y.values()}else{return y.get(C)}},refresh:function(C){if(i.isDefinedAndNotNull(C)){A.select("#id-"+C).call(x)}else{A.selectAll("g.processor").call(x)}},position:function(C){A.select("#id-"+C).call(v.position)},pan:function(){A.selectAll("g.processor.entering, g.processor.leaving").call(x)},reload:function(D){if(y.has(D)){var C=y.get(D);return e.ajax({type:"GET",url:C.uri,dataType:"json"}).done(function(E){p.set(E)})}},remove:function(D){var C=new Date().getTime();if(e.isArray(D)){e.each(D,function(E,F){z.set(F,C);y.remove(F)})}else{z.set(D,C);y.remove(D)}q().exit().call(t)},removeAll:function(){p.remove(y.keys())},expireCaches:function(D){var C=function(E){E.each(function(F,G){if(D>F){E.remove(G)}})};C(c);C(z)},defaultFillColor:function(){return"#FFFFFF"},defaultIconColor:function(){return"#ad9897"}};return p}));
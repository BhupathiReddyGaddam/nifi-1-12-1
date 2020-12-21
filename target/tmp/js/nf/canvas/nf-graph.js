(function(a,b){if(typeof define==="function"&&define.amd){define(["jquery","d3","nf.Common","nf.ng.Bridge","nf.Label","nf.Funnel","nf.Port","nf.RemoteProcessGroup","nf.ProcessGroup","nf.Processor","nf.Connection","nf.ConnectionConfiguration","nf.CanvasUtils","nf.Connectable","nf.Draggable","nf.Selectable","nf.ContextMenu","nf.QuickSelect"],function(d,s,f,t,k,p,c,m,e,l,h,q,r,j,n,i,o,g){return(nf.Graph=b(d,s,f,t,k,p,c,m,e,l,h,q,r,j,n,i,o,g))})}else{if(typeof exports==="object"&&typeof module==="object"){module.exports=(nf.Graph=b(require("jquery"),require("d3"),require("nf.Common"),require("nf.ng.Bridge"),require("nf.Label"),require("nf.Funnel"),require("nf.Port"),require("nf.RemoteProcessGroup"),require("nf.ProcessGroup"),require("nf.Processor"),require("nf.Connection"),require("nf.ConnectionConfiguration"),require("nf.CanvasUtils"),require("nf.Connectable"),require("nf.Draggable"),require("nf.Selectable"),require("nf.ContextMenu"),require("nf.QuickSelect")))}else{nf.Graph=b(a.$,a.d3,a.nf.Common,a.nf.ng.Bridge,a.nf.Label,a.nf.Funnel,a.nf.Port,a.nf.RemoteProcessGroup,a.nf.ProcessGroup,a.nf.Processor,a.nf.Connection,a.nf.ConnectionConfiguration,a.nf.CanvasUtils,a.nf.Connectable,a.nf.Draggable,a.nf.Selectable,a.nf.ContextMenu,a.nf.QuickSelect)}}}(this,function(b,u,e,v,j,q,a,l,d,k,g,r,s,i,n,h,o,f){var p=function(w){if(e.isDefinedAndNotNull(w.inputPorts)&&e.isDefinedAndNotNull(w.outputPorts)){return w.inputPorts.concat(w.outputPorts)}else{if(e.isDefinedAndNotNull(w.inputPorts)){return w.inputPorts}else{if(e.isDefinedAndNotNull(w.outputPorts)){return w.outputPorts}else{return[]}}}};var m=function(w){if(e.isDefinedAndNotNull(w.inputPortStatusSnapshots)&&e.isDefinedAndNotNull(w.outputPortStatusSnapshots)){return w.inputPortStatusSnapshots.concat(w.outputPortStatusSnapshots)}else{if(e.isDefinedAndNotNull(w.inputPortStatusSnapshots)){return w.inputPortStatusSnapshots}else{if(e.isDefinedAndNotNull(w.outputPortStatusSnapshots)){return w.outputPortStatusSnapshots}else{return[]}}}};var t=function(){var E=b("#canvas-container");var z=s.getCanvasTranslate();var A=s.getCanvasScale();z=[z[0]/A,z[1]/A];var w=E.width()/A;var x=E.height()/A;var B=-z[0]-w;var y=-z[1]-x;var G=B+(w*3);var I=y+(x*3);var D=function(N){if(!s.shouldRenderPerScale()){return false}var M=N.position.x;var L=N.position.y;var K=M+N.dimensions.width;var J=L+N.dimensions.height;return B<K&&G>M&&y<J&&I>L};var F=function(L){if(!s.shouldRenderPerScale()){return false}var J,M;if(L.bends.length>0){var K=Math.min(Math.max(0,L.labelIndex),L.bends.length-1);J=L.bends[K].x;M=L.bends[K].y}else{J=(L.start.x+L.end.x)/2;M=(L.start.y+L.end.y)/2}return B<J&&G>J&&y<M&&I>M};var C=function(N,J){var L=u.select("#id-"+N.id);var M=J(N);var K=L.classed("visible");L.classed("visible",M).classed("entering",function(){return M&&!K}).classed("leaving",function(){return !M&&K})};var H=c.get();b.each(H.processors,function(J,K){C(K,D)});b.each(H.ports,function(J,K){C(K,D)});b.each(H.processGroups,function(J,K){C(K,D)});b.each(H.remoteProcessGroups,function(J,K){C(K,D)});b.each(H.connections,function(J,K){C(K,F)})};var c={init:function(){j.init(i,n,h,o,f);q.init(i,n,h,o);a.init(i,n,h,o,f);l.init(i,n,h,o,f);d.init(i,n,h,o);k.init(i,n,h,o,f);g.init(h,o,f,r);return s.showDeepLink(true)},add:function(y,w){var x=false;if(e.isDefinedAndNotNull(w)){x=e.isDefinedAndNotNull(w.selectAll)?w.selectAll:x}if(x){s.getSelection().classed("selected",false)}var z=p(y);j.add(y.labels,w);q.add(y.funnels,w);l.add(y.remoteProcessGroups,w);a.add(z,w);d.add(y.processGroups,w);k.add(y.processors,w);g.add(y.connections,w);if(x){v.digest()}},set:function(y,w){var x=false;if(e.isDefinedAndNotNull(w)){x=e.isDefinedAndNotNull(w.selectAll)?w.selectAll:x}if(x){s.getSelection().classed("selected",false)}var z=p(y);j.set(y.labels,w);q.set(y.funnels,w);l.set(y.remoteProcessGroups,w);a.set(z,w);d.set(y.processGroups,w);k.set(y.processors,w);g.set(y.connections,w);if(x){v.digest()}},expireCaches:function(w){j.expireCaches(w);q.expireCaches(w);l.expireCaches(w);a.expireCaches(w);d.expireCaches(w);k.expireCaches(w);g.expireCaches(w)},get:function(){return{labels:j.get(),funnels:q.get(),ports:a.get(),remoteProcessGroups:l.get(),processGroups:d.get(),processors:k.get(),connections:g.get()}},getComponentByType:function(w){switch(w){case"Label":return j;break;case"Funnel":return q;break;case"Port":return a;break;case"RemoteProcessGroup":return l;break;case"ProcessGroup":return d;break;case"Processor":return k;break;case"Connection":return g;break;default:throw new Error("Unknown component type.");break}},removeAll:function(){j.removeAll();q.removeAll();a.removeAll();l.removeAll();d.removeAll();k.removeAll();g.removeAll()},pan:function(){a.pan();l.pan();d.pan();k.pan();g.pan()},updateVisibility:function(){t();c.pan();s.setURLParameters()},getSelection:function(){return u.selectAll("g.component.selected, g.connection.selected")},reload:function(w){var x=w.datum();if(x.permissions.canRead){if(s.isProcessor(w)){k.reload(x.id)}else{if(s.isInputPort(w)){a.reload(x.id)}else{if(s.isRemoteProcessGroup(w)){l.reload(x.id)}}}}}};return c}));
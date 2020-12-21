(function(a,b){if(typeof define==="function"&&define.amd){define(["jquery","Slick","nf.ClusterSummary","nf.ErrorHandler","nf.Dialog","nf.Common"],function(e,h,c,g,d,f){return(nf.ComponentState=b(e,h,c,g,d,f))})}else{if(typeof exports==="object"&&typeof module==="object"){module.exports=(nf.ComponentState=b(require("jquery"),require("Slick"),require("nf.ClusterSummary"),require("nf.ErrorHandler"),require("nf.Dialog"),require("nf.Common")))}else{nf.ComponentState=b(a.$,a.Slick,a.nf.ClusterSummary,a.nf.ErrorHandler,a.nf.Dialog,a.nf.Common)}}}(this,function(f,b,k,j,d,c){var l=function(){var o=[{id:"key",field:"key",name:"Key",sortable:true,resizable:true,formatter:c.genericValueFormatter},{id:"value",field:"value",name:"Value",sortable:true,resizable:true,formatter:c.genericValueFormatter}];if(k.isConnectedToCluster()){o.push({id:"scope",field:"scope",name:"Scope",sortable:true,resizable:true,formatter:c.genericValueFormatter})}return o};var g=function(){var o=f("#component-state-table").data("gridInstance");if(c.isDefinedAndNotNull(o)){var p=o.getData();p.setFilterArgs({searchString:m()});p.refresh()}};var a=function(q,p){if(p.searchString===""){return true}try{var u=new RegExp(p.searchString,"i")}catch(r){return false}var t=q.key.search(u)>=0;var o=q.value.search(u)>=0;var s=false;if(c.isDefinedAndNotNull(q.scope)){s=q.scope.search(u)>=0}return t||o||s};var e=function(o,q){var p=function(t,r){var s=c.isDefinedAndNotNull(t[o.columnId])?t[o.columnId]:"";var u=c.isDefinedAndNotNull(r[o.columnId])?r[o.columnId]:"";return s===u?0:s>u?1:-1};q.sort(p,o.sortAsc)};var m=function(){return f("#component-state-filter").val()};var i=function(){var o=f("#component-state-table").data("gridInstance");var p=o.getData();p.setItems([]);f("#component-state-partial-results-container").hide();f("#displayed-component-state-entries").text("0");f("#total-component-state-entries").text("0")};var h=function(o,p){var q=0;var s=0;var t=false;var r=f("#component-state-table").data("gridInstance");r.setColumns(l());var u=r.getData();u.beginUpdate();if(c.isDefinedAndNotNull(o)){f.each(o.state,function(v,w){u.addItem(f.extend({id:q++,scope:w.clusterNodeAddress},w))});s+=o.totalEntryCount;if(c.isDefinedAndNotNull(o.state)&&o.totalEntryCount!==o.state.length){t=true}}if(c.isDefinedAndNotNull(p)){f.each(p.state,function(v,w){u.addItem(f.extend({id:q++,scope:"Cluster"},w))});s+=p.totalEntryCount;if(c.isDefinedAndNotNull(p.state)&&p.totalEntryCount!==p.state.length){t=true}}u.endUpdate();u.reSort();if(t){f("#component-state-partial-results-container").show()}f("#total-component-state-entries").text(c.formatInteger(s))};var n=function(){f("#component-state-name").text("");f("#component-state-description").text("");f("#component-state-filter").val("");f("#clear-link").removeClass("disabled").attr("title","");i();f("#component-state-table").removeData("component")};return{init:function(){f("#component-state-filter").on("keyup",function(){g()});f("#component-state-dialog").modal({scrollableContentStyle:"scrollable",headerText:"Component State",buttons:[{buttonText:"Close",color:{base:"#728E9B",hover:"#004849",text:"#ffffff"},handler:{click:function(){f(this).modal("hide")}}}],handler:{close:function(){n()},resize:function(){f("#component-state-description").width(f("#component-state-dialog").find(".dialog-content").innerWidth()-1).text(f("#component-state-description").attr("title")).ellipsis()}}});f("#clear-link").on("click",function(){if(f(this).hasClass("disabled")===false){var s=f("#component-state-table");var u=s.data("gridInstance");var t=u.getDataLength();if(t>0){var r=s.data("component");f.ajax({type:"POST",url:r.uri+"/state/clear-requests",dataType:"json"}).done(function(v){i();h()}).fail(j.handleAjaxError)}else{d.showOkDialog({headerText:"Component State",dialogContent:"This component has no state to clear."})}}});var o={forceFitColumns:true,enableTextSelectionOnCells:true,enableCellNavigation:false,enableColumnReorder:false,autoEdit:false,rowHeight:24};var q=new b.Data.DataView({inlineFilters:false});q.setItems([]);q.setFilterArgs({searchString:"",property:"key"});q.setFilter(a);e({columnId:"key",sortAsc:true},q);var p=new b.Grid("#component-state-table",q,l(),o);p.setSelectionModel(new b.RowSelectionModel());p.registerPlugin(new b.AutoTooltips());p.setSortColumn("key",true);p.onSort.subscribe(function(s,r){e({columnId:r.sortCol.field,sortAsc:r.sortAsc},q)});q.onRowCountChanged.subscribe(function(s,r){p.updateRowCount();p.render();f("#displayed-component-state-entries").text(r.current)});q.onRowsChanged.subscribe(function(s,r){p.invalidateRows(r.rows);p.render()});f("#component-state-table").data("gridInstance",p);f("#displayed-component-state-entries").text("0");f("#total-component-state-entries").text("0")},showState:function(o,p){return f.ajax({type:"GET",url:o.uri+"/state",dataType:"json"}).done(function(r){var s=r.componentState;var q=f("#component-state-table");h(s.localState,s.clusterState);f("#component-state-dialog").modal("show");f("#component-state-name").text(o.component.name);f("#component-state-description").width(f("#component-state-dialog").find(".dialog-content").innerWidth()-1).text(s.stateDescription).ellipsis();q.data("component",o);if(p===false){f("#clear-link").addClass("disabled").attr("title","Component state can only be cleared when the component is not actively running")}var t=q.data("gridInstance");t.resizeCanvas()}).fail(j.handleAjaxError)}}}));
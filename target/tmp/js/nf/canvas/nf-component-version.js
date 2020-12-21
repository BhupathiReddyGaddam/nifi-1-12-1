(function(a,b){if(typeof define==="function"&&define.amd){define(["jquery","nf.ErrorHandler","nf.Common","nf.Storage","nf.Client","nf.CanvasUtils","nf.ProcessGroupConfiguration","nf.ng.Bridge"],function(g,d,j,e,h,k,f,c,i){return(nf.ComponentState=b(g,j,e,h,k,f,c,i))})}else{if(typeof exports==="object"&&typeof module==="object"){module.exports=(nf.ComponentState=b(require("jquery"),require("nf.ErrorHandler"),require("nf.Common"),require("nf.Storage"),require("nf.Client"),require("nf.CanvasUtils"),require("nf.ProcessGroupConfiguration"),require("nf.ng.Bridge")))}else{nf.ComponentVersion=b(a.$,a.nf.ErrorHandler,a.nf.Common,a.nf.Storage,a.nf.Client,a.nf.CanvasUtils,a.nf.ProcessGroupConfiguration,a.nf.ng.Bridge)}}}(this,function(h,k,e,i,n,f,c,j){var a;var d;var b=function(o){if(o.type==="ReportingTask"){return"../nifi-api/flow/reporting-task-types"}else{if(o.type==="ControllerService"){return"../nifi-api/flow/controller-service-types"}else{return"../nifi-api/flow/processor-types"}}};var g=function(o){if(o.type==="ReportingTask"){return"reportingTaskTypes"}else{if(o.type==="ControllerService"){return"controllerServiceTypes"}else{return"processorTypes"}}};var m=function(){var o=a.keys();h.each(o,function(q,p){a.remove(p)});h("#component-version-controller-service-apis").empty();h("#component-version-controller-service-apis-container").hide();h("#component-version-name").text("");h("#component-version-bundle").text("");h("#component-version-tags").text("");h("#component-version-restriction").removeClass("unset").text("");h("#component-version-description").text("");h("#component-version-selector").combo("destroy");h("#component-version-dialog").removeData("component")};var l=function(q){var r=a.get(q.value);if(e.isDefinedAndNotNull(r.usageRestriction)){h("#component-version-restriction").text(r.usageRestriction)}else{h("#component-version-restriction").addClass("unset").text("No restriction")}if(!e.isEmpty(r.controllerServiceApis)){var o=e.getFormattedServiceApis(r.controllerServiceApis);var p=e.formatUnorderedList(o);h("#component-version-controller-service-apis").empty().append(p);h("#component-version-controller-service-apis-container").show()}h("#component-version-tags").text(r.tags.join(", "));h("#component-version-description").text(r.description)};return{init:function(o){a=d3.map();d=o;h("#component-version-dialog").modal({scrollableContentStyle:"scrollable",headerText:"Component Version",buttons:[{buttonText:"Apply",color:{base:"#728E9B",hover:"#004849",text:"#ffffff"},handler:{click:function(){var r=h("#component-version-selector").combo("getSelectedOption");var s=a.get(r.value);var q=h("#component-version-dialog").data("component");var p={revision:n.getRevision(q),disconnectedNodeAcknowledged:i.isDisconnectionAcknowledged(),component:{id:q.id,bundle:{group:s.bundle.group,artifact:s.bundle.artifact,version:s.bundle.version}}};h.ajax({type:"PUT",url:q.uri,data:JSON.stringify(p),dataType:"json",contentType:"application/json"}).done(function(u){if(q.type==="Processor"){f.getComponentByType(q.type).set(u);j.digest()}else{if(q.type==="ControllerService"){var t=q.component.parentGroupId;h.Deferred(function(v){if(e.isDefinedAndNotNull(t)){if(h("#process-group-configuration").is(":visible")){c.loadConfiguration(t).done(function(){v.resolve()})}else{c.showConfiguration(t).done(function(){v.resolve()})}}else{if(h("#settings").is(":visible")){d.loadSettings().done(function(){v.resolve()})}else{d.showSettings().done(function(){v.resolve()})}}}).done(function(){if(e.isDefinedAndNotNull(t)){c.selectControllerService(q.id)}else{d.selectControllerService(q.id)}})}else{if(q.type==="ReportingTask"){h.Deferred(function(v){if(h("#settings").is(":visible")){d.loadSettings().done(function(){v.resolve()})}else{d.showSettings().done(function(){v.resolve()})}}).done(function(){d.selectReportingTask(q.id)})}}}}).fail(k.handleAjaxError);this.modal("hide")}}},{buttonText:"Cancel",color:{base:"#E3E8EB",hover:"#C7D2D7",text:"#004849"},handler:{click:function(){this.modal("hide")}}}],handler:{close:function(){m()}}})},promptForVersionChange:function(o){var p={bundleGroupFilter:o.component.bundle.group,bundleArtifactFilter:o.component.bundle.artifact};if(g(o)==="controllerServiceTypes"){p.typeFilter=o.component.type}else{p.type=o.component.type}return h.ajax({type:"GET",url:b(o)+"?"+h.param(p),dataType:"json"}).done(function(q){var r=[];var s;h.each(q[g(o)],function(t,w){var v=w.type;a.set(w.bundle.version,w);var u={text:w.bundle.version,value:w.bundle.version,description:e.escapeHtml(w.description)};if(w.bundle.version===o.component.bundle.version){s=u}r.push(u)});r.sort(function(u,t){return -e.sortVersion(u.text,t.text)});h("#component-version-name").text(o.component.name);h("#component-version-bundle").text(e.formatBundle(o.component.bundle));h("#component-version-selector").combo({options:r,selectedOption:s,select:l});h("#component-version-dialog").data("component",o).modal("show")}).fail(k.handleAjaxError)}}}));
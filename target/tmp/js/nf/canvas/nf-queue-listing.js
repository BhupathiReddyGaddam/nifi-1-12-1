(function(a,b){if(typeof define==="function"&&define.amd){define(["jquery","Slick","nf.Common","nf.Dialog","nf.Shell","nf.ng.Bridge","nf.ClusterSummary","nf.ErrorHandler","nf.Storage","nf.CanvasUtils"],function(h,e,f,g,c,j,l,k,i,d){return(nf.QueueListing=b(h,e,f,g,c,j,l,k,i,d))})}else{if(typeof exports==="object"&&typeof module==="object"){module.exports=(nf.QueueListing=b(require("jquery"),require("Slick"),require("nf.Common"),require("nf.Dialog"),require("nf.Shell"),require("nf.ng.Bridge"),require("nf.ClusterSummary"),require("nf.ErrorHandler"),require("nf.Storage"),require("nf.CanvasUtils")))}else{nf.QueueListing=b(a.$,a.Slick,a.nf.Common,a.nf.Dialog,a.nf.Shell,a.nf.ng.Bridge,a.nf.ClusterSummary,a.nf.ErrorHandler,a.nf.Storage,a.nf.CanvasUtils)}}}(this,function(c,n,h,i,o,r,g,e,d,m){var p={urls:{uiExtensionToken:"../nifi-api/access/ui-extension-token",downloadToken:"../nifi-api/access/download-token"}};var l=function(){c("#listing-request-status-dialog").modal({scrollableContentStyle:"scrollable",headerText:"Queue Listing",handler:{close:function(){c("#listing-request-status-dialog").modal("setButtonModel",[])}}})};var q=function(){var s=function(C,z,B,A,y){return'<div class="pointer show-flowfile-details fa fa-info-circle" title="View Details" style="float: left;"></div>'};var x=function(C,z,B,A,y){return h.formatDataSize(B)};var u=function(C,z,B,A,y){return h.formatDuration(B)};var t=function(C,z,B,A,y){if(B==0){return"No"}return h.formatDuration(B)};var w=[{id:"moreDetails",field:"moreDetails",name:"&nbsp;",sortable:false,resizable:false,formatter:s,width:50,maxWidth:50},{id:"position",name:"Position",field:"position",sortable:false,resizable:false,width:75,maxWidth:75,formatter:h.genericValueFormatter},{id:"uuid",name:"UUID",field:"uuid",sortable:false,resizable:true,formatter:h.genericValueFormatter},{id:"filename",name:"Filename",field:"filename",sortable:false,resizable:true,formatter:h.genericValueFormatter},{id:"size",name:"File Size",field:"size",sortable:false,resizable:true,defaultSortAsc:false,formatter:x},{id:"queuedDuration",name:"Queued Duration",field:"queuedDuration",sortable:false,resizable:true,formatter:u},{id:"lineageDuration",name:"Lineage Duration",field:"lineageDuration",sortable:false,resizable:true,formatter:u},{id:"penalized",name:"Penalized",field:"penaltyExpiresIn",sortable:false,resizable:false,width:100,maxWidth:100,formatter:t}];if(g.isConnectedToCluster()){w.push({id:"clusterNodeAddress",name:"Node",field:"clusterNodeAddress",sortable:false,resizable:true,formatter:h.genericValueFormatter})}var v=function(E,z,D,A,y){var C="";var B=(y.size>0)?false:true;C+='<div class="icon download-flowfile-content fa fa-download '+((B)?"disabled":"pointer")+'" title="'+((B)?"No content available to download":"Download content")+'" aria-hidden="true"></div>';if(h.isContentViewConfigured()){C+='<div class="icon view-flowfile-content fa fa-eye '+((B)?"disabled":"pointer")+'" title="'+((B)?"No content available to view":"View content")+'" aria-hidden="true"></div>'}if(h.canAccessProvenance()){C+='<div title="Provenance" class="pointer icon icon-provenance view-provenance" aria-hidden="true"></div>'}return C};w.push({id:"actions",name:"&nbsp;",resizable:false,formatter:v,sortable:false,width:75,maxWidth:75});return w};var b=function(t){var s=((h.isDefinedAndNotNull(t.uri))?t.uri:c("#flowfile-uri").text())+"/content";h.getAccessToken(p.urls.downloadToken).done(function(v){var w={};if(!h.isBlank(v)){w.access_token=v}var u=(h.isDefinedAndNotNull(t.clusterNodeId))?t.clusterNodeId:c("#flowfile-cluster-node-id").text();if(!h.isBlank(u)){w.clusterNodeId=u}if(c.isEmptyObject(w)){window.open(s)}else{window.open(s+"?"+c.param(w))}}).fail(function(){i.showOkDialog({headerText:"Queue Listing",dialogContent:"Unable to generate access token for downloading content."})})};var f=function(t){var s=((h.isDefinedAndNotNull(t.uri))?t.uri:c("#flowfile-uri").text())+"/content";var u=c.Deferred(function(v){if(d.hasItem("jwt")){var x=c.ajax({type:"POST",url:p.urls.uiExtensionToken});var w=c.ajax({type:"POST",url:p.urls.downloadToken});c.when(x,w).done(function(B,A){var z=B[0];var y=A[0];v.resolve(z,y)}).fail(function(){i.showOkDialog({headerText:"Queue Listing",dialogContent:"Unable to generate access token for viewing content."});v.reject()})}else{v.resolve("","")}}).promise();u.done(function(x,w){var z={};var v=(h.isDefinedAndNotNull(t.clusterNodeId))?t.clusterNodeId:c("#flowfile-cluster-node-id").text();if(!h.isBlank(v)){z.clusterNodeId=v}if(!h.isBlank(w)){z.access_token=w}if(c.isEmptyObject(z)===false){s=s+"?"+c.param(z)}var y=c("#nifi-content-viewer-url").text();if(y.indexOf("?")===-1){y+="?"}else{y+="&"}var A={ref:s};if(!h.isBlank(x)){A.access_token=x}window.open(y+c.param(A))})};var a=function(t){var u=4;var w=false;var v=null;var s=null;return c.Deferred(function(y){var B=function(D){var E=c("#listing-request-percent-complete");E.find("div.progress-label").remove();E.find("md-progress-linear").remove();var C=c('<div class="progress-label"></div>').text(D+"%");(r.injector.get("$compile")(c('<md-progress-linear ng-cloak ng-value="'+D+'" class="md-hue-2" md-mode="determinate" aria-label="Searching Queue"></md-progress-linear>'))(r.rootScope)).appendTo(E);E.append(C)};c("#listing-request-status-dialog").modal("setButtonModel",[{headerText:"Queue Listing",buttonText:"Stop",color:{base:"#728E9B",hover:"#004849",text:"#ffffff"},handler:{click:function(){w=true;if(s!==null){clearTimeout(s);x()}}}}]);var x=function(){c("#listing-request-status-dialog").modal("hide");var E=w;if(h.isDefinedAndNotNull(v)){c.ajax({type:"DELETE",url:v.uri,dataType:"json"});if(h.isEmpty(v.flowFileSummaries)){if(w===false){E=true;i.showOkDialog({headerText:"Queue Listing",dialogContent:"The queue has no FlowFiles."})}}else{c("#total-flowfiles-count").text(h.formatInteger(v.queueSize.objectCount));c("#total-flowfiles-size").text(h.formatDataSize(v.queueSize.byteCount));c("#queue-listing-last-refreshed").text(v.lastUpdated);var D=c("#queue-listing-table");var G=c("#queue-listing-message");if(v.sourceRunning===true||v.destinationRunning===true){if(v.souceRunning===true&&v.destinationRunning===true){G.text("The source and destination of this queue are currently running. This listing may no longer be accurate.").show()}else{if(v.sourceRunning===true){G.text("The source of this queue is currently running. This listing may no longer be accurate.").show()}else{if(v.destinationRunning===true){G.text("The destination of this queue is currently running. This listing may no longer be accurate.").show()}}}}else{G.text("").hide()}var F=c("#queue-listing-table").data("gridInstance");F.setColumns(q());var C=F.getData();C.beginUpdate();C.setItems(v.flowFileSummaries,"uuid");C.endUpdate()}}else{E=true}if(E){y.reject()}else{y.resolve()}};var A=function(C){B(v.percentCompleted);c("#listing-request-status-message").text(v.state);if(v.finished===true||w===true){x()}else{s=setTimeout(function(){s=null;z(Math.min(u,C*2))},C*1000)}};var z=function(C){c.ajax({type:"GET",url:v.uri,dataType:"json"}).done(function(D){v=D.listingRequest;A(C)}).fail(x).fail(e.handleAjaxError)};c.ajax({type:"POST",url:"../nifi-api/flowfile-queues/"+t.id+"/listing-requests",dataType:"json",contentType:"application/json"}).done(function(C){B(0);c("#listing-request-status-dialog").modal("show");v=C.listingRequest;A(1)}).fail(x).fail(e.handleAjaxError)}).promise()};var j=function(s){var t=function(w,x){c('<div class="flowfile-detail"></div>').append(c('<div class="detail-name"></div>').text(w)).append(c('<div class="detail-value">'+h.formatValue(x)+"</div>").ellipsis()).append(c('<div class="clear"></div>')).appendTo("#additional-flowfile-details")};var u=function(w,x){if(h.isDefinedAndNotNull(x)){w.removeClass("unset").text(x)}else{w.addClass("unset").text("No value set")}};var v={};if(h.isDefinedAndNotNull(s.clusterNodeId)){v.clusterNodeId=s.clusterNodeId}c.ajax({type:"GET",url:s.uri,data:v,dataType:"json"}).done(function(x){var z=x.flowFile;var w=h.isDefinedAndNotNull(z.contentClaimFileSize)?z.contentClaimFileSize:h.formatDataSize(0);c("#flowfile-uri").text(z.uri);c("#flowfile-uuid").html(h.formatValue(z.uuid));c("#flowfile-filename").html(h.formatValue(z.filename));c("#flowfile-queue-position").html(h.formatValue(z.position));c("#flowfile-file-size").html(h.formatValue(w));c("#flowfile-queued-duration").text(h.formatDuration(z.queuedDuration));c("#flowfile-lineage-duration").text(h.formatDuration(z.lineageDuration));c("#flowfile-penalized").text(z.penaltyExpiresIn==0?"No":h.formatDuration(z.penaltyExpiresIn));if(h.isDefinedAndNotNull(s.clusterNodeId)){c("#flowfile-cluster-node-id").text(s.clusterNodeId);t("Node Address",s.clusterNodeAddress)}if(h.isDefinedAndNotNull(z.contentClaimContainer)){u(c("#content-container"),z.contentClaimContainer);u(c("#content-section"),z.contentClaimSection);u(c("#content-identifier"),z.contentClaimIdentifier);u(c("#content-offset"),z.contentClaimOffset);u(c("#content-bytes"),z.contentClaimFileSizeBytes);var B=c("#content-size");u(B,z.contentClaimFileSize);if(h.isDefinedAndNotNull(z.contentClaimFileSize)){B.attr("title",h.formatInteger(z.contentClaimFileSizeBytes)+" bytes")}c("#flowfile-content-details").show();c("#flowfile-with-no-content").hide()}else{c("#flowfile-content-details").hide();c("#flowfile-with-no-content").show()}var y=c("#flowfile-attributes-container");var A=Object.keys(z.attributes).sort();A.forEach(function(C){var D=z.attributes[C];var E=c('<div class="attribute-detail"></div>').append(c('<div class="attribute-name">'+h.formatValue(C)+"</div>").ellipsis()).appendTo(y);E.append(c('<div class="attribute-value">'+h.formatValue(D)+"</div>").ellipsis()).append('<div class="clear"></div>')});c("#flowfile-details-dialog").modal("show")}).fail(e.handleAjaxError)};var k={init:function(){l();c("#queue-listing-refresh-button").click(function(){var v=c("#queue-listing-table").data("connection");a(v)});var t={forceFitColumns:true,enableTextSelectionOnCells:true,enableCellNavigation:false,enableColumnReorder:false,autoEdit:false,rowHeight:24};var s=new n.Data.DataView({inlineFilters:false});s.setItems([]);var u=new n.Grid("#queue-listing-table",s,q(),t);u.setSelectionModel(new n.RowSelectionModel());u.registerPlugin(new n.AutoTooltips());u.onClick.subscribe(function(y,v){var x=c(y.target);var w=s.getItem(v.row);if(u.getColumns()[v.cell].id==="moreDetails"){if(x.hasClass("show-flowfile-details")){j(w)}}else{if(u.getColumns()[v.cell].id==="actions"){if(x.hasClass("view-provenance")){c("#shell-close-button").click();o.showPage("provenance?"+c.param({flowFileUuid:w.uuid}))}else{if(x.hasClass("download-flowfile-content")&&!x.hasClass("disabled")){b(w)}else{if(x.hasClass("view-flowfile-content")&&!x.hasClass("disabled")){f(w)}}}}}});s.onRowCountChanged.subscribe(function(w,v){u.updateRowCount();u.render();c("#displayed-flowfiles").text(v.current)});s.onRowsChanged.subscribe(function(w,v){u.invalidateRows(v.rows);u.render()});c("#queue-listing-table").data("gridInstance",u);c("#displayed-flowfiles").text("0")},initFlowFileDetailsDialog:function(){c("#content-download").on("click",b);if(h.isContentViewConfigured()){c("#content-view").show();c("#content-view").on("click",f)}c("#flowfile-details-tabs").tabbs({tabStyle:"tab",selectedTabStyle:"selected-tab",scrollableTabContentStyle:"scrollable",tabs:[{name:"Details",tabContentId:"flowfile-details-tab-content"},{name:"Attributes",tabContentId:"flowfile-attributes-tab-content"}]});c("#flowfile-details-dialog").modal({scrollableContentStyle:"scrollable",headerText:"FlowFile",buttons:[{buttonText:"Ok",color:{base:"#728E9B",hover:"#004849",text:"#ffffff"},handler:{click:function(){c("#flowfile-details-dialog").modal("hide")}}}],handler:{close:function(){c("#flowfile-attributes-container").empty();c("#flowfile-cluster-node-id").text("");c("#additional-flowfile-details").empty()},open:function(){h.toggleScrollable(c("#"+this.find(".tab-container").attr("id")+"-content").get(0))}}})},resetTableSize:function(){var s=c("#queue-listing-table").data("gridInstance");if(h.isDefinedAndNotNull(s)){s.resizeCanvas()}},listQueue:function(s){a(s).done(function(){var t="";if(s.permissions.canRead){t=m.formatConnectionName(s.component)}if(t===""){t="Connection"}c("#queue-listing-header-text").text(t);o.showContent("#queue-listing-container").done(function(){c("#queue-listing-table").removeData("connection");var v=c("#queue-listing-table").data("gridInstance");var u=v.getData();u.beginUpdate();u.setItems([],"uuid");u.endUpdate();c("#displayed-flowfiles, #total-flowfiles-count").text("0");c("#total-flowfiles-size").text(h.formatDataSize(0))});k.resetTableSize();c("#queue-listing-table").data("connection",s)})}};return k}));
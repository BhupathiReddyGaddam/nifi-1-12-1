(function(a,b){if(typeof define==="function"&&define.amd){define(["jquery","Slick","nf.Common","nf.Dialog","nf.ErrorHandler","nf.Storage","nf.ng.Bridge"],function(f,i,g,e,h,d,c){return(nf.ng.ProvenanceTable=b(f,i,g,e,h,d,c))})}else{if(typeof exports==="object"&&typeof module==="object"){module.exports=(nf.ng.ProvenanceTable=b(require("jquery"),require("Slick"),require("nf.Common"),require("nf.Dialog"),require("nf.ErrorHandler"),require("nf.Storage"),require("nf.ng.Bridge")))}else{nf.ng.ProvenanceTable=b(a.$,a.Slick,a.nf.Common,a.nf.Dialog,a.nf.ErrorHandler,a.nf.Storage,a.nf.ng.Bridge)}}}(this,function(e,h,f,d,g,c,a){var b=function(u){var A={maxResults:1000,defaultStartTime:"00:00:00",defaultEndTime:"23:59:59",styles:{hidden:"hidden"},urls:{searchOptions:"../nifi-api/provenance/search-options",replays:"../nifi-api/provenance-events/replays",provenance:"../nifi-api/provenance",provenanceEvents:"../nifi-api/provenance-events/",clusterSearch:"../nifi-api/flow/cluster/search-results",d3Script:"js/d3/build/d3.min.js",lineageScript:"js/nf/provenance/nf-provenance-lineage.js",uiExtensionToken:"../nifi-api/access/ui-extension-token",downloadToken:"../nifi-api/access/download-token"}};var i={};var j=function(G){var F=e("#provenance-event-id").text();var E=A.urls.provenanceEvents+encodeURIComponent(F)+"/content/"+encodeURIComponent(G);f.getAccessToken(A.urls.downloadToken).done(function(I){var J={};if(!f.isBlank(I)){J.access_token=I}var H=e("#provenance-event-cluster-node-id").text();if(!f.isBlank(H)){J.clusterNodeId=H}if(e.isEmptyObject(J)){window.open(E)}else{window.open(E+"?"+e.param(J))}}).fail(function(){d.showOkDialog({headerText:"Provenance",dialogContent:"Unable to generate access token for downloading content."})})};var n=function(I){var F=e("#nifi-controller-uri").text();var H=e("#provenance-event-id").text();var E=F+"provenance-events/"+encodeURIComponent(H)+"/content/"+encodeURIComponent(I);var G=e.Deferred(function(J){if(c.hasItem("jwt")){var L=e.ajax({type:"POST",url:A.urls.uiExtensionToken});var K=e.ajax({type:"POST",url:A.urls.downloadToken});e.when(L,K).done(function(P,O){var N=P[0];var M=O[0];J.resolve(N,M)}).fail(function(){d.showOkDialog({headerText:"Provenance",dialogContent:"Unable to generate access token for viewing content."});J.reject()})}else{J.resolve("","")}}).promise();G.done(function(L,K){var N={};var J=e("#provenance-event-cluster-node-id").text();if(!f.isBlank(J)){N.clusterNodeId=J}if(!f.isBlank(K)){N.access_token=K}if(e.isEmptyObject(N)===false){E=E+"?"+e.param(N)}var M=e("#nifi-content-viewer-url").text();if(M.indexOf("?")===-1){M+="?"}else{M+="&"}var O={ref:E};if(!f.isBlank(L)){O.access_token=L}window.open(M+e.param(O))})};var v=function(){e("#event-details-tabs").tabbs({tabStyle:"tab",selectedTabStyle:"selected-tab",scrollableTabContentStyle:"scrollable",tabs:[{name:"Details",tabContentId:"event-details-tab-content"},{name:"Attributes",tabContentId:"attributes-tab-content"},{name:"Content",tabContentId:"content-tab-content"}]});e("#event-details-dialog").modal({scrollableContentStyle:"scrollable",headerText:"Provenance Event",buttons:[{buttonText:"Ok",color:{base:"#728E9B",hover:"#004849",text:"#ffffff"},handler:{click:function(){e("#event-details-dialog").modal("hide")}}}],handler:{close:function(){e("#additional-provenance-details").empty();e("#attributes-container").empty();e("#parent-flowfiles-container").empty();e("#child-flowfiles-container").empty();e("#provenance-event-cluster-node-id").text("");e("#modified-attribute-toggle").removeClass("checkbox-checked").addClass("checkbox-unchecked")},open:function(){f.toggleScrollable(e("#"+this.find(".tab-container").attr("id")+"-content").get(0))}}});e("#modified-attribute-toggle").on("click",function(){var E=e("#attributes-container div.attribute-unmodified");if(E.is(":visible")){e("#attributes-container div.attribute-unmodified").hide()}else{e("#attributes-container div.attribute-unmodified").show()}});e("#input-content-download").on("click",function(){j("input")});e("#output-content-download").on("click",function(){j("output")});if(f.isContentViewConfigured()){e("#input-content-view").on("click",function(){n("input")});e("#output-content-view").on("click",function(){n("output")})}e("#replay-content").on("click",function(){var F={eventId:e("#provenance-event-id").text()};var E=e("#provenance-event-cluster-node-id").text();if(!f.isBlank(E)){F.clusterNodeId=E}e.ajax({type:"POST",url:A.urls.replays,data:JSON.stringify(F),dataType:"json",contentType:"application/json"}).done(function(G){d.showOkDialog({headerText:"Provenance",dialogContent:"Successfully submitted replay request."})}).fail(g.handleAjaxError);e("#event-details-dialog").modal("hide")});e("#replay-details").show()};var s=function(F,E){e("#provenance-search-start-date, #provenance-search-end-date").datepicker({showAnim:"",showOtherMonths:true,selectOtherMonths:true});e("#provenance-search-start-date").datepicker("setDate","+0d");e("#provenance-search-end-date").datepicker("setDate","+0d");e("#provenance-search-start-time").val("00:00:00");e("#provenance-search-end-time").val("23:59:59");e("#provenance-search-minimum-file-size").val("");e("#provenance-search-maximum-file-size").val("");if(F){e("#provenance-search-dialog").height(575);e.ajax({type:"GET",url:A.urls.clusterSearch,dataType:"json"}).done(function(G){var I=G.nodeResults;var H=[{text:"cluster",value:null}];I.sort(function(K,J){var M=K.address.toUpperCase();var L=J.address.toUpperCase();return(M<L)?-1:(M>L)?1:0});e.each(I,function(J,K){H.push({text:K.address,value:K.id})});e("#provenance-search-location").combo({options:H})}).fail(g.handleAjaxError);e("#provenance-search-location-container").show()}e("#provenance-search-dialog").modal({scrollableContentStyle:"scrollable",headerText:"Search Events",buttons:[{buttonText:"Search",color:{base:"#728E9B",hover:"#004849",text:"#ffffff"},handler:{click:function(){e("#provenance-search-dialog").modal("hide");var J={};var G=e.trim(e("#provenance-search-start-date").val());var K=e.trim(e("#provenance-search-start-time").val());if(G!==""){if(K===""){K=A.defaultStartTime;e("#provenance-search-start-time").val(K)}J.startDate=G+" "+K+" "+e(".timezone:first").text()}var M=e.trim(e("#provenance-search-end-date").val());var I=e.trim(e("#provenance-search-end-time").val());if(M!==""){if(I===""){I=A.defaultEndTime;e("#provenance-search-end-time").val(I)}J.endDate=M+" "+I+" "+e(".timezone:first").text()}var H=e.trim(e("#provenance-search-minimum-file-size").val());if(H!==""){J.minimumFileSize=H}var N=e.trim(e("#provenance-search-maximum-file-size").val());if(N!==""){J.maximumFileSize=N}if(F){var L=e("#provenance-search-location").combo("getSelectedOption");if(L.value!==null){J.clusterNodeId=L.value}}J.searchTerms=r();E.loadProvenanceTable(J)}}},{buttonText:"Cancel",color:{base:"#E3E8EB",hover:"#C7D2D7",text:"#004849"},handler:{click:function(){e("#provenance-search-dialog").modal("hide")}}}]});return e.ajax({type:"GET",url:A.urls.searchOptions,dataType:"json"}).done(function(G){var H=G.provenanceOptions;e.each(H.searchableFields,function(I,J){z(J)})})};var y=function(){e("#provenance-query-dialog").modal({scrollableContentStyle:"scrollable",headerText:"Searching provenance events..."})};var z=function(F){var E=e('<div class="searchable-field"></div>').appendTo("#searchable-fields-container");e('<span class="searchable-field-id hidden"></span>').text(F.id).appendTo(E);e('<div class="searchable-field-name"></div>').text(F.label).appendTo(E);e('<div class="searchable-field-value"><input type="text" class="searchable-field-input"/></div>').appendTo(E);e('<div class="clear"></div>').appendTo(E);if(F.id==="ProcessorID"){E.find("input").addClass("searchable-component-id")}else{if(F.id==="FlowFileUUID"){E.find("input").addClass("searchable-flowfile-uuid")}}e("#no-searchable-fields").hide()};var r=function(){var E={};e("#searchable-fields-container").children("div.searchable-field").each(function(){var G=e(this);var F=G.children("span.searchable-field-id").text();var H=e.trim(G.find("input.searchable-field-input").val());if(!f.isBlank(H)){E[F]=H}});return E};var q=function(N,I){e("#provenance-filter").keyup(function(){C()});var G=[{text:"by component name",value:"componentName"},{text:"by component type",value:"componentType"},{text:"by type",value:"eventType"}];if(N){G.push({text:"by node",value:"clusterNodeAddress"})}e("#provenance-filter-type").combo({options:G,select:function(P){C()}});e("#clear-provenance-search").click(function(){e("#searchable-fields-container").find("input.searchable-field-input").each(function(){e(this).val("")});e("#provenance-search-start-date").datepicker("setDate","+0d");e("#provenance-search-end-date").datepicker("setDate","+0d");e("#provenance-search-start-time").val("00:00:00");e("#provenance-search-end-time").val("23:59:59");e("#provenance-search-minimum-file-size").val("");e("#provenance-search-maximum-file-size").val("");if(N){e("#provenance-search-location").combo("setSelectedOption",{text:"cluster"})}i={};I.loadProvenanceTable()});e("#provenance-search-button").click(function(){e("#provenance-search-dialog").modal("show")});var O=function(T,Q,S,R,P){return'<div title="View Details" class="pointer show-event-details fa fa-info-circle"></div>'};var K=function(T,Q,S,R,P){return f.formatValue(S)};var H=(top!==window);var M=function(V,Q,U,S,P){var R="";if(f.SUPPORTS_SVG){R+='<div title="Show Lineage" class="pointer show-lineage icon icon-lineage"></div>'}var T=P.componentType==="Remote Input Port"||P.componentType==="Remote Output Port";if(H&&f.isDefinedAndNotNull(P.groupId)&&T===false){R+='<div class="pointer go-to fa fa-long-arrow-right" title="Go To"></div>'}return R};var J=[{id:"moreDetails",name:"&nbsp;",sortable:false,resizable:false,formatter:O,width:50,maxWidth:50},{id:"eventTime",name:"Date/Time",field:"eventTime",sortable:true,defaultSortAsc:false,resizable:true,formatter:f.genericValueFormatter},{id:"eventType",name:"Type",field:"eventType",sortable:true,resizable:true,formatter:f.genericValueFormatter},{id:"flowFileUuid",name:"FlowFile Uuid",field:"flowFileUuid",sortable:true,resizable:true,formatter:f.genericValueFormatter},{id:"fileSize",name:"Size",field:"fileSize",sortable:true,defaultSortAsc:false,resizable:true,formatter:f.genericValueFormatter},{id:"componentName",name:"Component Name",field:"componentName",sortable:true,resizable:true,formatter:K},{id:"componentType",name:"Component Type",field:"componentType",sortable:true,resizable:true,formatter:f.genericValueFormatter}];if(N){J.push({id:"clusterNodeAddress",name:"Node",field:"clusterNodeAddress",sortable:true,resizable:true,formatter:f.genericValueFormatter})}if(f.SUPPORTS_SVG||H){J.push({id:"actions",name:"&nbsp;",formatter:M,resizable:false,sortable:false,width:50,maxWidth:50})}var F={forceFitColumns:true,enableTextSelectionOnCells:true,enableCellNavigation:true,enableColumnReorder:false,autoEdit:false,multiSelect:false,rowHeight:24};var E=new h.Data.DataView({inlineFilters:false});E.setItems([]);E.setFilterArgs({searchString:"",property:"name"});E.setFilter(p);x({columnId:"eventTime",sortAsc:false},E);var L=new h.Grid("#provenance-table",E,J,F);L.setSelectionModel(new h.RowSelectionModel());L.registerPlugin(new h.AutoTooltips());L.setSortColumn("eventTime",false);L.onSort.subscribe(function(Q,P){x({columnId:P.sortCol.field,sortAsc:P.sortAsc},E)});L.onClick.subscribe(function(S,P){var R=e(S.target);var Q=E.getItem(P.row);if(L.getColumns()[P.cell].id==="actions"){if(R.hasClass("show-lineage")){u.showLineage(Q.flowFileUuid,Q.eventId.toString(),Q.clusterNodeId,I)}else{if(R.hasClass("go-to")){B(Q)}}}else{if(L.getColumns()[P.cell].id==="moreDetails"){if(R.hasClass("show-event-details")){I.showEventDetails(Q.eventId,Q.clusterNodeId)}}}});E.onRowCountChanged.subscribe(function(Q,P){L.updateRowCount();L.render();e("#displayed-events").text(f.formatInteger(P.current))});E.onRowsChanged.subscribe(function(Q,P){L.invalidateRows(P.rows);L.render()});e("#provenance-table").data("gridInstance",L);e("#displayed-events").text("0");e("#total-events").text("0")};var C=function(){var E=e("#provenance-table").data("gridInstance");if(f.isDefinedAndNotNull(E)){var F=E.getData();F.setFilterArgs({searchString:w(),property:e("#provenance-filter-type").combo("getSelectedOption").value});F.refresh()}};var w=function(){return e("#provenance-filter").val()};var p=function(F,E){if(E.searchString===""){return true}try{var H=new RegExp(E.searchString,"i")}catch(G){return false}return F[E.property].search(H)>=0};var x=function(E,G){var F=function(K,I){if(E.columnId==="eventTime"){var M=f.parseDateTime(K[E.columnId]).getTime();var O=f.parseDateTime(I[E.columnId]).getTime();if(M===O){return K.id-I.id}else{return M-O}}else{if(E.columnId==="fileSize"){var H=f.parseSize(K[E.columnId]);var N=f.parseSize(I[E.columnId]);if(H===N){return K.id-I.id}else{return H-N}}else{var J=f.isDefinedAndNotNull(K[E.columnId])?K[E.columnId]:"";var L=f.isDefinedAndNotNull(I[E.columnId])?I[E.columnId]:"";if(J===L){return K.id-I.id}else{return J===L?0:J>L?1:-1}}}};G.sort(F,E.sortAsc)};var k=function(F){var E={provenance:{request:e.extend({maxResults:A.maxResults,summarize:true,incrementalResults:false},F)}};return e.ajax({type:"POST",url:A.urls.provenance,data:JSON.stringify(E),dataType:"json",contentType:"application/json"}).fail(g.handleAjaxError)};var m=function(E){var F=E.uri;if(f.isDefinedAndNotNull(E.request.clusterNodeId)){F+="?"+e.param({clusterNodeId:E.request.clusterNodeId,summarize:true,incrementalResults:false})}else{F+="?"+e.param({summarize:true,incrementalResults:false})}return e.ajax({type:"GET",url:F,dataType:"json"}).fail(g.handleAjaxError)};var l=function(E){var F=E.uri;if(f.isDefinedAndNotNull(E.request.clusterNodeId)){F+="?"+e.param({clusterNodeId:E.request.clusterNodeId})}return e.ajax({type:"DELETE",url:F,dataType:"json"}).fail(g.handleAjaxError)};var t=function(F,I){var L=F.request;var J=F.results;if(f.isDefinedAndNotNull(J.provenanceEvents)){var E=e("#provenance-table").data("gridInstance");var G=E.getData();G.setItems(J.provenanceEvents);G.reSort();E.invalidate();e("#provenance-last-refreshed").text(J.generated);e("#oldest-event").html(f.formatValue(J.oldestEvent));I.serverTimeOffset=J.timeOffset;var K=function(M){return f.isUndefinedOrNull(M.startDate)&&f.isUndefinedOrNull(M.endDate)&&e.isEmptyObject(M.searchTerms)};if(K(L)){var H="Showing the most recent ";if(J.totalCount>=A.maxResults){H+=(f.formatInteger(A.maxResults)+" of "+J.total+" events, please refine the search.")}else{H+=("events.")}e("#provenance-query-message").text(H);e("#clear-provenance-search").hide()}else{var H="Showing ";if(J.totalCount>=A.maxResults){H+=(f.formatInteger(A.maxResults)+" of "+J.total+" events that match the specified query, please refine the search.")}else{H+=("the events that match the specified query.")}e("#provenance-query-message").text(H);e("#clear-provenance-search").show()}e("#total-events").text(f.formatInteger(J.provenanceEvents.length))}else{e("#total-events").text("0")}};var B=function(E){if(f.isDefinedAndNotNull(E.groupId)){if(top!==window){if(f.isDefinedAndNotNull(parent.nf)&&f.isDefinedAndNotNull(parent.nf.CanvasUtils)&&f.isDefinedAndNotNull(parent.nf.Shell)){parent.nf.CanvasUtils.showComponent(E.groupId,E.componentId);parent.$("#shell-close-button").click()}}}};function D(){this.serverTimeOffset=null}D.prototype={constructor:D,init:function(F){var E=this;return e.Deferred(function(G){var H=function(K,I,J){G.reject();g.handleAjaxError(K,I,J)};u.init();v();y();q(F,E);s(F,E).done(function(){G.resolve()}).fail(H)}).promise()},resetTableSize:function(){var E=e("#provenance-table").data("gridInstance");if(f.isDefinedAndNotNull(E)){E.resizeCanvas()}},updateProgress:function(G,F){G.find("div.progress-label").remove();G.find("md-progress-linear").remove();var E=e('<div class="progress-label"></div>').text(F+"%");(a.injector.get("$compile")(e('<md-progress-linear ng-cloak ng-value="'+F+'" class="md-hue-2" md-mode="determinate" aria-label="Progress"></md-progress-linear>'))(a.rootScope)).appendTo(G);G.append(E)},loadProvenanceTable:function(K){var I=this;var E=e("#provenance-percent-complete");var H=false;var M=null;var G=null;I.updateProgress(E,0);e("#provenance-query-dialog").modal("setButtonModel",[{buttonText:"Cancel",color:{base:"#E3E8EB",hover:"#C7D2D7",text:"#004849"},handler:{click:function(){H=true;if(G!==null){clearTimeout(G);F()}}}}]).modal("show");if(f.isDefinedAndNotNull(K)){i=K}else{if(!e.isEmptyObject(i)){K=i}else{K={}}}var F=function(){if(f.isDefinedAndNotNull(M)){l(M)}e("#provenance-query-dialog").modal("hide")};var J=function(){m(M).done(function(N){M=N.provenance;L()}).fail(F)};var L=function(){if(H===true){F();return}I.updateProgress(E,M.percentCompleted);if(M.finished===true){if(!f.isEmpty(M.results.errors)){var N=M.results.errors;d.showOkDialog({headerText:"Provenance",dialogContent:f.formatUnorderedList(N),})}t(M,I);F()}else{G=setTimeout(function(){G=null;J()},2000)}};k(K).done(function(N){M=N.provenance;L()}).fail(F)},getEventDetails:function(G,F){var E;if(f.isDefinedAndNotNull(F)){E=A.urls.provenanceEvents+encodeURIComponent(G)+"?"+e.param({clusterNodeId:F})}else{E=A.urls.provenanceEvents+encodeURIComponent(G)}return e.ajax({type:"GET",url:E,dataType:"json"}).fail(g.handleAjaxError)},showEventDetails:function(F,E){o.getEventDetails(F,E).done(function(N){var I=N.provenanceEvent;var Q=e("#event-details-tabs").find("li");e(Q).each(function(S){if((I.attributes===undefined&&S==1)||(I.inputContentAvailable===undefined&&S==2)){e(this).hide()}else{e(this).show()}});e(Q).first().click();e("#provenance-event-id").text(I.eventId);e("#provenance-event-time").html(f.formatValue(I.eventTime)).ellipsis();e("#provenance-event-type").html(f.formatValue(I.eventType)).ellipsis();e("#provenance-event-flowfile-uuid").html(f.formatValue(I.flowFileUuid)).ellipsis();e("#provenance-event-component-id").html(f.formatValue(I.componentId)).ellipsis();e("#provenance-event-component-name").html(f.formatValue(I.componentName)).ellipsis();e("#provenance-event-component-type").html(f.formatValue(I.componentType)).ellipsis();e("#provenance-event-details").html(f.formatValue(I.details)).ellipsis();var L=e("#provenance-event-file-size").html(f.formatValue(I.fileSize)).ellipsis();L.attr("title",f.formatInteger(I.fileSizeBytes)+" bytes");var O=function(T,S){if(f.isDefinedAndNotNull(S)){if(S===0){T.text("< 1ms")}else{T.text(f.formatDuration(S))}}else{T.html('<span class="unset">No value set</span>')}};O(e("#provenance-event-duration"),I.eventDuration);O(e("#provenance-lineage-duration"),I.lineageDuration);var R=function(S,T){e('<div class="event-detail"></div>').append(e('<div class="detail-name"></div>').text(S)).append(e('<div class="detail-value">'+f.formatValue(T)+"</div>").ellipsis()).append(e('<div class="clear"></div>')).appendTo("#additional-provenance-details")};if(I.eventType==="RECEIVE"){R("Source FlowFile Id",I.sourceSystemFlowFileId);R("Transit Uri",I.transitUri)}if(I.eventType==="SEND"){R("Transit Uri",I.transitUri)}if(I.eventType==="REMOTE_INVOCATION"){R("Transit Uri",I.transitUri)}if(I.eventType==="ADDINFO"){R("Alternate Identifier Uri",I.alternateIdentifierUri)}if(I.eventType==="ROUTE"){R("Relationship",I.relationship)}if(I.eventType==="FETCH"){R("Transit Uri",I.transitUri)}if(f.isDefinedAndNotNull(I.clusterNodeId)){e("#provenance-event-cluster-node-id").text(I.clusterNodeId);R("Node Address",I.clusterNodeAddress)}var J=e("#parent-flowfiles-container");var K=e("#child-flowfiles-container");if(f.isEmpty(I.parentUuids)){e("#parent-flowfile-count").text(0);J.append('<span class="unset">No parents</span>')}else{e("#parent-flowfile-count").text(I.parentUuids.length);e.each(I.parentUuids,function(S,T){e("<div></div>").text(T).appendTo(J)})}if(f.isEmpty(I.childUuids)){e("#child-flowfile-count").text(0);K.append('<span class="unset">No children</span>')}else{e("#child-flowfile-count").text(I.childUuids.length);e.each(I.childUuids,function(S,T){e("<div></div>").text(T).appendTo(K)})}var G=e("#attributes-container");e.each(I.attributes,function(S,T){var U=e('<div class="attribute-detail"></div>').append(e('<div class="attribute-name">'+f.formatValue(T.name)+"</div>").ellipsis()).appendTo(G);U.append(e('<div class="attribute-value">'+f.formatValue(T.value)+"</div>").ellipsis()).append('<div class="clear"></div>');if(T.value!==T.previousValue){if(f.isDefinedAndNotNull(T.previousValue)){U.append(e('<div class="modified-attribute-value">'+f.formatValue(T.previousValue)+'<span class="unset"> (previous)</span></div>').ellipsis()).append('<div class="clear"></div>')}else{U.append(e('<div class="unset" style="font-size: 13px; padding-top: 2px;">'+f.formatValue(T.previousValue)+"</div>").ellipsis()).append('<div class="clear"></div>')}}else{U.addClass("attribute-unmodified")}});var H=function(S,T){if(f.isDefinedAndNotNull(T)){S.removeClass("unset").text(T)}else{S.addClass("unset").text("No value previously set")}};e("#input-content-header").text("Input Claim");H(e("#input-content-container"),I.inputContentClaimContainer);H(e("#input-content-section"),I.inputContentClaimSection);H(e("#input-content-identifier"),I.inputContentClaimIdentifier);H(e("#input-content-offset"),I.inputContentClaimOffset);H(e("#input-content-bytes"),I.inputContentClaimFileSizeBytes);var M=e("#input-content-size");H(M,I.inputContentClaimFileSize);if(f.isDefinedAndNotNull(I.inputContentClaimFileSize)){M.attr("title",f.formatInteger(I.inputContentClaimFileSizeBytes)+" bytes")}H(e("#output-content-container"),I.outputContentClaimContainer);H(e("#output-content-section"),I.outputContentClaimSection);H(e("#output-content-identifier"),I.outputContentClaimIdentifier);H(e("#output-content-offset"),I.outputContentClaimOffset);H(e("#output-content-bytes"),I.outputContentClaimFileSizeBytes);var P=e("#output-content-size");H(P,I.outputContentClaimFileSize);if(f.isDefinedAndNotNull(I.outputContentClaimFileSize)){P.attr("title",f.formatInteger(I.outputContentClaimFileSizeBytes)+" bytes")}if(I.inputContentAvailable===true){e("#input-content-download").show();if(f.isContentViewConfigured()){e("#input-content-view").show()}else{e("#input-content-view").hide()}}else{e("#input-content-download").hide();e("#input-content-view").hide()}if(I.outputContentAvailable===true){e("#output-content-download").show();if(f.isContentViewConfigured()){e("#output-content-view").show()}else{e("#output-content-view").hide()}}else{e("#output-content-download").hide();e("#output-content-view").hide()}if(I.replayAvailable===true){e("#replay-content, #replay-content-connection").show();H(e("#replay-connection-id"),I.sourceConnectionIdentifier);e("#replay-content-message").hide()}else{e("#replay-content, #replay-content-connection").hide();e("#replay-content-message").text(I.replayExplanation).show()}e("#event-details-dialog").modal("show")})}};var o=new D();return o};return b}));
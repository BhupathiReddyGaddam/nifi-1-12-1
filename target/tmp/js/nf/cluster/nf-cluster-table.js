(function(a,b){if(typeof define==="function"&&define.amd){define(["jquery","Slick","nf.Common","nf.Dialog","nf.ErrorHandler"],function(d,g,e,c,f){return(nf.ClusterTable=b(d,g,e,c,f))})}else{if(typeof exports==="object"&&typeof module==="object"){module.exports=(nf.ClusterTable=b(require("jquery"),require("Slick"),require("nf.Common"),require("nf.Dialog"),require("nf.ErrorHandler")))}else{nf.ClusterTable=b(a.$,a.Slick,a.nf.Common,a.nf.Dialog,a.nf.ErrorHandler)}}}(this,function(I,c,W,q,g){var Q={primaryNode:"Primary Node",clusterCoordinator:"Cluster Coordinator",urls:{cluster:"../nifi-api/controller/cluster",nodes:"../nifi-api/controller/cluster/nodes",systemDiagnostics:"../nifi-api/system-diagnostics"},data:[{name:"cluster",update:k,isAuthorized:W.canAccessController},{name:"systemDiagnostics",update:F,isAuthorized:W.canAccessSystem}]};var H={forceFitColumns:true,enableTextSelectionOnCells:true,enableCellNavigation:false,enableColumnReorder:false,autoEdit:false,rowHeight:24};var L={name:"Nodes",data:{dataSet:"cluster",update:o},tabContentId:"cluster-nodes-tab-content",tableId:"cluster-nodes-table",tableColumnModel:a,tableIdColumn:"nodeId",tableOptions:H,tableOnClick:e,createTableOnEnter:null,cleanUpTable:null,init:x,onSort:aa,onTabSelected:i,filterOptions:[{text:"by address",value:"address"},{text:"by status",value:"status"}]};var S={name:"JVM",data:{dataSet:"systemDiagnostics",update:Z},tabContentId:"cluster-jvm-tab-content",tableId:"cluster-jvm-table",tableColumnModel:z,tableIdColumn:"id",tableOptions:H,tableOnClick:null,createTableOnEnter:j,cleanUpTable:t,init:x,onSort:aa,onTabSelected:i,filterOptions:[{text:"by address",value:"node"}]};var u={name:"System",data:{dataSet:"systemDiagnostics",update:b},tabContentId:"cluster-system-tab-content",tableId:"cluster-system-table",tableColumnModel:[{id:"node",field:"node",name:"Node Address",sortable:true,resizable:true,formatter:W.genericValueFormatter},{id:"processors",field:"processors",name:"Cores",sortable:true,resizable:true,cssClass:"cell-right",headerCssClass:"header-right",formatter:W.genericValueFormatter},{id:"processorLoadAverage",field:"processorLoadAverage",name:"Core Load Average",sortable:true,resizable:true,cssClass:"cell-right",headerCssClass:"header-right",formatter:W.genericValueFormatter},{id:"totalThreads",field:"totalThreads",name:"Total Threads",sortable:true,resizable:true,cssClass:"cell-right",headerCssClass:"header-right",formatter:W.genericValueFormatter},{id:"daemonThreads",field:"daemonThreads",name:"Daemon Threads",sortable:true,resizable:true,cssClass:"cell-right",headerCssClass:"header-right",formatter:W.genericValueFormatter}],tableIdColumn:"id",tableOptions:H,tableOnClick:null,createTableOnEnter:null,cleanUpTable:null,init:x,onSort:aa,onTabSelected:i,filterOptions:[{text:"by address",value:"node"}]};var y={name:"FlowFile Storage",data:{dataSet:"systemDiagnostics",update:E},tabContentId:"cluster-flowfile-tab-content",tableId:"cluster-flowfile-table",tableColumnModel:[{id:"node",field:"node",name:"Node Address",sortable:true,resizable:true,formatter:W.genericValueFormatter},{id:"ffRepoTotal",field:"ffRepoTotal",name:"Total Space",sortable:true,resizable:true,cssClass:"cell-right",headerCssClass:"header-right",formatter:W.genericValueFormatter},{id:"ffRepoUsed",field:"ffRepoUsed",name:"Used Space",sortable:true,resizable:true,cssClass:"cell-right",headerCssClass:"header-right",formatter:W.genericValueFormatter},{id:"ffRepoFree",field:"ffRepoFree",name:"Free Space",sortable:true,resizable:true,cssClass:"cell-right",headerCssClass:"header-right",formatter:W.genericValueFormatter},{id:"ffStoreUtil",field:"ffRepoUtil",name:"Utilization",sortable:true,resizable:true,cssClass:"cell-right",headerCssClass:"header-right",formatter:W.genericValueFormatter}],tableIdColumn:"id",tableOptions:H,tableOnClick:null,createTableOnEnter:null,cleanUpTable:null,init:x,onSort:aa,onTabSelected:i,filterOptions:[{text:"by address",value:"node"}]};var ab={name:"Content Storage",data:{dataSet:"systemDiagnostics",update:w},tabContentId:"cluster-content-tab-content",tableId:"cluster-content-table",tableColumnModel:[{id:"node",field:"node",name:"Node Address",sortable:true,resizable:true,formatter:W.genericValueFormatter},{id:"contentRepoId",field:"contentRepoId",name:"Content Repository",sortable:true,resizable:true,formatter:W.genericValueFormatter},{id:"contentRepoTotal",field:"contentRepoTotal",name:"Total Space",sortable:true,resizable:true,cssClass:"cell-right",headerCssClass:"header-right",formatter:W.genericValueFormatter},{id:"contentRepoUsed",field:"contentRepoUsed",name:"Used Space",sortable:true,resizable:true,cssClass:"cell-right",headerCssClass:"header-right",formatter:W.genericValueFormatter},{id:"contentRepoFree",field:"contentRepoFree",name:"Free Space",sortable:true,resizable:true,cssClass:"cell-right",headerCssClass:"header-right",formatter:W.genericValueFormatter},{id:"contentRepoUtil",field:"contentRepoUtil",name:"Utilization",sortable:true,resizable:true,cssClass:"cell-right",headerCssClass:"header-right",formatter:W.genericValueFormatter}],tableIdColumn:"id",tableOptions:H,tableOnClick:null,createTableOnEnter:null,cleanUpTable:null,init:x,onSort:aa,onTabSelected:i,filterOptions:[{text:"by address",value:"node"},{text:"by repository",value:"contentRepoId"}]};var C={name:"Provenance Storage",data:{dataSet:"systemDiagnostics",update:p},tabContentId:"cluster-provenance-tab-content",tableId:"cluster-provenance-table",tableColumnModel:[{id:"node",field:"node",name:"Node Address",sortable:true,resizable:true,formatter:W.genericValueFormatter},{id:"provenanceRepoId",field:"provenanceRepoId",name:"Provenance Repository",sortable:true,resizable:true,formatter:W.genericValueFormatter},{id:"provenanceRepoTotal",field:"provenanceRepoTotal",name:"Total Space",sortable:true,resizable:true,cssClass:"cell-right",headerCssClass:"header-right",formatter:W.genericValueFormatter},{id:"provenanceRepoUsed",field:"provenanceRepoUsed",name:"Used Space",sortable:true,resizable:true,cssClass:"cell-right",headerCssClass:"header-right",formatter:W.genericValueFormatter},{id:"provenanceRepoFree",field:"provenanceRepoFree",name:"Free Space",sortable:true,resizable:true,cssClass:"cell-right",headerCssClass:"header-right",formatter:W.genericValueFormatter},{id:"provenanceRepoUtil",field:"provenanceRepoUtil",name:"Utilization",sortable:true,resizable:true,cssClass:"cell-right",headerCssClass:"header-right",formatter:W.genericValueFormatter}],tableIdColumn:"id",tableOptions:H,tableOnClick:null,createTableOnEnter:null,cleanUpTable:null,init:x,onSort:aa,onTabSelected:i,filterOptions:[{text:"by address",value:"node"},{text:"by repository",value:"contentRepoId"}]};var s={name:"Versions",data:{dataSet:"systemDiagnostics",update:f},tabContentId:"cluster-version-tab-content",tableId:"cluster-version-table",tableColumnModel:[{id:"node",field:"node",name:"Node Address",sortable:true,resizable:true,formatter:W.genericValueFormatter},{id:"version",field:"version",name:"NiFi Version",sortable:true,resizable:true,formatter:W.genericValueFormatter},{id:"javavendor",field:"javaVendor",name:"Java Vendor",sortable:true,resizable:true,formatter:W.genericValueFormatter},{id:"javaversion",field:"javaVersion",name:"Java Version",sortable:true,resizable:true,formatter:W.genericValueFormatter},{id:"osname",field:"osName",name:"OS Name",sortable:true,resizable:true,formatter:W.genericValueFormatter},{id:"osversion",field:"osVersion",name:"OS Version",sortable:true,resizable:true,formatter:W.genericValueFormatter},{id:"osarch",field:"osArchitecture",name:"OS Architecture",sortable:true,resizable:true,formatter:W.genericValueFormatter}],tableIdColumn:"id",tableOptions:H,tableOnClick:null,createTableOnEnter:null,cleanUpTable:null,init:x,onSort:aa,onTabSelected:i,filterOptions:[{text:"by address",value:"address"}]};var T=[L,u,S,y,ab,C,s];var A={};var M={};function e(af,ac,ae,ad){if(L.grid.getColumns()[ac.cell].id==="actions"){if(ae.hasClass("prompt-for-connect")){R(ad)}else{if(ae.hasClass("prompt-for-removal")){h(ad)}else{if(ae.hasClass("prompt-for-offload")){l(ad)}else{if(ae.hasClass("prompt-for-disconnect")){V(ad)}}}}}else{if(L.grid.getColumns()[ac.cell].id==="moreDetails"){if(ae.hasClass("show-node-details")){B(ad)}}}}function a(){var ad=function(am,aj,al,ak,ai){return'<div title="View Details" class="pointer show-node-details fa fa-info-circle"></div>'};var ac=function(am,aj,al,ak,ai){return m(ai)};var ae=function(am,aj,al,ak,ai){return W.formatValue(al)};var ah=function(am,aj,al,ak,ai){return d(ai)};var af=[{id:"moreDetails",name:"&nbsp;",sortable:false,resizable:false,formatter:ad,width:50,maxWidth:50},{id:"formattedNodeAddress",field:"formattedNodeAddress",name:"Node Address",formatter:ac,resizable:true,sortable:true},{id:"activeThreadCount",field:"activeThreadCount",name:"Active Thread Count",resizable:true,sortable:true,defaultSortAsc:false,formatter:W.genericValueFormatter},{id:"queued",field:"queued",name:'<span class="queued-title">Queue</span>&nbsp;/&nbsp;<span class="queued-size-title">Size</span>',resizable:true,sortable:true,defaultSortAsc:false,formatter:W.genericValueFormatter},{id:"status",field:"status",name:"Status",formatter:ah,resizable:true,sortable:true},{id:"uptime",field:"nodeStartTime",name:"Started At",formatter:ae,resizable:true,sortable:true,defaultSortAsc:false},{id:"heartbeat",field:"heartbeat",name:"Last Heartbeat",formatter:ae,resizable:true,sortable:true,defaultSortAsc:false}];if(W.canModifyController()){var ag=function(ar,ap,ao,am,aj){var an='<div title="Connect" class="pointer prompt-for-connect fa fa-plug"></div>';var ak='<div title="Delete" class="pointer prompt-for-removal fa fa-trash"></div>';var ai='<div title="Disconnect" class="pointer prompt-for-disconnect fa fa-power-off"></div>';var al='<div title="Offload" class="pointer prompt-for-offload fa fa-rotate-90 fa-upload" style="margin-top: 5px;margin-left: 5px;margin-right: -2px;"></div>';var aq="";if(aj.status==="CONNECTED"||aj.status==="CONNECTING"){aq+=ai}else{if(aj.status==="DISCONNECTED"){aq+=an+al+ak}else{if(aj.status==="OFFLOADED"){aq+=an+ak}else{aq+='<div style="width: 16px; height: 16px;">&nbsp;</div>'}}}return aq};af.push({id:"actions",label:"&nbsp;",formatter:ag,resizable:false,sortable:false,width:80,maxWidth:80})}return af}function j(ac){var ad=ac.getData();return function(ah){var ai=I(this).find("div.show-jvm-gc");if(ai.length&&!ai.data("qtip")){var ag=I(this).find("span.row-id").text();var ae=ad.getItemById(ag);var aj=W.getFormattedGarbageCollections(ae.garbageCollection);var af=W.formatUnorderedList(aj);if(W.isDefinedAndNotNull(af)){ai.qtip(I.extend({},W.config.tooltipConfig,{content:af,position:{container:I("#cluster"),at:"bottom left",my:"top right",adjust:{x:4,y:4}}}))}}}}function t(ac){W.cleanUpTooltips(ac,"div.show-jvm-gc")}function z(){var ac=function(ah,ae,ag,af,ad){return'<div class="pointer show-jvm-gc fa fa-question-circle"></div><span class="hidden row-id">'+W.escapeHtml(ad.id)+"</span>"};return[{id:"node",field:"node",name:"Node Address",sortable:true,resizable:true,formatter:W.genericValueFormatter},{id:"heapMax",field:"maxHeap",name:"Heap Max",sortable:true,resizable:true,cssClass:"cell-right",headerCssClass:"header-right",formatter:W.genericValueFormatter},{id:"heapTotal",field:"totalHeap",name:"Heap Total",sortable:true,resizable:true,cssClass:"cell-right",headerCssClass:"header-right",formatter:W.genericValueFormatter},{id:"heapUsed",field:"usedHeap",name:"Heap Used",sortable:true,resizable:true,cssClass:"cell-right",headerCssClass:"header-right",formatter:W.genericValueFormatter},{id:"heapUtilPct",field:"heapUtilization",name:"Heap Utilization",sortable:true,resizable:true,cssClass:"cell-right",headerCssClass:"header-right",formatter:W.genericValueFormatter},{id:"nonHeapTotal",field:"totalNonHeap",name:"Non-Heap Total",sortable:true,resizable:true,cssClass:"cell-right",headerCssClass:"header-right",formatter:W.genericValueFormatter},{id:"nonHeapUsed",field:"usedNonHeap",name:"Non-Heap Used",sortable:true,resizable:true,cssClass:"cell-right",headerCssClass:"header-right",formatter:W.genericValueFormatter},{id:"gc",name:"GC",sortable:false,resizable:true,formatter:ac,width:50,maxWidth:50},{id:"uptime",field:"uptime",name:"Uptime",sortable:true,resizable:true,cssClass:"cell-right",headerCssClass:"header-right",formatter:W.genericValueFormatter}]}var r,X;function aa(ac,af,ae){var ad=function(au,at){if(ac.columnId==="heartbeat"||ac.columnId==="uptime"){var ak=W.parseDateTime(au[ac.columnId]);var ah=W.parseDateTime(at[ac.columnId]);return ak.getTime()-ah.getTime()}else{if(ac.columnId==="queued"){var am=au[ac.columnId].split(/ \/ /);var ap=at[ac.columnId].split(/ \/ /);var ar=X%4;if(ar<2){I("#cluster-nodes-table span.queued-title").addClass("sorted");var ai=W.parseCount(am[0]);var ao=W.parseCount(ap[0]);return ai-ao}else{I("#cluster-nodes-table span.queued-size-title").addClass("sorted");var ax=W.parseSize(am[1]);var aw=W.parseSize(ap[1]);return ax-aw}}else{if(ac.columnId==="maxHeap"||ac.columnId==="totalHeap"||ac.columnId==="usedHeap"||ac.columnId==="totalNonHeap"||ac.columnId==="usedNonHeap"||ac.columnId==="ffRepoTotal"||ac.columnId==="ffRepoUsed"||ac.columnId==="ffRepoFree"||ac.columnId==="contentRepoTotal"||ac.columnId==="contentRepoUsed"||ac.columnId==="contentRepoFree"){var ax=W.parseSize(au[ac.columnId]);var aw=W.parseSize(at[ac.columnId]);return ax-aw}else{if(ac.columnId==="totalThreads"||ac.columnId==="daemonThreads"||ac.columnId==="processors"){var ai=W.parseCount(au[ac.columnId]);var ao=W.parseCount(at[ac.columnId]);return ai-ao}else{if(ac.columnId==="status"){var al=d(au);var aq=d(at);return al===aq?0:al>aq?1:-1}else{if(ac.columnId==="formattedNodeAddress"){var aj=m(au);var ag=m(at);return aj===ag?0:aj>ag?1:-1}else{var an=W.isDefinedAndNotNull(au[ac.columnId])?au[ac.columnId]:"";var av=W.isDefinedAndNotNull(at[ac.columnId])?at[ac.columnId]:"";return an===av?0:an>av?1:-1}}}}}}};I("#cluster-nodes-table span.queued-title").removeClass("sorted");I("#cluster-nodes-table span.queued-size-title").removeClass("sorted");if(r!==ac.columnId){X=0}else{X++}af.sort(ad,ac.sortAsc);r=ac.columnId}var m=function(ac){return W.escapeHtml(ac.address)+":"+W.escapeHtml(ac.apiPort)};var d=function(ad){var ac=ad.status;if(ad.roles.includes(Q.primaryNode)){ac+=", PRIMARY"}if(ad.roles.includes(Q.clusterCoordinator)){ac+=", COORDINATOR"}return W.escapeHtml(ac)};var R=function(ac){q.showYesNoDialog({headerText:"Connect Node",dialogContent:"Connect '"+m(ac)+"' to this cluster?",yesHandler:function(){v(ac.nodeId)}})};var v=function(ad){var ac={node:{nodeId:ad,status:"CONNECTING"}};I.ajax({type:"PUT",url:Q.urls.nodes+"/"+encodeURIComponent(ad),data:JSON.stringify(ac),dataType:"json",contentType:"application/json"}).done(function(af){var ag=af.node;var ah=I("#cluster-nodes-table").data("gridInstance");var ae=ah.getData();ae.updateItem(ag.nodeId,ag)}).fail(g.handleAjaxError)};var l=function(ac){q.showYesNoDialog({headerText:"Offload Node",dialogContent:"Offload '"+m(ac)+"'?",yesHandler:function(){U(ac.nodeId)}})};var U=function(ad){var ac={node:{nodeId:ad,status:"OFFLOADING"}};I.ajax({type:"PUT",url:Q.urls.nodes+"/"+encodeURIComponent(ad),data:JSON.stringify(ac),dataType:"json",contentType:"application/json"}).done(function(af){var ag=af.node;var ah=I("#cluster-nodes-table").data("gridInstance");var ae=ah.getData();ae.updateItem(ag.nodeId,ag)}).fail(g.handleAjaxError)};var V=function(ac){q.showYesNoDialog({headerText:"Disconnect Node",dialogContent:"Disconnect '"+m(ac)+"' from the cluster?",yesHandler:function(){Y(ac.nodeId)}})};var Y=function(ad){var ac={node:{nodeId:ad,status:"DISCONNECTING"}};I.ajax({type:"PUT",url:Q.urls.nodes+"/"+encodeURIComponent(ad),data:JSON.stringify(ac),dataType:"json",contentType:"application/json"}).done(function(af){var ag=af.node;var ah=I("#cluster-nodes-table").data("gridInstance");var ae=ah.getData();ae.updateItem(ag.nodeId,ag)}).fail(g.handleAjaxError)};var h=function(ac){q.showYesNoDialog({headerText:"Remove Node",dialogContent:"Remove '"+m(ac)+"' from the cluster?",yesHandler:function(){D(ac.nodeId)}})};var D=function(ac){I.ajax({type:"DELETE",url:Q.urls.nodes+"/"+encodeURIComponent(ac),dataType:"json"}).done(function(){var ae=I("#cluster-nodes-table").data("gridInstance");var ad=ae.getData();ad.deleteItem(ac)}).fail(g.handleAjaxError)};var J=function(){return I("#cluster-filter").val()};var n=function(){var ae=N();if(!ae){return}var ad=ae.grid;if(W.isDefinedAndNotNull(ad)){var ac=ad.getData();ac.setFilterArgs({searchString:J(),property:I("#cluster-filter-type").combo("getSelectedOption").value});ac.refresh()}};var N=function(){var ac=null;T.forEach(function(ad){if(I("#"+ad.tableId).is(":visible")){ac=ad}});return ac};var K=function(ad,ac){if(ac.searchString===""){return true}try{var ag=new RegExp(ac.searchString,"i")}catch(af){return false}var ae=ad[ac.property];if(ac.property==="address"){ae=m(ad)}else{if(ac.property==="status"){ae=d(ad)}}return ae.search(ag)>=0};function O(ac){if(!ac){ac=N()}if(ac.dataView){var ae=ac.dataView.getLength();var ad=ac.rowCount;I("#displayed-rows").text(ae);I("#total-rows").text(ad)}}var P=function(){I("#cluster-filter").val("");n()};var B=function(ac){I.ajax({type:"GET",url:Q.urls.nodes+"/"+encodeURIComponent(ac.nodeId),dataType:"json"}).done(function(ae){var ag=ae.node;I("#node-id").text(ag.nodeId);I("#node-address").text(m(ag));var af=I("#node-events");if(I.isArray(ag.events)&&ag.events.length>0){var ad=[];I.each(ag.events,function(ah,ai){ad.push(ai.timestamp+": "+ai.message)});I("<div></div>").append(W.formatUnorderedList(ad)).appendTo(af)}else{af.append('<div><span class="unset">None</span></div>')}I("#node-details-dialog").modal("show")}).fail(g.handleAjaxError)};function Z(ac){if(W.isDefinedAndNotNull(ac.systemDiagnostics)&&W.isDefinedAndNotNull(ac.systemDiagnostics.nodeSnapshots)){var ad=[];ac.systemDiagnostics.nodeSnapshots.forEach(function(ae){var af=ae.snapshot;ad.push({id:ae.nodeId,node:ae.address+":"+ae.apiPort,address:ae.address,maxHeap:af.maxHeap,totalHeap:af.totalHeap,usedHeap:af.usedHeap,heapUtilization:af.heapUtilization,maxNonHeap:af.maxNonHeap,totalNonHeap:af.totalNonHeap,usedNonHeap:af.usedNonHeap,garbageCollection:af.garbageCollection,uptime:af.uptime})});S.rowCount=ad.length;S.dataView.setItems(ad);S.dataView.reSort();S.grid.invalidate()}else{S.rowCount=0}}function b(ad){if(W.isDefinedAndNotNull(ad.systemDiagnostics)&&W.isDefinedAndNotNull(ad.systemDiagnostics.nodeSnapshots)){var ac=[];ad.systemDiagnostics.nodeSnapshots.forEach(function(ae){var af=ae.snapshot;ac.push({id:ae.nodeId,node:ae.address+":"+ae.apiPort,address:ae.address,processors:af.availableProcessors,processorLoadAverage:af.processorLoadAverage,totalThreads:af.totalThreads,daemonThreads:af.daemonThreads})});u.rowCount=ac.length;u.dataView.setItems(ac);u.dataView.reSort();u.grid.invalidate()}else{u.rowCount=0}}function E(ac){if(W.isDefinedAndNotNull(ac.systemDiagnostics)&&W.isDefinedAndNotNull(ac.systemDiagnostics.nodeSnapshots)){var ad=[];ac.systemDiagnostics.nodeSnapshots.forEach(function(ae){var af=ae.snapshot;ad.push({id:ae.nodeId,node:ae.address+":"+ae.apiPort,address:ae.address,ffRepoTotal:af.flowFileRepositoryStorageUsage.totalSpace,ffRepoUsed:af.flowFileRepositoryStorageUsage.usedSpace,ffRepoFree:af.flowFileRepositoryStorageUsage.freeSpace,ffRepoUtil:af.flowFileRepositoryStorageUsage.utilization})});y.rowCount=ad.length;y.dataView.setItems(ad);y.dataView.reSort();y.grid.invalidate()}else{y.rowCount=0}}function w(ad){if(W.isDefinedAndNotNull(ad.systemDiagnostics)&&W.isDefinedAndNotNull(ad.systemDiagnostics.nodeSnapshots)){var ac=[];ad.systemDiagnostics.nodeSnapshots.forEach(function(ae){var af=ae.snapshot;af.contentRepositoryStorageUsage.forEach(function(ag){ac.push({id:ae.nodeId+":"+ag.identifier,address:ae.address,node:ae.address+":"+ae.apiPort,contentRepoId:ag.identifier,contentRepoTotal:ag.totalSpace,contentRepoUsed:ag.usedSpace,contentRepoFree:ag.freeSpace,contentRepoUtil:ag.utilization})})});ab.rowCount=ac.length;ab.dataView.setItems(ac);ab.dataView.reSort();ab.grid.invalidate()}else{ab.rowCount=0}}function p(ad){if(W.isDefinedAndNotNull(ad.systemDiagnostics)&&W.isDefinedAndNotNull(ad.systemDiagnostics.nodeSnapshots)){var ac=[];ad.systemDiagnostics.nodeSnapshots.forEach(function(ae){var af=ae.snapshot;af.provenanceRepositoryStorageUsage.forEach(function(ag){ac.push({id:ae.nodeId+":"+ag.identifier,address:ae.address,node:ae.address+":"+ae.apiPort,provenanceRepoId:ag.identifier,provenanceRepoTotal:ag.totalSpace,provenanceRepoUsed:ag.usedSpace,provenanceRepoFree:ag.freeSpace,provenanceRepoUtil:ag.utilization})})});C.rowCount=ac.length;C.dataView.setItems(ac);C.dataView.reSort();C.grid.invalidate()}else{C.rowCount=0}}function f(ad){if(W.isDefinedAndNotNull(ad.systemDiagnostics)&&W.isDefinedAndNotNull(ad.systemDiagnostics.nodeSnapshots)){var ac=[];ad.systemDiagnostics.nodeSnapshots.forEach(function(ae){var af=ae.snapshot;ac.push({id:ae.nodeId,address:ae.address,node:ae.address+":"+ae.apiPort,version:af.versionInfo.niFiVersion,javaVendor:af.versionInfo.javaVendor,javaVersion:af.versionInfo.javaVersion,osName:af.versionInfo.osName,osVersion:af.versionInfo.osVersion,osArchitecture:af.versionInfo.osArchitecture})});s.dataView.setItems(ac);s.dataView.reSort();s.grid.invalidate()}}function F(){var ad=Q.urls.systemDiagnostics;var ac=I.ajax({type:"GET",url:ad,data:{nodewise:true},dataType:"json"}).done(function(af){var ae=M.systemDiagnostics;ae.forEach(function(ag){ag(af)})}).fail(g.handleAjaxError);return ac}function x(ae){var ag=new c.Data.DataView({inlineFilters:false});ag.setItems([],ae.tableIdColumn);ag.setFilterArgs({searchString:J(),property:I("#cluster-filter-type").combo("getSelectedOption").value});ag.setFilter(K);ae.onSort({columnId:ae.tableIdColumn,sortAsc:true},ag);var ad=ae.tableColumnModel;if(typeof ad==="function"){ad=ad()}var ac=new c.Grid("#"+ae.tableId,ag,ad,ae.tableOptions);ac.setSelectionModel(new c.RowSelectionModel());ac.setSortColumn(ae.tableIdColumn,true);ac.onSort.subscribe(function(ai,ah){ae.onSort({columnId:ah.sortCol.field,sortAsc:ah.sortAsc},ag,ae)});ag.onRowCountChanged.subscribe(function(ai,ah){ac.updateRowCount();ac.render();O(ae)});ag.onRowsChanged.subscribe(function(ai,ah){ac.invalidateRows(ah.rows);ac.render()});if(ae.tableOnClick){ac.onClick.subscribe(function(ak,ah){var aj=I(ak.target);var ai=ag.getItem(ah.row);ae.tableOnClick(ak,ah,aj,ai)})}var af=I("#"+ae.tableId).data("gridInstance",ac);if(typeof ae.createTableOnEnter==="function"){af.on("mouseenter","div.slick-cell",ae.createTableOnEnter(ac))}if(typeof ae.cleanUpTable==="function"){ac.onViewportChanged.subscribe(function(ai,ah){ae.cleanUpTable(af)})}ae.dataView=ag;ae.grid=ac}function o(ae){var ac=ae.cluster;if(W.isDefinedAndNotNull(ac.nodes)){var af=L.grid;var ad=af.getData();L.rowCount=ac.nodes.length;ad.setItems(ac.nodes);ad.reSort();af.invalidate();I("#cluster-last-refreshed").text(ac.generated)}else{I("#total-nodes").text("0")}}function k(){var ac=I.ajax({type:"GET",url:Q.urls.cluster,dataType:"json"}).done(function(ae){var ad=M.cluster;ad.forEach(function(af){af(ae)})}).fail(g.handleAjaxError);return ac}function i(ac){var ad=ac.grid;if(W.isDefinedAndNotNull(ad)){ad.resizeCanvas()}P();I("#cluster-filter-type").combo({options:ac.filterOptions,select:function(ae){n()}});O(ac)}var G={init:function(){I("#node-details-dialog").modal({scrollableContentStyle:"scrollable",headerText:"Node Details",buttons:[{buttonText:"Ok",color:{base:"#728E9B",hover:"#004849",text:"#ffffff"},handler:{click:function(){I("#node-details-dialog").modal("hide")}}}],handler:{close:function(){I("#node-address").text("");I("#node-id").text("");I("#node-events").empty()}}});I("#cluster-filter").keyup(function(){n()});var ac={};Q.data=Q.data.filter(function(ad){ad.authorized=ad.isAuthorized();ac[ad.name]=ad.authorized;if(ad.authorized){return true}else{return false}});T=T.filter(function(ae){var ad=ae.data.dataSet;if(ac[ad]){return true}else{return false}});T.forEach(function(ad){A[ad.name]=ad;var ae=M[ad.data.dataSet];if(ae){M[ad.data.dataSet]=ae.concat([ad.data.update])}else{M[ad.data.dataSet]=[ad.data.update]}});I("#cluster-tabs").tabbs({tabStyle:"tab",selectedTabStyle:"selected-tab",scrollableTabContentStyle:"scrollable",tabs:T,select:function(){var ae=I(this).text();var ad=A[ae];if(ad){ad.onTabSelected(ad)}else{console.error("Failed to match tab: ",ae,A)}}});I(window).resize(function(){G.resetTableSize()});T.forEach(function(ae){try{ae.init(ae)}catch(ad){console.error("Failed to initialize tab",ae,ad)}})},resetTableSize:function(){T.forEach(function(ac){if(ac&&ac.grid){ac.grid.resizeCanvas()}})},loadClusterTable:function(){var ad=Q.data.map(function(af){var ae=af.update();return ae});var ac=I.when.apply(I,ad);ac=ac.done(function(ae){O(L)});return ac}};return G}));
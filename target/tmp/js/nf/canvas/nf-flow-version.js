(function(a,b){if(typeof define==="function"&&define.amd){define(["jquery","nf.ng.Bridge","nf.ErrorHandler","nf.Dialog","nf.Storage","nf.Common","nf.Client","nf.CanvasUtils","nf.ProcessGroup","nf.ProcessGroupConfiguration","nf.Graph","nf.Birdseye"],function(i,k,m,h,j,f,n,g,d,e,l,c){return(nf.FlowVersion=b(i,k,m,h,j,f,n,g,d,e,l,c))})}else{if(typeof exports==="object"&&typeof module==="object"){module.exports=(nf.FlowVerison=b(require("jquery"),require("nf.ng.Bridge"),require("nf.ErrorHandler"),require("nf.Dialog"),require("nf.Storage"),require("nf.Common"),require("nf.Client"),require("nf.CanvasUtils"),require("nf.ProcessGroup"),require("nf.ProcessGroupConfiguration"),require("nf.Graph"),require("nf.Birdseye")))}else{nf.FlowVersion=b(a.$,a.nf.ng.Bridge,a.nf.ErrorHandler,a.nf.Dialog,a.nf.Storage,a.nf.Common,a.nf.Client,a.nf.CanvasUtils,a.nf.ProcessGroup,a.nf.ProcessGroupConfiguration,a.nf.Graph,a.nf.Birdseye)}}}(this,function(u,j,b,h,n,D,f,J,q,y,m,d){var o=null;var t={forceFitColumns:true,enableTextSelectionOnCells:true,enableCellNavigation:true,enableColumnReorder:false,autoEdit:false,multiSelect:false,rowHeight:24};var K=function(){u("#save-flow-version-registry-combo").combo("destroy").hide();u("#save-flow-version-bucket-combo").combo("destroy").hide();u("#save-flow-version-label").text("");u("#save-flow-version-registry").text("").hide();u("#save-flow-version-bucket").text("").hide();u("#save-flow-version-name").text("").hide();u("#save-flow-version-description").removeClass("unset blank").text("").hide();u("#save-flow-version-name-field").val("").hide();u("#save-flow-version-description-field").val("").hide();u("#save-flow-version-change-comments").val("");u("#save-flow-version-process-group-id").removeData("versionControlInformation").removeData("revision").text("");u("#save-flow-version-action").text("")};var C=function(){u("#revert-local-changes-process-group-id").text("");z(u("#revert-local-changes-table"),u("#revert-local-changes-filter"),u("#displayed-revert-local-changes-entries"),u("#total-revert-local-changes-entries"))};var a=function(){z(u("#show-local-changes-table"),u("#show-local-changes-filter"),u("#displayed-show-local-changes-entries"),u("#total-show-local-changes-entries"))};var z=function(V,R,T,U){var Q=V.data("gridInstance");if(D.isDefinedAndNotNull(Q)){Q.setSelectedRows([]);Q.resetActiveCell();var S=Q.getData();S.setItems([]);S.setFilterArgs({searchString:""})}R.val("");T.text("0");U.text("0")};var l=function(){var Q=u("#import-flow-version-table").data("gridInstance");if(D.isDefinedAndNotNull(Q)){Q.setSelectedRows([]);Q.resetActiveCell();var R=Q.getData();R.setItems([])}};var P=function(){u("#import-flow-version-dialog").removeData("pt");u("#import-flow-version-registry-combo").combo("destroy").hide();u("#import-flow-version-bucket-combo").combo("destroy").hide();u("#import-flow-version-name-combo").combo("destroy").hide();u("#import-flow-version-registry").text("").hide();u("#import-flow-version-bucket").text("").hide();u("#import-flow-version-name").text("").hide();l();u("#import-flow-version-process-group-id").removeData("versionControlInformation").removeData("revision").text("");u("#import-flow-version-container").hide();u("#import-flow-version-label").text("")};var N=function(S,Q,U,R,T,V){return u.ajax({type:"GET",url:"../nifi-api/flow/registries",dataType:"json"}).done(function(W){var X=[];if(D.isDefinedAndNotNull(W.registries)&&W.registries.length>0){W.registries.sort(function(Z,Y){return Z.registry.name>Y.registry.name});u.each(W.registries,function(Z,aa){var Y=aa.registry;X.push({text:Y.name,value:Y.id,description:D.escapeHtml(Y.description)})})}else{X.push({text:"No available registries",value:null,optionClass:"unset",disabled:true})}Q.combo({options:X,select:function(Y){k(S,Y,U,R,T,V)}})}).fail(b.handleAjaxError)};var O=function(Q,T,R,S,U){return u.ajax({type:"GET",url:"../nifi-api/flow/registries/"+encodeURIComponent(Q)+"/buckets",dataType:"json"}).done(function(V){var W=[];if(D.isDefinedAndNotNull(V.buckets)&&V.buckets.length>0){V.buckets.sort(function(Y,X){if(Y.permissions.canRead===false&&X.permissions.canRead===false){return 0}else{if(Y.permissions.canRead===false){return -1}else{if(X.permissions.canRead===false){return 1}}}return Y.bucket.name>X.bucket.name});u.each(V.buckets,function(Y,X){if(X.permissions.canRead===true){var Z=X.bucket;if(U(X)){W.push({text:Z.name,value:Z.id,description:D.escapeHtml(Z.description)})}}})}if(W.length===0){W.push({text:"No available buckets",value:null,optionClass:"unset",disabled:true});if(D.isDefinedAndNotNull(R)){R.combo("destroy").combo({options:[{text:"No available flows",value:null,optionClass:"unset",disabled:true}]})}}T.combo("destroy").combo({options:W,select:S})}).fail(b.handleAjaxError)};var k=function(R,U,T,Q,S,W){var V=function(){T.combo("destroy").combo({options:[{text:"No available buckets",value:null,optionClass:"unset",disabled:true}]});if(D.isDefinedAndNotNull(Q)){Q.combo("destroy").combo({options:[{text:"No available flows",value:null,optionClass:"unset",disabled:true}]})}R.modal("refreshButtons")};if(U.disabled===true){V()}else{T.combo("destroy").combo({options:[{text:"Loading buckets...",value:null,optionClass:"unset",disabled:true}]});if(D.isDefinedAndNotNull(Q)){Q.combo("destroy").combo({options:[{text:"Loading flows...",value:null,optionClass:"unset",disabled:true}]});l()}O(U.value,T,Q,S,W).fail(function(){V()})}};var c=function(Q){u("#save-flow-version-dialog").modal("refreshButtons")};var w=function(){var Q=u("#save-flow-version-process-group-id").text();var S=u("#save-flow-version-process-group-id").data("revision");var V={processGroupRevision:f.getRevision({revision:{version:S.version}}),disconnectedNodeAcknowledged:n.isDisconnectionAcknowledged()};var T=u("#save-flow-version-process-group-id").data("versionControlInformation");if(D.isDefinedAndNotNull(T)){V.versionedFlow={registryId:T.registryId,bucketId:T.bucketId,flowId:T.flowId,comments:u("#save-flow-version-change-comments").val(),action:u("#save-flow-version-action").text()}}else{var R=u("#save-flow-version-registry-combo").combo("getSelectedOption");var U=u("#save-flow-version-bucket-combo").combo("getSelectedOption");V.versionedFlow={registryId:R.value,bucketId:U.value,flowName:u("#save-flow-version-name-field").val(),description:u("#save-flow-version-description-field").val(),comments:u("#save-flow-version-change-comments").val(),action:u("#save-flow-version-action").text()}}return u.ajax({type:"POST",data:JSON.stringify(V),url:"../nifi-api/versions/process-groups/"+encodeURIComponent(Q),dataType:"json",contentType:"application/json"}).done(function(W){if("SYNC_FAILURE"===W.versionControlInformation.state){h.showOkDialog({headerText:"Error",dialogContent:W.versionControlInformation.stateExplanation})}}).fail(b.handleAjaxError)};var L=function(Q,S){var R=function(U,T){var W=D.isBlank(U[Q.columnId]);var V=D.isBlank(T[Q.columnId]);if(W&&V){return 0}else{if(W){return 1}else{if(V){return -1}}}return U[Q.columnId]===T[Q.columnId]?0:U[Q.columnId]>T[Q.columnId]?1:-1};S.sort(R,Q.sortAsc)};var s=function(){var V=u("#import-flow-version-table");var S=function(aa,X,Z,Y,W){return D.escapeHtml(Z)};var R=function(ad,X,ac,Z,W){var ab=new Date();var Y=ab.getTimezoneOffset()*60*1000;var aa=new Date(W.timestamp+Y+o);return D.formatDateTime(aa)};var Q=[{id:"version",name:"Version",field:"version",formatter:S,sortable:true,resizable:true,width:75,maxWidth:75},{id:"timestamp",name:"Created",field:"timestamp",formatter:R,sortable:true,resizable:true,width:175,maxWidth:175},{id:"changeComments",name:"Comments",field:"comments",sortable:true,resizable:true,formatter:S}];var U=new Slick.Data.DataView({inlineFilters:false});L({columnId:"version",sortAsc:false},U);var T=new Slick.Grid(V,U,Q,t);T.setSelectionModel(new Slick.RowSelectionModel());T.registerPlugin(new Slick.AutoTooltips());T.setSortColumn("version",false);T.onSort.subscribe(function(X,W){L({columnId:W.sortCol.id,sortAsc:W.sortAsc},U)});T.onSelectedRowsChanged.subscribe(function(X,W){u("#import-flow-version-dialog").modal("refreshButtons")});T.onDblClick.subscribe(function(X,W){if(u("#import-flow-version-label").is(":visible")){r()}else{A().always(function(){u("#import-flow-version-dialog").modal("hide")})}});U.onRowCountChanged.subscribe(function(X,W){T.updateRowCount();T.render()});U.onRowsChanged.subscribe(function(X,W){T.invalidateRows(W.rows);T.render()});U.syncGridSelection(T,true);V.data("gridInstance",T)};var I=function(X,U,Z,R){var Y=function(){return U.val()};var T=function(){var ac=X.data("gridInstance");if(D.isDefinedAndNotNull(ac)){var ad=ac.getData();ad.setFilterArgs({searchString:Y()});ad.refresh()}};var S=function(af,ac){if(ac.searchString===""){return true}try{var aj=new RegExp(ac.searchString,"i")}catch(ah){return false}var ad=af.componentId.search(aj)>=0;var ai=af.differenceType.search(aj)>=0;var ae=af.difference.search(aj)>=0;var ag=false;if(D.isDefinedAndNotNull(af.componentName)){ag=af.componentName.search(aj)>=0}return ad||ag||ai||ae};U.on("keyup",function(){T()});var W=function(ag,ad,af,ae,ac){return D.escapeHtml(af)};var ab=function(ah,ad,ag,af,ac){var ae="";if(ac.differenceType!=="Component Removed"&&D.isDefinedAndNotNull(ac.processGroupId)){ae+='<div class="pointer go-to-component fa fa-long-arrow-right" title="Go To"></div>'}return ae};var aa=[{id:"componentName",name:"Component Name",field:"componentName",formatter:W,sortable:true,resizable:true},{id:"differenceType",name:"Change Type",field:"differenceType",formatter:W,sortable:true,resizable:true},{id:"difference",name:"Difference",field:"difference",formatter:W,sortable:true,resizable:true},{id:"actions",name:"&nbsp;",formatter:ab,sortable:false,resizable:false,width:25}];var Q=new Slick.Data.DataView({inlineFilters:false});Q.setFilterArgs({searchString:Y()});Q.setFilter(S);L({columnId:"componentName",sortAsc:true},Q);var V=new Slick.Grid(X,Q,aa,t);V.setSelectionModel(new Slick.RowSelectionModel());V.registerPlugin(new Slick.AutoTooltips());V.setSortColumn("componentName",true);V.onSort.subscribe(function(ad,ac){L({columnId:ac.sortCol.id,sortAsc:ac.sortAsc},Q)});V.onClick.subscribe(function(af,ad){var ae=u(af.target);var ac=Q.getItem(ad.row);if(V.getColumns()[ad.cell].id==="actions"){if(ae.hasClass("go-to-component")){if(ac.componentType==="Controller Service"){y.showConfiguration(ac.processGroupId).done(function(){y.selectControllerService(ac.componentId);X.closest(".large-dialog").modal("hide")})}else{J.showComponent(ac.processGroupId,ac.componentId).done(function(){X.closest(".large-dialog").modal("hide")})}}}});Q.onRowCountChanged.subscribe(function(ad,ac){V.updateRowCount();V.render();Z.text(D.formatInteger(ac.current))});Q.onRowsChanged.subscribe(function(ad,ac){V.invalidateRows(ac.rows);V.render()});Q.syncGridSelection(V,true);X.data("gridInstance",V);Z.text("0");R.text("0")};var G=function(){var T=u("#new-process-group-dialog").data("pt");u("#import-flow-version-dialog").data("pt",T);var Q=u("#import-flow-version-registry-combo").combo("destroy").combo({options:[{text:"Loading registries...",value:null,optionClass:"unset",disabled:true}]}).show();var S=u("#import-flow-version-bucket-combo").combo("destroy").combo({options:[{text:"Loading buckets...",value:null,optionClass:"unset",disabled:true}]}).show();var R=u("#import-flow-version-name-combo").combo("destroy").combo({options:[{text:"Loading flows...",value:null,optionClass:"unset",disabled:true}]}).show();N(u("#import-flow-version-dialog"),Q,S,R,E,function(U){return true}).done(function(){u("#import-flow-version-dialog").modal("setHeaderText","Import Version").modal("setButtonModel",[{buttonText:"Import",color:{base:"#728E9B",hover:"#004849",text:"#ffffff"},disabled:M,handler:{click:function(){A().always(function(){u("#import-flow-version-dialog").modal("hide")})}}},{buttonText:"Cancel",color:{base:"#E3E8EB",hover:"#C7D2D7",text:"#004849"},handler:{click:function(){u(this).modal("hide")}}}]).modal("show");u("#new-process-group-dialog").modal("hide")})};var x=function(R,U,Q){var S=u("#import-flow-version-table").data("gridInstance");var T=S.getData();T.beginUpdate();S.setSelectedRows([]);S.resetActiveCell();T.setItems([]);return u.ajax({type:"GET",url:"../nifi-api/flow/registries/"+encodeURIComponent(R)+"/buckets/"+encodeURIComponent(U)+"/flows/"+encodeURIComponent(Q)+"/versions",dataType:"json"}).done(function(V){if(D.isDefinedAndNotNull(V.versionedFlowSnapshotMetadataSet)&&V.versionedFlowSnapshotMetadataSet.length>0){u.each(V.versionedFlowSnapshotMetadataSet,function(X,W){T.addItem(u.extend({id:W.versionedFlowSnapshotMetadata.version},W.versionedFlowSnapshotMetadata))})}else{h.showOkDialog({headerText:"Flow Versions",dialogContent:"This flow does not have any versions available."})}}).fail(b.handleAjaxError).always(function(){T.endUpdate();T.reSort();S.invalidate()})};var F=function(Q,R,S){return u.ajax({type:"GET",url:"../nifi-api/flow/registries/"+encodeURIComponent(Q)+"/buckets/"+encodeURIComponent(R)+"/flows",dataType:"json"}).done(function(T){var U=[];if(D.isDefinedAndNotNull(T.versionedFlows)&&T.versionedFlows.length>0){T.versionedFlows.sort(function(W,V){return W.versionedFlow.flowName>V.versionedFlow.flowName});u.each(T.versionedFlows,function(W,V){var X=V.versionedFlow;U.push({text:X.flowName,value:X.flowId,description:D.escapeHtml(X.description)})})}else{U.push({text:"No available flows",value:null,optionClass:"unset",disabled:true})}u("#import-flow-version-name-combo").combo("destroy").combo({options:U,select:function(V){if(D.isDefinedAndNotNull(V.value)){S(Q,R,V.value)}else{var W=u("#import-flow-version-table").data("gridInstance");var X=W.getData();X.beginUpdate();X.setItems([]);X.endUpdate()}}})}).fail(b.handleAjaxError)};var p=function(R,S,Q){x(R,S,Q).done(function(){u("#import-flow-version-dialog").modal("refreshButtons")})};var E=function(R){l();if(D.isDefinedAndNotNull(R.value)){u("#import-flow-version-name-combo").combo("destroy").combo({options:[{text:"Loading flows...",value:null,optionClass:"unset",disabled:true}]});var Q=u("#import-flow-version-registry-combo").combo("getSelectedOption");F(Q.value,R.value,p)}else{u("#import-flow-version-name-combo").combo("destroy").combo({options:[{text:"No available flows",value:null,optionClass:"unset",disabled:true}]})}};var A=function(){var W=u("#import-flow-version-dialog").data("pt");var T=u("#import-flow-version-registry-combo").combo("getSelectedOption");var X=u("#import-flow-version-bucket-combo").combo("getSelectedOption");var Q=u("#import-flow-version-name-combo").combo("getSelectedOption");var S=u("#import-flow-version-table").data("gridInstance");var R=S.getSelectedRows();var V=S.getDataItem(R[0]);var U={revision:f.getRevision({revision:{version:0}}),disconnectedNodeAcknowledged:n.isDisconnectionAcknowledged(),component:{position:{x:W.x,y:W.y},versionControlInformation:{registryId:T.value,bucketId:X.value,flowId:Q.value,version:V.version}}};return u.ajax({type:"POST",data:JSON.stringify(U),url:"../nifi-api/process-groups/"+encodeURIComponent(J.getGroupId())+"/process-groups",dataType:"json",contentType:"application/json"}).done(function(Y){m.add({processGroups:[Y]},{selectAll:true});m.updateVisibility();d.refresh()}).fail(b.handleAjaxError)};var M=function(){var S=u("#import-flow-version-table").data("gridInstance");if(D.isDefinedAndNotNull(S)){var T=S.getSelectedRows();if(u("#import-flow-version-label").is(":visible")){if(T.length===1){var R=S.getDataItem(T[0]);var Q=parseInt(u("#import-flow-version-label").text(),10);return Q===R.version}else{return true}}else{return T.length!==1}}else{return true}};var r=function(){var ab=null;var S=null;var V=false;var R=u("#import-flow-version-process-group-id").text();var ac=u("#import-flow-version-process-group-id").data("revision");var ad=u("#import-flow-version-process-group-id").data("versionControlInformation");var Q=u("#import-flow-version-table").data("gridInstance");var Z=Q.getSelectedRows();var W=Q.getDataItem(Z[0]);u("#change-version-status-dialog").modal("setButtonModel",[{buttonText:"Stop",color:{base:"#728E9B",hover:"#004849",text:"#ffffff"},handler:{click:function(){V=true;u("#change-version-status-dialog").modal("setButtonModel",[]);if(ab!==null){clearTimeout(ab);aa()}}}}]);u("#import-flow-version-dialog").modal("hide");var T=function(){var ae={processGroupRevision:f.getRevision({revision:{version:ac.version}}),disconnectedNodeAcknowledged:n.isDisconnectionAcknowledged(),versionControlInformation:{groupId:R,registryId:ad.registryId,bucketId:ad.bucketId,flowId:ad.flowId,version:W.version}};return u.ajax({type:"POST",data:JSON.stringify(ae),url:"../nifi-api/versions/update-requests/process-groups/"+encodeURIComponent(R),dataType:"json",contentType:"application/json"}).done(function(){g(0);u("#change-version-status-dialog").modal("show")}).fail(b.handleAjaxError)};var X=function(){Y().done(U)};var Y=function(){return u.ajax({type:"GET",url:S.uri,dataType:"json"}).fail(aa).fail(b.handleAjaxError)};var aa=function(){if(V===true){u("#change-version-status-message").text("The change version request has been cancelled.");u("#change-version-status-dialog").modal("setButtonModel",[{buttonText:"Close",color:{base:"#728E9B",hover:"#004849",text:"#ffffff"},handler:{click:function(){u(this).modal("hide")}}}])}if(D.isDefinedAndNotNull(S)){u.ajax({type:"DELETE",url:S.uri+"?"+u.param({disconnectedNodeAcknowledged:n.isDisconnectionAcknowledged()}),dataType:"json"}).done(function(ae){S=ae.request;e(R);if(D.isDefinedAndNotNull(S.failureReason)){u("#change-version-status-dialog").modal("hide");h.showOkDialog({headerText:"Change Version",dialogContent:D.escapeHtml(S.failureReason)})}else{g(S.percentCompleted);u("#change-version-status-message").text("This Process Group version has changed.");u("#change-version-status-dialog").modal("setButtonModel",[{buttonText:"Close",color:{base:"#728E9B",hover:"#004849",text:"#ffffff"},handler:{click:function(){u(this).modal("hide")}}}])}})}};var U=function(ae){S=ae.request;if(S.complete===true||V===true){aa()}else{g(S.percentCompleted);u("#change-version-status-message").text(S.state);ab=setTimeout(function(){ab=null;X()},2000)}};T().done(U)};var B=function(Q){return u.Deferred(function(R){if(Q===J.getGroupId()){u.ajax({type:"GET",url:"../nifi-api/versions/process-groups/"+encodeURIComponent(Q),dataType:"json"}).done(function(T){R.resolve(T)}).fail(function(){R.reject()})}else{var S=q.get(Q);if(S.permissions.canRead===true&&S.permissions.canWrite===true){R.resolve({processGroupRevision:S.revision,versionControlInformation:S.component.versionControlInformation})}else{R.reject()}}}).promise()};var H=function(Q,R){if(J.getGroupId()===Q){j.injector.get("breadcrumbsCtrl").updateVersionControlInformation(Q,R);j.digest()}else{q.reload(Q)}};var e=function(Q){if(J.getGroupId()===Q){u.ajax({type:"GET",url:"../nifi-api/flow/process-groups/"+encodeURIComponent(Q),dataType:"json"}).done(function(S){m.set(S.processGroupFlow.flow);m.updateVisibility();var R=j.injector.get("breadcrumbsCtrl");R.resetBreadcrumbs();R.generateBreadcrumbs(S.processGroupFlow.breadcrumb);j.digest()}).fail(b.handleAjaxError)}else{q.reload(Q)}};var g=function(R){var S=u("#change-version-percent-complete");S.find("div.progress-label").remove();S.find("md-progress-linear").remove();var Q=u('<div class="progress-label"></div>').text(R+"%");(j.injector.get("$compile")(u('<md-progress-linear ng-cloak ng-value="'+R+'" class="md-hue-2" md-mode="determinate" aria-label="Searching Queue"></md-progress-linear>'))(j.rootScope)).appendTo(S);S.append(Q)};var v=function(Q,R,X,W){var S=X.data("gridInstance");var T=S.getData();T.beginUpdate();S.setSelectedRows([]);S.resetActiveCell();T.setItems([]);var V=B(Q).done(function(Y){if(D.isDefinedAndNotNull(Y.versionControlInformation)){var Z=Y.versionControlInformation;R.text("The following changes have been made to "+Z.flowName+" (Version "+Z.version+").")}else{h.showOkDialog({headerText:"Change Version",dialogContent:"This Process Group is not currently under version control."})}});var U=u.ajax({type:"GET",url:"../nifi-api/process-groups/"+encodeURIComponent(Q)+"/local-modifications",dataType:"json"}).done(function(Y){if(D.isDefinedAndNotNull(Y.componentDifferences)&&Y.componentDifferences.length>0){var Z=0;u.each(Y.componentDifferences,function(ab,aa){u.each(aa.differences,function(ac,ad){T.addItem({id:Z++,componentId:aa.componentId,componentName:aa.componentName,componentType:aa.componentType,processGroupId:aa.processGroupId,differenceType:ad.differenceType,difference:ad.difference})})});T.endUpdate();T.reSort();S.invalidate();W.text(D.formatInteger(Z))}else{h.showOkDialog({headerText:"Local Changes",dialogContent:"This Process Group does not have any local changes."})}}).fail(b.handleAjaxError);return u.when(V,U)};var i=function(Q){B(Q).done(function(U){if(D.isDefinedAndNotNull(U.versionControlInformation)){var Z=null;var Y=null;var V=false;u("#change-version-status-dialog").modal("setButtonModel",[{buttonText:"Stop",color:{base:"#728E9B",hover:"#004849",text:"#ffffff"},handler:{click:function(){V=true;u("#change-version-status-dialog").modal("setButtonModel",[]);if(Z!==null){clearTimeout(Z);X()}}}}]);u("#import-flow-version-dialog").modal("hide");var S=function(){var aa={processGroupRevision:f.getRevision({revision:{version:U.processGroupRevision.version}}),disconnectedNodeAcknowledged:n.isDisconnectionAcknowledged(),versionControlInformation:U.versionControlInformation};return u.ajax({type:"POST",data:JSON.stringify(aa),url:"../nifi-api/versions/revert-requests/process-groups/"+encodeURIComponent(Q),dataType:"json",contentType:"application/json"}).done(function(){g(0);u("#change-version-status-dialog").modal("show")}).fail(b.handleAjaxError)};var T=function(){W().done(R)};var W=function(){return u.ajax({type:"GET",url:Y.uri,dataType:"json"}).fail(X).fail(b.handleAjaxError)};var X=function(){if(V===true){u("#change-version-status-message").text("The revert request has been cancelled.");u("#change-version-status-dialog").modal("setButtonModel",[{buttonText:"Close",color:{base:"#728E9B",hover:"#004849",text:"#ffffff"},handler:{click:function(){u(this).modal("hide")}}}])}if(D.isDefinedAndNotNull(Y)){u.ajax({type:"DELETE",url:Y.uri+"?"+u.param({disconnectedNodeAcknowledged:n.isDisconnectionAcknowledged()}),dataType:"json"}).done(function(aa){Y=aa.request;e(Q);if(D.isDefinedAndNotNull(Y.failureReason)){u("#change-version-status-dialog").modal("hide");h.showOkDialog({headerText:"Revert Local Changes",dialogContent:D.escapeHtml(Y.failureReason)})}else{g(Y.percentCompleted);u("#change-version-status-message").text("This Process Group version has changed.");u("#change-version-status-dialog").modal("setButtonModel",[{buttonText:"Close",color:{base:"#728E9B",hover:"#004849",text:"#ffffff"},handler:{click:function(){u(this).modal("hide")}}}])}})}};var R=function(aa){Y=aa.request;if(Y.complete===true||V===true){X()}else{g(Y.percentCompleted);u("#change-version-status-message").text(Y.state);Z=setTimeout(function(){Z=null;T()},2000)}};S().done(R)}else{h.showOkDialog({headerText:"Revert Changes",dialogContent:"This Process Group is not currently under version control."})}}).fail(b.handleAjaxError)};return{init:function(Q){o=Q;u("#save-flow-version-dialog").modal({scrollableContentStyle:"scrollable",headerText:"Save Flow Version",buttons:[{buttonText:"Save",color:{base:"#728E9B",hover:"#004849",text:"#ffffff"},disabled:function(){if(u("#save-flow-version-registry-combo").is(":visible")){var R=u("#save-flow-version-registry-combo").combo("getSelectedOption");var S=u("#save-flow-version-bucket-combo").combo("getSelectedOption");if(D.isDefinedAndNotNull(R)&&D.isDefinedAndNotNull(S)){return R.disabled===true||S.disabled===true}else{return true}}else{return false}},handler:{click:function(){var R=u("#save-flow-version-process-group-id").text();w().done(function(S){H(R,S.versionControlInformation)});u(this).modal("hide")}}},{buttonText:"Cancel",color:{base:"#E3E8EB",hover:"#C7D2D7",text:"#004849"},handler:{click:function(){u(this).modal("hide")}}}],handler:{close:function(){K()}}});u("#import-flow-version-dialog").modal({scrollableContentStyle:"scrollable",handler:{close:function(){P()}}});u("#change-version-status-dialog").modal({scrollableContentStyle:"scrollable",headerText:"Change Flow Version",handler:{close:function(){u("#change-version-status-dialog").modal("setButtonModel",[])}}});u("#revert-local-changes-dialog").modal({scrollableContentStyle:"scrollable",headerText:"Revert Local Changes",buttons:[{buttonText:"Revert",color:{base:"#728E9B",hover:"#004849",text:"#ffffff"},handler:{click:function(){var R=u("#revert-local-changes-process-group-id").text();i(R);u(this).modal("hide")}}},{buttonText:"Cancel",color:{base:"#E3E8EB",hover:"#C7D2D7",text:"#004849"},handler:{click:function(){u(this).modal("hide")}}}],handler:{close:function(){C()}}});u("#show-local-changes-dialog").modal({scrollableContentStyle:"scrollable",headerText:"Show Local Changes",buttons:[{buttonText:"Close",color:{base:"#728E9B",hover:"#004849",text:"#ffffff"},handler:{click:function(){u(this).modal("hide")}}}],handler:{close:function(){a()}}});u("#import-process-group-link").on("click",function(){G()});s();I(u("#revert-local-changes-table"),u("#revert-local-changes-filter"),u("#displayed-revert-local-changes-entries"),u("#total-revert-local-changes-entries"));I(u("#show-local-changes-table"),u("#show-local-changes-filter"),u("#displayed-show-local-changes-entries"),u("#total-show-local-changes-entries"))},showFlowVersionDialog:function(Q,S){var R=true;return u.Deferred(function(T){B(Q).done(function(U){if(D.isDefinedAndNotNull(U.versionControlInformation)){var X=U.versionControlInformation;u("#save-flow-version-registry").text(X.registryName).show();u("#save-flow-version-bucket").text(X.bucketName).show();if(S=="COMMIT"){u("#save-flow-version-label").text(X.version+1).show()}else{u("#save-flow-version-label").hide()}u("#save-flow-version-name").text(X.flowName).show();D.populateField("save-flow-version-description",X.flowDescription);u("#save-flow-version-description").show();u("#save-flow-version-process-group-id").data("versionControlInformation",X);u("#save-flow-version-action").text(S);u("#save-flow-version-label").css("margin-top","-15px");R=false;T.resolve()}else{var V=u("#save-flow-version-registry-combo").combo("destroy").combo({options:[{text:"Loading registries...",value:null,optionClass:"unset",disabled:true}]}).show();var W=u("#save-flow-version-bucket-combo").combo("destroy").combo({options:[{text:"Loading buckets...",value:null,optionClass:"unset",disabled:true}]}).show();u("#save-flow-version-label").text(1).show();u("#save-flow-version-name-field").show();u("#save-flow-version-description-field").show();u("#save-flow-version-action").text(S);u("#save-flow-version-label").css("margin-top","0");N(u("#save-flow-version-dialog"),V,W,null,c,function(Y){return Y.permissions.canWrite===true}).done(function(){T.resolve()}).fail(function(){T.reject()})}u("#save-flow-version-process-group-id").data("revision",U.processGroupRevision).text(Q)}).fail(b.handleAjaxError)}).done(function(){u("#save-flow-version-dialog").modal("show");if(R){u("#save-flow-version-name-field").focus()}else{u("#save-flow-version-change-comments").focus()}}).fail(function(){u("#save-flow-version-dialog").modal("refreshButtons")}).promise()},revertLocalChanges:function(Q){v(Q,u("#revert-local-changes-message"),u("#revert-local-changes-table"),u("#total-revert-local-changes-entries")).done(function(){u("#revert-local-changes-process-group-id").text(Q);u("#revert-local-changes-dialog").modal("show")})},showLocalChanges:function(Q){v(Q,u("#show-local-changes-message"),u("#show-local-changes-table"),u("#total-show-local-changes-entries")).done(function(){u("#show-local-changes-dialog").modal("show")})},showChangeFlowVersionDialog:function(Q){return u.Deferred(function(R){B(Q).done(function(S){if(D.isDefinedAndNotNull(S.versionControlInformation)){var T=S.versionControlInformation;u("#import-flow-version-registry").text(T.registryName).show();u("#import-flow-version-bucket").text(T.bucketName).show();u("#import-flow-version-name").text(T.flowName).show();u("#import-flow-version-container").show();u("#import-flow-version-label").text(T.version);u("#import-flow-version-process-group-id").data("versionControlInformation",T).data("revision",S.processGroupRevision).text(Q);x(T.registryId,T.bucketId,T.flowId).done(function(){R.resolve()}).fail(function(){h.showOkDialog({headerText:"Change Version",dialogContent:"Unable to load available versions for this Process Group."});R.reject()})}else{h.showOkDialog({headerText:"Change Version",dialogContent:"This Process Group is not currently under version control."});R.reject()}}).fail(b.handleAjaxError)}).done(function(){u("#import-flow-version-dialog").modal("setHeaderText","Change Version").modal("setButtonModel",[{buttonText:"Change",color:{base:"#728E9B",hover:"#004849",text:"#ffffff"},disabled:M,handler:{click:function(){r()}}},{buttonText:"Cancel",color:{base:"#E3E8EB",hover:"#C7D2D7",text:"#004849"},handler:{click:function(){u(this).modal("hide")}}}]).modal("show")}).promise()},stopVersionControl:function(Q){h.showYesNoDialog({headerText:"Stop Version Control",dialogContent:"Are you sure you want to stop version control?",noText:"Cancel",yesText:"Disconnect",yesHandler:function(){u.ajax({type:"GET",url:"../nifi-api/versions/process-groups/"+encodeURIComponent(Q),dataType:"json"}).done(function(R){if(D.isDefinedAndNotNull(R.versionControlInformation)){var S=f.getRevision({revision:{version:R.processGroupRevision.version}});u.ajax({type:"DELETE",url:"../nifi-api/versions/process-groups/"+encodeURIComponent(Q)+"?"+u.param(u.extend({disconnectedNodeAcknowledged:n.isDisconnectionAcknowledged()},S)),dataType:"json",contentType:"application/json"}).done(function(T){H(Q,undefined);h.showOkDialog({headerText:"Disconnect",dialogContent:"This Process Group is no longer under version control."})}).fail(b.handleAjaxError)}else{h.showOkDialog({headerText:"Disconnect",dialogContent:"This Process Group is not currently under version control."})}}).fail(b.handleAjaxError)}})}}}));
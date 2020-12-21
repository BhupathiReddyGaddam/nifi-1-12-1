(function(a,b){if(typeof define==="function"&&define.amd){define(["jquery","d3","Slick","nf.Client","nf.Shell","nf.ProcessGroupConfiguration","nf.CanvasUtils","nf.ErrorHandler","nf.FilteredDialogCommon","nf.Dialog","nf.Storage","nf.Common","nf.ControllerService","nf.ProcessGroup","nf.PolicyManagement","nf.ComponentState","nf.ComponentVersion","nf.ng.Bridge"],function(g,r,o,t,q,l,n,i,f,m,h,k,d,j,p,c,e,s){return(nf.ControllerServices=b(g,r,o,t,q,l,n,i,f,m,h,k,d,j,p,c,e,s))})}else{if(typeof exports==="object"&&typeof module==="object"){module.exports=(nf.ControllerServices=b(require("jquery"),require("d3"),require("Slick"),require("nf.Client"),require("nf.Shell"),require("nf.ProcessGroupConfiguration"),require("nf.CanvasUtils"),require("nf.ErrorHandler"),require("nf.FilteredDialogCommon"),require("nf.Dialog"),require("nf.Storage"),require("nf.Common"),require("nf.ControllerService"),require("nf.ProcessGroup"),require("nf.PolicyManagement"),require("nf.ComponentState"),require("nf.ComponentVersion"),require("nf.ng.Bridge")))}else{nf.ControllerServices=b(a.$,a.d3,a.Slick,a.nf.Client,a.nf.Shell,a.nf.ProcessGroupConfiguration,a.nf.CanvasUtils,a.nf.ErrorHandler,a.nf.FilteredDialogCommon,a.nf.Dialog,a.nf.Storage,a.nf.Common,a.nf.ControllerService,a.nf.ProcessGroup,a.nf.PolicyManagement,a.nf.ComponentState,a.nf.ComponentVersion,a.nf.ng.Bridge)}}}(this,function(x,H,a,f,F,A,K,b,J,i,p,G,I,u,s,c,q,m){var h=null;var j=false;var B={urls:{api:"../nifi-api",controllerServiceTypes:"../nifi-api/flow/controller-service-types"}};var w={forceFitColumns:true,enableTextSelectionOnCells:true,enableCellNavigation:true,enableColumnReorder:false,autoEdit:false,multiSelect:false,rowHeight:24};var k=function(N){return N.restricted===false||G.canAccessComponentRestrictions(N.explicitRestrictions)};var e=function(){return x("#controller-service-type-filter").val()};var y=function(){var N=x("#controller-service-types-table").data("gridInstance");if(G.isDefinedAndNotNull(N)){var O=N.getData();O.setFilterArgs({searchString:e()});O.refresh();x("#new-controller-service-dialog").modal("refreshButtons");if(O.getLength()>0){J.choseFirstRow(N);N.scrollRowToTop(0)}}};var z=function(){x("#controller-service-type-description").attr("title","").text("");x("#controller-service-type-name").attr("title","").text("");x("#controller-service-type-bundle").attr("title","").text("");x("#selected-controller-service-name").text("");x("#selected-controller-service-type").text("").removeData("bundle");x("#controller-service-description-container").hide()};var t=function(){z();var N=x("#controller-service-types-table").data("gridInstance");N.resetActiveCell()};var E=function(V,Q){var T=M(V,Q);var P=true;if(T){var U=x("#controller-service-tag-cloud").tagcloud("getSelectedTags");var S=U.length>0;if(S){P=n(U,V.tags)}}var R=true;if(T&&P){var N=x("#controller-service-bundle-group-combo").combo("getSelectedOption");if(G.isDefinedAndNotNull(N)&&N.value!==""){R=(V.bundle.group===N.value)}}var O=T&&P&&R;if(O===false&&x("#selected-controller-service-type").text()===V.type){t()}return O};var M=function(P,O){if(O.searchString===""){return true}try{var S=new RegExp(O.searchString,"i")}catch(R){return false}var Q=P.label.search(S)>=0;var N=P.tags.search(S)>=0;return Q||N};var n=function(P,N){var O=[];x.each(P,function(S,T){O.push(T)});var Q=N.toLowerCase();var R=true;x.each(O,function(S,T){if(Q.indexOf(T)===-1){R=false;return false}});return R};var D=function(N,Q){var P=x("#selected-controller-service-type").text();var O=x("#selected-controller-service-type").data("bundle");if(P===""){i.showOkDialog({headerText:"Controller Service",dialogContent:"The type of controller service to create must be selected."})}else{o(N,Q,P,O)}};var o=function(O,R,Q,S){var N={revision:f.getRevision({revision:{version:0}}),disconnectedNodeAcknowledged:p.isDisconnectionAcknowledged(),component:{type:Q,bundle:S}};var P=x.ajax({type:"POST",url:O,data:JSON.stringify(N),dataType:"json",contentType:"application/json"}).done(function(T){var U=R.data("gridInstance");var W=U.getData();W.addItem(x.extend({type:"ControllerService",bulletins:[]},T));W.reSort();U.invalidate();var V=W.getRowById(T.id);J.choseRow(U,V);U.scrollRowIntoView(V)}).fail(b.handleAjaxError);x("#new-controller-service-dialog").modal("hide");return P};var l=function(){var P=[{id:"type",name:"Type",field:"label",formatter:G.typeFormatter,sortable:true,resizable:true},{id:"version",name:"Version",field:"version",formatter:G.typeVersionFormatter,sortable:true,resizable:true},{id:"tags",name:"Tags",field:"tags",sortable:true,resizable:true,formatter:G.genericValueFormatter}];var O=new a.Data.DataView({inlineFilters:false});O.setItems([]);O.setFilterArgs({searchString:e()});O.setFilter(E);G.sortType({columnId:"type",sortAsc:true},O);var N=new a.Grid("#controller-service-types-table",O,P,w);N.setSelectionModel(new a.RowSelectionModel());N.registerPlugin(new a.AutoTooltips());N.setSortColumn("type",true);N.onSort.subscribe(function(S,R){G.sortType({columnId:R.sortCol.field,sortAsc:R.sortAsc},O)});N.onSelectedRowsChanged.subscribe(function(W,T){if(x.isArray(T.rows)&&T.rows.length===1){var R=T.rows[0];var V=N.getDataItem(R);if(G.isDefinedAndNotNull(V)){x("#controller-service-description-container").show();if(G.isBlank(V.description)){x("#controller-service-type-description").attr("title","").html('<span class="unset">No description specified</span>')}else{x("#controller-service-type-description").width(x("#controller-service-description-container").innerWidth()-1).html(V.description).ellipsis()}var S=G.formatBundle(V.bundle);var U=G.formatType(V);x("#controller-service-type-name").text(U).attr("title",U);x("#controller-service-type-bundle").text(S).attr("title",S);x("#selected-controller-service-name").text(V.label);x("#selected-controller-service-type").text(V.type).data("bundle",V.bundle);x("#new-controller-service-dialog").modal("refreshButtons")}}});N.onViewportChanged.subscribe(function(S,R){G.cleanUpTooltips(x("#controller-service-types-table"),"div.view-usage-restriction");G.cleanUpTooltips(x("#controller-service-types-table"),"div.controller-service-apis")});O.onRowCountChanged.subscribe(function(S,R){N.updateRowCount();N.render();x("#displayed-controller-service-types").text(R.current)});O.onRowsChanged.subscribe(function(S,R){N.invalidateRows(R.rows);N.render()});O.syncGridSelection(N,true);x("#controller-service-types-table").data("gridInstance",N).on("mouseenter","div.slick-cell",function(Y){var Z=x(this).find("div.view-usage-restriction");if(Z.length&&!Z.data("qtip")){var V=x(this).find("span.row-id").text();var aa=O.getItemById(V);if(aa.restricted===true){var X=x("<div></div>");if(G.isBlank(aa.usageRestriction)){X.append(x('<p style="margin-bottom: 3px;"></p>').text("Requires the following permissions:"))}else{X.append(x('<p style="margin-bottom: 3px;"></p>').text(aa.usageRestriction+" Requires the following permissions:"))}var T=[];if(G.isDefinedAndNotNull(aa.explicitRestrictions)){x.each(aa.explicitRestrictions,function(ab,ad){var ac=ad.requiredPermission;T.push("'"+ac.label+"' - "+G.escapeHtml(ad.explanation))})}else{T.push("Access to restricted components regardless of restrictions.")}X.append(G.formatUnorderedList(T));Z.qtip(x.extend({},G.config.tooltipConfig,{content:X,position:{container:x("#summary"),at:"bottom right",my:"top left",adjust:{x:4,y:4}}}))}}var R=x(this).find("div.controller-service-apis");if(R.length&&!R.data("qtip")){var V=x(this).find("span.row-id").text();var aa=O.getItemById(V);if(!G.isEmpty(aa.controllerServiceApis)){var U=G.getFormattedServiceApis(aa.controllerServiceApis);var S=G.formatUnorderedList(U);var W=x('<div style="padding: 4px;"><p>Supports Controller Services</p><br/></div>').append(S);R.qtip(x.extend({},G.config.tooltipConfig,{content:W,position:{container:x("#summary"),at:"bottom right",my:"top left",adjust:{x:4,y:4}}}))}}});var Q=G.getPolicyTypeListing("restricted-components");x.ajax({type:"GET",url:B.urls.controllerServiceTypes,dataType:"json"}).done(function(S){var X=0;var U=[];var R=H.set();var W=H.map();var V=H.map();O.beginUpdate();x.each(S.controllerServiceTypes,function(Y,Z){if(Z.restricted===true){if(G.isDefinedAndNotNull(Z.explicitRestrictions)){x.each(Z.explicitRestrictions,function(aa,ac){var ab=ac.requiredPermission;if(!V.has(ab.id)){V.set(ab.id,ab.label)}if(!W.has(ab.id)){W.set(ab.id,[])}W.get(ab.id).push({type:G.formatType(Z),bundle:G.formatBundle(Z.bundle),explanation:ac.explanation})})}else{if(!V.has(Q.value)){V.set(Q.value,Q.text)}if(!W.has(Q.value)){W.set(Q.value,[])}W.get(Q.value).push({type:G.formatType(Z),bundle:G.formatBundle(Z.bundle),explanation:Z.usageRestriction})}}R.add(Z.bundle.group);O.addItem({id:X++,label:G.substringAfterLast(Z.type,"."),type:Z.type,bundle:Z.bundle,controllerServiceApis:Z.controllerServiceApis,description:G.escapeHtml(Z.description),restricted:Z.restricted,usageRestriction:G.escapeHtml(Z.usageRestriction),explicitRestrictions:Z.explicitRestrictions,tags:Z.tags.join(", ")});x.each(Z.tags,function(ab,aa){U.push(aa.toLowerCase())})});O.endUpdate();O.reSort();N.invalidate();K.addComponentRestrictions(W,V);x("#total-controller-service-types, #displayed-controller-service-types").text(S.controllerServiceTypes.length);x("#controller-service-tag-cloud").tagcloud({tags:U,select:y,remove:y});var T=[{text:"all groups",value:""}];R.each(function(Y){T.push({text:Y,value:Y})});x("#controller-service-bundle-group-combo").combo({options:T,select:y})}).fail(b.handleAjaxError);x("#new-controller-service-dialog").modal({headerText:"Add Controller Service",scrollableContentStyle:"scrollable",handler:{close:function(){z();x("#controller-service-type-filter").val("");x("#controller-service-tag-cloud").tagcloud("clearSelectedTags");x("#controller-service-bundle-group-combo").combo("setSelectedOption",{value:""});y();var R=x("#controller-service-types-table").data("gridInstance");R.setSelectedRows([]);R.resetActiveCell()},resize:function(){x("#controller-service-type-description").width(x("#controller-service-description-container").innerWidth()-1).text(x("#controller-service-type-description").attr("title")).ellipsis()}}})};var r=function(R,O,Q,P,N){if(!N.permissions.canRead){return'<span class="blank">'+G.escapeHtml(N.id)+"</span>"}return G.escapeHtml(N.component.name)};var g=function(V,U,S,P,O){if(G.isDefinedAndNotNull(O.parentGroupId)){var T=K.getSelection();if(T.empty()===false){var R=T.datum();if(R.id===O.parentGroupId){if(R.permissions.canRead){return G.escapeHtml(R.component.name)}else{return G.escapeHtml(R.id)}}}var N=m.injector.get("breadcrumbsCtrl").getBreadcrumbs();var Q=O.parentGroupId;x.each(N,function(W,X){if(X.id===O.parentGroupId){Q=X.label;return false}});return G.escapeHtml(Q)}else{return"Controller"}};var v=function(N){var O=function(P){var S=K.getSelection();if(S.empty()===false){var R=S.datum();if(R.id===P){return R.permissions.canWrite}}var Q=m.injector.get("breadcrumbsCtrl").getBreadcrumbs();var T=false;x.each(Q,function(U,V){if(V.id===P){T=V.permissions.canWrite;return false}});return T};if(G.isDefinedAndNotNull(N.parentGroupId)){return O(N.parentGroupId)}else{return G.canModifyController()}};var L=function(N,P){var O=function(X,W){if(X.permissions.canRead&&W.permissions.canRead){if(N.columnId==="moreDetails"){var T=0;if(!G.isEmpty(X.bulletins)){T=X.bulletins.length}var Q=0;if(!G.isEmpty(W.bulletins)){Q=W.bulletins.length}return T-Q}else{if(N.columnId==="type"){var U=G.isDefinedAndNotNull(X.component[N.columnId])?G.substringAfterLast(X.component[N.columnId],"."):"";var S=G.isDefinedAndNotNull(W.component[N.columnId])?G.substringAfterLast(W.component[N.columnId],"."):"";return U===S?0:U>S?1:-1}else{if(N.columnId==="state"){var V;if(X.status.validationStatus==="VALIDATING"){V="Validating"}else{if(X.status.validationStatus==="INVALID"){V="Invalid"}else{V=G.isDefinedAndNotNull(X.component[N.columnId])?X.component[N.columnId]:""}}var Z;if(W.status.validationStatus==="VALIDATING"){Z="Validating"}else{if(W.status.validationStatus==="INVALID"){Z="Invalid"}else{Z=G.isDefinedAndNotNull(W.component[N.columnId])?W.component[N.columnId]:""}}return V===Z?0:V>Z?1:-1}else{var R=G.isDefinedAndNotNull(X.component[N.columnId])?X.component[N.columnId]:"";var Y=G.isDefinedAndNotNull(W.component[N.columnId])?W.component[N.columnId]:"";return R===Y?0:R>Y?1:-1}}}}else{if(!X.permissions.canRead&&!W.permissions.canRead){return 0}if(X.permissions.canRead){return 1}else{return -1}}};P.sort(O,N.sortAsc)};var C=function(T,N){var S=function(ac,W,ab,Y,V){if(!V.permissions.canRead){return""}var X='<div title="Usage" class="pointer controller-service-usage fa fa-book"></div>';var Z=!G.isEmpty(V.component.validationErrors);var aa=!G.isEmpty(V.bulletins);if(Z){X+='<div class="pointer has-errors fa fa-warning"></div>'}if(aa){X+='<div class="has-bulletins fa fa-sticky-note-o"></div>'}if(Z||aa){X+='<span class="hidden row-id">'+G.escapeHtml(V.id)+"</span>"}return X};var O=function(ac,W,ab,X,V){var aa="",Y="";if(V.status.validationStatus==="VALIDATING"){aa="validating fa fa-spin fa-circle-notch";Y="Validating"}else{if(V.status.validationStatus==="INVALID"){aa="invalid fa fa-warning";Y="Invalid"}else{if(V.status.runStatus==="DISABLED"){aa='disabled icon icon-enable-false"';Y="Disabled"}else{if(V.status.runStatus==="DISABLING"){aa='disabled icon icon-enable-false"';Y="Disabling"}else{if(V.status.runStatus==="ENABLED"){aa="enabled fa fa-flash";Y="Enabled"}else{if(V.status.runStatus==="ENABLING"){aa="enabled fa fa-flash";Y="Enabling"}}}}}}var Z='<div layout="row"><div class="'+aa+'"></div>';return Z+'<div class="status-text">'+Y+"</div></div>"};var R=function(af,ac,Z,Y,V){var ad="";var X=V.permissions.canRead;var W=V.permissions.canWrite;var ab=W||(V.operatePermissions&&V.operatePermissions.canWrite);var ae=false;if(G.isDefinedAndNotNull(V.parentGroupId)){if(V.parentGroupId===x("#process-group-id").text()){ae=true}}else{ae=true}if(ae===true){var aa=V.status.runStatus==="DISABLED";if(X){if(W&&aa){ad+='<div class="pointer edit-controller-service fa fa-gear" title="Configure"></div>'}else{ad+='<div class="pointer view-controller-service fa fa-gear" title="View Configuration"></div>'}}if(ab){if(V.status.runStatus==="ENABLED"||V.status.runStatus==="ENABLING"){ad+='<div class="pointer disable-controller-service icon icon-enable-false" title="Disable"></div>'}else{if(aa&&V.status.validationStatus==="VALID"){ad+='<div class="pointer enable-controller-service fa fa-flash" title="Enable"></div>'}}}if(aa&&X&&W&&V.component.multipleVersionsAvailable===true){ad+='<div title="Change Version" class="pointer change-version-controller-service fa fa-exchange"></div>'}if(aa&&X&&W&&v(V)){ad+='<div class="pointer delete-controller-service fa fa-trash" title="Remove"></div>'}if(X&&W&&V.component.persistsState===true){ad+='<div title="View State" class="pointer view-state-controller-service fa fa-tasks"></div>'}}else{ad+='<div class="pointer go-to-controller-service fa fa-long-arrow-right" title="Go To"></div>'}if(K.isManagedAuthorizer()&&G.canAccessTenants()){ad+='<div title="Access Policies" class="pointer edit-access-policies fa fa-key"></div>'}return ad};var Q=[{id:"moreDetails",name:"&nbsp;",resizable:false,formatter:S,sortable:true,width:90,maxWidth:90,toolTip:"Sorts based on presence of bulletins"},{id:"name",name:"Name",formatter:r,sortable:true,resizable:true},{id:"type",name:"Type",formatter:G.instanceTypeFormatter,sortable:true,resizable:true},{id:"bundle",name:"Bundle",formatter:G.instanceBundleFormatter,sortable:true,resizable:true},{id:"state",name:"State",formatter:O,sortable:true,resizeable:true},{id:"parentGroupId",name:"Scope",formatter:g,sortable:true,resizeable:true}];Q.push({id:"actions",name:"&nbsp;",resizable:false,formatter:R,sortable:false,width:90,maxWidth:90});var U=new a.Data.DataView({inlineFilters:false});U.setItems([]);L({columnId:"name",sortAsc:true},U);var P=new a.Grid(T,U,Q,w);P.setSelectionModel(new a.RowSelectionModel());P.registerPlugin(new a.AutoTooltips());P.setSortColumn("name",true);P.onSort.subscribe(function(W,V){L({columnId:V.sortCol.id,sortAsc:V.sortAsc},U)});P.onClick.subscribe(function(Y,W){var X=x(Y.target);var V=U.getItem(W.row);if(P.getColumns()[W.cell].id==="actions"){if(X.hasClass("edit-controller-service")){I.showConfiguration(T,V)}else{if(X.hasClass("view-controller-service")){I.showDetails(T,V)}else{if(X.hasClass("enable-controller-service")){I.enable(T,V)}else{if(X.hasClass("disable-controller-service")){I.disable(T,V)}else{if(X.hasClass("delete-controller-service")){I.promptToDeleteController(T,V)}else{if(X.hasClass("view-state-controller-service")){c.showState(V,V.state==="DISABLED")}else{if(X.hasClass("change-version-controller-service")){q.promptForVersionChange(V)}else{if(X.hasClass("edit-access-policies")){s.showControllerServicePolicy(V);x("#shell-close-button").click()}else{if(X.hasClass("go-to-controller-service")){u.enterGroup(V.parentGroupId).done(function(){x.Deferred(function(Z){if(x("#process-group-configuration").is(":visible")){A.loadConfiguration(V.parentGroupId).done(function(){Z.resolve()})}else{A.showConfiguration(V.parentGroupId).done(function(){Z.resolve()})}}).done(function(){A.selectControllerService(V.id)})})}}}}}}}}}}else{if(P.getColumns()[W.cell].id==="moreDetails"){if(X.hasClass("controller-service-usage")){x("#shell-close-button").click();F.showPage("../nifi-docs/documentation?"+x.param({select:V.component.type,group:V.component.bundle.group,artifact:V.component.bundle.artifact,version:V.component.bundle.version})).done(function(){if(G.isDefinedAndNotNull(V.parentGroupId)){var Z;var aa=u.get(V.parentGroupId);if(G.isDefinedAndNotNull(aa)){Z=aa.id}else{Z=K.getGroupId()}A.showConfiguration(Z)}else{N()}})}}}});U.onRowCountChanged.subscribe(function(W,V){P.updateRowCount();P.render()});U.onRowsChanged.subscribe(function(W,V){P.invalidateRows(V.rows);P.render()});U.syncGridSelection(P,true);T.data("gridInstance",P).on("mouseenter","div.slick-cell",function(ac){var Z=x(this).find("div.has-errors");if(Z.length&&!Z.data("qtip")){var ab=x(this).find("span.row-id").text();var V=U.getItemById(ab);var Y=G.formatUnorderedList(V.component.validationErrors);if(G.isDefinedAndNotNull(Y)){Z.qtip(x.extend({},G.config.tooltipConfig,{content:Y,position:{target:"mouse",viewport:x("#shell-container"),adjust:{x:8,y:8,method:"flipinvert flipinvert"}}}))}}var X=x(this).find("div.has-bulletins");if(X.length&&!X.data("qtip")){var W=x(this).find("span.row-id").text();var V=U.getItemById(W);var aa=G.getFormattedBulletins(V.bulletins);var Y=G.formatUnorderedList(aa);if(G.isDefinedAndNotNull(Y)){X.qtip(x.extend({},G.config.tooltipConfig,{content:Y,position:{target:"mouse",viewport:x("#shell-container"),adjust:{x:8,y:8,method:"flipinvert flipinvert"}}}))}}})};var d=function(N,O){return x.ajax({type:"GET",url:N,dataType:"json"}).done(function(P){var Q=[];x.each(P.controllerServices,function(U,T){Q.push(x.extend({type:"ControllerService",bulletins:[]},T))});G.cleanUpTooltips(O,"div.has-errors");G.cleanUpTooltips(O,"div.has-bulletins");var R=O.data("gridInstance");var S=R.getData();S.setItems(Q);S.reSort();R.invalidate();R.render()})};return{init:function(O,N){if(!j){l();j=true}C(O,N)},promptNewControllerService:function(O,R){var P=x("#controller-service-types-table").data("gridInstance");var N=P.getData();var Q=[x.ui.keyCode.UP,x.ui.keyCode.PAGE_UP,x.ui.keyCode.DOWN,x.ui.keyCode.PAGE_DOWN];x("#controller-service-type-filter").off("keyup").on("keyup",function(V){var U=V.keyCode?V.keyCode:V.which;if(x.inArray(U,Q)!==-1){return}if(U===x.ui.keyCode.ENTER){var S=P.getSelectedRows();if(S.length>0){var T=P.getDataItem(S[0]);if(k(T)){D(O,R)}}}else{y()}});J.addKeydownListener("#controller-service-type-filter",P,N);x("#new-controller-service-dialog").modal("setButtonModel",[{buttonText:"Add",color:{base:"#728E9B",hover:"#004849",text:"#ffffff"},disabled:function(){var S=P.getSelectedRows();if(S.length>0){var T=P.getDataItem(S[0]);return k(T)===false}else{return N.getLength()===0}},handler:{click:function(){D(O,R)}}},{buttonText:"Cancel",color:{base:"#E3E8EB",hover:"#C7D2D7",text:"#004849"},handler:{click:function(){x(this).modal("hide")}}}]).modal("show");if(h!==null){P.onDblClick.unsubscribe(h)}h=function(U,S){var T=P.getDataItem(S.row);if(k(T)){o(O,R,T.type,T.bundle)}};P.onDblClick.subscribe(h);P.resizeCanvas();if(N.getLength()>0){J.choseFirstRow(P)}x("#controller-service-type-filter").focus()},resetTableSize:function(O){var N=O.data("gridInstance");if(G.isDefinedAndNotNull(N)){N.resizeCanvas()}},loadControllerServices:function(N,O){return d(N,O)},setBulletins:function(R,O){var Q=R.data("gridInstance");var S=Q.getData();S.beginUpdate();if(!G.isEmpty(O)){var P=H.nest().key(function(T){return T.sourceId}).map(O,H.map);P.each(function(T,V){var U=S.getItemById(V);if(G.isDefinedAndNotNull(U)){S.updateItem(V,x.extend(U,{bulletins:T}))}})}else{var N=S.getItems();x.each(N,function(U,T){S.updateItem(T.id,x.extend(T,{bulletins:[]}))})}S.endUpdate()}}}));
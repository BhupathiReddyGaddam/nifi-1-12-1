(function(a,b){if(typeof define==="function"&&define.amd){define(["jquery","Slick","nf.Client","nf.Birdseye","nf.Storage","nf.Graph","nf.CanvasUtils","nf.ErrorHandler","nf.FilteredDialogCommon","nf.Dialog","nf.Common"],function(h,e,m,c,i,j,f,l,k,g,d){return(nf.ng.ProcessorComponent=b(h,e,m,c,i,j,f,l,k,g,d))})}else{if(typeof exports==="object"&&typeof module==="object"){module.exports=(nf.ng.ProcessorComponent=b(require("jquery"),require("Slick"),require("nf.Client"),require("nf.Birdseye"),require("nf.Storage"),require("nf.Graph"),require("nf.CanvasUtils"),require("nf.ErrorHandler"),require("nf.FilteredDialogCommon"),require("nf.Dialog"),require("nf.Common")))}else{nf.ng.ProcessorComponent=b(a.$,a.Slick,a.nf.Client,a.nf.Birdseye,a.nf.Storage,a.nf.Graph,a.nf.CanvasUtils,a.nf.ErrorHandler,a.nf.FilteredDialogCommon,a.nf.Dialog,a.nf.Common)}}}(this,function(f,c,k,a,g,h,d,j,i,e,b){return function(n){var q=function(){var w=f("#processor-types-table").data("gridInstance");if(b.isDefinedAndNotNull(w)){var x=w.getData();x.setFilterArgs({searchString:u()});x.refresh();f("#new-processor-dialog").modal("refreshButtons");if(x.getLength()>0){i.choseFirstRow(w);w.scrollRowToTop(0)}}};var s=function(y,x){if(x.searchString===""){return true}try{var B=new RegExp(x.searchString,"i")}catch(A){return false}var z=y.label.search(B)>=0;var w=y.tags.search(B)>=0;return z||w};var l=function(F,A){var D=s(F,A);var z=true;if(D){var E=f("#processor-tag-cloud").tagcloud("getSelectedTags");var C=E.length>0;if(C){z=m(E,F.tags)}}var B=true;if(D&&z){var w=f("#processor-bundle-group-combo").combo("getSelectedOption");if(b.isDefinedAndNotNull(w)&&w.value!==""){B=(F.bundle.group===w.value)}}var x=D&&z&&B;if(x===false&&f("#selected-processor-type").text()===F.type){f("#processor-type-description").attr("title","").text("");f("#processor-type-name").attr("title","").text("");f("#processor-type-bundle").attr("title","").text("");f("#selected-processor-name").text("");f("#selected-processor-type").text("").removeData("bundle");var y=f("#processor-types-table").data("gridInstance");y.resetActiveCell()}return x};var m=function(y,w){var x=[];f.each(y,function(B,C){x.push(C)});var z=w.toLowerCase();var A=true;f.each(x,function(B,C){if(z.indexOf(C)===-1){A=false;return false}});return A};var u=function(){return f("#processor-type-filter").val()};var o=function(){f("#processor-tag-cloud").tagcloud("clearSelectedTags");f("#processor-bundle-group-combo").combo("setSelectedOption",{value:""});f("#processor-type-filter").val("");q();f("#processor-type-description").attr("title","").text("");f("#processor-type-name").attr("title","").text("");f("#processor-type-bundle").attr("title","").text("");f("#selected-processor-name").text("");f("#selected-processor-type").text("").removeData("bundle");var w=f("#processor-types-table").data("gridInstance");w.setSelectedRows([]);w.resetActiveCell()};var r=function(x,A,w,y){var z={revision:k.getRevision({revision:{version:0}}),disconnectedNodeAcknowledged:g.isDisconnectionAcknowledged(),component:{type:A,bundle:w,name:x,position:{x:y.x,y:y.y}}};f.ajax({type:"POST",url:n.headerCtrl.toolboxCtrl.config.urls.api+"/process-groups/"+encodeURIComponent(d.getGroupId())+"/processors",data:JSON.stringify(z),dataType:"json",contentType:"application/json"}).done(function(B){h.add({processors:[B]},{selectAll:true});h.updateVisibility();a.refresh()}).fail(j.handleAjaxError)};var p=function(w){return w.restricted===false||b.canAccessComponentRestrictions(w.explicitRestrictions)};function v(){this.icon="icon icon-processor";this.hoverIcon="icon icon-processor-add";this.modal={filter:{init:function(){var x=[{id:"type",name:"Type",field:"label",formatter:b.typeFormatter,sortable:true,resizable:true},{id:"version",name:"Version",field:"version",formatter:b.typeVersionFormatter,sortable:true,resizable:true},{id:"tags",name:"Tags",field:"tags",sortable:true,resizable:true,formatter:b.genericValueFormatter}];var A={forceFitColumns:true,enableTextSelectionOnCells:true,enableCellNavigation:true,enableColumnReorder:false,autoEdit:false,multiSelect:false,rowHeight:24};var y=new c.Data.DataView({inlineFilters:false});y.setItems([]);y.setFilterArgs({searchString:u()});y.setFilter(l);b.sortType({columnId:"type",sortAsc:true},y);var w=new c.Grid("#processor-types-table",y,x,A);w.setSelectionModel(new c.RowSelectionModel());w.registerPlugin(new c.AutoTooltips());w.setSortColumn("type",true);w.onSort.subscribe(function(C,B){b.sortType({columnId:B.sortCol.field,sortAsc:B.sortAsc},y)});w.onSelectedRowsChanged.subscribe(function(F,D){if(f.isArray(D.rows)&&D.rows.length===1){var B=D.rows[0];var G=w.getDataItem(B);if(b.isDefinedAndNotNull(G)){if(b.isBlank(G.description)){f("#processor-type-description").attr("title","").html('<span class="unset">No description specified</span>')}else{f("#processor-type-description").width(f("#processor-description-container").innerWidth()-1).html(G.description).ellipsis()}var C=b.formatBundle(G.bundle);var E=b.formatType(G);f("#processor-type-name").text(E).attr("title",E);f("#processor-type-bundle").text(C).attr("title",C);f("#selected-processor-name").text(G.label);f("#selected-processor-type").text(G.type).data("bundle",G.bundle);f("#new-processor-dialog").modal("refreshButtons")}}});w.onViewportChanged.subscribe(function(C,B){b.cleanUpTooltips(f("#processor-types-table"),"div.view-usage-restriction")});y.onRowCountChanged.subscribe(function(C,B){w.updateRowCount();w.render();f("#displayed-processor-types").text(B.current)});y.onRowsChanged.subscribe(function(C,B){w.invalidateRows(B.rows);w.render()});y.syncGridSelection(w,false);f("#processor-types-table").data("gridInstance",w).on("mouseenter","div.slick-cell",function(E){var F=f(this).find("div.view-usage-restriction");if(F.length&&!F.data("qtip")){var D=f(this).find("span.row-id").text();var C=y.getItemById(D);if(C.restricted===true){var G=f("<div></div>");if(b.isBlank(C.usageRestriction)){G.append(f('<p style="margin-bottom: 3px;"></p>').text("Requires the following permissions:"))}else{G.append(f('<p style="margin-bottom: 3px;"></p>').text(C.usageRestriction+" Requires the following permissions:"))}var B=[];if(b.isDefinedAndNotNull(C.explicitRestrictions)){f.each(C.explicitRestrictions,function(H,J){var I=J.requiredPermission;B.push("'"+I.label+"' - "+b.escapeHtml(J.explanation))})}else{B.push("Access to restricted components regardless of restrictions.")}G.append(b.formatUnorderedList(B));F.qtip(f.extend({},b.config.tooltipConfig,{content:G,position:{container:f("#summary"),at:"bottom right",my:"top left",adjust:{x:4,y:4}}}))}}});var z=b.getPolicyTypeListing("restricted-components");f.ajax({type:"GET",url:n.headerCtrl.toolboxCtrl.config.urls.processorTypes,dataType:"json"}).done(function(C){var E=[];var B=d3.set();var G=d3.map();var F=d3.map();y.beginUpdate();f.each(C.processorTypes,function(H,J){var I=J.type;if(J.restricted===true){if(b.isDefinedAndNotNull(J.explicitRestrictions)){f.each(J.explicitRestrictions,function(K,M){var L=M.requiredPermission;if(!F.has(L.id)){F.set(L.id,L.label)}if(!G.has(L.id)){G.set(L.id,[])}G.get(L.id).push({type:b.formatType(J),bundle:b.formatBundle(J.bundle),explanation:b.escapeHtml(M.explanation)})})}else{if(!F.has(z.value)){F.set(z.value,z.text)}if(!G.has(z.value)){G.set(z.value,[])}G.get(z.value).push({type:b.formatType(J),bundle:b.formatBundle(J.bundle),explanation:b.escapeHtml(J.usageRestriction)})}}B.add(J.bundle.group);y.addItem({id:H,label:b.substringAfterLast(I,"."),type:I,bundle:J.bundle,description:b.escapeHtml(J.description),restricted:J.restricted,usageRestriction:b.escapeHtml(J.usageRestriction),explicitRestrictions:J.explicitRestrictions,tags:J.tags.join(", ")});f.each(J.tags,function(L,K){E.push(K.toLowerCase())})});y.endUpdate();y.reSort();w.invalidate();d.addComponentRestrictions(G,F);f("#total-processor-types, #displayed-processor-types").text(C.processorTypes.length);f("#processor-tag-cloud").tagcloud({tags:E,select:q,remove:q});var D=[{text:"all groups",value:""}];B.each(function(H){D.push({text:H,value:H})});f("#processor-bundle-group-combo").combo({options:D,select:q})}).fail(j.handleAjaxError)}},getElement:function(){return f("#new-processor-dialog")},init:function(){this.filter.init();this.getElement().modal({scrollableContentStyle:"scrollable",headerText:"Add Processor",handler:{resize:function(){f("#processor-type-description").width(f("#processor-description-container").innerWidth()-1).text(f("#processor-type-description").attr("title")).ellipsis()}}})},update:function(x,w){this.getElement().modal(x,w)},show:function(){this.getElement().modal("show")},hide:function(){this.getElement().modal("hide")}}}v.prototype={constructor:v,getElement:function(){return f("#processor-component")},enabled:function(){this.getElement().attr("disabled",false)},disabled:function(){this.getElement().attr("disabled",true)},dropHandler:function(w){this.promptForProcessorType(w)},dragIcon:function(w){return f('<div class="icon icon-processor-add"></div>')},promptForProcessorType:function(C){var w=this;var A=function(){var E=f("#selected-processor-name").text();var F=f("#selected-processor-type").text();var D=f("#selected-processor-type").data("bundle");if(E===""||F===""){e.showOkDialog({headerText:"Add Processor",dialogContent:"The type of processor to create must be selected."})}else{r(E,F,D,C)}w.modal.hide()};var z=f("#processor-types-table").data("gridInstance");var x=z.getData();var y=function(E,D){var F=z.getDataItem(D.row);if(p(F)){f("#selected-processor-name").text(F.label);f("#selected-processor-type").text(F.type).data("bundle",F.bundle);A()}};z.onDblClick.subscribe(y);this.modal.update("setButtonModel",[{buttonText:"Add",color:{base:"#728E9B",hover:"#004849",text:"#ffffff"},disabled:function(){var D=z.getSelectedRows();if(D.length>0){var E=z.getDataItem(D[0]);return p(E)===false}else{return x.getLength()===0}},handler:{click:A}},{buttonText:"Cancel",color:{base:"#E3E8EB",hover:"#C7D2D7",text:"#004849"},handler:{click:function(){f("#new-processor-dialog").modal("hide")}}}]);this.modal.update("setCloseHandler",function(){z.onDblClick.unsubscribe(y);o()});this.modal.show();var B=[f.ui.keyCode.UP,f.ui.keyCode.PAGE_UP,f.ui.keyCode.DOWN,f.ui.keyCode.PAGE_DOWN];f("#processor-type-filter").off("keyup").on("keyup",function(G){var F=G.keyCode?G.keyCode:G.which;if(f.inArray(F,B)!==-1){return}if(F===f.ui.keyCode.ENTER){var D=z.getSelectedRows();if(D.length>0){var E=z.getDataItem(D[0]);if(p(E)){A()}}}else{q()}});i.addKeydownListener("#processor-type-filter",z,x);z.resizeCanvas();if(x.getLength()>0){i.choseFirstRow(z)}f("#processor-type-filter").focus()}};var t=new v();return t}}));
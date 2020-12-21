(function(a,b){if(typeof define==="function"&&define.amd){define(["jquery","angular","nf.Common","nf.CanvasUtils","nf.ErrorHandler","nf.Client","nf.Dialog","nf.Storage","nf.Canvas","nf.Graph","nf.ContextMenu","nf.QuickSelect","nf.Shell","nf.ParameterContexts","nf.Settings","nf.Snippet","nf.Actions","nf.QueueListing","nf.VariableRegistry","nf.ComponentState","nf.FlowVersion","nf.ComponentVersion","nf.Draggable","nf.Connectable","nf.StatusHistory","nf.Birdseye","nf.ConnectionConfiguration","nf.ControllerService","nf.ReportingTask","nf.PolicyManagement","nf.ProcessorConfiguration","nf.ProcessGroupConfiguration","nf.ControllerServices","nf.RemoteProcessGroupConfiguration","nf.RemoteProcessGroupPorts","nf.PortConfiguration","nf.LabelConfiguration","nf.ProcessorDetails","nf.PortDetails","nf.ConnectionDetails","nf.RemoteProcessGroupDetails","nf.GoTo","nf.ng.Bridge","nf.ng.AppCtrl","nf.ng.AppConfig","nf.ng.ServiceProvider","nf.ng.BreadcrumbsCtrl","nf.ng.Canvas.HeaderCtrl","nf.ng.Canvas.FlowStatusCtrl","nf.ng.Canvas.GlobalMenuCtrl","nf.ng.Canvas.ToolboxCtrl","nf.ng.ProcessorComponent","nf.ng.InputPortComponent","nf.ng.OutputPortComponent","nf.ng.GroupComponent","nf.ng.RemoteProcessGroupComponent","nf.ng.FunnelComponent","nf.ng.TemplateComponent","nf.ng.LabelComponent","nf.ng.Canvas.GraphControlsCtrl","nf.ng.Canvas.NavigateCtrl","nf.ng.Canvas.OperateCtrl","nf.ng.BreadcrumbsDirective","nf.ng.DraggableDirective"],function(P,D,aa,ak,f,m,q,z,G,x,H,X,Z,am,U,E,al,M,p,h,B,A,C,O,ae,l,v,ab,Q,I,aj,S,V,N,c,R,J,d,y,w,ad,k,t,j,L,ac,o,g,e,s,ag,Y,F,K,an,af,ai,W,u,T,i,ah,n,r){return b(P,D,aa,ak,f,m,q,z,G,x,H,X,Z,am,U,E,al,M,p,h,B,A,C,O,ae,l,v,ab,Q,I,aj,S,V,N,c,R,J,d,y,w,ad,k,t,j,L,ac,o,g,e,s,ag,Y,F,K,an,af,ai,W,u,T,i,ah,n,r)})}else{if(typeof exports==="object"&&typeof module==="object"){module.exports=b(require("jquery"),require("angular"),require("nf.Common"),require("nf.CanvasUtils"),require("nf.ErrorHandler"),require("nf.Client"),require("nf.Dialog"),require("f.Storage"),require("nf.Canvas"),require("nf.Graph"),require("nf.ContextMenu"),require("nf.QuickSelect"),require("nf.Shell"),require("nf.ParameterContexts"),require("nf.Settings"),require("nf.Actions"),require("nf.Snippet"),require("nf.QueueListing"),require("nf.VariableRegistry"),require("nf.ComponentState"),require("nf.FlowVersion"),require("nf.ComponentVersion"),require("nf.Draggable"),require("nf.Connectable"),require("nf.StatusHistory"),require("nf.Birdseye"),require("nf.ConnectionConfiguration"),require("nf.ControllerService"),require("nf.ReportingTask"),require("nf.PolicyManagement"),require("nf.ProcessorConfiguration"),require("nf.ProcessGroupConfiguration"),require("nf.ControllerServices"),require("nf.RemoteProcessGroupConfiguration"),require("nf.RemoteProcessGroupPorts"),require("nf.PortConfiguration"),require("nf.LabelConfiguration"),require("nf.ProcessorDetails"),require("nf.PortDetails"),require("nf.ConnectionDetails"),require("nf.RemoteProcessGroupDetails"),require("nf.GoTo"),require("nf.ng.Bridge"),require("nf.ng.AppCtrl"),require("nf.ng.AppConfig"),require("nf.ng.ServiceProvider"),require("nf.ng.BreadcrumbsCtrl"),require("nf.ng.Canvas.HeaderCtrl"),require("nf.ng.Canvas.FlowStatusCtrl"),require("nf.ng.Canvas.GlobalMenuCtrl"),require("nf.ng.Canvas.ToolboxCtrl"),require("nf.ng.ProcessorComponent"),require("nf.ng.InputPortComponent"),require("nf.ng.OutputPortComponent"),require("nf.ng.GroupComponent"),require("nf.ng.RemoteProcessGroupComponent"),require("nf.ng.FunnelComponent"),require("nf.ng.TemplateComponent"),require("nf.ng.LabelComponent"),require("nf.ng.Canvas.GraphControlsCtrl"),require("nf.ng.Canvas.NavigateCtrl"),require("nf.ng.Canvas.OperateCtrl"),require("nf.ng.BreadcrumbsDirective"),require("nf.ng.DraggableDirective"))}else{b(a.$,a.angular,a.nf.Common,a.nf.CanvasUtils,a.nf.ErrorHandler,a.nf.Client,a.nf.Dialog,a.nf.Storage,a.nf.Canvas,a.nf.Graph,a.nf.ContextMenu,a.nf.QuickSelect,a.nf.Shell,a.nf.ParameterContexts,a.nf.Settings,a.nf.Actions,a.nf.Snippet,a.nf.QueueListing,a.nf.VariableRegistry,a.nf.ComponentState,a.nf.FlowVersion,a.nf.ComponentVersion,a.nf.Draggable,a.nf.Connectable,a.nf.StatusHistory,a.nf.Birdseye,a.nf.ConnectionConfiguration,a.nf.ControllerService,a.nf.ReportingTask,a.nf.PolicyManagement,a.nf.ProcessorConfiguration,a.nf.ProcessGroupConfiguration,a.nf.ControllerServices,a.nf.RemoteProcessGroupConfiguration,a.nf.RemoteProcessGroupPorts,a.nf.PortConfiguration,a.nf.LabelConfiguration,a.nf.ProcessorDetails,a.nf.PortDetails,a.nf.ConnectionDetails,a.nf.RemoteProcessGroupDetails,a.nf.GoTo,a.nf.ng.Bridge,a.nf.ng.AppCtrl,a.nf.ng.AppConfig,a.nf.ng.ServiceProvider,a.nf.ng.BreadcrumbsCtrl,a.nf.ng.Canvas.HeaderCtrl,a.nf.ng.Canvas.FlowStatusCtrl,a.nf.ng.Canvas.GlobalMenuCtrl,a.nf.ng.Canvas.ToolboxCtrl,a.nf.ng.ProcessorComponent,a.nf.ng.InputPortComponent,a.nf.ng.OutputPortComponent,a.nf.ng.GroupComponent,a.nf.ng.RemoteProcessGroupComponent,a.nf.ng.FunnelComponent,a.nf.ng.TemplateComponent,a.nf.ng.LabelComponent,a.nf.ng.Canvas.GraphControlsCtrl,a.nf.ng.Canvas.NavigateCtrl,a.nf.ng.Canvas.OperateCtrl,a.nf.ng.BreadcrumbsDirective,a.nf.ng.DraggableDirective)}}}(this,function(N,B,Z,aj,d,k,o,x,E,v,F,W,Y,al,S,C,ak,K,n,f,z,y,A,M,ad,j,t,aa,O,G,ai,Q,U,L,a,P,H,b,w,u,ac,i,r,h,J,ab,m,e,c,q,af,X,D,I,am,ae,ah,V,s,R,g,ag,l,p){var T={urls:{flowConfig:"../nifi-api/flow/config"}};N(document).ready(function(){if(E.SUPPORTS_SVG){var ao=B.module("ngCanvasApp",["ngResource","ngRoute","ngMaterial","ngMessages"]);J.$inject=["$mdThemingProvider","$compileProvider"];h.$inject=["$scope","serviceProvider","$compile","headerCtrl","graphControlsCtrl"];ab.$inject=[];m.$inject=["serviceProvider"];e.$inject=["serviceProvider","toolboxCtrl","globalMenuCtrl","flowStatusCtrl"];c.$inject=["serviceProvider"];q.$inject=["serviceProvider"];af.$inject=["processorComponent","inputPortComponent","outputPortComponent","groupComponent","remoteGroupComponent","funnelComponent","templateComponent","labelComponent"];X.$inject=["serviceProvider"];D.$inject=["serviceProvider"];I.$inject=["serviceProvider"];am.$inject=["serviceProvider"];ae.$inject=["serviceProvider"];ah.$inject=["serviceProvider"];V.$inject=["serviceProvider"];s.$inject=["serviceProvider"];R.$inject=["serviceProvider","navigateCtrl","operateCtrl"];g.$inject=["$timeout"];ag.$inject=[];l.$inject=["breadcrumbsCtrl"];p.$inject=[];ao.config(J);ao.controller("ngCanvasAppCtrl",h);ao.service("serviceProvider",ab);ao.service("breadcrumbsCtrl",m);ao.service("headerCtrl",e);ao.service("flowStatusCtrl",c);ao.service("globalMenuCtrl",q);ao.service("toolboxCtrl",af);ao.service("processorComponent",X);ao.service("inputPortComponent",D);ao.service("outputPortComponent",I);ao.service("groupComponent",am);ao.service("remoteGroupComponent",ae);ao.service("funnelComponent",ah);ao.service("templateComponent",V);ao.service("labelComponent",s);ao.service("graphControlsCtrl",R);ao.service("navigateCtrl",g);ao.service("operateCtrl",ag);ao.directive("nfBreadcrumbs",l);ao.directive("nfDraggable",p);aj.init(E,C,ak,j,v);r.injector=B.bootstrap(N("body"),["ngCanvasApp"],{strictDi:true});var an=E.init();an.done(function(){var ap=k.init();var aq=N.ajax({type:"GET",url:T.urls.flowConfig,dataType:"json"});N.when(aq,an,ap).done(function(au){var av=au[0];var aw=N("#canvas-container");E.CANVAS_OFFSET=aw.offset().top;var at=av.flowConfiguration;var ar=parseInt(at.autoRefreshIntervalSeconds,10);E.setManagedAuthorizer(at.supportsManagedAuthorizer);E.setConfigurableAuthorizer(at.supportsConfigurableAuthorizer);E.setConfigurableUsersAndGroups(at.supportsConfigurableUsersAndGroups);x.init();E.initCanvas();E.View.init();F.init(C);W.init(C);Y.init(F);r.injector.get("headerCtrl").init();S.init();al.init();C.init();K.init();n.init();f.init();z.init(at.timeOffset);y.init(S);A.init();M.init();ad.init(at.timeOffset);j.init(v);t.init(j,v,at.defaultBackPressureObjectThreshold,at.defaultBackPressureDataSizeThreshold);aa.init(U,O);O.init(S);G.init();ai.init({supportsStatusBar:true,nfActions:C});Q.init(U,al);L.init();a.init();P.init();H.init();b.init({supportsGoTo:true,supportsStatusBar:true,nfCanvasUtils:aj,nfActions:C});w.init();u.init();ac.init();i.init();v.init().done(function(){r.injector.get("graphControlsCtrl").init();var ax=ar/2;setTimeout(function(){E.startPolling(ar)},ax*1000);E.hideSplash()}).fail(d.handleAjaxError)}).fail(d.handleAjaxError)}).fail(d.handleAjaxError);N(".component-button").qtip(N.extend({},Z.config.tooltipConfig,{position:{at:"bottom center",my:"top center",adjust:{y:5}}}))}else{N("#message-title").text("Unsupported Browser");N("#message-content").text("Flow graphs are shown using SVG. Please use a browser that supports rendering SVG.");N("#message-pane").show();E.hideSplash()}})}));
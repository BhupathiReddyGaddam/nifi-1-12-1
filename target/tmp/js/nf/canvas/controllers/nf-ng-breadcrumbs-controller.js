(function(a,b){if(typeof define==="function"&&define.amd){define(["jquery","nf.Common"],function(c,d){return(nf.ng.BreadcrumbsCtrl=b(c,d))})}else{if(typeof exports==="object"&&typeof module==="object"){module.exports=(nf.ng.BreadcrumbsCtrl=b(require("jquery"),require("nf.Common")))}else{nf.ng.BreadcrumbsCtrl=b(a.$,a.nf.Common)}}}(this,function(a,b){return function(e){function d(){this.breadcrumbs=[]}d.prototype={constructor:d,register:function(){if(e.breadcrumbsCtrl===undefined){e.register("breadcrumbsCtrl",c)}},generateBreadcrumbs:function(g){var f=g.id;if(g.permissions.canRead){f=g.breadcrumb.name}this.breadcrumbs.unshift(a.extend({label:f},g));if(b.isDefinedAndNotNull(g.parentBreadcrumb)){this.generateBreadcrumbs(g.parentBreadcrumb)}},updateVersionControlInformation:function(f,g){a.each(this.breadcrumbs,function(h,i){if(i.id===f){i.breadcrumb.versionControlInformation=g;return false}})},resetBreadcrumbs:function(){this.breadcrumbs=[]},isTracking:function(f){return b.isDefinedAndNotNull(f.versionedFlowState)},getVersionControlClass:function(g){if(b.isDefinedAndNotNull(g.versionedFlowState)){var f=g.versionedFlowState;if(f==="SYNC_FAILURE"){return"breadcrumb-version-control-gray fa fa-question"}else{if(f==="LOCALLY_MODIFIED_AND_STALE"){return"breadcrumb-version-control-red fa fa-exclamation-circle"}else{if(f==="STALE"){return"breadcrumb-version-control-red fa fa-arrow-circle-up"}else{if(f==="LOCALLY_MODIFIED"){return"breadcrumb-version-control-gray fa fa-asterisk"}else{return"breadcrumb-version-control-green fa fa-check"}}}}}else{return""}},getVersionControlTooltip:function(f){if(b.isDefinedAndNotNull(f.versionedFlowState)&&f.permissions.canRead){return b.getVersionControlTooltip(f.breadcrumb.versionControlInformation)}else{return"This Process Group is not under version control."}},getBreadcrumbs:function(){return this.breadcrumbs},updateBreadcrumbsCss:function(f){a("#breadcrumbs").css(f)},resetScrollPosition:function(){var l=a("#data-flow-title-container");var i=l.position();var m=l.outerWidth();var k=i.left+m;var j=a("#breadcrumbs-right-border").width();var g=a("#data-flow-title-viewport");var h=g.width();var f=h-j;if(k>f){l.css("left",(i.left-(k-f))+"px")}else{l.css("left","10px")}},registerMouseWheelEvent:function(f){f.on("DOMMouseScroll mousewheel",function(s,l){if(b.isUndefinedOrNull(s.originalEvent)){return}var m=a("#data-flow-title-container");var g=m.position();var q=m.outerWidth();var j=g.left+q;var n=a("#breadcrumbs-right-border").width();var k=a("#data-flow-title-viewport");var i=k.width();var h=i-n;if(q>i){var p=false;var r=0;if(b.isDefinedAndNotNull(s.originalEvent.wheelDelta)){r=s.originalEvent.wheelDelta}else{if(b.isDefinedAndNotNull(s.originalEvent.detail)){r=-s.originalEvent.detail}}if(r>0&&j>h){var o=-25;p=true}else{if(r<0&&(g.left-n)<0){o=25;if(g.left+o>n){o=n-g.left}p=true}}if(p){m.css("left",(g.left+o)+"px")}}})}};var c=new d();c.register();return c}}));
(function(a,b){if(typeof define==="function"&&define.amd){define(["jquery"],function(c){return(nf.Dialog=b(c))})}else{if(typeof exports==="object"&&typeof module==="object"){module.exports=(nf.Dialog=b(require("jquery")))}else{nf.Dialog=b(a.$)}}}(this,function(b){b(document).ready(function(){b("#nf-ok-dialog").modal({scrollableContentStyle:"scrollable",handler:{close:function(){b("#nf-ok-dialog-content").empty()}}});b("#nf-yes-no-dialog").modal({scrollableContentStyle:"scrollable",handler:{close:function(){b("#nf-yes-no-dialog-content").empty();b("#nf-yes-no-dialog").modal("setButtonModel",[])}}})});var a={showOkDialog:function(c){c=b.extend({headerText:"",dialogContent:""},c);var d=b("<p></p>").append(c.dialogContent);b("#nf-ok-dialog-content").append(d).append("</br>");b("#nf-ok-dialog").modal("setButtonModel",[{buttonText:"Ok",color:{base:"#728E9B",hover:"#004849",text:"#ffffff"},handler:{click:function(){b("#nf-ok-dialog").modal("hide");if(typeof c.okHandler==="function"){c.okHandler.call(this)}}}}]);b("#nf-ok-dialog").modal("setHeaderText",c.headerText).modal("show")},showYesNoDialog:function(c){c=b.extend({headerText:"",dialogContent:"",yesText:"Yes",noText:"No"},c);var d=b("<p></p>").append(c.dialogContent);b("#nf-yes-no-dialog-content").append(d);b("#nf-yes-no-dialog").modal("setButtonModel",[{buttonText:c.yesText,color:{base:"#728E9B",hover:"#004849",text:"#ffffff"},handler:{click:function(){b("#nf-yes-no-dialog").modal("hide");if(typeof c.yesHandler==="function"){c.yesHandler.call(this)}}}},{buttonText:c.noText,color:{base:"#E3E8EB",hover:"#C7D2D7",text:"#004849"},handler:{click:function(){b("#nf-yes-no-dialog").modal("hide");if(typeof c.noHandler==="function"){c.noHandler.call(this)}}}}]);b("#nf-yes-no-dialog").modal("setHeaderText",c.headerText).modal("show")},showDisconnectedFromClusterMessage:function(c){a.showOkDialog({headerText:"Cluster Connection",dialogContent:"This node is currently not connected to the cluster. Any modifications to the data flow made here will not replicate across the cluster.",okHandler:function(){if(typeof c==="function"){c.call(this)}}})},showConnectedToClusterMessage:function(c){a.showOkDialog({headerText:"Cluster Connection",dialogContent:"This node just joined the cluster. Any modifications to the data flow made here will replicate across the cluster.",okHandler:function(){if(typeof c==="function"){c.call(this)}}})}};return a}));
(function(a,b){if(typeof define==="function"&&define.amd){define([],function(){return(nf.Storage=b())})}else{if(typeof exports==="object"&&typeof module==="object"){module.exports=(nf.Storage=b())}else{nf.Storage=b()}}}(this,function(){var h=false;var g=86400000;var f=g*2;var b=function(i){return typeof i==="undefined"};var e=function(i){return i===null};var d=function(i){return !b(i)&&!e(i)};var c=function(k){if(d(k.expires)){var i=new Date(k.expires);var j=new Date();return i.valueOf()<j.valueOf()}else{return false}};var a=function(i){try{var j=JSON.parse(localStorage.getItem(i));if(d(j)){return j}else{return null}}catch(k){return null}};return{init:function(){for(var k=0;k<localStorage.length;k++){try{var j=localStorage.key(k);this.getItem(j)}catch(l){}}},acknowledgeDisconnection:function(){h=true},resetDisconnectionAcknowledgement:function(){h=false},isDisconnectionAcknowledged:function(){return h},setItem:function(j,l,i){i=d(i)?i:new Date().valueOf()+f;var k={expires:i,item:l};localStorage.setItem(j,JSON.stringify(k))},hasItem:function(i){return a(i)!==null},getItem:function(i){var j=a(i);if(j===null){return null}if(c(j)){this.removeItem(i);return null}if(d(j.item)){return j.item}else{return null}},getItemExpiration:function(i){var j=a(i);if(j===null){return null}if(d(j.expires)){return j.expires}else{return null}},removeItem:function(i){localStorage.removeItem(i)}}}));
(function(a,b){if(typeof define==="function"&&define.amd){define(["jquery","d3","nf.Storage","lodash-core","moment"],function(f,e,d,c,g){return(nf.Common=b(f,e,d,c,g))})}else{if(typeof exports==="object"&&typeof module==="object"){module.exports=(nf.Common=b(require("jquery"),require("d3"),require("nf.Storage"),require("lodash-core"),require("moment")))}else{nf.Common=b(a.$,a.d3,a.nf.Storage,a._,a.moment)}}}(this,function(f,e,c,b,h){f(document).ready(function(){var i="images/bg-error.png";f("<img/>").attr("src",i).on("load",function(){f("div.message-pane").css("background-image",i)});f(document).on("mouseenter","span.link",function(){f(this).addClass("link-over")}).on("mouseleave","span.link",function(){f(this).removeClass("link-over")});f(document).on("click","div.nf-checkbox",function(){var k=f(this);var j=k.hasClass("checkbox-unchecked");if(j){k.removeClass("checkbox-unchecked").addClass("checkbox-checked")}else{k.removeClass("checkbox-checked").addClass("checkbox-unchecked")}k.trigger("change",{isChecked:j})});f(document).on("click",".nf-checkbox-label",function(j){f(j.target).parent().find(".nf-checkbox").click()});f(document).ajaxStart(function(){f("div.loading-container").addClass("ajax-loading")}).ajaxStop(function(){f("div.loading-container").removeClass("ajax-loading")});if(c.getItem("jwt")!==null){f("#user-logout-container").css("display","block");g.scheduleTokenRefresh()}f("#user-logout").on("click",function(){c.removeItem("jwt");window.location="../nifi/logout"});f("#user-home").on("click",function(){if(top!==window){parent.window.location="../nifi"}else{window.location="../nifi"}})});var d=null;var a=[{text:"view the user interface",value:"flow",description:"Allows users to view the user interface"},{text:"access the controller",value:"controller",description:"Allows users to view/modify the controller including Reporting Tasks, Controller Services, Parameter Contexts, and Nodes in the Cluster"},{text:"access parameter contexts",value:"parameter-contexts",description:"Allows users to view/modify Parameter Contexts"},{text:"query provenance",value:"provenance",description:"Allows users to submit a Provenance Search and request Event Lineage"},{text:"access restricted components",value:"restricted-components",description:"Allows users to create/modify restricted components assuming other permissions are sufficient"},{text:"access all policies",value:"policies",description:"Allows users to view/modify the policies for all components"},{text:"access users/user groups",value:"tenants",description:"Allows users to view/modify the users and user groups"},{text:"retrieve site-to-site details",value:"site-to-site",description:"Allows other NiFi instances to retrieve Site-To-Site details of this NiFi"},{text:"view system diagnostics",value:"system",description:"Allows users to view System Diagnostics"},{text:"proxy user requests",value:"proxy",description:"Allows proxy machines to send requests on the behalf of others"},{text:"access counters",value:"counters",description:"Allows users to view/modify Counters"}];var g={ANONYMOUS_USER_TEXT:"Anonymous user",config:{sensitiveText:"Sensitive value set",tooltipConfig:{style:{classes:"nifi-tooltip"},show:{solo:true,effect:function(i){f(this).slideDown(100)}},hide:{effect:function(i){f(this).slideUp(100)}},position:{at:"top center",my:"bottom center"}}},SUPPORTS_SVG:!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,currentUser:undefined,sortVersion:function(j,t){if(j===t){return 0}var p=j.split(/-/);var u=t.split(/-/);if(p.length>=1&&u.length>=1){var r=p[0].split(/\./);var o=u[0].split(/\./);if(r.length>=1&&o.length>=1){var m=Math.min(r.length,o.length);for(var n=0;n<m;n++){var s=parseInt(r[n],10);var l=parseInt(o[n],10);if(isNaN(s)&&isNaN(l)){continue}else{if(isNaN(s)){return -1}else{if(isNaN(l)){return 1}}}if(s!==l){return s-l}}if(r.length===o.length){if(p.length===u.length){var q=g.substringAfterFirst(j,p[0]);var k=g.substringAfterFirst(t,u[0]);return q===k?0:q>k?1:-1}else{return u.length-p.length}}else{return r.length-o.length}}else{if(r.length>=1){return 1}else{if(o.length>=1){return -1}else{return 0}}}}else{if(p.length>=1){return 1}else{if(u.length>=1){return -1}else{return 0}}}},sortType:function(i,l){var j=function(o,m){var p=g.formatBundle(o.bundle);var n=g.formatBundle(m.bundle);return p===n?0:p>n?1:-1};var k=function(t,s){if(i.columnId==="version"){var r=g.isDefinedAndNotNull(t.bundle[i.columnId])?t.bundle[i.columnId]:"";var p=g.isDefinedAndNotNull(s.bundle[i.columnId])?s.bundle[i.columnId]:"";var n=g.sortVersion(r,p);return n===0?j(t,s):n}else{if(i.columnId==="type"){var q=g.substringAfterLast(t[i.columnId],".");var o=g.substringAfterLast(s[i.columnId],".");return q===o?0:q>o?1:-1}else{var m=g.isDefinedAndNotNull(t[i.columnId])?t[i.columnId]:"";var u=g.isDefinedAndNotNull(s[i.columnId])?s[i.columnId]:"";return m===u?j(t,s):m>u?1:-1}}};l.sort(k,i.sortAsc)},typeFormatter:function(n,j,m,l,i){var k="";if(i.restricted===true){k+='<div class="view-usage-restriction fa fa-shield"></div><span class="hidden row-id">'+g.escapeHtml(i.id)+"</span>"}else{k+='<div class="fa"></div>'}k+=g.escapeHtml(m);return k},genericValueFormatter:function(m,j,l,k,i){return g.escapeHtml(l)},typeBundleFormatter:function(m,j,l,k,i){return g.escapeHtml(g.formatBundle(i.bundle))},typeVersionFormatter:function(n,j,m,l,i){var k="";if(g.isDefinedAndNotNull(i.bundle)){k+=('<div style="float: left;">'+g.escapeHtml(i.bundle.version)+"</div>")}else{k+='<div style="float: left;">unversioned</div>'}if(!g.isEmpty(i.controllerServiceApis)){k+='<div class="controller-service-apis fa fa-list" title="Compatible Controller Service" style="margin-left: 4px;"></div><span class="hidden row-id">'+g.escapeHtml(i.id)+"</span>"}k+='<div class="clear"></div>';return k},instanceTypeFormatter:function(m,j,l,k,i){if(!i.permissions.canRead){return""}return g.escapeHtml(g.formatType(i.component))},instanceBundleFormatter:function(m,j,l,k,i){if(!i.permissions.canRead){return""}return g.typeBundleFormatter(m,j,l,k,i.component)},getVersionControlTooltip:function(i){return i.stateExplanation},formatClassName:function(i){return g.substringAfterLast(i.type,".")},formatType:function(i){var j=g.formatClassName(i);if(i.bundle.version!=="unversioned"){j+=(" "+i.bundle.version)}return j},formatBundle:function(i){var j="";if(i.group!=="default"){j=i.group+" - "}return j+i.artifact},setCurrentUser:function(i){g.currentUser=i},scheduleTokenRefresh:function(){if(d!==null){clearInterval(d)}var i=g.MILLIS_PER_MINUTE;var j=function(){var l=c.getItemExpiration("jwt");if(l!==null){var n=new Date(l);var m=new Date();var k=n.valueOf()-m.valueOf()-(30*g.MILLIS_PER_SECOND);if(k<i){if(f("#current-user").text()!==g.ANONYMOUS_USER_TEXT&&!f("#anonymous-user-alert").is(":visible")){f("#anonymous-user-alert").show().qtip(f.extend({},g.config.tooltipConfig,{content:"Your session will expire soon. Please log in again to avoid being automatically logged out.",position:{my:"top right",at:"bottom left"}}))}}}};j();d=setInterval(j,i)},setAnonymousUserLabel:function(){var i=f("#anonymous-user-alert");if(i.data("qtip")){i.qtip("api").destroy(true)}i.show().qtip(f.extend({},g.config.tooltipConfig,{content:"You are accessing with limited authority. Log in or request an account to access with additional authority granted to you by an administrator.",position:{my:"top right",at:"bottom left"}}));f("#current-user").text(g.ANONYMOUS_USER_TEXT).show()},getJwtPayload:function(j){if(g.isDefinedAndNotNull(j)){var i=j.split(/\./);if(i.length!==3){return""}var l=f.base64.atob(i[1]);var k=JSON.parse(l);if(g.isDefinedAndNotNull(k)){return k}else{return null}}return null},canVersionFlows:function(){if(g.isDefinedAndNotNull(g.currentUser)){return g.currentUser.canVersionFlows===true}else{return false}},canAccessProvenance:function(){if(g.isDefinedAndNotNull(g.currentUser)){return g.currentUser.provenancePermissions.canRead===true}else{return false}},canAccessRestrictedComponents:function(){if(g.isDefinedAndNotNull(g.currentUser)){return g.currentUser.restrictedComponentsPermissions.canWrite===true}else{return false}},canAccessComponentRestrictions:function(j){if(g.isDefinedAndNotNull(g.currentUser)){if(g.currentUser.restrictedComponentsPermissions.canWrite===true){return true}var i=function(m){if(g.isEmpty(g.currentUser.componentRestrictionPermissions)){return false}var l=false;f.each(g.currentUser.componentRestrictionPermissions,function(n,o){if(o.requiredPermission.id===m.id){if(o.permissions.canWrite===true){l=true;return false}}});return l};var k=true;if(g.isEmpty(j)){k=false}else{f.each(j,function(l,m){if(!i(m.requiredPermission)){k=false;return false}})}return k}else{return false}},canAccessCounters:function(){if(g.isDefinedAndNotNull(g.currentUser)){return g.currentUser.countersPermissions.canRead===true}else{return false}},canModifyCounters:function(){if(g.isDefinedAndNotNull(g.currentUser)){return g.currentUser.countersPermissions.canRead===true&&g.currentUser.countersPermissions.canWrite===true}else{return false}},canAccessTenants:function(){if(g.isDefinedAndNotNull(g.currentUser)){return g.currentUser.tenantsPermissions.canRead===true}else{return false}},canModifyTenants:function(){if(g.isDefinedAndNotNull(g.currentUser)){return g.currentUser.tenantsPermissions.canRead===true&&g.currentUser.tenantsPermissions.canWrite===true}else{return false}},canModifyParameterContexts:function(){if(g.isDefinedAndNotNull(g.currentUser)){return g.currentUser.parameterContextPermissions.canRead===true&&g.currentUser.parameterContextPermissions.canWrite===true}else{return false}},canAccessPolicies:function(){if(g.isDefinedAndNotNull(g.currentUser)){return g.currentUser.policiesPermissions.canRead===true}else{return false}},canModifyPolicies:function(){if(g.isDefinedAndNotNull(g.currentUser)){return g.currentUser.policiesPermissions.canRead===true&&g.currentUser.policiesPermissions.canWrite===true}else{return false}},canAccessController:function(){if(g.isDefinedAndNotNull(g.currentUser)){return g.currentUser.controllerPermissions.canRead===true}else{return false}},canModifyController:function(){if(g.isDefinedAndNotNull(g.currentUser)){return g.currentUser.controllerPermissions.canRead===true&&g.currentUser.controllerPermissions.canWrite===true}else{return false}},canAccessSystem:function(){if(g.isDefinedAndNotNull(g.currentUser)){return g.currentUser.systemPermissions.canRead===true}else{return false}},addHoverEffect:function(i,k,j){f(document).on("mouseenter",i,function(){f(this).removeClass(k).addClass(j)}).on("mouseleave",i,function(){f(this).removeClass(j).addClass(k)});return f(i).addClass(k)},toggleScrollable:function(i){if(f(i).is(":visible")){if(i.offsetHeight<i.scrollHeight||i.offsetWidth<i.scrollWidth){f(i).addClass("scrollable")}else{f(i).removeClass("scrollable")}}},determineContrastColor:function(i){if(parseInt(i,16)>16777215/1.5){return"#000000"}return"#ffffff"},showLogoutLink:function(){if(c.getItem("jwt")===null){f("#user-logout-container").css("display","none")}else{f("#user-logout-container").css("display","block")}},isContentViewConfigured:function(){var i=f("#nifi-content-viewer-url").text();return !g.isBlank(i)},populateField:function(j,i){if(g.isUndefined(i)||g.isNull(i)){return f("#"+j).addClass("unset").text("No value set")}else{if(i===""){return f("#"+j).addClass("blank").text("Empty string set")}else{return f("#"+j).text(i)}}},clearField:function(i){return f("#"+i).removeClass("unset blank").text("")},cleanUpTooltips:function(i,j){i.find(j).each(function(){var l=f(this);if(l.data("qtip")){var k=l.qtip("api");k.destroy(true)}})},formatPropertyTooltip:function(j,l){var m=[];if(g.isDefinedAndNotNull(j)){if(!g.isBlank(j.description)){m.push(g.escapeHtml(j.description))}if(!g.isBlank(j.defaultValue)){m.push("<b>Default value:</b> "+g.escapeHtml(j.defaultValue))}if(!g.isBlank(j.supportsEl)){m.push("<b>Expression language scope:</b> "+g.escapeHtml(j.expressionLanguageScope))}if(!g.isBlank(j.identifiesControllerService)){var i=g.formatType({type:j.identifiesControllerService,bundle:j.identifiesControllerServiceBundle});var k=g.formatBundle(j.identifiesControllerServiceBundle);m.push("<b>Requires Controller Service:</b> "+g.escapeHtml(i+" from "+k))}}if(g.isDefinedAndNotNull(l)){if(!g.isEmpty(l.previousValues)){var n=[];f.each(l.previousValues,function(p,o){n.push("<li>"+g.escapeHtml(o.previousValue)+" - "+g.escapeHtml(o.timestamp)+" ("+g.escapeHtml(o.userIdentity)+")</li>")});m.push('<b>History:</b><ul class="property-info">'+n.join("")+"</ul>")}}if(m.length>0){return m.join("<br/><br/>")}else{return null}},formatProperty:function(i,j){return'<div><span class="label">'+g.formatValue(i)+": </span>"+g.formatValue(j)+"</div>"},formatValue:function(i){if(g.isDefinedAndNotNull(i)){if(i===""){return'<span class="blank" style="font-size: 13px; padding-top: 2px;">Empty string set</span>'}else{return g.escapeHtml(i)}}else{return'<span class="unset" style="font-size: 13px; padding-top: 2px;">No value set</span>'}},escapeHtml:(function(){var i={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2f;"};return function(j){if(g.isDefinedAndNotNull(j)){return String(j).replace(/[&<>"'\/]/g,function(k){return i[k]})}else{return""}}}()),isSensitiveProperty:function(i){if(g.isDefinedAndNotNull(i)){return i.sensitive===true}else{return false}},isRequiredProperty:function(i){if(g.isDefinedAndNotNull(i)){return i.required===true}else{return false}},isDynamicProperty:function(i){if(g.isDefinedAndNotNull(i)){return i.dynamic===true}else{return false}},getAllowableValues:function(i){if(g.isDefinedAndNotNull(i)){return i.allowableValues}else{return null}},supportsEl:function(i){if(g.isDefinedAndNotNull(i)){return i.supportsEl===true}else{return false}},formatUnorderedList:function(j){if(f.isArray(j)){var i=f('<ul class="result"></ul>');f.each(j,function(l,m){var k=f("<li></li>").appendTo(i);if(m instanceof jQuery){k.append(m)}else{k.text(m)}});return i}else{return null}},substringAfterLast:function(m,l){var j="";var k=m.lastIndexOf(l);if(k>=0){var i=k+l.length;if(i<m.length){j=m.substr(i)}}return j},substringAfterFirst:function(m,l){var j="";var k=m.indexOf(l);if(k>=0){var i=k+l.length;if(i<m.length){j=m.substr(i)}}return j},substringBeforeLast:function(l,k){var i="";var j=l.lastIndexOf(k);if(j>=0){i=l.substr(0,j)}return i},substringBeforeFirst:function(l,k){var i="";var j=l.indexOf(k);if(j>=0){i=l.substr(0,j)}return i},setCursor:function(j,i){if(i){f("#"+j).addClass("pointer")}else{f("#"+j).removeClass("pointer")}},getAccessToken:function(i){return f.Deferred(function(j){if(c.hasItem("jwt")){f.ajax({type:"POST",url:i}).done(function(k){j.resolve(k)}).fail(function(){j.reject()})}else{j.resolve("")}}).promise()},MILLIS_PER_DAY:86400000,MILLIS_PER_HOUR:3600000,MILLIS_PER_MINUTE:60000,MILLIS_PER_SECOND:1000,loadBalanceStrategyOptions:[{text:"Do not load balance",value:"DO_NOT_LOAD_BALANCE",description:"Do not load balance FlowFiles between nodes in the cluster."},{text:"Partition by attribute",value:"PARTITION_BY_ATTRIBUTE",description:"Determine which node to send a given FlowFile to based on the value of a user-specified FlowFile Attribute. All FlowFiles that have the same value for said Attribute will be sent to the same node in the cluster."},{text:"Round robin",value:"ROUND_ROBIN",description:"FlowFiles will be distributed to nodes in the cluster in a Round-Robin fashion. However, if a node in the cluster is not able to receive data as fast as other nodes, that node may be skipped in one or more iterations in order to maximize throughput of data distribution across the cluster."},{text:"Single node",value:"SINGLE_NODE",description:"All FlowFiles will be sent to the same node. Which node they are sent to is not defined."}],loadBalanceCompressionOptions:[{text:"Do not compress",value:"DO_NOT_COMPRESS",description:"FlowFiles will not be compressed"},{text:"Compress attributes only",value:"COMPRESS_ATTRIBUTES_ONLY",description:"FlowFiles' attributes will be compressed, but the FlowFiles' contents will not be"},{text:"Compress attributes and content",value:"COMPRESS_ATTRIBUTES_AND_CONTENT",description:"FlowFiles' attributes and content will be compressed"}],formatDuration:function(l){l=l<1?0:l;var n=l/g.MILLIS_PER_DAY;n=n>=1?parseInt(n,10):0;l%=g.MILLIS_PER_DAY;var i=l/g.MILLIS_PER_HOUR;i=i>=1?parseInt(i,10):0;l%=g.MILLIS_PER_HOUR;var j=l/g.MILLIS_PER_MINUTE;j=j>=1?parseInt(j,10):0;l%=g.MILLIS_PER_MINUTE;var m=l/g.MILLIS_PER_SECOND;m=m>=1?parseInt(m,10):0;l=Math.floor(l%g.MILLIS_PER_SECOND);var k=g.pad(i,2,"0")+":"+g.pad(j,2,"0")+":"+g.pad(m,2,"0")+"."+g.pad(l,3,"0");if(n>0){return n+" days and "+k}else{return k}},formatPredictedDuration:function(i){if(i===0){return"now"}return h.duration(i,"ms").humanize()},BYTES_IN_KILOBYTE:1024,BYTES_IN_MEGABYTE:1048576,BYTES_IN_GIGABYTE:1073741824,BYTES_IN_TERABYTE:1099511627776,formatDataSize:function(j){var i=parseFloat(j/g.BYTES_IN_TERABYTE);if(i>1){return i.toFixed(2)+" TB"}i=parseFloat(j/g.BYTES_IN_GIGABYTE);if(i>1){return i.toFixed(2)+" GB"}i=parseFloat(j/g.BYTES_IN_MEGABYTE);if(i>1){return i.toFixed(2)+" MB"}i=parseFloat(j/g.BYTES_IN_KILOBYTE);if(i>1){return i.toFixed(2)+" KB"}return parseFloat(j).toFixed(2)+" bytes"},formatInteger:function(j){var i=j+"";var k=/(\d+)(\d{3})/;while(k.test(i)){i=i.replace(k,"$1,$2")}return g.escapeHtml(i)},formatFloat:function(i){if(g.isUndefinedOrNull(i)){return 0+""}return i.toFixed(2)+""},pad:function(l,j,k){var i=l+"";while(i.length<j){i=k+i}return i},formatDateTime:function(i){return g.pad(i.getMonth()+1,2,"0")+"/"+g.pad(i.getDate(),2,"0")+"/"+g.pad(i.getFullYear(),2,"0")+" "+g.pad(i.getHours(),2,"0")+":"+g.pad(i.getMinutes(),2,"0")+":"+g.pad(i.getSeconds(),2,"0")+"."+g.pad(i.getMilliseconds(),3,"0")},parseDateTime:function(m){if(!g.isDefinedAndNotNull(m)){return new Date()}if(m==="No value set"){return new Date()}if(m==="Empty string set"){return new Date()}var t=m.split(/ /);if(t.length!==3){return new Date()}var j=t[0].split(/\//);var i=t[1].split(/:/);if(j.length!==3||i.length!==3){return new Date()}var o=parseInt(j[2],10);var n=parseInt(j[0],10)-1;var p=parseInt(j[1],10);var q=parseInt(i[0],10);var l=parseInt(i[1],10);var s=i[2].split(/\./);var r=parseInt(s[0],10);var k=0;if(s.length===2){k=parseInt(s[1],10)}return new Date(o,n,p,q,l,r,k)},parseDuration:function(i){var j=i.split(/:/);if(j.length!==3){return 0}var k=j[2].split(/\./);if(k.length===2){return new Date(1970,0,1,parseInt(j[0],10),parseInt(j[1],10),parseInt(k[0],10),parseInt(k[1],10)).getTime()}else{return new Date(1970,0,1,parseInt(j[0],10),parseInt(j[1],10),parseInt(j[2],10),0).getTime()}},parseSize:function(k){var l=k.split(/ /);var j=parseFloat(l[0].replace(/,/g,""));var i=l[1];if(i==="KB"){return j*1024}else{if(i==="MB"){return j*1024*1024}else{if(i==="GB"){return j*1024*1024*1024}else{if(i==="TB"){return j*1024*1024*1024*1024}else{return j}}}}},parseCount:function(k){var j=k.split(/ /,1);if(j.length!==1){return 0}var i=parseInt(j[0].replace(/,/g,""),10);if(isNaN(i)){return 0}return i},isDefinedAndNotNull:function(i){return !g.isUndefined(i)&&!g.isNull(i)},isUndefinedOrNull:function(i){return g.isUndefined(i)||g.isNull(i)},isUndefined:function(i){return typeof i==="undefined"},isBlank:function(i){return g.isUndefined(i)||g.isNull(i)||f.trim(i)===""},isNull:function(i){return i===null},isEmpty:function(i){return f.isArray(i)?i.length===0:true},doBulletinsDiffer:function(k,l){if(f.isArray(k)&&f.isArray(l)){if(k.length===l.length){for(var j=0;j<k.length;j++){if(k[j].id!==l[j].id||k[j].canRead!==l[j].canRead){return true}}}else{return true}}else{if(f.isArray(k)||f.isArray(l)){return true}}return false},getFormattedBulletins:function(j){var i=[];f.each(j,function(l,m){if(m.canRead===true){var k=m.bulletin;var p="";if(g.isDefinedAndNotNull(k.nodeAddress)){p="-&nbsp;"+g.escapeHtml(k.nodeAddress)+"&nbsp;-&nbsp;"}var o=f("<pre></pre>").css({"white-space":"pre-wrap"}).text(k.message);var n=f("<div>"+g.escapeHtml(k.timestamp)+"&nbsp;"+p+"&nbsp;<b>"+g.escapeHtml(k.level)+"</b>&nbsp;</div>").append(o);i.push(n)}});return i},getFormattedServiceApis:function(j){var i=[];f.each(j,function(m,n){var k=g.formatType({type:n.type,bundle:n.bundle});var l=g.formatBundle(n.bundle);i.push(f("<div></div>").text(k+" from "+l))});return i},getFormattedGarbageCollections:function(j){j.sort(function(l,k){return k.collectionCount-l.collectionCount});var i=[];f.each(j,function(m,k){var l=f('<span style="font-weight: bold;"></span>').text(k.name);var n=f("<span></span>").text(" - "+k.collectionCount+" times ("+k.collectionTime+")");var o=f("<div></div>").append(l).append(n);i.push(o)});return i},isGlobalPolicy:function(i){return g.getPolicyTypeListing(i)!==null},getPolicyTypeListing:function(i){return a.find(function(j){return i===j.value})},getComponentName:function(i){return i.permissions.canRead===true?i.component.name:i.id},getComboOptionText:function(i,k){var j=i.find(function(l){return l.value===k});return g.isDefinedAndNotNull(j)?j.text:undefined},throttle:function(i,j){return b.throttle(i,j)},getKeyValue:function(j,i){return i.split(".").reduce(function(l,k){return(typeof l===undefined||l===null)?l:(typeof l[k]=="function")?l[k]():l[k]},j)}};return g}));
(function(a,b){if(typeof define==="function"&&define.amd){define(["jquery","nf.Dialog","nf.Common"],function(d,c,e){return(nf.ErrorHandler=b(d,c,e))})}else{if(typeof exports==="object"&&typeof module==="object"){module.exports=(nf.ErrorHandler=b(require("jquery"),require("nf.Dialog"),require("nf.Common")))}else{nf.ErrorHandler=b(a.$,a.nf.Dialog,a.nf.Common)}}}(this,function(c,b,d){var a={handleAjaxError:function(h,e,f){if(e==="canceled"){if(c("#splash").is(":visible")){c("#message-title").text("Session Expired");c("#message-content").text("Your session has expired. Please reload to log in again.");c("#message-pane").show()}else{b.showOkDialog({headerText:"Session Expired",dialogContent:"Your session has expired. Please press Ok to log in again.",okHandler:function(){window.location="/nifi"}})}return}if(c("#splash").is(":visible")){if(h.status===401){c("#message-title").text("Unauthorized")}else{if(h.status===403){c("#message-title").text("Insufficient Permissions")}else{if(h.status===409){c("#message-title").text("Invalid State")}else{if(h.status===413){c("#message-title").text("Payload Too Large")}else{c("#message-title").text("An unexpected error has occurred")}}}}if(c.trim(h.responseText)===""){c("#message-content").text("Please check the logs.")}else{c("#message-content").text(h.responseText)}c("#message-pane").show();return}if(h.status===400||h.status===404||h.status===409||h.status==413||h.status===503){b.showOkDialog({headerText:"Error",dialogContent:d.escapeHtml(h.responseText)})}else{if(h.status===403){b.showOkDialog({headerText:"Insufficient Permissions",dialogContent:d.escapeHtml(h.responseText)})}else{if(h.status<99||h.status===12007||h.status===12029){var g="Please ensure the application is running and check the logs for any errors.";if(d.isDefinedAndNotNull(e)){if(e==="timeout"){g="Request has timed out. Please ensure the application is running and check the logs for any errors."}else{if(e==="abort"){g="Request has been aborted."}else{if(e==="No Transport"){g="Request transport mechanism failed. Please ensure the host where the application is running is accessible."}}}}c("#message-title").text("Unable to communicate with NiFi");c("#message-content").text(g)}else{if(h.status===401){c("#message-title").text("Unauthorized");if(c.trim(h.responseText)===""){c("#message-content").text("Authentication is required to use this NiFi.")}else{c("#message-content").text(h.responseText)}}else{if(h.status===500){c("#message-title").text("An unexpected error has occurred");if(c.trim(h.responseText)===""){c("#message-content").text("An error occurred communicating with the application core. Please check the logs and fix any configuration issues before restarting.")}else{c("#message-content").text(h.responseText)}}else{if(h.status===200||h.status===201){c("#message-title").text("Parse Error");if(c.trim(h.responseText)===""){c("#message-content").text("Unable to interpret response from NiFi.")}else{c("#message-content").text(h.responseText)}}else{c("#message-title").text(h.status+": Unexpected Response");c("#message-content").text("An unexpected error has occurred. Please check the logs.")}}}}c("#message-pane").show()}}},handleConfigurationUpdateAjaxError:function(h,e,f){if(h.status===400){var i=h.responseText.split("\n");var g;if(i.length===1){g=c("<span></span>").text(i[0])}else{g=d.formatUnorderedList(i)}b.showOkDialog({dialogContent:g,headerText:"Configuration Error"})}else{a.handleAjaxError(h,e,f)}}};return a}));
(function(a,b){if(typeof define==="function"&&define.amd){define(["jquery"],function(c){return(nf.UniversalCapture=b(c))})}else{if(typeof exports==="object"&&typeof module==="object"){module.exports=(nf.UniversalCapture=b(require("jquery")))}else{nf.UniversalCapture=b(a.$)}}}(this,function(b){b(document).ready(function(c){c(window).on("keydown",function(d){var i=d.ctrlKey||d.metaKey;if(!i&&d.keyCode===27){var g=c("div.value-combo");if(g.is(":visible")&&g.parent().hasClass("combo-editor")){return}if(c("div.property-detail").is(":visible")){a.removeAllPropertyDetailDialogs();d.stopImmediatePropagation();d.preventDefault()}else{var h=c(d.target);if(h.length){var j=c(".cancellable");if(j.length){var e=null;var f=null;c.each(j,function(k,m){var l=c(m);var n=l.css("zIndex");if(l.is(":visible")&&(n!==null&&typeof n!=="undefined")){n=parseInt(n,10);if(e===null||n>e){e=n;f=l}}});if(f!==null){if(f.hasClass("modal")){f.modal("hide")}else{f.hide()}d.stopImmediatePropagation();d.preventDefault();return}}if(top!==window){if(typeof parent.nf!=="undefined"&&typeof parent.nf.Shell!=="undefined"){parent.$("#shell-close-button").click();d.stopImmediatePropagation();d.preventDefault();return}}}}}else{if(i){if(d.keyCode===82){d.preventDefault()}}else{if(!c("input, textarea").is(":focus")&&(d.keyCode==8||d.keyCode===46)){d.preventDefault()}}}})});var a={removeAllPropertyDetailDialogs:function(){var c=b("body").find("div.property-detail");c.find("div.nf-editor").nfeditor("destroy");c.find("div.value-combo").combo("destroy");c.hide().remove()}};return a}));
(function(a,b){if(typeof define==="function"&&define.amd){define(["jquery","nf.Storage"],function(d,c){return(nf.AjaxSetup=b(d,c))})}else{if(typeof exports==="object"&&typeof module==="object"){module.exports=(nf.AjaxSetup=b(require("jquery"),require("nf.Storage")))}else{nf.AjaxSetup=b(a.$,a.nf.Storage)}}}(this,function(b,a){b(document).ready(function(c){c.ajaxSetup({beforeSend:function(f){var d=a.hasItem("jwt");var e=a.getItem("jwt");if(e!==null){f.setRequestHeader("Authorization","Bearer "+e)}else{if(d===true){return false}}}})})}));
(function(a,b){if(typeof define==="function"&&define.amd){define(["jquery","nf.Common","nf.Dialog","nf.Storage"],function(e,f,d,c){return(nf.Login=b(e,f,d,c))})}else{if(typeof exports==="object"&&typeof module==="object"){module.exports=(nf.Login=b(require("jquery"),require("nf.Common"),require("nf.Dialog"),require("nf.Storage")))}else{nf.Login=b(a.$,a.nf.Common,a.nf.Dialog,a.nf.Storage)}}}(this,function(f,c,e,h){f(document).ready(function(){d.init()});var a={urls:{token:"../nifi-api/access/token",accessStatus:"../nifi-api/access",accessConfig:"../nifi-api/access/config"}};var j=function(){f("#login-message-container").show()};var g=function(){f("#username").val("");f("#password").val("");f("#login-submission-button").text("Log in");f("#login-container").show();f("#nifi-registration-container").hide();f("#username").focus()};var b=function(){f("#login-submission-button").on("click",function(){if(f("#login-container").is(":visible")){i()}});f("#login-submission-container").show()};var i=function(){f("#username, #password").blur();f("#login-progress-label").text("Logging in...");f("#login-progress-container").show();f("#login-submission-container").hide();f.ajax({type:"POST",url:a.urls.token,data:{username:f("#username").val(),password:f("#password").val()}}).done(function(n){var m=c.getJwtPayload(n);var l=parseInt(m.exp,10)*c.MILLIS_PER_SECOND;h.setItem("jwt",n,l);f.ajax({type:"GET",url:a.urls.accessStatus,dataType:"json"}).done(function(o){var p=o.accessStatus;k();if(p.status==="ACTIVE"){if(top!==window){parent.window.location="/nifi"}else{window.location="/nifi"}}else{f("#login-message-title").text("Unable to log in");f("#login-message").text(p.message);f("#login-container").hide();f("#login-submission-container").hide();f("#login-progress-container").hide();f("#login-message-container").show()}}).fail(function(q,o,p){f("#login-message-title").text("Unable to log in");f("#login-message").text(q.responseText);f("#login-container").hide();f("#login-submission-container").hide();f("#login-progress-container").hide();f("#login-message-container").show()})}).fail(function(n,l,m){e.showOkDialog({headerText:"Login",dialogContent:c.escapeHtml(n.responseText)});f("#login-submission-container").show();f("#login-progress-container").hide()})};var k=function(){c.showLogoutLink()};var d={init:function(){h.init();if(h.getItem("jwt")!==null){k()}f("#username, #password").on("keyup",function(o){var n=o.keyCode?o.keyCode:o.which;if(n===f.ui.keyCode.ENTER){i()}});var m=f.ajax({type:"GET",url:a.urls.accessStatus,dataType:"json"}).fail(function(p,n,o){f("#login-message-title").text("Unable to check Access Status");f("#login-message").text(p.responseText);j()});var l=f.ajax({type:"GET",url:a.urls.accessConfig,dataType:"json"});f.when(m,l).done(function(p,o){var r=p[0];var u=r.accessStatus;var s=o[0];var n=s.config;var q=true;var t=false;if(u.status==="UNKNOWN"){q=true}else{if(u.status==="ACTIVE"){t=true;q=false;f("#login-message-title").text("Success");f("#login-message").text(u.message)}}if(n.supportsLogin===false&&q===true){f("#login-message-title").text("Access Denied");f("#login-message").text("This NiFi is not configured to support username/password logins.");t=true;q=false}if(t===true){j()}else{if(q===true){g();b()}}})}};return d}));

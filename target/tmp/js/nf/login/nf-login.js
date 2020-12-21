(function(a,b){if(typeof define==="function"&&define.amd){define(["jquery","nf.Common","nf.Dialog","nf.Storage"],function(e,f,d,c){return(nf.Login=b(e,f,d,c))})}else{if(typeof exports==="object"&&typeof module==="object"){module.exports=(nf.Login=b(require("jquery"),require("nf.Common"),require("nf.Dialog"),require("nf.Storage")))}else{nf.Login=b(a.$,a.nf.Common,a.nf.Dialog,a.nf.Storage)}}}(this,function(f,c,e,h){f(document).ready(function(){d.init()});var a={urls:{token:"../nifi-api/access/token",accessStatus:"../nifi-api/access",accessConfig:"../nifi-api/access/config"}};var j=function(){f("#login-message-container").show()};var g=function(){f("#username").val("");f("#password").val("");f("#login-submission-button").text("Log in");f("#login-container").show();f("#nifi-registration-container").hide();f("#username").focus()};var b=function(){f("#login-submission-button").on("click",function(){if(f("#login-container").is(":visible")){i()}});f("#login-submission-container").show()};var i=function(){f("#username, #password").blur();f("#login-progress-label").text("Logging in...");f("#login-progress-container").show();f("#login-submission-container").hide();f.ajax({type:"POST",url:a.urls.token,data:{username:f("#username").val(),password:f("#password").val()}}).done(function(n){var m=c.getJwtPayload(n);var l=parseInt(m.exp,10)*c.MILLIS_PER_SECOND;h.setItem("jwt",n,l);f.ajax({type:"GET",url:a.urls.accessStatus,dataType:"json"}).done(function(o){var p=o.accessStatus;k();if(p.status==="ACTIVE"){if(top!==window){parent.window.location="/nifi"}else{window.location="/nifi"}}else{f("#login-message-title").text("Unable to log in");f("#login-message").text(p.message);f("#login-container").hide();f("#login-submission-container").hide();f("#login-progress-container").hide();f("#login-message-container").show()}}).fail(function(q,o,p){f("#login-message-title").text("Unable to log in");f("#login-message").text(q.responseText);f("#login-container").hide();f("#login-submission-container").hide();f("#login-progress-container").hide();f("#login-message-container").show()})}).fail(function(n,l,m){e.showOkDialog({headerText:"Login",dialogContent:c.escapeHtml(n.responseText)});f("#login-submission-container").show();f("#login-progress-container").hide()})};var k=function(){c.showLogoutLink()};var d={init:function(){h.init();if(h.getItem("jwt")!==null){k()}f("#username, #password").on("keyup",function(o){var n=o.keyCode?o.keyCode:o.which;if(n===f.ui.keyCode.ENTER){i()}});var m=f.ajax({type:"GET",url:a.urls.accessStatus,dataType:"json"}).fail(function(p,n,o){f("#login-message-title").text("Unable to check Access Status");f("#login-message").text(p.responseText);j()});var l=f.ajax({type:"GET",url:a.urls.accessConfig,dataType:"json"});f.when(m,l).done(function(p,o){var r=p[0];var u=r.accessStatus;var s=o[0];var n=s.config;var q=true;var t=false;if(u.status==="UNKNOWN"){q=true}else{if(u.status==="ACTIVE"){t=true;q=false;f("#login-message-title").text("Success");f("#login-message").text(u.message)}}if(n.supportsLogin===false&&q===true){f("#login-message-title").text("Access Denied");f("#login-message").text("This NiFi is not configured to support username/password logins.");t=true;q=false}if(t===true){j()}else{if(q===true){g();b()}}})}};return d}));
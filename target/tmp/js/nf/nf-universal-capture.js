(function(a,b){if(typeof define==="function"&&define.amd){define(["jquery"],function(c){return(nf.UniversalCapture=b(c))})}else{if(typeof exports==="object"&&typeof module==="object"){module.exports=(nf.UniversalCapture=b(require("jquery")))}else{nf.UniversalCapture=b(a.$)}}}(this,function(b){b(document).ready(function(c){c(window).on("keydown",function(d){var i=d.ctrlKey||d.metaKey;if(!i&&d.keyCode===27){var g=c("div.value-combo");if(g.is(":visible")&&g.parent().hasClass("combo-editor")){return}if(c("div.property-detail").is(":visible")){a.removeAllPropertyDetailDialogs();d.stopImmediatePropagation();d.preventDefault()}else{var h=c(d.target);if(h.length){var j=c(".cancellable");if(j.length){var e=null;var f=null;c.each(j,function(k,m){var l=c(m);var n=l.css("zIndex");if(l.is(":visible")&&(n!==null&&typeof n!=="undefined")){n=parseInt(n,10);if(e===null||n>e){e=n;f=l}}});if(f!==null){if(f.hasClass("modal")){f.modal("hide")}else{f.hide()}d.stopImmediatePropagation();d.preventDefault();return}}if(top!==window){if(typeof parent.nf!=="undefined"&&typeof parent.nf.Shell!=="undefined"){parent.$("#shell-close-button").click();d.stopImmediatePropagation();d.preventDefault();return}}}}}else{if(i){if(d.keyCode===82){d.preventDefault()}}else{if(!c("input, textarea").is(":focus")&&(d.keyCode==8||d.keyCode===46)){d.preventDefault()}}}})});var a={removeAllPropertyDetailDialogs:function(){var c=b("body").find("div.property-detail");c.find("div.nf-editor").nfeditor("destroy");c.find("div.value-combo").combo("destroy");c.hide().remove()}};return a}));
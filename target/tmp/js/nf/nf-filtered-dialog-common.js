(function(a,b){if(typeof define==="function"&&define.amd){define(["jquery"],function(c){return(nf.FilteredDialogCommon=b(c))})}else{if(typeof exports==="object"&&typeof module==="object"){module.exports=(nf.FilteredDialogCommon=b(require("jquery")))}else{nf.FilteredDialogCommon=b(a.$)}}}(this,function(a){var b={addKeydownListener:function(e,d,c){var f=[a.ui.keyCode.UP,a.ui.keyCode.PAGE_UP,a.ui.keyCode.DOWN,a.ui.keyCode.PAGE_DOWN];a(e).off("keydown").on("keydown",function(j){var i=j.keyCode?j.keyCode:j.which;if(a.inArray(i,f)===-1||j.shiftKey||j.altKey||j.ctrlKey){return}var h=d.getSelectedRows();if(h.length>0){if(i===a.ui.keyCode.PAGE_UP){d.navigatePageUp();return}if(i===a.ui.keyCode.PAGE_DOWN){d.navigatePageDown();return}var g=h[0];if(i===a.ui.keyCode.UP){g=Math.max(g-1,0)}else{g=Math.min(g+1,c.getLength()-1)}b.choseRow(d,g);d.scrollRowIntoView(g,false)}})},choseFirstRow:function(c){b.choseRow(c,0)},choseRow:function(d,c){d.setSelectedRows([c]);d.setActiveCell(c,0)}};return b}));
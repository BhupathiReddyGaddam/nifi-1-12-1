(function(a,b){if(typeof define==="function"&&define.amd){define(["jquery"],function(c){return(nf.ClusterSummary=b(c))})}else{if(typeof exports==="object"&&typeof module==="object"){module.exports=(nf.ClusterSummary=b(require("jquery")))}else{nf.ClusterSummary=b(a.$)}}}(this,function(e){var d=false;var c=false;var f=false;var b=false;var a={urls:{clusterSummary:"../nifi-api/flow/cluster/summary"}};return{loadClusterSummary:function(){return e.ajax({type:"GET",url:a.urls.clusterSummary,dataType:"json"}).done(function(g){var h=g;var i=h.clusterSummary;if(d===true){if(f!==i.connectedToCluster){b=true}}else{if(i.clustered&&!i.connectedToCluster){b=true}}c=i.clustered;f=i.connectedToCluster;d=true})},isClustered:function(){return c===true},isConnectedToCluster:function(){return f===true},didConnectedStateChange:function(){var g=b;b=false;return g}}}));
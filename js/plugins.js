window.log=function(){log.history=log.history||[];log.history.push(arguments);if(this.console){arguments.callee=arguments.callee.caller;var a=[].slice.call(arguments);(typeof console.log==="object"?log.apply.call(console.log,console,a):console.log.apply(console,a))}};
(function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,timeStamp,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();){b[a]=b[a]||c}})((function(){try
{console.log();return window.console;}catch(err){return window.console={};}})());

// Google maps
$("#map").gMap({ 
	controls: ["GSmallMapControl", "GMapTypeControl"],
	scrollwheel: false,
	markers: [
		{ 
			latitude: 51.0832119,
			longitude: 1.0783501,
			html: "<strong>Saint Peter & Saint Pauls Church</strong> <br />Saltwood <br />Rectory Lane <br />Hythe <br />Kent <br />CT21 4QA",
			icon: 
			{
				image: "img/map-pin-church.png",
				iconsize: [26, 46],
				iconanchor: [12,46],
				infowindowanchor: [13, 0] 
			}
		},
		{ 
			latitude: 51.080809,
			longitude: 1.077965,
			html: "<strong>Saltwood Village Hall</strong> <br />Rectory Lane<br /> Saltwood Hythe<br /> Kent<br /> CT21 4PZ",
			icon: 
			{
				image: "img/map-pin.png",
				iconsize: [26, 46],
				iconanchor: [12,46],
				infowindowanchor: [13, 0] 
			}
		}],
		zoom: 13 
	});

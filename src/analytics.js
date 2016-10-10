/* eslint-disable */
function analytics() {
	setTimeout(() => {
		// Add analytics asynchronously on load
		window.owa_baseUrl = 'http://analytics.mxstbr.com/';
		window.owa_cmds = window.owa_cmds || [];
		window.owa_cmds.push(['setSiteId', '485e965b1c9ef68cff7f4753c9b46952']);
		window.owa_cmds.push(['trackPageView']);
		window.owa_cmds.push(['trackClicks']);
		(function() {
		  var _owa = document.createElement('script'); _owa.type = 'text/javascript'; _owa.async = true;
		  owa_baseUrl = ('https:' == document.location.protocol ? window.owa_baseSecUrl || owa_baseUrl.replace(/http:/, 'https:') : owa_baseUrl );
		  _owa.src = owa_baseUrl + 'modules/base/js/owa.tracker-combined-min.js';
		  var _owa_s = document.getElementsByTagName('script')[0]; _owa_s.parentNode.insertBefore(_owa, _owa_s);
		}());
	}, 10)
}

export default analytics;

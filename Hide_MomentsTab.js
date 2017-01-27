// ==UserScript==
// @name         Hide Moments tab
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  hide moments tab
// @author       kani
// @match        https://twitter.com/*
// @grant        none
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// ==/UserScript==

$(function(){

	$("li.moments.js-moments-tab").remove();
  
})();

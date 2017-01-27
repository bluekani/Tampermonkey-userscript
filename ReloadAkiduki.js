// ==UserScript==
// @name         Reload Akiduki
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Reload Akiduki
// @author       kani
// @match        http://akizukidenshi.com/*

// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    if (document.getElementsByClassName("notice_").length == 1 && 
        document.getElementsByClassName("notice_")[0].innerText.indexOf("セッションの有効期間") >= 0) {
        location.reload();
    }
    
})();

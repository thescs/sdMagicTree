// ==UserScript==
// @name        MagicTreeLoader
// @namespace   thescs.naumen.sd.displayhiddenblocks.loader
// @description Shows hidden areas in Service Desk (autoupdate)
// @include     https://sd.volia.com:8443/fx/voliagwt/*
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.js
// @version     2
// @grant       none
// ==/UserScript==

function include(src, callback)
{
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';

    if(callback)
    {
        var userAgent = navigator.userAgent.toLowerCase();
        
        if(/msie/.test( userAgent ) && !/opera/.test( userAgent ))
        {
            script.onreadystatechange = function()
            {
                if(script.readyState == 'complete')
                    callback();
            }
        }
        else
        {
            script.onload = function ()
            {
                callback();
            }
        }
    }

    script.src = src;
    head.appendChild(script);
}

include('https://rawgit.com/thescs/sdMagicTree/autoupdate/miracle.js');

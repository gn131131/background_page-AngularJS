(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{12:function(module,exports){!function(maxWidth){var tid,doc=document,win=window,docEl=doc.documentElement,remStyle=document.createElement("style");function refreshRem(){var width=docEl.getBoundingClientRect().width;(maxWidth=maxWidth||540)<width&&(width=maxWidth);var rem=100*width/750;remStyle.innerHTML="html{font-size:"+rem+"px;}"}if(docEl.firstElementChild)docEl.firstElementChild.appendChild(remStyle);else{var wrap=doc.createElement("div");wrap.appendChild(remStyle),doc.write(wrap.innerHTML),wrap=null}refreshRem(),win.addEventListener("resize",function(){clearTimeout(tid),tid=setTimeout(refreshRem,300)},!1),win.addEventListener("pageshow",function(e){e.persisted&&(clearTimeout(tid),tid=setTimeout(refreshRem,300))},!1),"complete"===doc.readyState?doc.body.style.fontSize="16px":doc.addEventListener("DOMContentLoaded",function(e){doc.body.style.fontSize="16px"},!1)}(750)}}]);
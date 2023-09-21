var abcloak = function(site,iconurl,title) { // ab (about:blank) cloaking stops websites from being shown in history, this also lets you change the site it tries to looklike 
    win = window.open();
    win.document.title = title;
    link = win.document.createElement('link');
    link.href = iconurl;
    link.rel = 'icon';
    link.type = 'image/x-icon';
    win.document.head.appendChild(link);
    iframe = win.document.createElement('iframe');
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    iframe.src = site;
    win.document.body.appendChild(iframe)
} // ex abcloak('https://bing.com','https://ssl.gstatic.com/classroom/ic_product_classroom_144.png','Home')

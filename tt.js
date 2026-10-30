/* TikTok Pixel for GRUB TUB. Paste the pixel ID from TikTok Events Manager below. */
(function(){
  var TT_PIXEL_ID = 'PASTE_TIKTOK_PIXEL_ID';
  if (!TT_PIXEL_ID || TT_PIXEL_ID.indexOf('PASTE') === 0) return;
  !function (w, d, t) {
    w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=d.createElement("script");n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=d.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
    ttq.load(TT_PIXEL_ID);
    ttq.page();
  }(window, document, 'ttq');
  /* Booking and gift card clicks (FareHarbor opens in a lightframe) */
  document.addEventListener('click', function(e){
    var a = e.target.closest && e.target.closest('a[href*="fareharbor.com/embeds/book"]');
    if (!a || !window.ttq) return;
    var gift = a.href.indexOf('707168') > -1;
    try {
      ttq.track(gift ? 'AddToCart' : 'InitiateCheckout', {
        content_type: 'product',
        content_id: gift ? 'gift-card' : (a.href.match(/items\/(\d+)/) || [,'booking'])[1],
        content_name: (a.textContent || '').trim(),
        currency: 'USD'
      });
    } catch(_) {}
  }, true);
})();

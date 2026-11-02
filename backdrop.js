/* Boot for backdrop.html: reads the query string and mounts the backdrop.
   A separate file so the page can run under script-src 'self'. */
(function () {
  var q = new URLSearchParams(location.search);
  var has = function (k) { return q.get(k) != null; };
  var opts = {
    base: location.pathname.replace(/[^/]*$/, ""),   // this site, wherever it is served from
    follow: has("follow") ? q.get("follow") !== "0" : false,
    intervalMinutes: has("interval") ? Number(q.get("interval")) : 3,
    motion: q.get("motion") || "gentle",
    palette: q.get("palette") || "orange",
    disc: q.get("disc") !== "0",
    vignette: q.get("vignette") !== "0",
  };
  if (has("discsize")) opts.discSize = q.get("discsize");
  if (has("wordmark")) opts.wordmark = q.get("wordmark");
  if (has("categories")) opts.categories = q.get("categories").split(",");
  if (has("start")) opts.start = q.get("start");
  if (has("fade")) opts.fadeMs = Number(q.get("fade"));
  window.esmBackdrop = ESMBackdrop.mount(opts);
})();

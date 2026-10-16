// Keep retired language subpages removed; four restored editions have a homepage only.
export default {
  async fetch(request, env) {
    const pathname = new URL(request.url).pathname;
    if (["GET", "HEAD"].includes(request.method) && /^\/(?:de|fr|pt-br|it)(?:\/(?:index\.html)?)?$/i.test(pathname)) {
      return env.ASSETS.fetch(request);
    }
    if (/^\/(?:ja|ko|zh-hant|pt-br|ru|de|fr|ar)(?:\/|$)/i.test(pathname)) {
      return new Response(request.method === "HEAD" ? null : "This language edition has been removed. English: /  Spanish: /es/\n", {
        status: 410,
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Cache-Control": "no-store",
          "X-Robots-Tag": "noindex",
        },
      });
    }
    return env.ASSETS.fetch(request);
  },
};

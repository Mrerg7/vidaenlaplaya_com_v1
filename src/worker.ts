interface Env {
  ASSETS: Fetcher;
}

const CANONICAL_HOST = 'vidaenlaplaya.com';

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.hostname === `www.${CANONICAL_HOST}`) {
      url.hostname = CANONICAL_HOST;
      url.protocol = 'https:';
      return Response.redirect(url.toString(), 301);
    }

    if (
      url.protocol === 'http:' &&
      (url.hostname === CANONICAL_HOST || url.hostname === `www.${CANONICAL_HOST}`)
    ) {
      url.protocol = 'https:';
      return Response.redirect(url.toString(), 301);
    }

    if (url.pathname === '/404' || url.pathname === '/404/') {
      const notFound = await env.ASSETS.fetch(
        new Request(new URL('/404.html', url.origin), request),
      );
      return new Response(notFound.body, {
        status: 404,
        headers: notFound.headers,
      });
    }

    const response = await env.ASSETS.fetch(request);

    if (url.hostname.endsWith('.workers.dev')) {
      const headers = new Headers(response.headers);
      headers.set('X-Robots-Tag', 'noindex, nofollow');
      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers,
      });
    }

    return response;
  },
} satisfies ExportedHandler<Env>;

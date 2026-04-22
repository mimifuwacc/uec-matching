export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/api/ip') {
      const ip = request.headers.get('CF-Connecting-IP') ?? 'unknown';
      return Response.json({ ip });
    }

    return env.ASSETS.fetch(request);
  }
};

# Mineplex Public API
Welcome to the Mineplex Public API! Our API provides PC and PE endpoints for gathering information about players, network status, and more.
All API endpoints utilize the HTTP `GET` method. API keys are passed in through the `query` string `apiKey` or through the request header TBD.
The base url for our API is [https://api.mineplex.com](https://api.mineplex.com), PC and PE API's are hosted at `/pc` and `/pe` respectively.

## Documentation
All API Documentation is specified using the [OpenAPI 2.0 Specification](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md). If you would like to
contribute to our documentation, you must submit a pull request to update the json documentation files, all extra documentation is generated based on the json.

## PC API
The PC API is hosted at [https://api.mineplex.com/pc](https://api.mineplex.com/pc), and corresponds to the Mineplex Network on [Minecraft PC/Mac Edition](https://minecraft.net/).
### Authorization
All PC endpoints require an API Key, each API key is bound to a Minecraft account. API Keys are currently only provided to those with Early API Access.
In the future you will be able to get an API key in-game. Abuse of our Public API will result in your API access being revoked, further action will be taken if necessary.
### Caching
We implement server side caching and client side caching for specific high traffic endpoints. Client side caching is implemented through
the `Cache-Control` HTTP header.
### Rate Limiting
All API keys have a basic limit of 3000 requests per hour (almost one request per second). We use the following HTTP headers to specify rate data in each request;

HTTP Header | Description
--- | ---
X-RateLimit-Limit | Your total requests allowed per hour
X-RateLimit-Remaining | The amount of requests you have remaining in this time period
X-RateLimit-Reset | The time at which your current rate limit period resets in UTC epoch seconds

If you have exceeded your rate limit, the API will respond with [HTTP 429 Too Many Requests](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#429).
If you feel you have a valid reason to need a higher rate limit, please email us explaining why you need a larger rate limit and what you plan to use it for.

## PE API
TODO
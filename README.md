# Sanity KV example (redirection)

This is a simple example of how to use Sanity as a key-value store for redirections.

## Possible use cases:
- Redirecting old URLs to new ones
- Feature flags with dynamic values
- Just a simple key-value store
- etc.

## URLs:
- [Sanity Studio](http://localhost:3000/studio)
- [/need-to-be-redirected](http://localhost:3000/need-to-be-redirected)
- [/redirected](http://localhost:3000/redirected)
- [/api/sanity/basic](http://localhost:3000/api/sanity/basic?key=/need-to-be-redirected)
- [/api/sanity/edge](http://localhost:3000/api/sanity/edge?key=/need-to-be-redirected)
- [/api/sanity/dynamic](http://localhost:3000/api/sanity/dynamic?key=/need-to-be-redirected)
> Reason for basic/edge/dynamic is to compare the time and caching. It won't make sense to check on localhost env.
> 
> *Browser cache - do hard refresh*


# original README.md below
---------------------------------------
# Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Drizzle](https://orm.drizzle.team)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.

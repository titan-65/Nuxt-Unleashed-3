// import express, {Request, Response} from 'express'
// import { menu } from '~/lib/coffee'
// import { coffeeRouter } from "routes";
import { RateLimiterMemory } from "rate-limiter-flexible";

export default defineNitroPlugin(async (nitroApp) => {
  console.log("Nitro Plugin", nitroApp.hooks);

  const opts = {
    points: 6, // 6 points
    duration: 1, // Per second
  };

  const remoteAddress = "http://localhost:3000";
  const rateLimiter = new RateLimiterMemory(opts);

  rateLimiter
    .consume(remoteAddress, 2) // consume 2 points
    .then((rateLimiterRes) => {
      // 2 points consumed
    })
    .catch((rateLimiterRes) => {
      // Not enough points to consume
    });
  console.log("Rate Limiter", rateLimiter);
});

import * as Sentry from "@sentry/react-router";

Sentry.init({
  dsn: "https://5457b9ba3c2089f8a16026668a874b4e@o4508759088955392.ingest.us.sentry.io/4509454159118336",
  
  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/react-router/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
});

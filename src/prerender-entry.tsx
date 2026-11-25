import { StaticRouter } from "react-router-dom/server";
import { AppProviders, AppRoutes } from "./App";
import ScrollToTop from "./components/ScrollToTop";

export const PrerenderApp = ({
  url,
  helmetContext,
}: {
  url: string;
  helmetContext: Record<string, unknown>;
}) => (
  <AppProviders helmetContext={helmetContext}>
    <StaticRouter location={url}>
      <ScrollToTop />
      <AppRoutes />
    </StaticRouter>
  </AppProviders>
);

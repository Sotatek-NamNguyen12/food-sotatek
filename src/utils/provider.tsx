"use client";

import { store } from "@/store/store";
import React from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Provider } from "react-redux";

function Providers({ children }: React.PropsWithChildren) {
  const [client] = React.useState(
    new QueryClient({
      defaultOptions: { queries: { refetchOnWindowFocus: false } },
    })
  );

  return (
    <Provider store={store}>
      <QueryClientProvider client={client}>
        <Hydrate>{children}</Hydrate>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  );
}

export default Providers;

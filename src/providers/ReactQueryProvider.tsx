"use client";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

function ReactQueryProvider({children} : React.PropsWithChildren) {
    const [client] = useState(new QueryClient());

    return (
        <QueryClientProvider client={client}>
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      );
}

export default ReactQueryProvider;

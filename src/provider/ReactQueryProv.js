import {
    QueryClient,
    QueryClientProvider 
  } from '@tanstack/react-query';

  import React from 'react'
  const queryClient = new QueryClient()
  
  export default function ReactQueryProv({ children }) {
    return (
        <QueryClientProvider client={queryClient}>
            { children }
        </QueryClientProvider>
    )
  }
  
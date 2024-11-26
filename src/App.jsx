import { RouterProvider } from "react-router-dom"
import router from "./router/Router"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Loading from "./pages/Loading/Loading";
import { Suspense } from "react";


function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </QueryClientProvider>
  )
}

export default App

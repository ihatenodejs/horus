import Home from "@/components/pages/Home"

export function Router({ currentPage }: { currentPage: string }) {
  if (currentPage === "home") {
    return <Home />
  } else {
    return (
      <div>
        <h1>404</h1>
        <p>Page not found</p>
      </div>
    )
  }
}
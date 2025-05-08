import Home from "@/components/pages/Home"
import LifeAtAGlance from "@/components/pages/LifeAtAGlance"

export function Router({ currentPage }: { currentPage: string }) {
  if (currentPage === "home") {
    return <Home />
  } else if (currentPage === "lifeataglance") {
    return <LifeAtAGlance />
  } else {
    return (
      <div>
        <h1>404</h1>
        <p>Page not found</p>
      </div>
    )
  }
}
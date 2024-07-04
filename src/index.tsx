import { lazy } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const Home = lazy(() => import("./pages/home").then(module => { return { default: module.Home } }))

const root = createRoot(document.getElementById("appMount") as HTMLElement)

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<h1>404 Not found :(</h1>} />
        </Routes>
    </BrowserRouter>
)
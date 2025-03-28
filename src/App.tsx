
import {Toaster} from "@/components/ui/toaster";
import {Toaster as Sonner} from "@/components/ui/sonner";
import {TooltipProvider} from "@/components/ui/tooltip";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Index from "./pages/Index";
import Cybersecurity from "./pages/Cybersecurity";
import Finance from "./pages/Finance";
import Travel from "./pages/Travel";
import CyberBlogPost from "./pages/CyberBlogPost";
import FinanceBlogPost from "@/pages/FinanceBlogPost.tsx";
import TravelBlogPost from "@/pages/TravelBlogPost.tsx";
import PageNotFound from "./pages/PageNotFound";

const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
        <TooltipProvider>
            <Toaster/>
            <Sonner/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Index/>}/>
                    <Route path="/cybersecurity" element={<Cybersecurity/>}/>
                    <Route path="/cybersecurity/blog/:id" element={<CyberBlogPost/>}/>
                    <Route path="/finance/blog/:id" element={<FinanceBlogPost/>}/>
                    <Route path="/travel/blog/:id" element={<TravelBlogPost/>}/>
                    <Route path="/finance" element={<Finance/>}/>
                    <Route path="/travel" element={<Travel/>}/>
                    <Route path="*" element={<PageNotFound/>}/>
                </Routes>
            </BrowserRouter>
        </TooltipProvider>
    </QueryClientProvider>
);

export default App;

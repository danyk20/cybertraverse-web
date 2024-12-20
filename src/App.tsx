import {Toaster} from "@/components/ui/toaster";
import {Toaster as Sonner} from "@/components/ui/sonner";
import {TooltipProvider} from "@/components/ui/tooltip";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Index from "./pages/Index";
import Cybersecurity from "./pages/Cybersecurity";
import Finance from "./pages/Finance";
import Travel from "./pages/Travel";

const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
        <TooltipProvider>
            <Toaster/>
            <Sonner/>
            <BrowserRouter>
                <Routes>
                    <Route path="/cybertraverse-web" element={<Index/>}/>
                    <Route path="/" element={<Index/>}/>
                    <Route path="/cybersecurity" element={<Cybersecurity/>}/>
                    <Route path="/finance" element={<Finance/>}/>
                    <Route path="/travel" element={<Travel/>}/>
                </Routes>
            </BrowserRouter>
        </TooltipProvider>
    </QueryClientProvider>
);

export default App;
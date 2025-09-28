import { Guestbook } from '../Guestbook';
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";

export default function GuestbookExample() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Guestbook />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
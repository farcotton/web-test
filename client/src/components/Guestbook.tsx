import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { insertGuestbookEntrySchema, type GuestbookEntry } from "@shared/schema";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { MessageSquare, User, Calendar } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

export function Guestbook() {
  const { toast } = useToast();
  const [showForm, setShowForm] = useState(false);

  const form = useForm({
    resolver: zodResolver(insertGuestbookEntrySchema.extend({
      name: insertGuestbookEntrySchema.shape.name.optional()
    })),
    defaultValues: {
      name: "",
      message: ""
    }
  });

  const { data: entries = [], isLoading } = useQuery<GuestbookEntry[]>({
    queryKey: ["/api/guestbook"],
  });

  const createEntry = useMutation({
    mutationFn: (data: any) => apiRequest("/api/guestbook", "POST", data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/guestbook"] });
      form.reset();
      setShowForm(false);
      toast({
        title: "Thanks for signing!",
        description: "Your message has been added to the guestbook.",
      });
    },
    onError: () => {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: any) => {
    createEntry.mutate(data);
  };

  return (
    <section id="guestbook" className="py-24 px-8 bg-muted/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 relative vine-accent tracking-tight" data-testid="text-guestbook-title">
            ✿ Visitor Guestbook ✿
          </h2>
          <p className="text-lg text-muted-foreground">
            Leave a message, share your thoughts, or just say hello!
          </p>
        </div>

        {/* Sign Guestbook Button/Form */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Sign the Guestbook
            </CardTitle>
            <CardDescription>
              Share your thoughts anonymously - no account required
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!showForm ? (
              <Button 
                onClick={() => setShowForm(true)}
                className="w-full"
                data-testid="button-show-form"
              >
                Write a Message
              </Button>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name (Optional)</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Anonymous"
                            data-testid="input-name"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Share your thoughts..."
                            className="min-h-24"
                            data-testid="input-message"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex gap-3">
                    <Button 
                      type="submit" 
                      disabled={createEntry.isPending}
                      data-testid="button-submit-entry"
                    >
                      {createEntry.isPending ? "Posting..." : "Post Message"}
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => setShowForm(false)}
                      data-testid="button-cancel"
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </Form>
            )}
          </CardContent>
        </Card>

        {/* Guestbook Entries */}
        <div className="space-y-6">
          {isLoading ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground">Loading messages...</p>
            </div>
          ) : entries.length === 0 ? (
            <Card className="p-8 text-center">
              <p className="text-muted-foreground text-lg">
                Be the first to sign the guestbook! ✨
              </p>
            </Card>
          ) : (
            <>
              <div className="flex items-center gap-2 mb-6">
                <Badge variant="secondary" data-testid="text-entry-count">
                  {entries.length} {entries.length === 1 ? "message" : "messages"}
                </Badge>
              </div>
              {entries.map((entry: GuestbookEntry, index: number) => (
                <Card key={entry.id} className="hover-elevate floral-corners relative" data-testid={`card-entry-${index}`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium" data-testid={`text-author-${index}`}>
                          {entry.name || "Anonymous"}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs sticker-badge" data-testid={`text-date-${index}`}>
                          <Calendar className="h-3 w-3 mr-1" />
                          {entry.createdAt ? formatDistanceToNow(new Date(entry.createdAt), { addSuffix: true }) : "Unknown"}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-foreground leading-relaxed" data-testid={`text-message-${index}`}>
                      {entry.message}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
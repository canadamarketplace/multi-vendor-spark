import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { gql, useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";

const schema = z.object({ email: z.string().email() });

type FormValues = z.infer<typeof schema>;

const REQUEST_PASSWORD_RESET_EMAIL = gql`
  mutation RequestPasswordResetEmail($email: String!) {
    requestPasswordResetEmail(email: $email)
  }
`;

const ForgotPasswordPage = () => {
  const { toast } = useToast();
  const form = useForm<FormValues>({ resolver: zodResolver(schema), defaultValues: { email: "" } });

  const [mutate, { loading }] = useMutation(REQUEST_PASSWORD_RESET_EMAIL);

  useEffect(() => {
    document.title = "Forgot Password | Canada Marketplace";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Request a password reset email");
  }, []);

  const onSubmit = async (values: FormValues) => {
    try {
      const { errors } = await mutate({ variables: values });
      if (errors && errors.length) throw new Error(errors[0].message);
      toast({ title: "Email sent", description: "Check your inbox for reset instructions." });
    } catch (e: any) {
      toast({ title: "Request failed", description: e.message || "Please try again", variant: "destructive" });
    }
  };

  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Forgot password</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="you@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Sending..." : "Send reset link"}
              </Button>
              <div className="text-sm text-muted-foreground text-center">
                Remembered your password? <Link to="/auth/login" className="story-link">Sign in</Link>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </main>
  );
};

export default ForgotPasswordPage;

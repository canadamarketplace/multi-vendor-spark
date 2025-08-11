import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { gql, useMutation } from "@apollo/client";
import { useNavigate, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/context/AuthContext";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type FormValues = z.infer<typeof schema>;

const GENERATE_CUSTOMER_TOKEN = gql`
  mutation GenerateCustomerToken($email: String!, $password: String!) {
    generateCustomerToken(email: $email, password: $password) {
      token
    }
  }
`;

const LoginPage = () => {
  const { toast } = useToast();
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const form = useForm<FormValues>({ resolver: zodResolver(schema), defaultValues: { email: "", password: "" } });

  const [mutate, { loading }] = useMutation(GENERATE_CUSTOMER_TOKEN);

  useEffect(() => {
    document.title = "Login | Canada Marketplace";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Login to your Canada Marketplace account");
  }, []);

  const onSubmit = async (values: FormValues) => {
    try {
      const { data, errors } = await mutate({ variables: values });
      if (errors && errors.length) throw new Error(errors[0].message);
      const token = data?.generateCustomerToken?.token as string | undefined;
      if (!token) throw new Error("Invalid credentials");
      setToken(token);
      toast({ title: "Logged in", description: "Welcome back!" });
      navigate("/");
    } catch (e: any) {
      toast({ title: "Login failed", description: e.message || "Please try again", variant: "destructive" });
    }
  };

  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Sign in</CardTitle>
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

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="••••••••" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Signing in..." : "Sign in"}
              </Button>

              <div className="flex items-center justify-between text-sm">
                <Link to="/auth/forgot-password" className="story-link">Forgot password?</Link>
                <Link to="/auth/register" className="story-link">Create account</Link>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </main>
  );
};

export default LoginPage;

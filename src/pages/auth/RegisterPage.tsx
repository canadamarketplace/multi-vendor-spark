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
  firstname: z.string().min(1),
  lastname: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(6),
});

type FormValues = z.infer<typeof schema>;

const CREATE_CUSTOMER = gql`
  mutation CreateCustomer($input: CustomerInput!) {
    createCustomer(input: $input) {
      customer { id email firstname lastname }
    }
  }
`;

const GENERATE_CUSTOMER_TOKEN = gql`
  mutation GenerateCustomerToken($email: String!, $password: String!) {
    generateCustomerToken(email: $email, password: $password) {
      token
    }
  }
`;

const RegisterPage = () => {
  const { toast } = useToast();
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const form = useForm<FormValues>({ resolver: zodResolver(schema), defaultValues: { firstname: "", lastname: "", email: "", password: "" } });

  const [createCustomer, { loading }] = useMutation(CREATE_CUSTOMER);
  const [login] = useMutation(GENERATE_CUSTOMER_TOKEN);

  useEffect(() => {
    document.title = "Create Account | Canada Marketplace";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Create your account to start shopping");
  }, []);

  const onSubmit = async (values: FormValues) => {
    try {
      const { errors } = await createCustomer({ variables: { input: values } });
      if (errors && errors.length) throw new Error(errors[0].message);
      // Auto-login after successful registration
      const { data, errors: loginErrors } = await login({ variables: { email: values.email, password: values.password } });
      if (loginErrors && loginErrors.length) throw new Error(loginErrors[0].message);
      const token = data?.generateCustomerToken?.token as string | undefined;
      if (!token) throw new Error("Login failed after registration");
      setToken(token);
      toast({ title: "Account created", description: "Welcome!" });
      navigate("/");
    } catch (e: any) {
      toast({ title: "Registration failed", description: e.message || "Please try again", variant: "destructive" });
    }
  };

  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Create account</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First name</FormLabel>
                    <FormControl>
                      <Input placeholder="John" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last name</FormLabel>
                    <FormControl>
                      <Input placeholder="Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
                {loading ? "Creating..." : "Create account"}
              </Button>
              <div className="text-sm text-muted-foreground text-center">
                Already have an account? <Link to="/auth/login" className="story-link">Sign in</Link>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </main>
  );
};

export default RegisterPage;

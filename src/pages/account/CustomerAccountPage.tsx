import Seo from "@/components/Seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

const TABS = [
  { value: "overview", label: "My Account" },
  { value: "orders", label: "My Orders" },
  { value: "downloads", label: "My Downloadable Products" },
  { value: "wishlist", label: "My Wish List" },
  { value: "addresses", label: "Address Book" },
  { value: "account-edit", label: "Edit Account" },
  { value: "payments", label: "Stored Payment Methods" },
  { value: "reviews", label: "My Product Reviews" },
  { value: "newsletter", label: "Newsletter Subscription" },
  { value: "privacy", label: "Privacy Settings" },
];

const CustomerAccountPage = () => {
  const [params, setParams] = useSearchParams();
  const initial = params.get("tab") || "overview";
  const [tab, setTab] = useState<string>(initial);
  const isSellerApproved = useMemo(() => localStorage.getItem("isSellerApproved") === "true", []);

  useEffect(() => {
    setParams((p) => {
      p.set("tab", tab);
      return p;
    }, { replace: true });
  }, [tab, setParams]);

  const becomeSeller = () => {
    window.open("/auth/become-seller", "_self");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo title="My Account" description="Manage your profile, orders, wishlist, addresses and settings." canonical={window.location.href} />
      <Header />
      <main className="container mx-auto flex-1 py-10">
        <h1 className="sr-only">My Account</h1>
        <Tabs value={tab} onValueChange={setTab} orientation="vertical" className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6">
          <aside>
            <TabsList className="flex-col h-auto w-full items-stretch md:sticky md:top-24">
              {TABS.map((t) => (
                <TabsTrigger key={t.value} value={t.value} className="justify-start">
                  {t.label}
                </TabsTrigger>
              ))}
              {!isSellerApproved ? (
                <div className="mt-4 p-3 rounded-md border border-dashed">
                  <div className="font-medium mb-2">Become a Seller</div>
                  <p className="text-sm text-muted-foreground mb-3">Apply to open your shop and start selling.</p>
                  <Button size="sm" onClick={becomeSeller}>Apply Now</Button>
                </div>
              ) : (
                <div className="mt-4 p-3 rounded-md border">
                  <div className="font-medium mb-2">Seller Account</div>
                  <p className="text-sm text-muted-foreground">You are approved. Access your seller panel.</p>
                  <div className="mt-2 flex gap-2"><Button size="sm" onClick={() => window.open("/seller/dashboard", "_self")}>Edit Seller</Button><Button size="sm" variant="outline" onClick={() => window.open("/seller/dashboard", "_self")}>Seller Panel</Button></div>
                </div>
              )}
            </TabsList>
          </aside>

          <section>
            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader><CardTitle>Account Information</CardTitle></CardHeader>
                <CardContent className="space-y-2">
                  <div className="font-medium">Contact Information</div>
                  <div className="text-sm text-muted-foreground">John Doe — john@example.com</div>
                  <div className="flex gap-2 mt-2">
                    <Button size="sm" variant="outline">Edit</Button>
                    <Button size="sm" variant="outline">Change Password</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle>Newsletters</CardTitle></CardHeader>
                <CardContent>
                  <div className="text-sm">You are subscribed to "General Subscription".</div>
                  <Button className="mt-2" size="sm" variant="outline">Edit</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle>Address Book</CardTitle></CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-4">
                  <div>
                    <div className="font-medium">Default Billing Address</div>
                    <div className="text-sm text-muted-foreground">You have not set a default billing address.</div>
                    <Button size="sm" variant="outline" className="mt-2">Edit Address</Button>
                  </div>
                  <div>
                    <div className="font-medium">Default Shipping Address</div>
                    <div className="text-sm text-muted-foreground">You have not set a default shipping address.</div>
                    <Button size="sm" variant="outline" className="mt-2">Edit Address</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="orders">
              <Card>
                <CardHeader><CardTitle>My Orders</CardTitle></CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground">View your order history with vendor attribution.</div>
                  <Button className="mt-2" size="sm" asChild>
                    <a href="https://app.canadamarketplace.test/en/sales/order/history/" target="_blank" rel="noreferrer">Open Magento Orders</a>
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="downloads">
              <Card>
                <CardHeader><CardTitle>My Downloadable Products</CardTitle></CardHeader>
                <CardContent>
                  <Button size="sm" asChild>
                    <a href="https://app.canadamarketplace.test/en/downloadable/customer/products/" target="_blank" rel="noreferrer">Open in Magento</a>
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="wishlist">
              <Card>
                <CardHeader><CardTitle>My Wish List</CardTitle></CardHeader>
                <CardContent>
                  <Button size="sm" asChild>
                    <a href="/wishlist">Open Wishlist</a>
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="addresses" className="space-y-6">
              <Card>
                <CardHeader><CardTitle>Add New Address</CardTitle></CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="font-medium">Contact Information</div>
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                    <Input placeholder="Company" />
                    <Input placeholder="Phone Number" />
                  </div>
                  <div className="space-y-2">
                    <div className="font-medium">Address</div>
                    <Input placeholder="Street Address" />
                    <Select>
                      <SelectTrigger><SelectValue placeholder="Country" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="CA">Canada</SelectItem>
                        <SelectItem value="US">United States</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger><SelectValue placeholder="State/Province" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="BC">British Columbia</SelectItem>
                        <SelectItem value="ON">Ontario</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input placeholder="City" />
                    <Input placeholder="Zip/Postal Code" />
                    <Button>Save Address</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="account-edit">
              <Card>
                <CardHeader><CardTitle>Edit Account Information</CardTitle></CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="First Name" />
                  <Input placeholder="Last Name" />
                  <Input placeholder="Email" />
                  <Input placeholder="Password" type="password" />
                  <Button className="md:col-span-2">Save</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="payments">
              <Card>
                <CardHeader><CardTitle>Stored Payment Methods</CardTitle></CardHeader>
                <CardContent>
                  <Button size="sm" asChild>
                    <a href="https://app.canadamarketplace.test/en/vault/cards/listaction/" target="_blank" rel="noreferrer">Manage in Magento</a>
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews">
              <Card>
                <CardHeader><CardTitle>My Product Reviews</CardTitle></CardHeader>
                <CardContent>
                  <Button size="sm" asChild>
                    <a href="https://app.canadamarketplace.test/en/review/customer/" target="_blank" rel="noreferrer">View Reviews</a>
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="newsletter">
              <Card>
                <CardHeader><CardTitle>Newsletter Subscription</CardTitle></CardHeader>
                <CardContent>
                  <Button size="sm" asChild>
                    <a href="https://app.canadamarketplace.test/en/newsletter/manage/" target="_blank" rel="noreferrer">Manage Subscription</a>
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="privacy" className="space-y-6">
              <Card>
                <CardHeader><CardTitle>Information</CardTitle></CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    This website may store and process Personally Identifiable Information (PII). As per the General Data Protection Regulation (GDPR) you have access to receive the data we store about you and you can request your data to be removed. Please read our Terms & Conditions and Privacy Policy to learn more.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle>Export Your Personal Data</CardTitle></CardHeader>
                <CardContent>
                  <Button variant="outline">Export My Data</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle>Account Deletion</CardTitle></CardHeader>
                <CardContent>
                  <Button variant="destructive">Delete My Account</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </section>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default CustomerAccountPage;

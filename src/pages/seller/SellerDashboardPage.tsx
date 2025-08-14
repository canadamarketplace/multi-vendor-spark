import { useState } from "react";
import Seo from "@/components/Seo";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { NavLink } from "react-router-dom";

const chartData = [
  { month: "Jan", sales: 1200 },
  { month: "Feb", sales: 1800 },
  { month: "Mar", sales: 1600 },
  { month: "Apr", sales: 2400 },
  { month: "May", sales: 2000 },
];

const SellerDashboardPage = () => {
  const [tab, setTab] = useState("analytics");

  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-muted text-primary font-medium" : "hover:bg-muted/50";

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo title="Seller Dashboard" description="Analytics, orders, inventory and payouts for sellers." canonical={window.location.href} />

      {/* Minimal dashboard header without site nav or footer */}
      <header className="h-12 flex items-center border-b">
        <SidebarTrigger className="ml-2" />
        <h1 className="ml-4 text-sm font-semibold">Marketplace Dashboard</h1>
        <div className="ml-auto mr-4 flex gap-2">
          <Button size="sm" variant="outline" asChild>
            <NavLink to="/seller/1/storefront">My Shop</NavLink>
          </Button>
          <Button size="sm" variant="outline" asChild>
            <NavLink to="/seller/map">Seller Map</NavLink>
          </Button>
        </div>
      </header>

      <SidebarProvider>
        <div className="flex min-h-[calc(100vh-48px)] w-full">
          <Sidebar className="w-60" collapsible="icon">
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <button onClick={() => setTab("analytics")} className={getNavCls({ isActive: tab === "analytics" })}>Overview</button>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>

              <SidebarGroup>
                <SidebarGroupLabel>Seller</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <button onClick={() => setTab("profile")} className={getNavCls({ isActive: tab === "profile" })}>My Profile</button>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <NavLink to="/seller/1/storefront" className={getNavCls({ isActive: false })}>My Shop</NavLink>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>

              <SidebarGroup>
                <SidebarGroupLabel>Catalog</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <button onClick={() => setTab("products")} className={getNavCls({ isActive: tab === "products" })}>Manage Products</button>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <button onClick={() => setTab("attributes")} className={getNavCls({ isActive: tab === "attributes" })}>Configurable Attributes</button>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <button onClick={() => setTab("categories")} className={getNavCls({ isActive: tab === "categories" })}>Manage Categories</button>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <button onClick={() => setTab("discounts")} className={getNavCls({ isActive: tab === "discounts" })}>Manage Discounts</button>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>

              <SidebarGroup>
                <SidebarGroupLabel>Finance</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <button onClick={() => setTab("transactions")} className={getNavCls({ isActive: tab === "transactions" })}>Transactions</button>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <button onClick={() => setTab("payouts")} className={getNavCls({ isActive: tab === "payouts" })}>Payouts</button>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <button onClick={() => setTab("payments")} className={getNavCls({ isActive: tab === "payments" })}>Payment Methods</button>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>

          <main className="flex-1 p-6">
            <Tabs value={tab} onValueChange={setTab}>
              <TabsList className="hidden" />

              <TabsContent value="analytics" className="space-y-6">
                <div className="grid gap-4 md:grid-cols-4">
                  {["Total Sales", "Total Earnings", "Total Payouts", "Total Orders"].map((k) => (
                    <Card key={k}><CardHeader><CardTitle className="text-sm">{k}</CardTitle></CardHeader><CardContent><div className="text-2xl font-bold">$0.00</div></CardContent></Card>
                  ))}
                </div>
                <Card>
                  <CardHeader><CardTitle>Shop Sales Earning Visualization</CardTitle></CardHeader>
                  <CardContent className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="sales" stroke="hsl(var(--primary))" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="profile">
                <Card><CardHeader><CardTitle>My Profile</CardTitle></CardHeader><CardContent>
                  <div className="text-sm text-muted-foreground">Manage your seller profile. Some links open Magento pages in a new tab.</div>
                  <div className="mt-4 flex gap-2">
                    <Button asChild><a href="https://app.canadamarketplace.test/en/WblMarketPlace/seller/edit/" target="_blank" rel="noreferrer">Open Seller Settings</a></Button>
                    <Button variant="outline" asChild><NavLink to="/seller/1/storefront">View Storefront</NavLink></Button>
                  </div>
                </CardContent></Card>
              </TabsContent>

              <TabsContent value="products">
                <Card><CardHeader><CardTitle>Manage Products</CardTitle></CardHeader><CardContent>
                  <div className="flex gap-2 mb-4">
                    <Button asChild><a href="https://app.canadamarketplace.test/en/WblMarketPlace/catalog/product/" target="_blank" rel="noreferrer">Add Product</a></Button>
                    <Button variant="outline" asChild><a href="https://app.canadamarketplace.test/en/WblMarketPlace/catalog/grid/" target="_blank" rel="noreferrer">Open Grid</a></Button>
                  </div>
                  <div className="text-sm text-muted-foreground">No records found.</div>
                </CardContent></Card>
              </TabsContent>

              <TabsContent value="attributes">
                <Card><CardHeader><CardTitle>Configurable Attributes</CardTitle></CardHeader><CardContent>
                  <Button asChild variant="outline"><a href="https://app.canadamarketplace.test/en/WblMarketPlace/attribute/attributegrid/" target="_blank" rel="noreferrer">Open Attributes</a></Button>
                </CardContent></Card>
              </TabsContent>

              <TabsContent value="categories">
                <Card><CardHeader><CardTitle>Manage Categories</CardTitle></CardHeader><CardContent>
                  <Button asChild variant="outline"><a href="https://app.canadamarketplace.test/en/WblMarketPlace/catalog/categorygrid/" target="_blank" rel="noreferrer">Open Categories</a></Button>
                </CardContent></Card>
              </TabsContent>

              <TabsContent value="discounts">
                <Card><CardHeader><CardTitle>Manage Discounts</CardTitle></CardHeader><CardContent>
                  <Button asChild variant="outline"><a href="https://app.canadamarketplace.test/en/WblMarketPlace/discount/grid/" target="_blank" rel="noreferrer">Open Discounts</a></Button>
                </CardContent></Card>
              </TabsContent>

              <TabsContent value="transactions">
                <Card><CardHeader><CardTitle>Transactions</CardTitle></CardHeader><CardContent>
                  <Button asChild variant="outline"><a href="https://app.canadamarketplace.test/en/WblMarketPlace/sales/transactionGrid/" target="_blank" rel="noreferrer">Open Transactions</a></Button>
                </CardContent></Card>
              </TabsContent>

              <TabsContent value="payouts">
                <Card><CardHeader><CardTitle>Payouts</CardTitle></CardHeader><CardContent>
                  <Button className="mr-2">Request Payout</Button>
                  <Button asChild variant="outline"><a href="https://app.canadamarketplace.test/en/WblMarketPlace/sales/payout/" target="_blank" rel="noreferrer">Open Payouts</a></Button>
                </CardContent></Card>
              </TabsContent>

              <TabsContent value="payments">
                <Card><CardHeader><CardTitle>Payment Methods</CardTitle></CardHeader><CardContent>
                  <Button asChild><a href="https://app.canadamarketplace.test/en/WblMarketPlace/payment/methodGrid/" target="_blank" rel="noreferrer">Add Method</a></Button>
                </CardContent></Card>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default SellerDashboardPage;

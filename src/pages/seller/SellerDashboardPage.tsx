import { useState } from "react";
import Seo from "@/components/Seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const chartData = [
  { month: "Jan", sales: 1200 },
  { month: "Feb", sales: 1800 },
  { month: "Mar", sales: 1600 },
  { month: "Apr", sales: 2400 },
  { month: "May", sales: 2000 },
];

const SellerDashboardPage = () => {
  const [tab, setTab] = useState("analytics");

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo title="Seller Dashboard" description="Analytics, orders, inventory and payouts for sellers." canonical={window.location.href} />
      <Header />
      <main className="container mx-auto flex-1 py-10">
        <Tabs value={tab} onValueChange={setTab}>
          <TabsList>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="inventory">Inventory</TabsTrigger>
            <TabsTrigger value="payouts">Payouts</TabsTrigger>
          </TabsList>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid gap-4 md:grid-cols-4">
              {["Revenue", "Orders", "Customers", "Conversion"].map((k) => (
                <Card key={k}><CardHeader><CardTitle className="text-sm">{k}</CardTitle></CardHeader><CardContent><div className="text-2xl font-bold">—</div></CardContent></Card>
              ))}
            </div>
            <Card>
              <CardHeader><CardTitle>Sales Trend</CardTitle></CardHeader>
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
            <div className="flex gap-2">
              <Button>Add Product</Button>
              <Button variant="outline">Process Orders</Button>
              <Button variant="outline">View Analytics</Button>
            </div>
          </TabsContent>

          <TabsContent value="orders">
            <Card><CardHeader><CardTitle>Recent Orders</CardTitle></CardHeader><CardContent>—</CardContent></Card>
          </TabsContent>
          <TabsContent value="inventory">
            <Card><CardHeader><CardTitle>Inventory</CardTitle></CardHeader><CardContent>—</CardContent></Card>
          </TabsContent>
          <TabsContent value="payouts">
            <Card><CardHeader><CardTitle>Payouts</CardTitle></CardHeader><CardContent>—</CardContent></Card>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default SellerDashboardPage;

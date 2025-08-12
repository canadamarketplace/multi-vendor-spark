import Seo from "@/components/Seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const CustomerAccountPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo title="My Account" description="Manage your profile, orders, wishlist, addresses and settings." canonical={window.location.href} />
      <Header />
      <main className="container mx-auto flex-1 py-10">
        <h1 className="text-2xl font-bold mb-6">Account</h1>
        <Tabs defaultValue="profile">
          <TabsList>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
            <TabsTrigger value="addresses">Addresses</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="profile">—</TabsContent>
          <TabsContent value="orders">—</TabsContent>
          <TabsContent value="wishlist">—</TabsContent>
          <TabsContent value="addresses">—</TabsContent>
          <TabsContent value="settings"><Button variant="outline">Privacy Controls</Button></TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default CustomerAccountPage;

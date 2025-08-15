import { useState } from "react";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const NewsletterSubscription = () => {
  const { toast } = useToast();
  const [subscriptions, setSubscriptions] = useState({
    general: true,
    promotions: false,
    newProducts: true,
    orderUpdates: true
  });

  const handleSubscriptionChange = (key: keyof typeof subscriptions, value: boolean) => {
    setSubscriptions(prev => ({ ...prev, [key]: value }));
    toast({
      title: "Subscription Updated",
      description: `${key} subscription ${value ? 'enabled' : 'disabled'}`,
    });
  };

  return (
    <div className="space-y-6">
      <Seo title="Newsletter Subscription | Canada Marketplace" description="Manage your email preferences" canonical={window.location.href} />
      
      <div>
        <h2 className="text-2xl font-bold mb-6">Newsletter Subscription</h2>
        
        <Card>
          <CardHeader>
            <CardTitle>Email Preferences</CardTitle>
            <CardDescription>
              Choose which emails you'd like to receive from us
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="general">General Newsletter</Label>
                <div className="text-sm text-muted-foreground">
                  Weekly updates about new features and marketplace news
                </div>
              </div>
              <Switch 
                id="general"
                checked={subscriptions.general}
                onCheckedChange={(checked) => handleSubscriptionChange('general', checked)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="promotions">Promotions & Deals</Label>
                <div className="text-sm text-muted-foreground">
                  Special offers, discounts, and seasonal sales
                </div>
              </div>
              <Switch 
                id="promotions"
                checked={subscriptions.promotions}
                onCheckedChange={(checked) => handleSubscriptionChange('promotions', checked)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="newProducts">New Products</Label>
                <div className="text-sm text-muted-foreground">
                  Notifications when new products match your interests
                </div>
              </div>
              <Switch 
                id="newProducts"
                checked={subscriptions.newProducts}
                onCheckedChange={(checked) => handleSubscriptionChange('newProducts', checked)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="orderUpdates">Order Updates</Label>
                <div className="text-sm text-muted-foreground">
                  Important updates about your orders and deliveries
                </div>
              </div>
              <Switch 
                id="orderUpdates"
                checked={subscriptions.orderUpdates}
                onCheckedChange={(checked) => handleSubscriptionChange('orderUpdates', checked)}
              />
            </div>
            
            <div className="pt-4 border-t">
              <Button>Save Preferences</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NewsletterSubscription;
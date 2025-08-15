import { useState } from "react";
import Seo from "@/components/Seo";
import { mockPaymentMethods } from "@/data/mock";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2, CreditCard } from "lucide-react";

const PaymentMethods = () => {
  const [methods] = useState(mockPaymentMethods);

  return (
    <div className="space-y-6">
      <Seo title="Payment Methods | Canada Marketplace" description="Manage your saved payment methods" canonical={window.location.href} />
      
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Stored Payment Methods</h2>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add Payment Method
        </Button>
      </div>
      
      {methods.length === 0 ? (
        <Card>
          <CardContent className="pt-6 text-center">
            <p className="text-muted-foreground mb-4">You haven't added any payment methods yet.</p>
            <Button>Add Your First Payment Method</Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {methods.map((method) => (
            <Card key={method.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="w-5 h-5" />
                    {method.type.toUpperCase()} ending in {method.last4}
                  </CardTitle>
                  {method.isDefault && <Badge>Default</Badge>}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm mb-4">
                  <div>Expires: {method.expiryMonth.toString().padStart(2, '0')}/{method.expiryYear}</div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Edit className="w-4 h-4 mr-1" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm">
                    <Trash2 className="w-4 h-4 mr-1" />
                    Remove
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default PaymentMethods;
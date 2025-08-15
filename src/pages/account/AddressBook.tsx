import { useState } from "react";
import Seo from "@/components/Seo";
import { mockAddresses } from "@/data/mock";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2 } from "lucide-react";

const AddressBook = () => {
  const [addresses] = useState(mockAddresses);

  return (
    <div className="space-y-6">
      <Seo title="Address Book | Canada Marketplace" description="Manage your shipping and billing addresses" canonical={window.location.href} />
      
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Address Book</h2>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add New Address
        </Button>
      </div>
      
      {addresses.length === 0 ? (
        <Card>
          <CardContent className="pt-6 text-center">
            <p className="text-muted-foreground mb-4">You haven't added any addresses yet.</p>
            <Button>Add Your First Address</Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {addresses.map((address) => (
            <Card key={address.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg capitalize">{address.type} Address</CardTitle>
                  {address.isDefault && <Badge>Default</Badge>}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-1 text-sm mb-4">
                  <div className="font-medium">{address.firstName} {address.lastName}</div>
                  {address.company && <div className="text-muted-foreground">{address.company}</div>}
                  <div>{address.street}</div>
                  <div>{address.city}, {address.province} {address.postalCode}</div>
                  <div>{address.country}</div>
                  <div>{address.phone}</div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Edit className="w-4 h-4 mr-1" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm">
                    <Trash2 className="w-4 h-4 mr-1" />
                    Delete
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

export default AddressBook;
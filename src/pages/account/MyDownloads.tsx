import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download } from "lucide-react";

const MyDownloads = () => {
  const mockDownloads = [
    {
      id: "1",
      productName: "Design Templates Pack",
      orderNumber: "ORD001",
      purchaseDate: "2024-01-15",
      downloadCount: 2,
      maxDownloads: 3,
      fileSize: "245 MB"
    }
  ];

  return (
    <div className="space-y-6">
      <Seo title="My Downloads | Canada Marketplace" description="Access your downloadable products" canonical={window.location.href} />
      
      <div>
        <h2 className="text-2xl font-bold mb-6">My Downloadable Products</h2>
        
        {mockDownloads.length === 0 ? (
          <Card>
            <CardContent className="pt-6 text-center">
              <p className="text-muted-foreground mb-4">You don't have any downloadable products yet.</p>
              <Button>Browse Digital Products</Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {mockDownloads.map((download) => (
              <Card key={download.id}>
                <CardHeader>
                  <CardTitle className="text-lg">{download.productName}</CardTitle>
                  <div className="text-sm text-muted-foreground">
                    Order #{download.orderNumber} • Purchased on {new Date(download.purchaseDate).toLocaleDateString()}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-sm space-y-1">
                      <div>Downloads: {download.downloadCount}/{download.maxDownloads}</div>
                      <div>File Size: {download.fileSize}</div>
                    </div>
                    <Button>
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyDownloads;
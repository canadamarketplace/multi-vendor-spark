import Seo from "@/components/Seo";
import { mockReviews } from "@/data/mock";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

const ProductReviews = () => {
  return (
    <div className="space-y-6">
      <Seo title="My Product Reviews | Canada Marketplace" description="View and manage your product reviews" canonical={window.location.href} />
      
      <div>
        <h2 className="text-2xl font-bold mb-6">My Product Reviews</h2>
        
        {mockReviews.length === 0 ? (
          <Card>
            <CardContent className="pt-6 text-center">
              <p className="text-muted-foreground mb-4">You haven't written any reviews yet.</p>
              <Button>Browse Products to Review</Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {mockReviews.map((review) => (
              <Card key={review.id}>
                <CardHeader>
                  <CardTitle className="text-lg">{review.productName}</CardTitle>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < review.rating ? "fill-primary text-primary" : "text-muted-foreground"}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {new Date(review.date).toLocaleDateString()}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-medium mb-2">{review.title}</h4>
                  <p className="text-muted-foreground mb-4">{review.comment}</p>
                  <Button variant="outline" size="sm">Edit Review</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductReviews;
import { useState } from "react";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Download, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PrivacySettings = () => {
  const { toast } = useToast();
  const [isExporting, setIsExporting] = useState(false);

  const handleExportData = async () => {
    setIsExporting(true);
    // Simulate export process
    setTimeout(() => {
      setIsExporting(false);
      toast({
        title: "Data Export Started",
        description: "Your personal data export will be emailed to you within 24 hours.",
      });
    }, 2000);
  };

  const handleDeleteAccount = () => {
    toast({
      title: "Account Deletion Requested",
      description: "Your account deletion request has been submitted. You will receive a confirmation email.",
      variant: "destructive",
    });
  };

  return (
    <div className="space-y-6">
      <Seo title="Privacy Settings | Canada Marketplace" description="Manage your privacy and data settings" canonical={window.location.href} />
      
      <div>
        <h2 className="text-2xl font-bold mb-6">Privacy Settings</h2>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Data Protection Information</CardTitle>
              <CardDescription>
                This website may store and process Personally Identifiable Information (PII). 
                As per the General Data Protection Regulation (GDPR) you have access to receive 
                the data we store about you and you can request your data to be removed. 
                Please read our Terms & Conditions and Privacy Policy to learn more.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Export Your Personal Data</CardTitle>
              <CardDescription>
                You can export the data we have about you using the button below.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={handleExportData} 
                disabled={isExporting}
                className="w-full sm:w-auto"
              >
                <Download className="w-4 h-4 mr-2" />
                {isExporting ? "Preparing Export..." : "Export My Data"}
              </Button>
            </CardContent>
          </Card>

          <Card className="border-destructive">
            <CardHeader>
              <CardTitle className="text-destructive">Account Deletion</CardTitle>
              <CardDescription>
                Be careful and think twice before deleting your account. This action is irreversible.
                All your data, orders, reviews, and account information will be permanently removed.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive" className="w-full sm:w-auto">
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete My Account
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete your account
                      and remove all your data from our servers including:
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Personal information and profile</li>
                        <li>Order history and receipts</li>
                        <li>Reviews and ratings</li>
                        <li>Saved addresses and payment methods</li>
                        <li>Wishlist and comparison lists</li>
                      </ul>
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction 
                      onClick={handleDeleteAccount}
                      className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                    >
                      Yes, Delete My Account
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PrivacySettings;
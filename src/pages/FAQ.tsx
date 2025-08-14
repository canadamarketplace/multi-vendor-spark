import Seo from "@/components/Seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I create an account?",
      answer: "Click the 'Sign In' button in the top right corner and select 'Create Account'. Fill in your details and you'll be ready to start shopping!"
    },
    {
      question: "How do I become a seller?",
      answer: "Go to your account page and click 'Become a Seller'. Fill out the application form and we'll review it within 2-3 business days."
    },
    {
      question: "What are your shipping rates?",
      answer: "We offer free standard shipping on orders over $50 CAD. Express shipping is available for $9.99 CAD. Delivery times vary by location but typically range from 3-7 business days."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy on most items. Items must be in original condition with tags attached. Digital products and personalized items are not returnable."
    },
    {
      question: "How do I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email. You can also view your order status in your account under 'My Orders'."
    },
    {
      question: "Do you ship internationally?",
      answer: "Currently, we only ship within Canada. We're working on expanding to international shipping in the future."
    },
    {
      question: "How do I contact a seller?",
      answer: "You can contact sellers directly through their storefront page. Look for the 'Contact Seller' button on their profile or product pages."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and Apple Pay. All payments are processed securely."
    },
    {
      question: "How do I leave a review?",
      answer: "After purchasing an item, you can leave a review by going to 'My Orders' in your account and clicking 'Write Review' next to the purchased item."
    },
    {
      question: "What if I receive a damaged item?",
      answer: "If you receive a damaged item, please contact us immediately through our support page with photos of the damage. We'll arrange a replacement or refund right away."
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo 
        title="FAQ | Canada Marketplace" 
        description="Frequently asked questions about shopping, selling, shipping, and returns on Canada Marketplace" 
        canonical={window.location.href} 
      />
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-muted-foreground">
              Find answers to common questions about Canada Marketplace
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center bg-muted rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">Still have questions?</h2>
            <p className="text-muted-foreground mb-6">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4"
            >
              Contact Support
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQ;
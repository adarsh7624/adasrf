import { Navigation } from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Smartphone,
  Shirt,
  Home,
  Dumbbell,
  Book,
  Star,
  Package,
} from "lucide-react";

export default function Categories() {
  const categories = [
    {
      name: "Electronics",
      count: "2,340",
      icon: <Smartphone className="h-8 w-8" />,
      color: "bg-blue-100 text-blue-700",
      subcategories: ["Phones", "Laptops", "Gaming", "Audio"],
    },
    {
      name: "Fashion",
      count: "1,820",
      icon: <Shirt className="h-8 w-8" />,
      color: "bg-pink-100 text-pink-700",
      subcategories: ["Clothing", "Shoes", "Accessories", "Jewelry"],
    },
    {
      name: "Home & Garden",
      count: "1,250",
      icon: <Home className="h-8 w-8" />,
      color: "bg-green-100 text-green-700",
      subcategories: ["Furniture", "Decor", "Garden", "Kitchen"],
    },
    {
      name: "Sports",
      count: "980",
      icon: <Dumbbell className="h-8 w-8" />,
      color: "bg-orange-100 text-orange-700",
      subcategories: ["Fitness", "Outdoor", "Team Sports", "Water Sports"],
    },
    {
      name: "Books",
      count: "750",
      icon: <Book className="h-8 w-8" />,
      color: "bg-purple-100 text-purple-700",
      subcategories: ["Fiction", "Non-fiction", "Textbooks", "Comics"],
    },
    {
      name: "Collectibles",
      count: "420",
      icon: <Star className="h-8 w-8" />,
      color: "bg-indigo-100 text-indigo-700",
      subcategories: ["Antiques", "Art", "Coins", "Toys"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Browse Categories</h1>
          <p className="text-muted-foreground">
            Discover items across all our popular categories
          </p>
        </div>

        {/* Featured Banner */}
        <div className="mb-12">
          <Card className="overflow-hidden bg-gradient-to-r from-brand-50 to-brand-100">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8 flex flex-col justify-center">
                  <Badge className="bg-green-100 text-green-700 w-fit mb-4">
                    🌱 Sustainable Shopping
                  </Badge>
                  <h2 className="text-2xl font-bold mb-4">
                    ReWear - Community Clothing Exchange
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Join our sustainable fashion community. Exchange, trade, and
                    discover unique clothing items while reducing environmental
                    impact.
                  </p>
                  <Button className="bg-brand-500 hover:bg-brand-600 w-fit">
                    Explore ReWear
                  </Button>
                </div>
                <div className="relative h-64 md:h-auto">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F09970117f6964c9d988fce7c27397ea5%2Fedeef69f9ad14a26a049d44c7ab9bbe0?format=webp&width=800"
                    alt="ReWear Community Clothing Exchange"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`p-3 rounded-xl ${category.color.replace("text-", "").replace("100", "50")}`}
                  >
                    {category.icon}
                  </div>
                  <Badge className={category.color}>
                    {category.count} items
                  </Badge>
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-brand-600 transition-colors">
                  {category.name}
                </h3>

                <div className="space-y-2 mb-4">
                  {category.subcategories.map((sub, subIndex) => (
                    <div
                      key={subIndex}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                    >
                      {sub}
                    </div>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="w-full group-hover:bg-brand-50 group-hover:border-brand-200"
                >
                  <Package className="mr-2 h-4 w-4" />
                  Browse {category.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-brand-50 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-4">
              Can't find what you're looking for?
            </h2>
            <p className="text-muted-foreground mb-6">
              Use our advanced search or contact us for help finding specific
              items
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-brand-500 hover:bg-brand-600">
                Advanced Search
              </Button>
              <Button variant="outline">Contact Support</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

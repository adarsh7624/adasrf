import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Search,
  Shield,
  CheckCircle,
  Trash2,
  Settings,
  Star,
  TrendingUp,
  Users,
  Package,
  Zap,
  Globe,
  Heart,
  ShoppingCart,
  ArrowRight,
  Play,
} from "lucide-react";

export default function Index() {
  const categories = [
    { name: "Electronics", count: "2.3k", color: "bg-blue-100 text-blue-700" },
    { name: "Fashion", count: "1.8k", color: "bg-pink-100 text-pink-700" },
    {
      name: "Home & Garden",
      count: "1.2k",
      color: "bg-green-100 text-green-700",
    },
    { name: "Sports", count: "980", color: "bg-orange-100 text-orange-700" },
    { name: "Books", count: "750", color: "bg-purple-100 text-purple-700" },
    {
      name: "Collectibles",
      count: "420",
      color: "bg-indigo-100 text-indigo-700",
    },
  ];

  const featuredItems = [
    {
      id: 1,
      title: "Vintage Camera Collection",
      price: "$299",
      image: "/api/placeholder/300/200",
      seller: "PhotoPro",
      rating: 4.9,
      likes: 24,
    },
    {
      id: 2,
      title: "Designer Watch",
      price: "$899",
      image: "/api/placeholder/300/200",
      seller: "LuxuryTime",
      rating: 4.8,
      likes: 18,
    },
    {
      id: 3,
      title: "Gaming Setup Bundle",
      price: "$1,499",
      image: "/api/placeholder/300/200",
      seller: "GameZone",
      rating: 5.0,
      likes: 35,
    },
  ];

  const adminFeatures = [
    {
      icon: <CheckCircle className="h-6 w-6 text-green-600" />,
      title: "Moderate and approve/reject item listings",
      description:
        "Review all listings before they go live to ensure quality and compliance",
    },
    {
      icon: <Trash2 className="h-6 w-6 text-red-600" />,
      title: "Remove inappropriate or spam items",
      description:
        "Quickly identify and remove content that violates community guidelines",
    },
    {
      icon: <Settings className="h-6 w-6 text-blue-600" />,
      title: "Lightweight admin panel for oversight",
      description:
        "Simple, intuitive dashboard for managing platform operations",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-brand-100/50">
        <div className="container py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-brand-100 text-brand-700 hover:bg-brand-200">
                  🚀 Now with AI-powered moderation
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                  The{" "}
                  <span className="bg-gradient-to-r from-brand-600 to-brand-700 bg-clip-text text-transparent">
                    smartest
                  </span>{" "}
                  marketplace for everything
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Buy, sell, and discover unique items in a trusted community
                  with advanced admin controls and quality assurance.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-brand-500 hover:bg-brand-600 text-white"
                >
                  Start Shopping
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-brand-200"
                >
                  <Play className="mr-2 h-4 w-4" />
                  Watch Demo
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>50k+ Users</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Package className="h-4 w-4" />
                  <span>10k+ Items</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4" />
                  <span>4.9 Rating</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-500/20 to-brand-700/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg">Quick Search</h3>
                  <Badge className="bg-green-100 text-green-700">Live</Badge>
                </div>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Find anything..."
                    className="pl-10 h-12 text-base"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {categories.slice(0, 4).map((category, index) => (
                    <div
                      key={index}
                      className="p-3 rounded-lg border border-gray-100 hover:border-brand-200 transition-colors cursor-pointer"
                    >
                      <div className="text-sm font-medium">{category.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {category.count} items
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admin Features Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-brand-100 text-brand-700">
              <Shield className="mr-2 h-4 w-4" />
              Admin Controls
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Powerful Admin Role
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive moderation tools to maintain a high-quality
              marketplace environment
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {adminFeatures.map((feature, index) => (
              <Card
                key={index}
                className="border-2 hover:border-brand-200 transition-colors"
              >
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-gray-50">
                      {feature.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg leading-tight">
                        {feature.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Popular Categories
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover items across all categories
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="hover:shadow-md transition-shadow cursor-pointer"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${category.color} mb-2`}
                  >
                    {category.count}
                  </div>
                  <h3 className="font-semibold">{category.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Featured Items
              </h2>
              <p className="text-lg text-muted-foreground">
                Hand-picked items from trusted sellers
              </p>
            </div>
            <Button variant="outline">View All</Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredItems.map((item) => (
              <Card
                key={item.id}
                className="group overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-100 to-brand-200 flex items-center justify-center">
                    <Package className="h-16 w-16 text-brand-400" />
                  </div>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold line-clamp-1">
                        {item.title}
                      </h3>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Heart className="h-3 w-3 mr-1" />
                        {item.likes}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-brand-600">
                        {item.price}
                      </div>
                      <div className="flex items-center text-sm">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        {item.rating}
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      by {item.seller}
                    </div>
                    <Button className="w-full bg-brand-500 hover:bg-brand-600">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-brand-50">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-brand-600 mb-2">
                50k+
              </div>
              <div className="text-muted-foreground">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-brand-600 mb-2">
                10k+
              </div>
              <div className="text-muted-foreground">Items Listed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-brand-600 mb-2">
                99.9%
              </div>
              <div className="text-muted-foreground">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-brand-600 mb-2">
                4.9
              </div>
              <div className="text-muted-foreground">User Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center">
                  <Store className="h-5 w-5 text-white" />
                </div>
                <span className="font-bold text-xl">MarketPlace</span>
              </div>
              <p className="text-gray-400 mb-4">
                The smartest marketplace for everything. Built for modern
                commerce.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Marketplace</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Browse Items
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Categories
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Sell Items
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Safety
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Community
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Legal
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            © 2024 MarketPlace. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

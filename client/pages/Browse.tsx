import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  Filter,
  Heart,
  Coins,
  Shirt,
  Star,
  RefreshCw,
  SlidersHorizontal,
} from "lucide-react";

export default function Browse() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSize, setSelectedSize] = useState("all");
  const [priceRange, setPriceRange] = useState("all");

  const categories = [
    { id: "all", name: "All Categories", count: 1200 },
    { id: "tops", name: "Tops", count: 450 },
    { id: "dresses", name: "Dresses", count: 320 },
    { id: "outerwear", name: "Outerwear", count: 280 },
    { id: "accessories", name: "Accessories", count: 190 },
    { id: "shoes", name: "Shoes", count: 150 },
    { id: "vintage", name: "Vintage", count: 120 },
  ];

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const conditions = ["Like New", "Excellent", "Good", "Fair"];

  const items = [
    {
      id: 1,
      title: "Vintage Denim Jacket",
      size: "M",
      condition: "Excellent",
      points: 15,
      category: "outerwear",
      user: "Sarah_Fashion",
      rating: 4.9,
      likes: 24,
      tags: ["vintage", "denim", "casual"],
      description: "Classic vintage denim jacket in excellent condition",
    },
    {
      id: 2,
      title: "Designer Silk Scarf",
      size: "One Size",
      condition: "Like New",
      points: 25,
      category: "accessories",
      user: "LuxStyle",
      rating: 4.8,
      likes: 18,
      tags: ["designer", "silk", "luxury"],
      description: "Beautiful silk scarf from designer collection",
    },
    {
      id: 3,
      title: "Wool Winter Coat",
      size: "L",
      condition: "Good",
      points: 30,
      category: "outerwear",
      user: "EcoFashion",
      rating: 5.0,
      likes: 35,
      tags: ["wool", "winter", "warm"],
      description: "Warm wool coat perfect for winter",
    },
    {
      id: 4,
      title: "Summer Floral Dress",
      size: "S",
      condition: "Excellent",
      points: 20,
      category: "dresses",
      user: "VintageVibes",
      rating: 4.7,
      likes: 12,
      tags: ["floral", "summer", "casual"],
      description: "Light and airy floral dress for summer",
    },
    {
      id: 5,
      title: "Cotton T-Shirt",
      size: "M",
      condition: "Like New",
      points: 8,
      category: "tops",
      user: "BasicStyle",
      rating: 4.6,
      likes: 9,
      tags: ["cotton", "basic", "comfortable"],
      description: "Soft organic cotton t-shirt",
    },
    {
      id: 6,
      title: "Leather Handbag",
      size: "One Size",
      condition: "Good",
      points: 35,
      category: "accessories",
      user: "BagLover",
      rating: 4.9,
      likes: 28,
      tags: ["leather", "handbag", "classic"],
      description: "Genuine leather handbag with classic design",
    },
    {
      id: 7,
      title: "Running Sneakers",
      size: "9",
      condition: "Excellent",
      points: 18,
      category: "shoes",
      user: "ActiveLife",
      rating: 4.5,
      likes: 15,
      tags: ["sneakers", "sports", "comfortable"],
      description: "High-quality running sneakers in great condition",
    },
    {
      id: 8,
      title: "Vintage Band Tee",
      size: "L",
      condition: "Good",
      points: 12,
      category: "tops",
      user: "RockStyle",
      rating: 4.8,
      likes: 22,
      tags: ["vintage", "band", "music"],
      description: "Authentic vintage band t-shirt",
    },
  ];

  const filteredItems = items.filter((item) => {
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    const matchesSize =
      selectedSize === "all" || item.size.includes(selectedSize);
    return matchesSearch && matchesCategory && matchesSize;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Browse Items</h1>
          <p className="text-muted-foreground">
            Discover unique clothing items from our sustainable community
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search for clothing items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-3">
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedSize} onValueChange={setSelectedSize}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sizes</SelectItem>
                  {sizes.map((size) => (
                    <SelectItem key={size} value={size}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button variant="outline">
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Filter className="h-5 w-5 mr-2" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Point Range */}
                <div>
                  <h4 className="font-medium mb-3">Point Range</h4>
                  <div className="space-y-2">
                    {["Under 10", "10-20", "20-30", "30+"].map((range) => (
                      <div key={range} className="flex items-center space-x-2">
                        <Checkbox id={range} />
                        <label htmlFor={range} className="text-sm">
                          {range} points
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Condition */}
                <div>
                  <h4 className="font-medium mb-3">Condition</h4>
                  <div className="space-y-2">
                    {conditions.map((condition) => (
                      <div
                        key={condition}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox id={condition} />
                        <label htmlFor={condition} className="text-sm">
                          {condition}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Exchange Type */}
                <div>
                  <h4 className="font-medium mb-3">Exchange Type</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="swap" />
                      <label htmlFor="swap" className="text-sm">
                        Direct Swap
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="points" />
                      <label htmlFor="points" className="text-sm">
                        Points Redemption
                      </label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Items Grid */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                Showing {filteredItems.length} of {items.length} items
              </p>
              <Select defaultValue="recent">
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="points-low">
                    Points: Low to High
                  </SelectItem>
                  <SelectItem value="points-high">
                    Points: High to Low
                  </SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <Card
                  key={item.id}
                  className="group overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className="aspect-square bg-gray-100 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-emerald-200 flex items-center justify-center">
                      <Shirt className="h-16 w-16 text-green-400" />
                    </div>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Badge className="absolute top-3 left-3 bg-green-100 text-green-700">
                      {item.condition}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-semibold line-clamp-1 group-hover:text-green-600 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Size {item.size} • by @{item.user}
                        </p>
                      </div>

                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {item.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-green-600 font-semibold">
                          <Coins className="h-4 w-4 mr-1" />
                          {item.points} points
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Heart className="h-3 w-3 mr-1" />
                          {item.likes}
                        </div>
                      </div>

                      <div className="flex gap-1 flex-wrap">
                        {item.tags.slice(0, 2).map((tag, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <Button size="sm" variant="outline" className="text-xs">
                          <RefreshCw className="h-3 w-3 mr-1" />
                          Send Request
                        </Button>
                        <Button
                          size="sm"
                          className="bg-green-600 hover:bg-green-700 text-xs"
                        >
                          <Coins className="h-3 w-3 mr-1" />
                          Redeem
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredItems.length === 0 && (
              <div className="text-center py-12">
                <div className="text-muted-foreground mb-4">
                  No items found matching your criteria
                </div>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("all");
                    setSelectedSize("all");
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

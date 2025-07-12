import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Heart,
  Search,
  Coins,
  Shirt,
  RefreshCw,
  Trash2,
  Filter,
  ShoppingCart,
  MessageSquare,
} from "lucide-react";

export default function Wishlist() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const wishlistItems = [
    {
      id: 1,
      title: "Vintage Leather Jacket",
      size: "M",
      condition: "Excellent",
      points: 35,
      category: "outerwear",
      user: "VintageVibes",
      rating: 4.9,
      addedDate: "2024-01-15",
      available: true,
      tags: ["vintage", "leather", "classic"],
      description: "Classic vintage leather jacket in excellent condition",
    },
    {
      id: 2,
      title: "Designer Silk Blouse",
      size: "S",
      condition: "Like New",
      points: 28,
      category: "tops",
      user: "LuxStyle",
      rating: 4.8,
      addedDate: "2024-01-12",
      available: true,
      tags: ["designer", "silk", "elegant"],
      description: "Beautiful silk blouse from premium designer brand",
    },
    {
      id: 3,
      title: "Summer Maxi Dress",
      size: "M",
      condition: "Good",
      points: 22,
      category: "dresses",
      user: "BohoStyle",
      rating: 4.7,
      addedDate: "2024-01-10",
      available: false,
      tags: ["summer", "maxi", "boho"],
      description: "Flowy maxi dress perfect for summer occasions",
    },
    {
      id: 4,
      title: "Cashmere Sweater",
      size: "L",
      condition: "Excellent",
      points: 32,
      category: "tops",
      user: "CozyFashion",
      rating: 5.0,
      addedDate: "2024-01-08",
      available: true,
      tags: ["cashmere", "luxury", "warm"],
      description: "Luxurious cashmere sweater in perfect condition",
    },
    {
      id: 5,
      title: "Retro Sneakers",
      size: "8",
      condition: "Good",
      points: 18,
      category: "shoes",
      user: "RetroKicks",
      rating: 4.6,
      addedDate: "2024-01-05",
      available: true,
      tags: ["retro", "sneakers", "casual"],
      description: "Classic retro sneakers with authentic vintage appeal",
    },
    {
      id: 6,
      title: "Wool Winter Coat",
      size: "M",
      condition: "Like New",
      points: 45,
      category: "outerwear",
      user: "WinterWear",
      rating: 4.9,
      addedDate: "2024-01-03",
      available: false,
      tags: ["wool", "winter", "warm"],
      description: "Premium wool coat for cold weather protection",
    },
  ];

  const categories = [
    { id: "all", name: "All Categories" },
    { id: "tops", name: "Tops" },
    { id: "dresses", name: "Dresses" },
    { id: "outerwear", name: "Outerwear" },
    { id: "shoes", name: "Shoes" },
  ];

  const filteredItems = wishlistItems.filter((item) => {
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const availableItems = filteredItems.filter((item) => item.available);
  const unavailableItems = filteredItems.filter((item) => !item.available);
  const totalPoints = availableItems.reduce(
    (sum, item) => sum + item.points,
    0,
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <Heart className="h-8 w-8 text-red-500" />
            <h1 className="text-3xl font-bold">My Wishlist</h1>
            <Badge className="bg-red-100 text-red-700">
              {wishlistItems.length} items
            </Badge>
          </div>
          <p className="text-muted-foreground">
            Items you've saved for future swaps and redemptions
          </p>
        </div>

        {/* Wishlist Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-red-500 mb-1">
                {wishlistItems.length}
              </div>
              <div className="text-sm text-muted-foreground">Total Items</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">
                {availableItems.length}
              </div>
              <div className="text-sm text-muted-foreground">Available</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">
                {totalPoints}
              </div>
              <div className="text-sm text-muted-foreground">Total Points</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-orange-600 mb-1">
                {unavailableItems.length}
              </div>
              <div className="text-sm text-muted-foreground">Unavailable</div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search your wishlist..."
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
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>
          </div>
        </div>

        {filteredItems.length === 0 ? (
          <div className="text-center py-16">
            <Heart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No items in wishlist</h3>
            <p className="text-muted-foreground mb-6">
              Start browsing items and add them to your wishlist
            </p>
            <Button className="bg-green-600 hover:bg-green-700">
              Browse Items
            </Button>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Available Items */}
            {availableItems.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold flex items-center">
                    Available Items
                    <Badge className="ml-3 bg-green-100 text-green-700">
                      {availableItems.length}
                    </Badge>
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Total: {totalPoints} points needed
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {availableItems.map((item) => (
                    <Card
                      key={item.id}
                      className="group overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <div className="aspect-square bg-gray-100 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-emerald-200 flex items-center justify-center">
                          <Shirt className="h-16 w-16 text-green-400" />
                        </div>
                        <Button
                          size="sm"
                          variant="secondary"
                          className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white"
                        >
                          <Heart className="h-4 w-4 fill-current" />
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
                            <div className="text-xs text-muted-foreground">
                              Added{" "}
                              {new Date(item.addedDate).toLocaleDateString()}
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

                          <div className="grid grid-cols-3 gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-xs"
                            >
                              <RefreshCw className="h-3 w-3 mr-1" />
                              Swap
                            </Button>
                            <Button
                              size="sm"
                              className="bg-green-600 hover:bg-green-700 text-xs"
                            >
                              <Coins className="h-3 w-3 mr-1" />
                              Redeem
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-xs"
                            >
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Unavailable Items */}
            {unavailableItems.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold flex items-center">
                    No Longer Available
                    <Badge className="ml-3 bg-gray-100 text-gray-700">
                      {unavailableItems.length}
                    </Badge>
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {unavailableItems.map((item) => (
                    <Card
                      key={item.id}
                      className="opacity-60 overflow-hidden relative"
                    >
                      <div className="aspect-square bg-gray-100 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center">
                          <Shirt className="h-16 w-16 text-gray-400" />
                        </div>
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                          <Badge className="bg-red-500 text-white">
                            No Longer Available
                          </Badge>
                        </div>
                        <Button
                          size="sm"
                          variant="secondary"
                          className="absolute top-3 right-3"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <CardContent className="p-4">
                        <div className="space-y-3">
                          <div>
                            <h3 className="font-semibold line-clamp-1 text-gray-600">
                              {item.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              Size {item.size} • was {item.points} points
                            </p>
                          </div>

                          <div className="flex gap-1 flex-wrap">
                            {item.tags.slice(0, 2).map((tag, idx) => (
                              <Badge
                                key={idx}
                                variant="secondary"
                                className="text-xs opacity-60"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="grid grid-cols-2 gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-xs"
                            >
                              <Search className="h-3 w-3 mr-1" />
                              Find Similar
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-xs"
                            >
                              <Trash2 className="h-3 w-3 mr-1" />
                              Remove
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Quick Actions */}
        {filteredItems.length > 0 && (
          <div className="mt-12 bg-green-50 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-semibold mb-4">
              Ready to start swapping?
            </h3>
            <p className="text-muted-foreground mb-6">
              You have {availableItems.length} items available for exchange
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-green-600 hover:bg-green-700">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Redeem All Available ({totalPoints} points)
              </Button>
              <Button variant="outline">
                <MessageSquare className="mr-2 h-4 w-4" />
                Send Swap Requests
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

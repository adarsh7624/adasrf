import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  Coins,
  Package,
  RefreshCw,
  Star,
  Heart,
  Edit,
  Trash2,
  Eye,
  Plus,
  TrendingUp,
  Calendar,
  User,
  Shirt,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
} from "lucide-react";

export default function Dashboard() {
  const userStats = {
    points: 125,
    totalSwaps: 23,
    itemsListed: 8,
    rating: 4.8,
    memberSince: "Jan 2024",
  };

  const myItems = [
    {
      id: 1,
      title: "Vintage Denim Jacket",
      size: "M",
      condition: "Excellent",
      points: 15,
      status: "active",
      views: 24,
      likes: 3,
      requests: 2,
    },
    {
      id: 2,
      title: "Summer Floral Dress",
      size: "S",
      condition: "Like New",
      points: 20,
      status: "pending",
      views: 12,
      likes: 1,
      requests: 0,
    },
    {
      id: 3,
      title: "Wool Sweater",
      size: "L",
      condition: "Good",
      points: 12,
      status: "swapped",
      views: 45,
      likes: 6,
      requests: 4,
    },
  ];

  const swapHistory = [
    {
      id: 1,
      type: "swap",
      item: "Designer Silk Scarf",
      partner: "Sarah_Fashion",
      date: "2024-01-15",
      points: "+25",
      status: "completed",
    },
    {
      id: 2,
      type: "redeem",
      item: "Vintage Band T-Shirt",
      partner: "System",
      date: "2024-01-10",
      points: "-18",
      status: "completed",
    },
    {
      id: 3,
      type: "list",
      item: "Winter Coat",
      partner: "System",
      date: "2024-01-08",
      points: "+5",
      status: "completed",
    },
  ];

  const activeRequests = [
    {
      id: 1,
      item: "Vintage Denim Jacket",
      requester: "EcoFashion",
      type: "swap",
      offerItem: "Wool Winter Coat",
      date: "2024-01-16",
      status: "pending",
    },
    {
      id: 2,
      item: "Summer Floral Dress",
      requester: "VintageVibes",
      type: "points",
      points: 20,
      date: "2024-01-15",
      status: "pending",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <Avatar className="h-16 w-16">
              <AvatarImage src="/api/placeholder/64/64" />
              <AvatarFallback className="bg-green-100 text-green-700">
                JD
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold">John Doe</h1>
              <p className="text-muted-foreground">
                Member since {userStats.memberSince}
              </p>
              <div className="flex items-center space-x-2 mt-1">
                <Star className="h-4 w-4 text-yellow-500" />
                <span className="text-sm font-medium">{userStats.rating}</span>
                <Badge className="bg-green-100 text-green-700">
                  Trusted Swapper
                </Badge>
              </div>
            </div>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline">
              <Edit className="h-4 w-4 mr-2" />
              Edit Profile
            </Button>
            <Button className="bg-green-600 hover:bg-green-700">
              <Plus className="h-4 w-4 mr-2" />
              List New Item
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Points</CardTitle>
              <Coins className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                {userStats.points}
              </div>
              <p className="text-xs text-muted-foreground">+15 this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Swaps</CardTitle>
              <RefreshCw className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userStats.totalSwaps}</div>
              <p className="text-xs text-muted-foreground">+3 this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Items Listed
              </CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userStats.itemsListed}</div>
              <p className="text-xs text-muted-foreground">2 active</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Rating</CardTitle>
              <Star className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userStats.rating}</div>
              <p className="text-xs text-muted-foreground">Excellent</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="items" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="items">My Items</TabsTrigger>
            <TabsTrigger value="requests">
              Requests
              <Badge className="ml-2 bg-green-100 text-green-700">
                {activeRequests.length}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="items" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">My Listed Items</h2>
              <Button className="bg-green-600 hover:bg-green-700">
                <Plus className="h-4 w-4 mr-2" />
                Add New Item
              </Button>
            </div>

            <div className="grid gap-4">
              {myItems.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center">
                          <Shirt className="h-8 w-8 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            Size {item.size} • {item.condition}
                          </p>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <Eye className="h-3 w-3 mr-1" />
                              {item.views}
                            </div>
                            <div className="flex items-center">
                              <Heart className="h-3 w-3 mr-1" />
                              {item.likes}
                            </div>
                            <div className="flex items-center">
                              <RefreshCw className="h-3 w-3 mr-1" />
                              {item.requests} requests
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <div className="flex items-center text-green-600 font-semibold">
                            <Coins className="h-4 w-4 mr-1" />
                            {item.points}
                          </div>
                          <Badge
                            className={
                              item.status === "active"
                                ? "bg-green-100 text-green-700"
                                : item.status === "pending"
                                  ? "bg-yellow-100 text-yellow-700"
                                  : "bg-gray-100 text-gray-700"
                            }
                          >
                            {item.status}
                          </Badge>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="requests" className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Pending Requests</h2>
              <div className="space-y-4">
                {activeRequests.map((request) => (
                  <Card key={request.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Avatar>
                            <AvatarFallback className="bg-green-100 text-green-700">
                              {request.requester[0]}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-semibold">
                              @{request.requester} wants to{" "}
                              {request.type === "swap" ? "swap" : "redeem"} your{" "}
                              {request.item}
                            </h3>
                            {request.type === "swap" ? (
                              <p className="text-sm text-muted-foreground">
                                Offering: {request.offerItem}
                              </p>
                            ) : (
                              <p className="text-sm text-muted-foreground">
                                For {request.points} points
                              </p>
                            )}
                            <p className="text-xs text-muted-foreground mt-1">
                              {request.date}
                            </p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            className="bg-green-600 hover:bg-green-700"
                          >
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Accept
                          </Button>
                          <Button size="sm" variant="outline">
                            <XCircle className="h-4 w-4 mr-2" />
                            Decline
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Swap History</h2>
              <div className="space-y-4">
                {swapHistory.map((transaction) => (
                  <Card key={transaction.id}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              transaction.type === "swap"
                                ? "bg-blue-100"
                                : transaction.type === "redeem"
                                  ? "bg-purple-100"
                                  : "bg-green-100"
                            }`}
                          >
                            {transaction.type === "swap" ? (
                              <RefreshCw className="h-5 w-5 text-blue-600" />
                            ) : transaction.type === "redeem" ? (
                              <Coins className="h-5 w-5 text-purple-600" />
                            ) : (
                              <Package className="h-5 w-5 text-green-600" />
                            )}
                          </div>
                          <div>
                            <h3 className="font-medium">
                              {transaction.type === "swap"
                                ? `Swapped ${transaction.item}`
                                : transaction.type === "redeem"
                                  ? `Redeemed ${transaction.item}`
                                  : `Listed ${transaction.item}`}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {transaction.partner !== "System" && "with "}@
                              {transaction.partner}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {transaction.date}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div
                            className={`font-semibold ${
                              transaction.points.startsWith("+")
                                ? "text-green-600"
                                : "text-red-600"
                            }`}
                          >
                            {transaction.points} points
                          </div>
                          <Badge className="bg-green-100 text-green-700">
                            {transaction.status}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Username</label>
                    <p className="text-muted-foreground">@johndoe_fashion</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Location</label>
                    <p className="text-muted-foreground">New York, NY</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Bio</label>
                    <p className="text-muted-foreground">
                      Fashion enthusiast passionate about sustainable clothing.
                      Love vintage pieces and eco-friendly swaps!
                    </p>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Sustainability Impact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>CO₂ Saved</span>
                      <span className="font-medium">2.3 kg</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Water Saved</span>
                      <span className="font-medium">850 L</span>
                    </div>
                    <Progress value={45} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Items Diverted</span>
                      <span className="font-medium">23 items</span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                  <div className="pt-4 border-t">
                    <Badge className="bg-green-100 text-green-700">
                      🌱 Eco Champion
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

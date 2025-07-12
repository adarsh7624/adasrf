import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Shield,
  CheckCircle,
  Trash2,
  Settings,
  Users,
  Package,
  AlertTriangle,
  TrendingUp,
  Flag,
  Eye,
  Clock,
  Ban,
  MessageSquare,
  Star,
  Shirt,
} from "lucide-react";

export default function Admin() {
  const stats = {
    pendingItems: 8,
    activeUsers: 2847,
    flaggedItems: 3,
    totalSwaps: 1234,
    monthlyGrowth: 12,
  };

  const pendingItems = [
    {
      id: 1,
      title: "Vintage Band T-Shirt",
      user: "MusicLover92",
      submitted: "2 hours ago",
      condition: "Good",
      points: 15,
      category: "Tops",
      status: "pending",
      images: 4,
    },
    {
      id: 2,
      title: "Designer Leather Jacket",
      user: "FashionPro",
      submitted: "5 hours ago",
      condition: "Excellent",
      points: 45,
      category: "Outerwear",
      status: "pending",
      images: 6,
    },
    {
      id: 3,
      title: "Summer Maxi Dress",
      user: "SunnyStyle",
      submitted: "1 day ago",
      condition: "Like New",
      points: 25,
      category: "Dresses",
      status: "pending",
      images: 3,
    },
  ];

  const flaggedItems = [
    {
      id: 1,
      title: "Questionable Item Listing",
      user: "SuspiciousUser",
      reporter: "TrustedMember",
      reason: "Inappropriate photos",
      severity: "high",
      reportedAt: "1 hour ago",
    },
    {
      id: 2,
      title: "Fake Designer Bag",
      user: "BagSeller123",
      reporter: "AuthenticityExpert",
      reason: "Counterfeit item",
      severity: "medium",
      reportedAt: "3 hours ago",
    },
  ];

  const recentActions = [
    {
      id: 1,
      action: "approved",
      item: "Vintage Denim Jacket",
      user: "VintageVibes",
      admin: "You",
      timestamp: "10 minutes ago",
    },
    {
      id: 2,
      action: "rejected",
      item: "Damaged Sneakers",
      user: "SneakerHead",
      admin: "You",
      timestamp: "30 minutes ago",
      reason: "Poor condition description",
    },
    {
      id: 3,
      action: "user_warning",
      user: "SpamUser",
      admin: "AdminTeam",
      timestamp: "1 hour ago",
      reason: "Multiple inappropriate listings",
    },
  ];

  const topUsers = [
    {
      username: "EcoFashionista",
      swaps: 45,
      rating: 4.9,
      joinDate: "Jan 2024",
      status: "trusted",
    },
    {
      username: "VintageVibes",
      swaps: 38,
      rating: 4.8,
      joinDate: "Feb 2024",
      status: "active",
    },
    {
      username: "SustainableStyle",
      swaps: 32,
      rating: 5.0,
      joinDate: "Mar 2024",
      status: "trusted",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <Shield className="h-8 w-8 text-green-600" />
            <h1 className="text-3xl font-bold">ReWear Admin Dashboard</h1>
            <Badge className="bg-green-100 text-green-700">Admin Panel</Badge>
          </div>
          <p className="text-muted-foreground">
            Moderate clothing listings, manage users, and oversee the
            sustainable fashion marketplace
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Pending Reviews
              </CardTitle>
              <Clock className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">
                {stats.pendingItems}
              </div>
              <p className="text-xs text-muted-foreground">
                Awaiting moderation
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Users
              </CardTitle>
              <Users className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.activeUsers}</div>
              <p className="text-xs text-muted-foreground">
                +{stats.monthlyGrowth}% this month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Flagged Items
              </CardTitle>
              <AlertTriangle className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">
                {stats.flaggedItems}
              </div>
              <p className="text-xs text-muted-foreground">Needs attention</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Swaps</CardTitle>
              <TrendingUp className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalSwaps}</div>
              <p className="text-xs text-muted-foreground">
                All time exchanges
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Growth Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                +{stats.monthlyGrowth}%
              </div>
              <p className="text-xs text-muted-foreground">Monthly growth</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="pending" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="pending">
              Pending Items
              <Badge className="ml-2 bg-orange-100 text-orange-700">
                {pendingItems.length}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="flagged">
              Flagged Items
              <Badge className="ml-2 bg-red-100 text-red-700">
                {flaggedItems.length}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="users">User Management</TabsTrigger>
            <TabsTrigger value="activity">Recent Activity</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Pending Items Tab */}
          <TabsContent value="pending" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Pending Item Reviews</h2>
              <Button variant="outline">
                <Settings className="h-4 w-4 mr-2" />
                Review Settings
              </Button>
            </div>

            <div className="space-y-4">
              {pendingItems.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center">
                          <Shirt className="h-8 w-8 text-green-600" />
                        </div>
                        <div className="space-y-1">
                          <h3 className="font-semibold">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            by @{item.user} • {item.submitted}
                          </p>
                          <div className="flex items-center space-x-4 text-sm">
                            <Badge className="bg-blue-100 text-blue-700">
                              {item.category}
                            </Badge>
                            <Badge className="bg-green-100 text-green-700">
                              {item.condition}
                            </Badge>
                            <span className="text-muted-foreground">
                              {item.points} points • {item.images} photos
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4 mr-2" />
                          Review
                        </Button>
                        <Button
                          size="sm"
                          className="bg-green-600 hover:bg-green-700"
                        >
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Approve
                        </Button>
                        <Button size="sm" variant="destructive">
                          <Trash2 className="h-4 w-4 mr-2" />
                          Reject
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Flagged Items Tab */}
          <TabsContent value="flagged" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Flagged Items</h2>
              <Button variant="outline">
                <Flag className="h-4 w-4 mr-2" />
                Flag Management
              </Button>
            </div>

            <div className="space-y-4">
              {flaggedItems.map((item) => (
                <Card
                  key={item.id}
                  className="border-red-200 bg-red-50/50 overflow-hidden"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <AlertTriangle className="h-8 w-8 text-red-600" />
                        <div className="space-y-1">
                          <h3 className="font-semibold">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            Listed by @{item.user} • Reported by @
                            {item.reporter}
                          </p>
                          <div className="flex items-center space-x-4 text-sm">
                            <Badge
                              className={
                                item.severity === "high"
                                  ? "bg-red-100 text-red-700"
                                  : "bg-yellow-100 text-yellow-700"
                              }
                            >
                              {item.severity} priority
                            </Badge>
                            <span className="text-muted-foreground">
                              Reason: {item.reason}
                            </span>
                            <span className="text-muted-foreground">
                              {item.reportedAt}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="outline">
                          <MessageSquare className="h-4 w-4 mr-2" />
                          Contact User
                        </Button>
                        <Button size="sm" variant="destructive">
                          <Ban className="h-4 w-4 mr-2" />
                          Remove Item
                        </Button>
                        <Button
                          size="sm"
                          className="bg-green-600 hover:bg-green-700"
                        >
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Dismiss Flag
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* User Management Tab */}
          <TabsContent value="users" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">User Management</h2>
              <Button variant="outline">
                <Users className="h-4 w-4 mr-2" />
                User Analytics
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Top Community Members</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {topUsers.map((user, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 border rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarFallback className="bg-green-100 text-green-700">
                            {user.username[0]}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">@{user.username}</div>
                          <div className="text-sm text-muted-foreground">
                            {user.swaps} swaps • Member since {user.joinDate}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-1 mb-1">
                          <Star className="h-3 w-3 text-yellow-500" />
                          <span className="text-sm font-medium">
                            {user.rating}
                          </span>
                        </div>
                        <Badge
                          className={
                            user.status === "trusted"
                              ? "bg-green-100 text-green-700"
                              : "bg-blue-100 text-blue-700"
                          }
                        >
                          {user.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full" variant="outline">
                    <Users className="mr-2 h-4 w-4" />
                    View All Users
                  </Button>
                  <Button className="w-full" variant="outline">
                    <Ban className="mr-2 h-4 w-4" />
                    Banned Users
                  </Button>
                  <Button className="w-full" variant="outline">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    User Reports
                  </Button>
                  <Button className="w-full" variant="outline">
                    <Settings className="mr-2 h-4 w-4" />
                    User Permissions
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Recent Activity Tab */}
          <TabsContent value="activity" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Recent Admin Activity</h2>
              <Button variant="outline">
                <Clock className="h-4 w-4 mr-2" />
                View Full Log
              </Button>
            </div>

            <div className="space-y-4">
              {recentActions.map((action) => (
                <Card key={action.id}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            action.action === "approved"
                              ? "bg-green-100"
                              : action.action === "rejected"
                                ? "bg-red-100"
                                : "bg-yellow-100"
                          }`}
                        >
                          {action.action === "approved" ? (
                            <CheckCircle className="h-5 w-5 text-green-600" />
                          ) : action.action === "rejected" ? (
                            <Trash2 className="h-5 w-5 text-red-600" />
                          ) : (
                            <AlertTriangle className="h-5 w-5 text-yellow-600" />
                          )}
                        </div>
                        <div>
                          <div className="font-medium">
                            {action.action === "approved"
                              ? `Approved "${action.item}"`
                              : action.action === "rejected"
                                ? `Rejected "${action.item}"`
                                : `Warning issued to @${action.user}`}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {action.user && action.action !== "user_warning"
                              ? `by @${action.user}`
                              : ""}{" "}
                            • Admin: {action.admin} • {action.timestamp}
                          </div>
                          {action.reason && (
                            <div className="text-sm text-muted-foreground">
                              Reason: {action.reason}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Admin Settings</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Moderation Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Auto-approve trusted users
                    </label>
                    <p className="text-xs text-muted-foreground">
                      Items from users with 4.8+ rating are auto-approved
                    </p>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Flag threshold
                    </label>
                    <p className="text-xs text-muted-foreground">
                      Number of reports needed to auto-flag an item
                    </p>
                  </div>
                  <Button className="w-full" variant="outline">
                    <Settings className="mr-2 h-4 w-4" />
                    Configure Rules
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Platform Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Points system</label>
                    <p className="text-xs text-muted-foreground">
                      Adjust point values for different actions
                    </p>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Category management
                    </label>
                    <p className="text-xs text-muted-foreground">
                      Add or modify clothing categories
                    </p>
                  </div>
                  <Button className="w-full" variant="outline">
                    <Package className="mr-2 h-4 w-4" />
                    Platform Config
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

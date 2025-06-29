
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate, Routes, Route } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

// Dashboard page components
const DashboardHome = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
      Dashboard Overview
    </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card className="bg-gradient-to-br from-violet-50 to-purple-50 border-violet-200">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium text-violet-700">Total QR Codes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-violet-600">24</div>
        </CardContent>
      </Card>
      
      <Card className="bg-gradient-to-br from-fuchsia-50 to-pink-50 border-fuchsia-200">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium text-fuchsia-700">Active QRs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-fuchsia-600">18</div>
        </CardContent>
      </Card>
      
      <Card className="bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-200">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium text-cyan-700">Total Scans</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-cyan-600">1,247</div>
        </CardContent>
      </Card>
      
      <Card className="bg-gradient-to-br from-emerald-50 to-green-50 border-emerald-200">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium text-emerald-700">Growth Rate</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-emerald-600">+12%</div>
        </CardContent>
      </Card>
    </div>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="bg-white shadow-lg border-violet-100">
        <CardHeader>
          <CardTitle className="text-violet-700">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 rounded-xl">
            Create New QR Code
          </Button>
          <Button variant="outline" className="w-full rounded-xl border-violet-200">
            View Analytics
          </Button>
          <Button variant="outline" className="w-full rounded-xl border-violet-200">
            Manage QR Codes
          </Button>
        </CardContent>
      </Card>
      
      <Card className="bg-white shadow-lg border-violet-100">
        <CardHeader>
          <CardTitle className="text-violet-700">Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-2 border-b border-violet-100">
              <span className="text-sm">Website QR Code created</span>
              <span className="text-xs text-gray-500">2 hours ago</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-violet-100">
              <span className="text-sm">Social Media QR updated</span>
              <span className="text-xs text-gray-500">1 day ago</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-sm">PDF QR Code scanned</span>
              <span className="text-xs text-gray-500">2 days ago</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
);

const QRGenerator = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
      QR Code Generator
    </h2>
    <Card className="bg-white shadow-lg">
      <CardContent className="p-8">
        <p className="text-gray-600 mb-4">Create custom QR codes for your business needs.</p>
        <Button className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 rounded-xl">
          Start Creating
        </Button>
      </CardContent>
    </Card>
  </div>
);

const Analytics = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
      Analytics
    </h2>
    <Card className="bg-white shadow-lg">
      <CardContent className="p-8">
        <p className="text-gray-600 mb-4">View detailed analytics and performance metrics.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-violet-50 p-4 rounded-xl">
            <h3 className="font-semibold text-violet-700">Total Scans</h3>
            <p className="text-2xl font-bold text-violet-600">1,247</p>
          </div>
          <div className="bg-fuchsia-50 p-4 rounded-xl">
            <h3 className="font-semibold text-fuchsia-700">This Month</h3>
            <p className="text-2xl font-bold text-fuchsia-600">324</p>
          </div>
          <div className="bg-cyan-50 p-4 rounded-xl">
            <h3 className="font-semibold text-cyan-700">Growth</h3>
            <p className="text-2xl font-bold text-cyan-600">+15%</p>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);

const MyCodes = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
      My QR Codes
    </h2>
    <Card className="bg-white shadow-lg">
      <CardContent className="p-8">
        <p className="text-gray-600 mb-4">Manage all your created QR codes.</p>
        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 bg-violet-50 rounded-xl">
            <span className="font-medium">Website QR Code</span>
            <span className="text-sm text-gray-500">Created 2 days ago</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-fuchsia-50 rounded-xl">
            <span className="font-medium">Business Card QR</span>
            <span className="text-sm text-gray-500">Created 1 week ago</span>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);

const Users = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
      Users Management
    </h2>
    <Card className="bg-white shadow-lg">
      <CardContent className="p-8">
        <p className="text-gray-600 mb-4">Manage user accounts and permissions.</p>
        <div className="bg-cyan-50 p-6 rounded-xl">
          <h3 className="font-semibold text-cyan-700 mb-2">Active Users</h3>
          <p className="text-cyan-600">Total registered users: 1,254</p>
        </div>
      </CardContent>
    </Card>
  </div>
);

const Downloads = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
      Downloads
    </h2>
    <Card className="bg-white shadow-lg">
      <CardContent className="p-8">
        <p className="text-gray-600 mb-4">Download your QR codes and reports.</p>
        <div className="space-y-3">
          <Button variant="outline" className="w-full justify-start rounded-xl">
            Download QR Codes (ZIP)
          </Button>
          <Button variant="outline" className="w-full justify-start rounded-xl">
            Download Analytics Report
          </Button>
        </div>
      </CardContent>
    </Card>
  </div>
);

const SettingsPage = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
      Settings
    </h2>
    <Card className="bg-white shadow-lg">
      <CardContent className="p-8">
        <p className="text-gray-600 mb-4">Configure your account and application settings.</p>
        <div className="space-y-4">
          <div className="bg-violet-50 p-4 rounded-xl">
            <h3 className="font-semibold text-violet-700">Account Settings</h3>
            <p className="text-sm text-gray-600">Update your profile information</p>
          </div>
          <div className="bg-fuchsia-50 p-4 rounded-xl">
            <h3 className="font-semibold text-fuchsia-700">Notification Settings</h3>
            <p className="text-sm text-gray-600">Configure your notification preferences</p>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);

const Help = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
      Help & Support
    </h2>
    <Card className="bg-white shadow-lg">
      <CardContent className="p-8">
        <p className="text-gray-600 mb-4">Get help and support for using the platform.</p>
        <div className="space-y-4">
          <div className="bg-emerald-50 p-4 rounded-xl">
            <h3 className="font-semibold text-emerald-700">FAQ</h3>
            <p className="text-sm text-gray-600">Frequently asked questions</p>
          </div>
          <div className="bg-cyan-50 p-4 rounded-xl">
            <h3 className="font-semibold text-cyan-700">Contact Support</h3>
            <p className="text-sm text-gray-600">Get in touch with our support team</p>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);

const Dashboard = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-violet-50 to-fuchsia-50">
        <AppSidebar />
        
        <main className="flex-1 flex flex-col">
          <header className="bg-white shadow-sm border-b border-violet-100 p-4">
            <div className="flex items-center gap-4">
              <SidebarTrigger />
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleGoBack}
                className="flex items-center gap-2 rounded-xl"
              >
                <ArrowLeft size={16} />
                পূর্বের পেজে ফিরুন
              </Button>
            </div>
          </header>
          
          <div className="flex-1 p-6">
            <Routes>
              <Route path="/" element={<DashboardHome />} />
              <Route path="/qr-generator" element={<QRGenerator />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/my-codes" element={<MyCodes />} />
              <Route path="/users" element={<Users />} />
              <Route path="/downloads" element={<Downloads />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/help" element={<Help />} />
            </Routes>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;

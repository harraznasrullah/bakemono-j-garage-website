import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  PieChart, Pie, BarChart, Bar, LineChart, Line, XAxis, YAxis, 
  CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { Separator } from "@/components/ui/separator";
import { useLanguage } from '@/contexts/LanguageContext';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// Translations for the Analytics page
const translations = {
  en: {
    pageTitle: "Analytics Dashboard",
    pageDescription: "View website traffic, user engagement, and other statistics",
    overview: "Overview",
    traffic: "Traffic",
    engagement: "Engagement",
    devices: "Devices",
    totalVisitors: "Total Visitors",
    weeklyVisitors: "Weekly Visitors",
    monthlyVisitors: "Monthly Visitors",
    pageViews: "Page Views",
    today: "Today",
    thisWeek: "This Week",
    thisMonth: "This Month",
    topPages: "Top Pages",
    page: "Page",
    views: "Views",
    events: "Events",
    whatsappClicks: "WhatsApp Button Clicks",
    mobileVsDesktop: "Mobile vs Desktop",
    mobile: "Mobile",
    desktop: "Desktop",
    tablet: "Tablet",
    mostVisitedPages: "Most Visited Pages",
    trafficSources: "Traffic Sources",
    source: "Source",
    percentage: "Percentage",
    visitorLocation: "Visitor Location",
    country: "Country",
    visits: "Visits",
    loading: "Loading data from Google Analytics...",
    loginPrompt: "Please login to your Google Analytics account to view your website data.",
    visitGA: "Visit Google Analytics",
    howToInteract: "How to Interact with Analytics:",
    instructionOne: "1. All data is fetched directly from your Google Analytics account",
    instructionTwo: "2. Click on chart elements to see more details",
    instructionThree: "3. Change date ranges using the tabs above",
    noData: "No data available for this time period",
    direct: "Direct",
    referral: "Referral",
    organic: "Organic Search",
    social: "Social Media"
  },
  ms: {
    pageTitle: "Papan Pemuka Analitik",
    pageDescription: "Lihat trafik laman web, penglibatan pengguna, dan statistik lain",
    overview: "Gambaran Keseluruhan",
    traffic: "Trafik",
    engagement: "Penglibatan",
    devices: "Peranti",
    totalVisitors: "Jumlah Pelawat",
    weeklyVisitors: "Pelawat Mingguan",
    monthlyVisitors: "Pelawat Bulanan",
    pageViews: "Paparan Halaman",
    today: "Hari Ini",
    thisWeek: "Minggu Ini",
    thisMonth: "Bulan Ini",
    topPages: "Halaman Teratas",
    page: "Halaman",
    views: "Paparan",
    events: "Peristiwa",
    whatsappClicks: "Klik Butang WhatsApp",
    mobileVsDesktop: "Mobil vs Desktop",
    mobile: "Mobil",
    desktop: "Desktop",
    tablet: "Tablet",
    mostVisitedPages: "Halaman Paling Dilawati",
    trafficSources: "Sumber Trafik",
    source: "Sumber",
    percentage: "Peratusan",
    visitorLocation: "Lokasi Pelawat",
    country: "Negara",
    visits: "Lawatan",
    loading: "Memuat data dari Google Analytics...",
    loginPrompt: "Sila log masuk ke akaun Google Analytics anda untuk melihat data laman web anda.",
    visitGA: "Layari Google Analytics",
    howToInteract: "Cara Berinteraksi dengan Analitik:",
    instructionOne: "1. Semua data diambil terus dari akaun Google Analytics anda",
    instructionTwo: "2. Klik pada elemen carta untuk melihat lebih banyak butiran",
    instructionThree: "3. Tukar julat tarikh menggunakan tab di atas",
    noData: "Tiada data tersedia untuk tempoh masa ini",
    direct: "Terus",
    referral: "Rujukan",
    organic: "Carian Organik",
    social: "Media Sosial"
  }
};

// Demo data that represents what would come from Google Analytics
// In a real implementation, this would be fetched from the Google Analytics API
const demoData = {
  visitors: {
    total: 1243,
    weekly: 287,
    monthly: 1243
  },
  pageViews: {
    today: 78,
    thisWeek: 547,
    thisMonth: 2367
  },
  topPages: [
    { page: "/", views: 845 },
    { page: "/services", views: 523 },
    { page: "/contact", views: 367 },
    { page: "/gallery", views: 298 },
    { page: "/about", views: 234 },
  ],
  events: {
    whatsappClicks: 87
  },
  devices: [
    { name: "Mobile", value: 65 },
    { name: "Desktop", value: 30 },
    { name: "Tablet", value: 5 },
  ],
  trafficSources: [
    { name: "Direct", value: 40 },
    { name: "Organic Search", value: 25 },
    { name: "Social", value: 20 },
    { name: "Referral", value: 15 }
  ],
  visitorsByCountry: [
    { country: "Malaysia", visits: 876 },
    { country: "Singapore", visits: 145 },
    { country: "Indonesia", visits: 87 },
    { country: "Thailand", visits: 56 },
    { country: "United States", visits: 42 },
    { country: "Others", visits: 37 }
  ],
  trafficOverTime: [
    { name: "Jan", value: 400 },
    { name: "Feb", value: 300 },
    { name: "Mar", value: 600 },
    { name: "Apr", value: 800 },
    { name: "May", value: 700 },
    { name: "Jun", value: 900 },
    { name: "Jul", value: 1100 },
  ]
};

export default function Analytics() {
  const { language, t } = useLanguage();
  const text = translations[language as keyof typeof translations];
  const [timeframe, setTimeframe] = useState('month');

  // In a real implementation, we would fetch data from the Google Analytics API
  // For demo purposes, we're using static data
  const [analyticsData, setAnalyticsData] = useState(demoData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to Google Analytics
    const fetchData = async () => {
      setIsLoading(true);
      // In real implementation, fetch from Google Analytics API
      setTimeout(() => {
        setAnalyticsData(demoData);
        setIsLoading(false);
      }, 1000);
    };

    fetchData();
  }, [timeframe]);

  // These colors provide a consistent theme across charts
  const chartColors = ['#4f46e5', '#3b82f6', '#6366f1', '#8b5cf6', '#a855f7', '#d946ef'];

  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <div className="flex flex-col space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{text.pageTitle}</h1>
          <p className="text-muted-foreground">{text.pageDescription}</p>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="overview">{text.overview}</TabsTrigger>
            <TabsTrigger value="traffic">{text.traffic}</TabsTrigger>
            <TabsTrigger value="engagement">{text.engagement}</TabsTrigger>
            <TabsTrigger value="devices">{text.devices}</TabsTrigger>
          </TabsList>

          <div className="mb-4 flex">
            <TabsTrigger
              className={`mr-2 px-4 py-2 ${timeframe === 'day' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}
              onClick={() => setTimeframe('day')}
            >
              {text.today}
            </TabsTrigger>
            <TabsTrigger
              className={`mr-2 px-4 py-2 ${timeframe === 'week' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}
              onClick={() => setTimeframe('week')}
            >
              {text.thisWeek}
            </TabsTrigger>
            <TabsTrigger
              className={`px-4 py-2 ${timeframe === 'month' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}
              onClick={() => setTimeframe('month')}
            >
              {text.thisMonth}
            </TabsTrigger>
          </div>

          {isLoading ? (
            <div className="flex h-[400px] w-full items-center justify-center">
              <p>{text.loading}</p>
            </div>
          ) : (
            <>
              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle>{text.totalVisitors}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">{analyticsData.visitors.total.toLocaleString()}</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle>{text.pageViews}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">{analyticsData.pageViews.thisMonth.toLocaleString()}</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle>{text.whatsappClicks}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">{analyticsData.events.whatsappClicks.toLocaleString()}</div>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Card className="col-span-1">
                    <CardHeader>
                      <CardTitle>{text.trafficSources}</CardTitle>
                    </CardHeader>
                    <CardContent className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={analyticsData.trafficSources}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          >
                            {analyticsData.trafficSources.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={chartColors[index % chartColors.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                          <Legend />
                        </PieChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>

                  <Card className="col-span-1">
                    <CardHeader>
                      <CardTitle>{text.mobileVsDesktop}</CardTitle>
                    </CardHeader>
                    <CardContent className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={analyticsData.devices}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          >
                            {analyticsData.devices.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={chartColors[index % chartColors.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                          <Legend />
                        </PieChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Traffic Tab */}
              <TabsContent value="traffic" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>{text.trafficOverTime}</CardTitle>
                  </CardHeader>
                  <CardContent className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={analyticsData.trafficOverTime}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="value" stroke="#4f46e5" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>{text.visitorLocation}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>{text.country}</TableHead>
                          <TableHead className="text-right">{text.visits}</TableHead>
                          <TableHead className="text-right">{text.percentage}</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {analyticsData.visitorsByCountry.map((item, index) => (
                          <TableRow key={index}>
                            <TableCell>{item.country}</TableCell>
                            <TableCell className="text-right">{item.visits.toLocaleString()}</TableCell>
                            <TableCell className="text-right">
                              {((item.visits / analyticsData.visitors.total) * 100).toFixed(1)}%
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Engagement Tab */}
              <TabsContent value="engagement" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>{text.mostVisitedPages}</CardTitle>
                  </CardHeader>
                  <CardContent className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={analyticsData.topPages}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="page" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="views" fill="#4f46e5" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>{text.topPages}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>{text.page}</TableHead>
                          <TableHead className="text-right">{text.views}</TableHead>
                          <TableHead className="text-right">{text.percentage}</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {analyticsData.topPages.map((page, index) => (
                          <TableRow key={index}>
                            <TableCell>{page.page}</TableCell>
                            <TableCell className="text-right">{page.views.toLocaleString()}</TableCell>
                            <TableCell className="text-right">
                              {((page.views / analyticsData.pageViews.thisMonth) * 100).toFixed(1)}%
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Devices Tab */}
              <TabsContent value="devices" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <Card className="col-span-1">
                    <CardHeader>
                      <CardTitle>{text.mobileVsDesktop}</CardTitle>
                    </CardHeader>
                    <CardContent className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={analyticsData.devices}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          >
                            {analyticsData.devices.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={chartColors[index % chartColors.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                          <Legend />
                        </PieChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>

                  <Card className="col-span-1">
                    <CardHeader>
                      <CardTitle>{text.deviceBreakdown}</CardTitle>
                    </CardHeader>
                    <CardContent className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={analyticsData.devices} layout="vertical">
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis type="number" />
                          <YAxis dataKey="name" type="category" />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="value" fill="#4f46e5" />
                        </BarChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </>
          )}
        </Tabs>

        <Separator />
        
        {/* Instructions */}
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold">{text.howToInteract}</h3>
          <ul className="space-y-2">
            <li>{text.instructionOne}</li>
            <li>{text.instructionTwo}</li>
            <li>{text.instructionThree}</li>
          </ul>
          <div className="mt-6">
            <a 
              href="https://analytics.google.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              {text.visitGA}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
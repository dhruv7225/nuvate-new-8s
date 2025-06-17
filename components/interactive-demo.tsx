"use client"

import { useState } from "react"
import {
  BarChart3,
  Package,
  Users,
  ClipboardCheck,
  Play,
  ChevronRight,
  ChevronLeft,
  X,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Clock,
  Settings,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface DemoStep {
  id: string
  title: string
  description: string
  module: string
  icon: any
}

const demoSteps: DemoStep[] = [
  {
    id: "dashboard",
    title: "Production Dashboard",
    description: "Get a real-time overview of your entire manufacturing operation",
    module: "dashboard",
    icon: BarChart3,
  },
  {
    id: "orders",
    title: "Order Management",
    description: "Track orders from placement to delivery with detailed status updates",
    module: "production",
    icon: ClipboardCheck,
  },
  {
    id: "inventory",
    title: "Inventory Tracking",
    description: "Monitor raw materials, WIP, and finished goods across all locations",
    module: "inventory",
    icon: Package,
  },
  {
    id: "quality",
    title: "Quality Control",
    description: "Implement quality checkpoints and track defects in real-time",
    module: "quality",
    icon: CheckCircle,
  },
  {
    id: "workers",
    title: "Worker Management",
    description: "Monitor productivity and manage workforce allocation efficiently",
    module: "production",
    icon: Users,
  },
]

export default function InteractiveDemo() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null)

  const nextStep = () => {
    if (currentStep < demoSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const goToStep = (step: number) => {
    setCurrentStep(step)
  }

  return (
    <>
      {/* Demo Trigger Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200">Interactive Experience</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Experience StitchIT in Action</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Take a guided tour through StitchIT's powerful features with our interactive demo. See how leading garment
            manufacturers manage their operations with our comprehensive solution.
          </p>
          <Button
            size="lg"
            onClick={() => setIsOpen(true)}
            className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-4"
          >
            <Play className="mr-2 h-5 w-5" />
            Start Interactive Demo
          </Button>
        </div>

        {/* Demo Preview Cards */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12">
          {demoSteps.map((step, index) => (
            <Card
              key={step.id}
              className="cursor-pointer hover:shadow-lg transition-shadow border-2 hover:border-orange-200"
              onClick={() => {
                setCurrentStep(index)
                setIsOpen(true)
              }}
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="h-12 w-12 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 mx-auto">
                  <step.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-slate-900">{step.title}</h3>
                <p className="text-sm text-slate-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Interactive Demo Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-7xl h-[90vh] p-0">
          <DialogHeader className="p-6 pb-0">
            <div className="flex items-center justify-between">
              <div>
                <DialogTitle className="text-2xl font-bold">StitchIT Interactive Demo</DialogTitle>
                <p className="text-slate-600 mt-1">
                  Step {currentStep + 1} of {demoSteps.length}: {demoSteps[currentStep].title}
                </p>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Progress Bar */}
            <div className="mt-4">
              <Progress value={((currentStep + 1) / demoSteps.length) * 100} className="h-2" />
            </div>
          </DialogHeader>

          <div className="flex-1 flex overflow-hidden">
            {/* Demo Navigation Sidebar */}
            <div className="w-80 border-r bg-slate-50 p-6 overflow-y-auto">
              <h3 className="font-semibold text-slate-900 mb-4">Demo Steps</h3>
              <div className="space-y-2">
                {demoSteps.map((step, index) => (
                  <button
                    key={step.id}
                    onClick={() => goToStep(index)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      index === currentStep
                        ? "bg-orange-100 text-orange-700 border border-orange-200"
                        : "hover:bg-white"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`h-8 w-8 rounded-full flex items-center justify-center ${
                          index === currentStep ? "bg-orange-600 text-white" : "bg-slate-200 text-slate-600"
                        }`}
                      >
                        <step.icon className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="font-medium text-sm">{step.title}</div>
                        <div className="text-xs text-slate-500">{step.description}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Demo Content Area */}
            <div className="flex-1 overflow-y-auto">
              {currentStep === 0 && <DashboardDemo />}
              {currentStep === 1 && (
                <OrderManagementDemo selectedOrder={selectedOrder} setSelectedOrder={setSelectedOrder} />
              )}
              {currentStep === 2 && <InventoryDemo />}
              {currentStep === 3 && <QualityControlDemo />}
              {currentStep === 4 && <WorkerManagementDemo />}
            </div>
          </div>

          {/* Demo Navigation Footer */}
          <div className="border-t p-6 flex items-center justify-between">
            <Button variant="outline" onClick={prevStep} disabled={currentStep === 0}>
              <ChevronLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>

            <div className="text-sm text-slate-600">{demoSteps[currentStep].description}</div>

            <Button
              onClick={nextStep}
              disabled={currentStep === demoSteps.length - 1}
              className="bg-orange-600 hover:bg-orange-700"
            >
              Next
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

// Dashboard Demo Component
function DashboardDemo() {
  return (
    <div className="p-6 space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Production Dashboard</h2>
        <p className="text-slate-600">Real-time overview of your manufacturing operations</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600">Active Orders</p>
                <p className="text-2xl font-bold text-slate-900">24</p>
              </div>
              <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                <ClipboardCheck className="h-5 w-5 text-blue-600" />
              </div>
            </div>
            <div className="mt-2 flex items-center text-sm">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-500">+12%</span>
              <span className="text-slate-500 ml-1">from last week</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600">Production Lines</p>
                <p className="text-2xl font-bold text-slate-900">8/10</p>
              </div>
              <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                <Settings className="h-5 w-5 text-green-600" />
              </div>
            </div>
            <div className="mt-2">
              <Progress value={80} className="h-2" />
              <p className="text-xs text-slate-500 mt-1">80% utilization</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600">Quality Score</p>
                <p className="text-2xl font-bold text-slate-900">98.5%</p>
              </div>
              <div className="h-10 w-10 bg-orange-100 rounded-full flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-orange-600" />
              </div>
            </div>
            <div className="mt-2 flex items-center text-sm">
              <span className="text-green-500">+0.3%</span>
              <span className="text-slate-500 ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600">On-Time Delivery</p>
                <p className="text-2xl font-bold text-slate-900">94%</p>
              </div>
              <div className="h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center">
                <Clock className="h-5 w-5 text-purple-600" />
              </div>
            </div>
            <div className="mt-2 flex items-center text-sm">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-500">+2%</span>
              <span className="text-slate-500 ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Production Overview */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Today's Production Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { line: "Line A", product: "Summer Dress", progress: 85, status: "On Track" },
                { line: "Line B", product: "Casual Shirt", progress: 92, status: "Ahead" },
                { line: "Line C", product: "Denim Jeans", progress: 67, status: "Behind" },
                { line: "Line D", product: "T-Shirt", progress: 78, status: "On Track" },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-slate-900">{item.line}</p>
                    <p className="text-sm text-slate-600">{item.product}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{item.progress}%</p>
                    <Badge
                      variant={
                        item.status === "Ahead" ? "default" : item.status === "Behind" ? "destructive" : "secondary"
                      }
                      className="text-xs"
                    >
                      {item.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { type: "warning", message: "Low inventory: Cotton fabric below reorder point", time: "2 min ago" },
                { type: "success", message: "Order #1234 completed and ready for shipping", time: "15 min ago" },
                { type: "info", message: "Quality inspection scheduled for Line C", time: "1 hour ago" },
                { type: "warning", message: "Machine maintenance due for Cutting Unit 2", time: "2 hours ago" },
              ].map((alert, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div
                    className={`h-2 w-2 rounded-full mt-2 ${
                      alert.type === "warning"
                        ? "bg-yellow-500"
                        : alert.type === "success"
                          ? "bg-green-500"
                          : "bg-blue-500"
                    }`}
                  />
                  <div className="flex-1">
                    <p className="text-sm text-slate-900">{alert.message}</p>
                    <p className="text-xs text-slate-500">{alert.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

// Order Management Demo Component
function OrderManagementDemo({
  selectedOrder,
  setSelectedOrder,
}: {
  selectedOrder: string | null
  setSelectedOrder: (id: string | null) => void
}) {
  const orders = [
    {
      id: "ORD-001",
      customer: "Fashion Forward Inc.",
      product: "Summer Collection",
      quantity: 500,
      status: "In Production",
      progress: 75,
      dueDate: "2024-01-15",
    },
    {
      id: "ORD-002",
      customer: "Urban Style Co.",
      product: "Casual Wear",
      quantity: 300,
      status: "Quality Check",
      progress: 90,
      dueDate: "2024-01-18",
    },
    {
      id: "ORD-003",
      customer: "Trendy Threads",
      product: "Formal Shirts",
      quantity: 200,
      status: "Cutting",
      progress: 45,
      dueDate: "2024-01-20",
    },
    {
      id: "ORD-004",
      customer: "Style Hub",
      product: "Denim Collection",
      quantity: 400,
      status: "Completed",
      progress: 100,
      dueDate: "2024-01-12",
    },
  ]

  return (
    <div className="p-6 space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Order Management</h2>
        <p className="text-slate-600">Track and manage orders from placement to delivery</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Orders List */}
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Active Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {orders.map((order) => (
                  <div
                    key={order.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                      selectedOrder === order.id ? "border-orange-200 bg-orange-50" : "hover:bg-slate-50"
                    }`}
                    onClick={() => setSelectedOrder(order.id)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="font-medium text-slate-900">{order.id}</p>
                        <p className="text-sm text-slate-600">{order.customer}</p>
                      </div>
                      <Badge variant={order.status === "Completed" ? "default" : "secondary"} className="text-xs">
                        {order.status}
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">Product:</span>
                        <span className="text-slate-900">{order.product}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">Quantity:</span>
                        <span className="text-slate-900">{order.quantity} units</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">Due Date:</span>
                        <span className="text-slate-900">{order.dueDate}</span>
                      </div>
                      <div className="mt-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-slate-600">Progress</span>
                          <span className="text-slate-900">{order.progress}%</span>
                        </div>
                        <Progress value={order.progress} className="h-2" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Order Details */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Order Details</CardTitle>
            </CardHeader>
            <CardContent>
              {selectedOrder ? (
                <div className="space-y-4">
                  {(() => {
                    const order = orders.find((o) => o.id === selectedOrder)!
                    return (
                      <>
                        <div>
                          <p className="text-sm text-slate-600">Order ID</p>
                          <p className="font-medium">{order.id}</p>
                        </div>
                        <div>
                          <p className="text-sm text-slate-600">Customer</p>
                          <p className="font-medium">{order.customer}</p>
                        </div>
                        <div>
                          <p className="text-sm text-slate-600">Product Line</p>
                          <p className="font-medium">{order.product}</p>
                        </div>
                        <div>
                          <p className="text-sm text-slate-600">Status</p>
                          <Badge className="mt-1">{order.status}</Badge>
                        </div>
                        <div>
                          <p className="text-sm text-slate-600">Production Timeline</p>
                          <div className="mt-2 space-y-2">
                            {[
                              { stage: "Order Received", completed: true },
                              { stage: "Material Sourcing", completed: true },
                              { stage: "Cutting", completed: order.progress >= 30 },
                              { stage: "Sewing", completed: order.progress >= 60 },
                              { stage: "Quality Check", completed: order.progress >= 90 },
                              { stage: "Packaging", completed: order.progress === 100 },
                            ].map((stage, index) => (
                              <div key={index} className="flex items-center space-x-2">
                                <div
                                  className={`h-2 w-2 rounded-full ${
                                    stage.completed ? "bg-green-500" : "bg-slate-300"
                                  }`}
                                />
                                <span className={`text-sm ${stage.completed ? "text-slate-900" : "text-slate-500"}`}>
                                  {stage.stage}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                    )
                  })()}
                </div>
              ) : (
                <p className="text-slate-500 text-center py-8">Select an order to view details</p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

// Inventory Demo Component
function InventoryDemo() {
  return (
    <div className="p-6 space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Inventory Management</h2>
        <p className="text-slate-600">Monitor and manage your raw materials and finished goods</p>
      </div>

      <Tabs defaultValue="materials" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="materials">Raw Materials</TabsTrigger>
          <TabsTrigger value="wip">Work in Progress</TabsTrigger>
          <TabsTrigger value="finished">Finished Goods</TabsTrigger>
        </TabsList>

        <TabsContent value="materials" className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Material Inventory</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { material: "Cotton Fabric", current: 2500, reorder: 1000, unit: "yards", status: "Good" },
                    { material: "Polyester Thread", current: 450, reorder: 500, unit: "spools", status: "Low" },
                    { material: "Buttons (White)", current: 15000, reorder: 5000, unit: "pieces", status: "Good" },
                    { material: "Zippers", current: 800, reorder: 1200, unit: "pieces", status: "Critical" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium text-slate-900">{item.material}</p>
                        <p className="text-sm text-slate-600">
                          {item.current} {item.unit} available
                        </p>
                      </div>
                      <div className="text-right">
                        <Badge
                          variant={
                            item.status === "Critical" ? "destructive" : item.status === "Low" ? "secondary" : "default"
                          }
                        >
                          {item.status}
                        </Badge>
                        {item.current < item.reorder && (
                          <p className="text-xs text-red-600 mt-1">Below reorder point</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Inventory Alerts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { type: "critical", message: "Zippers inventory critically low", action: "Reorder Now" },
                    { type: "warning", message: "Polyester Thread below reorder point", action: "Review" },
                    { type: "info", message: "New shipment of Cotton Fabric arriving tomorrow", action: "Prepare" },
                  ].map((alert, index) => (
                    <div key={index} className="flex items-start justify-between p-3 border rounded-lg">
                      <div className="flex items-start space-x-2">
                        <AlertCircle
                          className={`h-4 w-4 mt-0.5 ${
                            alert.type === "critical"
                              ? "text-red-500"
                              : alert.type === "warning"
                                ? "text-yellow-500"
                                : "text-blue-500"
                          }`}
                        />
                        <p className="text-sm text-slate-900">{alert.message}</p>
                      </div>
                      <Button size="sm" variant="outline" className="text-xs">
                        {alert.action}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="wip" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Work in Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { order: "ORD-001", stage: "Cutting", quantity: 500, completed: 375, line: "Line A" },
                  { order: "ORD-002", stage: "Sewing", quantity: 300, completed: 270, line: "Line B" },
                  { order: "ORD-003", stage: "Quality Check", quantity: 200, completed: 180, line: "Line C" },
                ].map((item, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <p className="font-medium text-slate-900">{item.order}</p>
                        <p className="text-sm text-slate-600">
                          {item.stage} - {item.line}
                        </p>
                      </div>
                      <Badge variant="secondary">{Math.round((item.completed / item.quantity) * 100)}%</Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>
                          Progress: {item.completed} / {item.quantity} units
                        </span>
                      </div>
                      <Progress value={(item.completed / item.quantity) * 100} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="finished" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Finished Goods</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { product: "Summer Dress - Blue", quantity: 150, location: "Warehouse A", status: "Ready to Ship" },
                  {
                    product: "Casual Shirt - White",
                    quantity: 200,
                    location: "Warehouse B",
                    status: "Quality Approved",
                  },
                  {
                    product: "Denim Jeans - Dark Blue",
                    quantity: 100,
                    location: "Warehouse A",
                    status: "Awaiting Pickup",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium text-slate-900">{item.product}</p>
                      <p className="text-sm text-slate-600">
                        {item.quantity} units - {item.location}
                      </p>
                    </div>
                    <Badge variant="default">{item.status}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Quality Control Demo Component
function QualityControlDemo() {
  return (
    <div className="p-6 space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Quality Control</h2>
        <p className="text-slate-600">Monitor quality metrics and manage inspection processes</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Quality Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">98.5%</div>
                <p className="text-slate-600">Overall Quality Score</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-slate-50 rounded-lg">
                  <div className="text-2xl font-bold text-slate-900">15</div>
                  <p className="text-sm text-slate-600">Inspections Today</p>
                </div>
                <div className="text-center p-3 bg-slate-50 rounded-lg">
                  <div className="text-2xl font-bold text-slate-900">2</div>
                  <p className="text-sm text-slate-600">Defects Found</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Inspections</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { order: "ORD-001", inspector: "John Smith", result: "Passed", defects: 0, time: "10:30 AM" },
                { order: "ORD-002", inspector: "Sarah Johnson", result: "Passed", defects: 1, time: "11:15 AM" },
                { order: "ORD-003", inspector: "Mike Wilson", result: "Failed", defects: 5, time: "12:00 PM" },
              ].map((inspection, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium text-slate-900">{inspection.order}</p>
                    <p className="text-sm text-slate-600">
                      {inspection.inspector} - {inspection.time}
                    </p>
                  </div>
                  <div className="text-right">
                    <Badge variant={inspection.result === "Passed" ? "default" : "destructive"} className="mb-1">
                      {inspection.result}
                    </Badge>
                    <p className="text-xs text-slate-500">{inspection.defects} defects</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Defect Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { type: "Stitching Issues", count: 8, percentage: 40 },
              { type: "Color Variation", count: 5, percentage: 25 },
              { type: "Size Discrepancy", count: 4, percentage: 20 },
              { type: "Material Defects", count: 3, percentage: 15 },
            ].map((defect, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <p className="font-medium text-slate-900">{defect.type}</p>
                  <Badge variant="secondary">{defect.count}</Badge>
                </div>
                <Progress value={defect.percentage} className="h-2" />
                <p className="text-xs text-slate-500 mt-1">{defect.percentage}% of total defects</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Worker Management Demo Component
function WorkerManagementDemo() {
  return (
    <div className="p-6 space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Worker Management</h2>
        <p className="text-slate-600">Monitor workforce productivity and manage shift allocations</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Workforce Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center p-3 bg-slate-50 rounded-lg">
                <div className="text-2xl font-bold text-slate-900">85</div>
                <p className="text-sm text-slate-600">Active Workers</p>
              </div>
              <div className="text-center p-3 bg-slate-50 rounded-lg">
                <div className="text-2xl font-bold text-slate-900">92%</div>
                <p className="text-sm text-slate-600">Attendance Rate</p>
              </div>
            </div>
            <div className="space-y-3">
              {[
                { shift: "Morning Shift", workers: 35, capacity: 40, efficiency: 95 },
                { shift: "Afternoon Shift", workers: 30, capacity: 35, efficiency: 88 },
                { shift: "Night Shift", workers: 20, capacity: 25, efficiency: 92 },
              ].map((shift, index) => (
                <div key={index} className="p-3 border rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <p className="font-medium text-slate-900">{shift.shift}</p>
                    <Badge variant="secondary">{shift.efficiency}% efficiency</Badge>
                  </div>
                  <div className="flex justify-between text-sm text-slate-600 mb-1">
                    <span>
                      {shift.workers} / {shift.capacity} workers
                    </span>
                    <span>{Math.round((shift.workers / shift.capacity) * 100)}% capacity</span>
                  </div>
                  <Progress value={(shift.workers / shift.capacity) * 100} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Performers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: "Maria Garcia", role: "Sewing Operator", efficiency: 118, units: 145 },
                { name: "James Chen", role: "Cutting Specialist", efficiency: 112, units: 134 },
                { name: "Anna Kowalski", role: "Quality Inspector", efficiency: 108, units: 98 },
                { name: "David Rodriguez", role: "Finishing Operator", efficiency: 105, units: 156 },
              ].map((worker, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium text-slate-900">{worker.name}</p>
                    <p className="text-sm text-slate-600">{worker.role}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-green-600">{worker.efficiency}%</p>
                    <p className="text-xs text-slate-500">{worker.units} units today</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Production Line Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { line: "Line A", supervisor: "Tom Wilson", workers: 12, target: 200, completed: 185, efficiency: 92 },
              { line: "Line B", supervisor: "Lisa Brown", workers: 10, target: 150, completed: 165, efficiency: 110 },
              { line: "Line C", supervisor: "Mike Davis", workers: 8, target: 120, completed: 95, efficiency: 79 },
              { line: "Line D", supervisor: "Sarah Lee", workers: 15, target: 250, completed: 240, efficiency: 96 },
            ].map((line, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <p className="font-medium text-slate-900">{line.line}</p>
                    <p className="text-sm text-slate-600">
                      {line.supervisor} - {line.workers} workers
                    </p>
                  </div>
                  <Badge
                    variant={line.efficiency >= 100 ? "default" : line.efficiency >= 90 ? "secondary" : "destructive"}
                  >
                    {line.efficiency}%
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>
                      Progress: {line.completed} / {line.target} units
                    </span>
                  </div>
                  <Progress value={(line.completed / line.target) * 100} className="h-2" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

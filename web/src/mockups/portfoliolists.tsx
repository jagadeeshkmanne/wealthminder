import React, { useState } from 'react';
import {
  TrendingUp, Plus, Filter, Search, ArrowUpRight, ArrowDownRight,
  Percent, Settings, Bell, PieChart, RefreshCw, Calendar,
  ChevronDown, AlertCircle, Edit, Eye, FileText, Trash2,
  Check, MoreHorizontal, BarChart, BarChart2, SlidersHorizontal,
  Sliders, Share2
} from 'lucide-react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
  AreaChart, Area, CartesianGrid
} from 'recharts';

// Colors for visual elements
const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899'];

const PortfoliosListUI = () => {
  // State
  const [activeTimeframe, setActiveTimeframe] = useState('1Y');

  // Sample data for portfolios with modified allocation targets
  const portfolios = [
    {
      id: 1,
      name: 'Retirement Portfolio',
      description: 'Long-term retirement savings',
      type: 'Long Term',
      shared: false,
      currentValue: 1250000,
      investedValue: 1040000,
      returns: 12.4,
      xirr: 15.8,
      currentAllocation: 34.2,
      targetAllocation: 30,
      fundCount: 4,
      rebalanceNeeded: true,
      performance: {
        '1Y': [
          { time: 'Jan', value: 100 },
          { time: 'Feb', value: 104 },
          { time: 'Mar', value: 110 },
          { time: 'Apr', value: 112 },
          { time: 'May', value: 115 },
          { time: 'Jun', value: 118 },
          { time: 'Jul', value: 120 },
          { time: 'Aug', value: 118 },
          { time: 'Sep', value: 115 },
          { time: 'Oct', value: 119 },
          { time: 'Nov', value: 122 },
          { time: 'Dec', value: 124 }
        ]
      }
    },
    {
      id: 2,
      name: 'Tax Saving Portfolio',
      description: 'ELSS mutual funds for tax benefits',
      type: 'Short Term',
      shared: false,
      currentValue: 450000,
      investedValue: 390000,
      returns: 15.3,
      xirr: 17.8,
      currentAllocation: 15.2,
      targetAllocation: 16,
      fundCount: 2,
      rebalanceNeeded: false,
      performance: {
        '1Y': [
          { time: 'Jan', value: 100 },
          { time: 'Feb', value: 102 },
          { time: 'Mar', value: 108 },
          { time: 'Apr', value: 110 },
          { time: 'May', value: 114 },
          { time: 'Jun', value: 116 },
          { time: 'Jul', value: 120 },
          { time: 'Aug', value: 124 },
          { time: 'Sep', value: 128 },
          { time: 'Oct', value: 130 },
          { time: 'Nov', value: 134 },
          { time: 'Dec', value: 138 }
        ]
      }
    },
    {
      id: 3,
      name: 'Child Education',
      description: 'Investment for child\'s higher education',
      type: 'Long Term',
      shared: true,
      currentValue: 750000,
      investedValue: 680000,
      returns: 10.2,
      xirr: 11.5,
      currentAllocation: 20.1,
      targetAllocation: 18,
      fundCount: 5,
      rebalanceNeeded: true,
      performance: {
        '1Y': [
          { time: 'Jan', value: 100 },
          { time: 'Feb', value: 101 },
          { time: 'Mar', value: 104 },
          { time: 'Apr', value: 103 },
          { time: 'May', value: 102 },
          { time: 'Jun', value: 105 },
          { time: 'Jul', value: 107 },
          { time: 'Aug', value: 110 },
          { time: 'Sep', value: 108 },
          { time: 'Oct', value: 110 },
          { time: 'Nov', value: 111 },
          { time: 'Dec', value: 115 }
        ]
      }
    },
    {
      id: 4,
      name: 'Emergency Fund',
      description: 'Liquid funds for emergencies',
      type: 'Short Term',
      shared: false,
      currentValue: 320000,
      investedValue: 300000,
      returns: 6.7,
      xirr: 6.8,
      currentAllocation: 10.5,
      targetAllocation: 11,
      fundCount: 2,
      rebalanceNeeded: false,
      performance: {
        '1Y': [
          { time: 'Jan', value: 100 },
          { time: 'Feb', value: 100.5 },
          { time: 'Mar', value: 101 },
          { time: 'Apr', value: 101.5 },
          { time: 'May', value: 102 },
          { time: 'Jun', value: 102.5 },
          { time: 'Jul', value: 103 },
          { time: 'Aug', value: 103.5 },
          { time: 'Sep', value: 104 },
          { time: 'Oct', value: 104.5 },
          { time: 'Nov', value: 105 },
          { time: 'Dec', value: 106.7 }
        ]
      }
    },
    {
      id: 5,
      name: 'Health Goals',
      description: 'Medical expenses fund',
      type: 'Medium Term',
      shared: true,
      currentValue: 180000,
      investedValue: 165000,
      returns: 9.1,
      xirr: 9.8,
      currentAllocation: 6.0,
      targetAllocation: 5,
      fundCount: 3,
      rebalanceNeeded: false,
      performance: {
        '1Y': [
          { time: 'Jan', value: 100 },
          { time: 'Feb', value: 102 },
          { time: 'Mar', value: 103 },
          { time: 'Apr', value: 104 },
          { time: 'May', value: 105 },
          { time: 'Jun', value: 106 },
          { time: 'Jul', value: 107 },
          { time: 'Aug', value: 108 },
          { time: 'Sep', value: 109 },
          { time: 'Oct', value: 110 },
          { time: 'Nov', value: 111 },
          { time: 'Dec', value: 112 }
        ]
      }
    },
    {
      id: 6,
      name: 'Home Down Payment',
      description: 'Saving for home purchase',
      type: 'Medium Term',
      shared: false,
      currentValue: 550000,
      investedValue: 480000,
      returns: 14.6,
      xirr: 16.2,
      currentAllocation: 14.0,
      targetAllocation: 15,
      fundCount: 4,
      rebalanceNeeded: true,
      performance: {
        '1Y': [
          { time: 'Jan', value: 100 },
          { time: 'Feb', value: 103 },
          { time: 'Mar', value: 107 },
          { time: 'Apr', value: 110 },
          { time: 'May', value: 112 },
          { time: 'Jun', value: 114 },
          { time: 'Jul', value: 117 },
          { time: 'Aug', value: 119 },
          { time: 'Sep', value: 121 },
          { time: 'Oct', value: 123 },
          { time: 'Nov', value: 126 },
          { time: 'Dec', value: 130 }
        ]
      }
    }
  ];

  // Filter portfolios
  const filteredPortfolios = portfolios;

  // Total portfolio value
  const totalPortfolioValue = portfolios.reduce((sum, portfolio) => sum + portfolio.currentValue, 0);
  const totalInvestedValue = portfolios.reduce((sum, portfolio) => sum + portfolio.investedValue, 0);
  const totalReturns = ((totalPortfolioValue - totalInvestedValue) / totalInvestedValue) * 100;

  // Toggle sort
  const toggleSort = (field) => {
    // Dummy function - sorting removed per request
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="bg-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="bg-blue-600 text-white p-1.5 rounded">
                  <TrendingUp size={20} />
                </div>
                <span className="ml-2 text-xl font-bold text-white">WealthMinder</span>
              </div>

              <div className="hidden md:ml-10 md:flex md:items-center md:space-x-4">
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700">Dashboard</a>
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-700">Portfolios</a>
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700">Funds</a>
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700">Transactions</a>
              </div>
            </div>

            <div className="flex items-center">
              <button className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-700">
                <Bell size={20} />
              </button>
              <button className="ml-3 p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-700">
                <Settings size={20} />
              </button>
              <div className="ml-3 relative">
                <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium">
                  J
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page title and actions */}
        <div className="mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <h1 className="text-2xl font-bold text-white mb-4 md:mb-0">My Portfolios</h1>

            <div className="flex flex-col sm:flex-row gap-3">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 transition duration-150 flex items-center justify-center">
                <Plus size={16} className="mr-2" />
                Create Portfolio
              </button>
            </div>
          </div>
        </div>

        {/* Portfolio Summary Card with Chart */}
        <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-6 border border-gray-700">
          <div className="p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-white flex items-center">
                <BarChart2 size={20} className="mr-2 text-blue-400" />
                Portfolio Summary
              </h2>
            </div>

            {/* Summary Stats Grid */}
            <div className="grid grid-cols-1 gap-4">
              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-3">
                {/* Current Value */}
                <div className="bg-gray-750 p-3 rounded-lg border border-gray-700">
                  <div className="text-xs text-gray-400">Total Value</div>
                  <div className="text-md font-bold text-white mt-1">₹{totalPortfolioValue.toLocaleString()}</div>
                </div>

                {/* Invested Value */}
                <div className="bg-gray-750 p-3 rounded-lg border border-gray-700">
                  <div className="text-xs text-gray-400">Total Invested</div>
                  <div className="text-md font-bold text-white mt-1">₹{totalInvestedValue.toLocaleString()}</div>
                </div>

                {/* Overall Returns */}
                <div className="bg-gray-750 p-3 rounded-lg border border-gray-700">
                  <div className="text-xs text-gray-400">Overall Returns</div>
                  <div className="flex items-center text-md font-bold text-green-400 mt-1">
                    +{totalReturns.toFixed(2)}%
                    <ArrowUpRight className="ml-1 h-3 w-3" />
                  </div>
                </div>
              </div>

              {/* Performance Chart */}
              <div className="bg-gray-700 p-4 rounded-lg">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 space-y-2 sm:space-y-0">
                  <h3 className="text-sm font-medium text-white flex items-center">
                    <TrendingUp className="h-4 w-4 mr-2 text-blue-400" />
                    Overall Performance
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    {['1D', '1W', '1M', '3M', '6M', '1Y'].map((period) => (
                      <button
                        key={period}
                        className={`px-2 py-1 text-xs font-medium rounded-md ${
                          activeTimeframe === period
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-600 text-gray-300 hover:bg-gray-500'
                        }`}
                        onClick={() => setActiveTimeframe(period)}
                      >
                        {period}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={portfolios[0].performance['1Y']}
                      margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
                    >
                      <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#374151" />
                      <XAxis
                        dataKey="time"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#9CA3AF', fontSize: 10 }}
                      />
                      <YAxis
                        domain={['dataMin - 1', 'dataMax + 1']}
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#9CA3AF', fontSize: 10 }}
                        tickFormatter={(value) => `${(value - 100).toFixed(0)}%`}
                      />
                      <Tooltip
                        formatter={(value) => [`${(value - 100).toFixed(2)}%`, 'Return']}
                        contentStyle={{
                          backgroundColor: '#1F2937',
                          borderColor: '#374151',
                          borderRadius: '0.375rem'
                        }}
                        labelFormatter={(label) => `Time: ${label}`}
                      />
                      <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#3B82F6"
                        fillOpacity={1}
                        fill="url(#colorValue)"
                        strokeWidth={2}
                        dot={false}
                        activeDot={{ r: 6, fill: '#3B82F6' }}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                <div className="mt-2 flex justify-between items-center text-sm">
                  <span className="font-medium text-white">{activeTimeframe} Performance</span>
                  <span className="font-medium text-green-400">+{totalReturns.toFixed(2)}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Allocation Management */}
        <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-6 border border-gray-700">
          <div className="p-4 md:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
              <h2 className="text-lg font-medium text-white flex items-center">
                <BarChart className="h-5 w-5 mr-2 text-blue-400" />
                Portfolio Allocations
              </h2>

              <div className="flex items-center space-x-2">
                <button className="px-3 py-1.5 rounded-md text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 flex items-center">
                  <RefreshCw className="mr-1.5 h-3.5 w-3.5" />
                  Rebalance
                </button>
                <button className="px-3 py-1.5 rounded-md text-xs font-medium text-white bg-gray-700 hover:bg-gray-600 flex items-center">
                  <Sliders className="mr-1.5 h-3.5 w-3.5" />
                  Set Target Allocations
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-700 rounded-lg">
                <thead className="bg-gray-700">
                  <tr>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider w-1/3">Portfolio</th>
                    <th className="px-3 py-3 text-center text-xs font-medium text-gray-400 uppercase tracking-wider w-1/4">Current / Target</th>
                    <th className="px-3 py-3 text-center text-xs font-medium text-gray-400 uppercase tracking-wider w-1/6">Diff</th>
                    <th className="px-3 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider w-1/4">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-gray-800 divide-y divide-gray-700">
                  {portfolios.map((portfolio, index) => {
                    const diff = Math.round(portfolio.currentAllocation - portfolio.targetAllocation);
                    const amountDiff = Math.round((diff / 100) * totalPortfolioValue);
                    const needsRebalance = Math.abs(diff) > 1;

                    return (
                      <tr key={portfolio.id} className="hover:bg-gray-750">
                        <td className="px-3 py-3 whitespace-nowrap">
                          <div className="flex items-center">
                            <div
                              className="w-3 h-3 rounded-full mr-2"
                              style={{ backgroundColor: COLORS[index % COLORS.length] }}
                            ></div>
                            <span className="text-sm text-white truncate max-w-[200px]">{portfolio.name}</span>
                          </div>
                        </td>
                        <td className="px-3 py-3 whitespace-nowrap text-center">
                          <div className="text-sm text-white">{portfolio.currentAllocation}% / {portfolio.targetAllocation}%</div>
                        </td>
                        <td className="px-3 py-3 whitespace-nowrap text-center">
                          {diff !== 0 && (
                            <div className={`text-sm font-medium ${diff > 0 ? 'text-yellow-400' : 'text-blue-400'} flex items-center justify-center`}>
                              {diff > 0 ? (
                                <><ArrowUpRight className="mr-1 h-3 w-3" />+{diff}%</>
                              ) : (
                                <><ArrowDownRight className="mr-1 h-3 w-3" />{diff}%</>
                              )}
                            </div>
                          )}
                          {diff === 0 && (
                            <div className="text-sm text-green-400 flex items-center justify-center">
                              <Check className="mr-1 h-3 w-3" />Balanced
                            </div>
                          )}
                        </td>
                        <td className="px-3 py-3 whitespace-nowrap text-right">
                          {needsRebalance ? (
                            diff > 0 ? (
                              <div className="flex items-center justify-end">
                                <div className="px-2 py-1 text-xs font-medium bg-yellow-900 text-yellow-300 rounded-md flex items-center">
                                  <ArrowDownRight className="mr-1 h-3 w-3" />
                                  Reduce ₹{Math.abs(amountDiff).toLocaleString()}
                                </div>
                              </div>
                            ) : (
                              <div className="flex items-center justify-end">
                                <div className="px-2 py-1 text-xs font-medium bg-blue-900 text-blue-300 rounded-md flex items-center">
                                  <ArrowUpRight className="mr-1 h-3 w-3" />
                                  Add ₹{Math.abs(amountDiff).toLocaleString()}
                                </div>
                              </div>
                            )
                          ) : (
                            <div className="flex items-center justify-end">
                              <div className="px-2 py-1 text-xs font-medium bg-green-900 text-green-300 rounded-md flex items-center">
                                <Check className="mr-1 h-3 w-3" />
                                Optimized
                              </div>
                            </div>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Portfolio cards grid - Two column layout like funds */}
        <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-6">
          <div className="p-4 md:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
              <h2 className="text-lg font-medium text-white flex items-center">
                <PieChart className="h-5 w-5 mr-2 text-blue-400" />
                My Portfolios
              </h2>

              <button
                className="px-3 py-1.5 rounded-md text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 flex items-center self-end sm:self-auto"
              >
                <Plus className="mr-1.5 h-3.5 w-3.5" />
                Create Portfolio
              </button>
            </div>

            {/* Two-column Card Layout */}
            <div className="flex flex-wrap -mx-2">
              {filteredPortfolios.map((portfolio, index) => (
                <div key={portfolio.id} className="w-full sm:w-1/2 p-2">
                  <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition duration-300 h-full">
                    {/* Portfolio Header */}
                    <div className="p-3 border-b border-gray-700">
                      <div className="flex items-center">
                        <div
                          className="w-3 h-3 rounded-full mr-2 flex-shrink-0"
                          style={{ backgroundColor: COLORS[index % COLORS.length] }}
                        />
                        <div className="flex-grow">
                          <h3 className="text-sm font-medium text-white truncate">{portfolio.name}</h3>
                          <p className="text-xs text-gray-400 truncate mt-0.5">{portfolio.description}</p>
                        </div>
                        <div className="flex-shrink-0">
                          <button className="p-1 text-gray-400 hover:text-white rounded hover:bg-gray-700">
                            <MoreHorizontal size={14} />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Values section */}
                    <div className="p-3">
                      <div className="flex mb-2">
                        <div className="flex-1 border-r border-gray-700 pr-2">
                          <div className="text-xs text-gray-400">Current Value</div>
                          <div className="text-sm font-medium text-white">₹{portfolio.currentValue.toLocaleString()}</div>
                        </div>
                        <div className="flex-1 pl-2">
                          <div className="text-xs text-gray-400">Invested Value</div>
                          <div className="text-sm text-gray-300">₹{portfolio.investedValue.toLocaleString()}</div>
                        </div>
                      </div>

                      <div className="flex mb-2">
                        <div className="flex-1 border-r border-gray-700 pr-2">
                          <div className="text-xs text-gray-400">Returns</div>
                          <div className="text-sm font-medium text-green-400">+{portfolio.returns}%</div>
                        </div>
                        <div className="flex-1 pl-2">
                          <div className="text-xs text-gray-400">XIRR</div>
                          <div className="text-sm font-medium text-green-400">+{portfolio.xirr}%</div>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="flex-1 border-r border-gray-700 pr-2">
                          <div className="text-xs text-blue-400">Current</div>
                          <div className="text-sm text-white">{portfolio.currentAllocation}%</div>
                        </div>
                        <div className="flex-1 pl-2">
                          <div className="text-xs text-yellow-400">Target</div>
                          <div className="text-sm text-white">{portfolio.targetAllocation}%</div>
                        </div>
                      </div>

                      {/* Type and Actions */}
                      <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-700">
                        <div className="flex space-x-1">
                          {portfolio.shared && (
                            <div className="text-xs text-blue-400 px-2 py-0.5 bg-blue-900/40 rounded flex items-center">
                              <Share2 className="mr-1 h-3 w-3" />
                              Shared
                            </div>
                          )}
                          <div className="text-xs text-gray-400 px-2 py-0.5 bg-gray-750 rounded">
                            {portfolio.type}
                          </div>
                          <div className="text-xs text-gray-400 px-2 py-0.5 bg-gray-750 rounded flex items-center">
                            <BarChart className="mr-1 h-3 w-3" />
                            {portfolio.fundCount} Funds
                          </div>
                        </div>

                        <div className="flex space-x-2">
                          {/* Edit button */}
                          <button className="p-1.5 text-gray-400 hover:text-white rounded hover:bg-gray-700">
                            <Edit size={14} />
                          </button>

                          {/* View details button */}
                          <button className="p-1.5 text-gray-400 hover:text-white rounded hover:bg-gray-700">
                            <Eye size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Empty state - shows when no portfolios are available */}
        {filteredPortfolios.length === 0 && (
          <div className="bg-gray-800 rounded-xl shadow-lg p-8 text-center border border-gray-700">
            <div className="bg-gray-750 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <FileText size={24} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-medium text-white mb-2">No portfolios found</h3>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              {searchTerm ?
                `No portfolios match your search for "${searchTerm}". Try a different search term or clear filters.` :
                "You don't have any portfolios yet. Create your first portfolio to start tracking your investments."}
            </p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 transition duration-150 flex items-center justify-center mx-auto">
              <Plus size={16} className="mr-2" />
              Create Portfolio
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default PortfoliosListUI;
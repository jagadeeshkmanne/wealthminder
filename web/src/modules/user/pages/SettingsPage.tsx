// src/modules/user/pages/SettingsPage.tsx
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, Heading, Text, Button, Tabs, Tab, TabPanel, FormSelect, FormGroup } from '@/shared/components';
import { useTheme } from '@/core/hooks/useTheme';
import { useAuth } from '@/core/hooks/useAuth';

const SettingsPage: React.FC = () => {
  const { theme, toggleTheme, setTheme } = useTheme();
  const { currentUser } = useAuth();

  const [selectedTab, setSelectedTab] = useState(0);
  const [language, setLanguage] = useState('en');
  const [currency, setCurrency] = useState('INR');
  const [timezone, setTimezone] = useState('Asia/Kolkata');

  // Notification settings
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [rebalanceAlerts, setRebalanceAlerts] = useState(true);
  const [goalMilestones, setGoalMilestones] = useState(true);
  const [portfolioSharing, setPortfolioSharing] = useState(true);
  const [performanceReports, setPerformanceReports] = useState(true);

  // Save settings
  const handleSaveSettings = () => {
    // TODO: Implement saving settings
    console.log('Saving settings');
  };

  return (
    <>
      <Helmet>
        <title>Settings | WealthMinder</title>
        <meta name="description" content="Manage your application settings" />
      </Helmet>

      <div className="space-y-6">
        <Heading level={3}>Settings</Heading>

        <Tabs
          defaultIndex={selectedTab}
          onChange={setSelectedTab}
          variant="underline"
        >
          <Tab label="Preferences" />
          <Tab label="Notifications" />
          <Tab label="Privacy" />

          <TabPanel>
            <Card>
              <div className="p-6">
                <Heading level={4}>Appearance</Heading>
                <div className="mt-4 space-y-4">
                  <div>
                    <Text weight="medium">Theme</Text>
                    <div className="mt-2 flex flex-wrap gap-3">
                      <Button
                        variant={theme === 'light' ? 'primary' : 'outline'}
                        size="sm"
                        onClick={() => setTheme('light')}
                      >
                        Light
                      </Button>
                      <Button
                        variant={theme === 'dark' ? 'primary' : 'outline'}
                        size="sm"
                        onClick={() => setTheme('dark')}
                      >
                        Dark
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 mt-6 pt-6">
                  <Heading level={4}>Localization</Heading>
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormGroup>
                      <FormSelect
                        label="Language"
                        id="language"
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        options={[
                          { value: 'en', label: 'English' },
                          { value: 'hi', label: 'Hindi' }
                        ]}
                      />
                    </FormGroup>

                    <FormGroup>
                      <FormSelect
                        label="Currency"
                        id="currency"
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                        options={[
                          { value: 'INR', label: 'Indian Rupee (₹)' },
                          { value: 'USD', label: 'US Dollar ($)' }
                        ]}
                      />
                    </FormGroup>

                    <FormGroup>
                      <FormSelect
                        label="Timezone"
                        id="timezone"
                        value={timezone}
                        onChange={(e) => setTimezone(e.target.value)}
                        options={[
                          { value: 'Asia/Kolkata', label: 'India (GMT+5:30)' },
                          { value: 'America/New_York', label: 'New York (GMT-4)' },
                          { value: 'Europe/London', label: 'London (GMT+1)' },
                          { value: 'Asia/Singapore', label: 'Singapore (GMT+8)' }
                        ]}
                      />
                    </FormGroup>
                  </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 mt-6 pt-6">
                  <div className="flex justify-end">
                    <Button variant="primary" onClick={handleSaveSettings}>
                      Save Preferences
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </TabPanel>

          <TabPanel>
            <Card>
              <div className="p-6">
                <Heading level={4}>Notification Settings</Heading>
                <div className="mt-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Text weight="medium">Email Notifications</Text>
                      <Text muted size="sm">Receive notifications via email</Text>
                    </div>
                    <div className="relative inline-block w-12 align-middle select-none">
                      <input
                        type="checkbox"
                        name="emailNotifications"
                        id="emailNotifications"
                        checked={emailNotifications}
                        onChange={() => setEmailNotifications(!emailNotifications)}
                        className="sr-only"
                      />
                      <div className="block h-6 bg-gray-300 dark:bg-gray-600 rounded-full w-12"></div>
                      <div
                        className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white transition-transform ${
                          emailNotifications ? 'transform translate-x-6' : ''
                        }`}
                      ></div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <Heading level={5}>Notification Types</Heading>
                    <div className="mt-3 space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <Text weight="medium">Rebalance Alerts</Text>
                          <Text muted size="sm">Get notified when your portfolio needs rebalancing</Text>
                        </div>
                        <div className="relative inline-block w-12 align-middle select-none">
                          <input
                            type="checkbox"
                            name="rebalanceAlerts"
                            id="rebalanceAlerts"
                            checked={rebalanceAlerts}
                            onChange={() => setRebalanceAlerts(!rebalanceAlerts)}
                            className="sr-only"
                          />
                          <div className="block h-6 bg-gray-300 dark:bg-gray-600 rounded-full w-12"></div>
                          <div
                            className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white transition-transform ${
                              rebalanceAlerts ? 'transform translate-x-6' : ''
                            }`}
                          ></div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <Text weight="medium">Goal Milestones</Text>
                          <Text muted size="sm">Get notified when you reach a goal milestone</Text>
                        </div>
                        <div className="relative inline-block w-12 align-middle select-none">
                          <input
                            type="checkbox"
                            name="goalMilestones"
                            id="goalMilestones"
                            checked={goalMilestones}
                            onChange={() => setGoalMilestones(!goalMilestones)}
                            className="sr-only"
                          />
                          <div className="block h-6 bg-gray-300 dark:bg-gray-600 rounded-full w-12"></div>
                          <div
                            className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white transition-transform ${
                              goalMilestones ? 'transform translate-x-6' : ''
                            }`}
                          ></div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <Text weight="medium">Portfolio Sharing</Text>
                          <Text muted size="sm">Get notified when someone shares a portfolio with you</Text>
                        </div>
                        <div className="relative inline-block w-12 align-middle select-none">
                          <input
                            type="checkbox"
                            name="portfolioSharing"
                            id="portfolioSharing"
                            checked={portfolioSharing}
                            onChange={() => setPortfolioSharing(!portfolioSharing)}
                            className="sr-only"
                          />
                          <div className="block h-6 bg-gray-300 dark:bg-gray-600 rounded-full w-12"></div>
                          <div
                            className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white transition-transform ${
                              portfolioSharing ? 'transform translate-x-6' : ''
                            }`}
                          ></div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <Text weight="medium">Performance Reports</Text>
                          <Text muted size="sm">Receive periodic reports on your portfolio performance</Text>
                        </div>
                        <div className="relative inline-block w-12 align-middle select-none">
                          <input
                            type="checkbox"
                            name="performanceReports"
                            id="performanceReports"
                            checked={performanceReports}
                            onChange={() => setPerformanceReports(!performanceReports)}
                            className="sr-only"
                          />
                          <div className="block h-6 bg-gray-300 dark:bg-gray-600 rounded-full w-12"></div>
                          <div
                            className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white transition-transform ${
                              performanceReports ? 'transform translate-x-6' : ''
                            }`}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700 mt-6 pt-6">
                    <div className="flex justify-end">
                      <Button variant="primary" onClick={handleSaveSettings}>
                        Save Notification Settings
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabPanel>

          <TabPanel>
            <Card>
              <div className="p-6">
                <Heading level={4}>Privacy Settings</Heading>
                <div className="mt-4 space-y-4">
                  <div>
                    <Text weight="medium">Data Sharing</Text>
                    <Text muted size="sm">Control what data is used within the application</Text>
                    <div className="mt-3">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="h-4 w-4 text-primary focus:ring-primary rounded border-gray-300 dark:border-gray-600"
                          defaultChecked
                        />
                        <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                          Allow usage data collection to improve the application
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
                    <Text weight="medium">Account Data</Text>
                    <div className="mt-4 space-y-4">
                      <div>
                        <Button variant="outline" size="sm">Download Your Data</Button>
                        <Text muted size="sm" className="mt-1">
                          Download a copy of your personal data including portfolios and settings
                        </Text>
                      </div>

                      <div>
                        <Button variant="danger" size="sm">Delete Account</Button>
                        <Text muted size="sm" className="mt-1">
                          Permanently delete your account and all associated data
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default SettingsPage;
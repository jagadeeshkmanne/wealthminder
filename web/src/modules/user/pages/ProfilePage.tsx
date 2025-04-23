// src/modules/user/pages/ProfilePage.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, Heading, Text, Button } from '@/shared/components';
import { useAuth } from '@/core/hooks/useAuth';

const ProfilePage: React.FC = () => {
  const { currentUser } = useAuth();

  return (
    <>
      <Helmet>
        <title>Profile | WealthMinder</title>
        <meta name="description" content="Manage your profile settings" />
      </Helmet>

      <div className="space-y-6">
        <Heading level={3}>Your Profile</Heading>

        <Card>
          <div className="p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
              {/* Profile picture */}
              <div>
                {currentUser?.photoURL ? (
                  <img
                    src={currentUser.photoURL}
                    alt={currentUser.displayName || 'Profile'}
                    className="rounded-full h-24 w-24 object-cover"
                  />
                ) : (
                  <div className="rounded-full h-24 w-24 bg-primary flex items-center justify-center text-white text-4xl">
                    {currentUser?.displayName ? currentUser.displayName[0] : 'U'}
                  </div>
                )}
              </div>

              {/* Profile details */}
              <div className="flex-1">
                <Heading level={4}>{currentUser?.displayName || 'User'}</Heading>
                <Text muted>{currentUser?.email}</Text>

                <div className="mt-4 flex flex-wrap gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                  >
                    Edit Profile
                  </Button>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 mt-6 pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Heading level={5}>Account Information</Heading>
                  <div className="mt-3 space-y-3">
                    <div>
                      <Text size="sm" muted>Email</Text>
                      <Text>{currentUser?.email}</Text>
                    </div>
                    <div>
                      <Text size="sm" muted>Email Verified</Text>
                      <Text>
                        {currentUser?.emailVerified ? (
                          <span className="text-green-500">Verified</span>
                        ) : (
                          <span className="text-red-500">Not Verified</span>
                        )}
                      </Text>
                    </div>
                    <div>
                      <Text size="sm" muted>Account Created</Text>
                      <Text>
                        {currentUser?.metadata?.creationTime ?
                          new Date(currentUser.metadata.creationTime).toLocaleDateString() :
                          'Unknown'}
                      </Text>
                    </div>
                  </div>
                </div>

                <div>
                  <Heading level={5}>Contact Information</Heading>
                  <div className="mt-3 space-y-3">
                    <div>
                      <Text size="sm" muted>Phone Number</Text>
                      <Text>{currentUser?.phoneNumber || 'Not provided'}</Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card title="Security Settings">
          <div className="p-6">
            <div className="space-y-4">
              <div>
                <Text size="lg" weight="medium">Password</Text>
                <Text muted>Change your password or reset it if you've forgotten it.</Text>
                <div className="mt-3">
                  <Button variant="outline" size="sm">
                    Change Password
                  </Button>
                </div>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
                <Text size="lg" weight="medium">Two-Factor Authentication</Text>
                <Text muted>Add an extra layer of security to your account.</Text>
                <div className="mt-3">
                  <Button variant="outline" size="sm">
                    Enable 2FA
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default ProfilePage;
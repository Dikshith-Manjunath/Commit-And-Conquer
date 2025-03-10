import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '../app/Navbar';

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col items-center justify-center p-4">
        <div className="max-w-4xl w-full">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
            Welcome to Our Platform
          </h1>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Admin Section */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">Admin Portal</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col space-y-3">
                  <Link href="/admin/login" className="w-full">
                    <Button variant="outline" className="w-full">
                      Admin Login
                    </Button>
                  </Link>
                  <Link href="/admin/register" className="w-full">
                    <Button variant="outline" className="w-full">
                      Admin Register
                    </Button>
                  </Link>
                  <Link href="/admin/dashboard" className="w-full">
                    <Button variant="outline" className="w-full">
                      Admin Dashboard
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* User Section */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-green-600">User Portal</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col space-y-3">
                  <Link href="/user/login" className="w-full">
                    <Button variant="outline" className="w-full">
                      User Login
                    </Button>
                  </Link>
                  <Link href="/user/register" className="w-full">
                    <Button variant="outline" className="w-full">
                      User Register
                    </Button>
                  </Link>
                  <Link href="/user/dashboard" className="w-full">
                    <Button variant="outline" className="w-full">
                      User Dashboard
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center text-gray-500">
            © 2024 Your Company Name. All rights reserved.
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
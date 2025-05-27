
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Briefcase, GraduationCap, ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <GraduationCap className="h-20 w-20 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Connect with Your
            <span className="text-blue-600 block">University Alumni</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join our thriving community of graduates. Network with fellow alumni, 
            discover career opportunities, and stay connected with your university family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="w-full sm:w-auto">
                Join Alumni Network
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Join Our Alumni Network?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Users className="h-12 w-12 text-blue-600" />
                </div>
                <CardTitle>Alumni Directory</CardTitle>
                <CardDescription>
                  Connect with thousands of graduates from your university
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Search and connect with alumni by graduation year, major, 
                  location, or industry. Build meaningful professional relationships.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Briefcase className="h-12 w-12 text-blue-600" />
                </div>
                <CardTitle>Job Opportunities</CardTitle>
                <CardDescription>
                  Discover career opportunities posted by fellow alumni
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Access exclusive job postings from alumni-owned companies 
                  and organizations. Get referrals and career advice.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <GraduationCap className="h-12 w-12 text-blue-600" />
                </div>
                <CardTitle>Professional Growth</CardTitle>
                <CardDescription>
                  Enhance your career with alumni networks and mentorship
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Find mentors, share experiences, and grow your professional 
                  network within our supportive alumni community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Reconnect?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of alumni who are already networking and growing their careers.
          </p>
          <Link to="/register">
            <Button size="lg" variant="secondary">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;


import React, { useState } from 'react';
import Header from '../components/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, MapPin, Building, Calendar, Mail, User } from 'lucide-react';

interface Alumni {
  id: string;
  name: string;
  email: string;
  graduationYear: string;
  major: string;
  company: string;
  position: string;
  location: string;
  bio: string;
}

const mockAlumni: Alumni[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    graduationYear: '2018',
    major: 'Computer Science',
    company: 'Google',
    position: 'Senior Software Engineer',
    location: 'San Francisco, CA',
    bio: 'Passionate about AI and machine learning. Love mentoring new graduates.'
  },
  {
    id: '2',
    name: 'Mike Chen',
    email: 'mike.chen@email.com',
    graduationYear: '2019',
    major: 'Business Administration',
    company: 'McKinsey & Company',
    position: 'Management Consultant',
    location: 'New York, NY',
    bio: 'Strategy consultant helping companies transform their business models.'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    email: 'emily.rodriguez@email.com',
    graduationYear: '2020',
    major: 'Marketing',
    company: 'Meta',
    position: 'Product Marketing Manager',
    location: 'Austin, TX',
    bio: 'Product marketing professional with a focus on social media platforms.'
  },
  {
    id: '4',
    name: 'David Kim',
    email: 'david.kim@email.com',
    graduationYear: '2017',
    major: 'Engineering',
    company: 'Tesla',
    position: 'Mechanical Engineer',
    location: 'Palo Alto, CA',
    bio: 'Working on sustainable transportation solutions. Always open to networking.'
  },
  {
    id: '5',
    name: 'Lisa Wang',
    email: 'lisa.wang@email.com',
    graduationYear: '2021',
    major: 'Data Science',
    company: 'Netflix',
    position: 'Data Scientist',
    location: 'Los Angeles, CA',
    bio: 'Using data to improve user experience and content recommendations.'
  },
  {
    id: '6',
    name: 'Alex Thompson',
    email: 'alex.thompson@email.com',
    graduationYear: '2016',
    major: 'Finance',
    company: 'Goldman Sachs',
    position: 'Investment Banker',
    location: 'Chicago, IL',
    bio: 'Investment banking professional specializing in tech sector deals.'
  }
];

const AlumniDirectory: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredAlumni, setFilteredAlumni] = useState(mockAlumni);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    const filtered = mockAlumni.filter(alumni =>
      alumni.name.toLowerCase().includes(value.toLowerCase()) ||
      alumni.company.toLowerCase().includes(value.toLowerCase()) ||
      alumni.major.toLowerCase().includes(value.toLowerCase()) ||
      alumni.graduationYear.includes(value)
    );
    setFilteredAlumni(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Alumni Directory</h1>
            <p className="text-gray-600 mb-6">
              Connect with {mockAlumni.length} fellow graduates from our university
            </p>
            
            {/* Search */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search by name, company, major, or year..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Alumni Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAlumni.map((alumni) => (
              <Card key={alumni.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{alumni.name}</CardTitle>
                      <CardDescription className="flex items-center mt-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        Class of {alumni.graduationYear}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary">{alumni.major}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <Building className="h-4 w-4 mr-2" />
                    <span className="font-medium">{alumni.position}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <User className="h-4 w-4 mr-2" />
                    <span>{alumni.company}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{alumni.location}</span>
                  </div>
                  <p className="text-sm text-gray-700 line-clamp-3">
                    {alumni.bio}
                  </p>
                  <div className="pt-3">
                    <Button variant="outline" size="sm" className="w-full">
                      <Mail className="h-4 w-4 mr-2" />
                      Connect
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredAlumni.length === 0 && (
            <div className="text-center py-12">
              <User className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No alumni found</h3>
              <p className="text-gray-600">
                Try adjusting your search terms to find more alumni.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AlumniDirectory;

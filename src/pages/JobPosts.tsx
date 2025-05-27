
import React, { useState } from 'react';
import Header from '../components/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, MapPin, Building, Clock, ExternalLink, DollarSign } from 'lucide-react';

interface JobPost {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  requirements: string[];
  postedBy: string;
  postedDate: string;
  applicationUrl: string;
}

const mockJobs: JobPost[] = [
  {
    id: '1',
    title: 'Senior Software Engineer',
    company: 'Google',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$150,000 - $200,000',
    description: 'Join our team to build the next generation of cloud infrastructure. You will work on large-scale distributed systems that power millions of users worldwide.',
    requirements: ['5+ years of experience', 'Strong in Python/Java', 'Experience with distributed systems', 'CS degree preferred'],
    postedBy: 'Sarah Johnson',
    postedDate: '2024-01-15',
    applicationUrl: 'https://careers.google.com'
  },
  {
    id: '2',
    title: 'Product Marketing Manager',
    company: 'Meta',
    location: 'Austin, TX',
    type: 'Full-time',
    salary: '$120,000 - $160,000',
    description: 'Lead product marketing initiatives for our social media platforms. Drive go-to-market strategies and work closely with cross-functional teams.',
    requirements: ['3+ years product marketing', 'Experience with social media', 'MBA preferred', 'Strong analytical skills'],
    postedBy: 'Emily Rodriguez',
    postedDate: '2024-01-12',
    applicationUrl: 'https://careers.meta.com'
  },
  {
    id: '3',
    title: 'Data Scientist',
    company: 'Netflix',
    location: 'Los Angeles, CA',
    type: 'Full-time',
    salary: '$130,000 - $180,000',
    description: 'Use machine learning to improve content recommendations and user experience. Work with large datasets to drive business insights.',
    requirements: ['MS in Data Science/Statistics', 'Python, R, SQL', 'Machine learning experience', '2+ years experience'],
    postedBy: 'Lisa Wang',
    postedDate: '2024-01-10',
    applicationUrl: 'https://jobs.netflix.com'
  },
  {
    id: '4',
    title: 'Investment Banking Analyst',
    company: 'Goldman Sachs',
    location: 'Chicago, IL',
    type: 'Full-time',
    salary: '$100,000 - $140,000',
    description: 'Support senior bankers in executing M&A transactions and capital raising activities. Excellent opportunity for career growth.',
    requirements: ['Finance/Economics degree', 'Strong analytical skills', 'Excel modeling', 'Previous internship preferred'],
    postedBy: 'Alex Thompson',
    postedDate: '2024-01-08',
    applicationUrl: 'https://careers.goldmansachs.com'
  },
  {
    id: '5',
    title: 'Mechanical Engineer',
    company: 'Tesla',
    location: 'Palo Alto, CA',
    type: 'Full-time',
    salary: '$110,000 - $150,000',
    description: 'Design and develop mechanical systems for electric vehicles. Work on cutting-edge automotive technology.',
    requirements: ['Mechanical Engineering degree', 'CAD software proficiency', 'Automotive experience preferred', 'Problem-solving skills'],
    postedBy: 'David Kim',
    postedDate: '2024-01-05',
    applicationUrl: 'https://tesla.com/careers'
  },
  {
    id: '6',
    title: 'Management Consultant',
    company: 'McKinsey & Company',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$140,000 - $180,000',
    description: 'Help Fortune 500 companies solve their most complex business challenges. Travel required.',
    requirements: ['Top-tier MBA/Bachelor\'s', 'Strong problem-solving', 'Consulting experience', 'Excellent communication'],
    postedBy: 'Mike Chen',
    postedDate: '2024-01-03',
    applicationUrl: 'https://mckinsey.com/careers'
  }
];

const JobPosts: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredJobs, setFilteredJobs] = useState(mockJobs);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    const filtered = mockJobs.filter(job =>
      job.title.toLowerCase().includes(value.toLowerCase()) ||
      job.company.toLowerCase().includes(value.toLowerCase()) ||
      job.location.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredJobs(filtered);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Job Board</h1>
            <p className="text-gray-600 mb-6">
              Discover {mockJobs.length} career opportunities posted by fellow alumni
            </p>
            
            {/* Search */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search jobs by title, company, or location..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Job Cards */}
          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Building className="h-4 w-4 mr-1" />
                          <span className="font-medium">{job.company}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-1" />
                          <span>{job.salary}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>Posted {formatDate(job.postedDate)}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge variant="secondary">{job.type}</Badge>
                      <Button size="sm">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Apply
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Description</h4>
                    <p className="text-gray-700">{job.description}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Requirements</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      {job.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                      Posted by <span className="font-medium">{job.postedBy}</span> • Alumni Network
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No jobs found</h3>
              <p className="text-gray-600">
                Try adjusting your search terms to find more opportunities.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobPosts;

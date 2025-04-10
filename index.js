
import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Search } from 'lucide-react';

const suggestions = [
  'lawn mowing', 'bakers', 'carvings', 'paintings', 'tutoring', 'babysitting',
  'pet sitting', 'window washing', 'knitted clothes/stuffies', 'recipes'
];

const sampleListings = [
  { id: 1, title: 'Lawn Mowing Service', description: 'Quick and affordable lawn care', price: '$25' },
  { id: 2, title: 'Custom Baked Goods', description: 'Cakes, cookies, and more', price: '$15' },
  { id: 3, title: 'Wood Carvings', description: 'Handcrafted wooden art', price: '$40' },
];

export default function Marketplace() {
  const [query, setQuery] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState(suggestions);
  const [showFilters, setShowFilters] = useState(false);
  const [placeholder, setPlaceholder] = useState('Search for services, products, etc.');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setPlaceholder(`Try "${suggestions[index]}"`);
      index = (index + 1) % suggestions.length;
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSearchChange = (e) => {
    const val = e.target.value;
    setQuery(val);
    setFilteredSuggestions(
      suggestions.filter(s => s.toLowerCase().includes(val.toLowerCase()))
    );
  };

  const handleSearch = () => {
    console.log('Searching for:', query);
  };

  const handleSupplierSignup = () => {
    console.log('Navigate to supplier signup');
  };

  const toggleFilters = () => {
    setShowFilters(prev => !prev);
  };

  const closeFilters = () => {
    setShowFilters(false);
  };

  const handleReview = (itemId) => {
    console.log(`Review button clicked for item ID: ${itemId}`);
  };

  return (
    <div className="relative p-4 max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-6 text-blue-800">Community Marketplace</h1>
      <div className="flex justify-between items-center mb-6">
        <div className="relative w-full mr-4">
          <Input
            placeholder={placeholder}
            value={query}
            onChange={handleSearchChange}
            className="pr-10 border-blue-400 focus:ring-blue-500 focus:border-blue-500"
          />
          <Button onClick={handleSearch} className="absolute right-1 top-1 h-8 bg-blue-600 text-white hover:bg-blue-700">
            <Search size={20} />
          </Button>
          {query && (
            <ul className="bg-white border rounded shadow mt-1 max-h-48 overflow-y-auto absolute w-full z-10">
              {filteredSuggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="p-2 hover:bg-blue-100 cursor-pointer"
                  onClick={() => setQuery(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
        <Button onClick={handleSupplierSignup} className="h-10 bg-green-600 text-white hover:bg-green-700">
          Sign Up to Sell
        </Button>
        <Button onClick={toggleFilters} className="ml-2 h-10 bg-blue-400 text-white hover:bg-blue-500">
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </Button>
      </div>

      {showFilters && (
        <div>
          {/* Backdrop for clicking out */}
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-10"
            onClick={closeFilters}
          ></div>

          {/* Sidebar */}
          <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-xl p-4 z-20">
            <h2 className="text-xl font-semibold mb-4 text-blue-700">Location Filters</h2>
            <ul className="space-y-2">
              <li><Input placeholder="School District" /></li>
              <li><Input placeholder="Zip Code" /></li>
              <li><Input placeholder="Nearest School" /></li>
              <li><Input placeholder="Neighborhood" /></li>
            </ul>
          </div>
        </div>
      )}

      {/* Marketplace Listings */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleListings.map(item => (
          <Card key={item.id} className="bg-white shadow-lg p-4">
            <CardContent>
              <h3 className="text-xl font-bold text-blue-800 mb-2">{item.title}</h3>
              <p className="text-gray-700 mb-2">{item.description}</p>
              <p className="text-green-600 font-semibold mb-4">{item.price}</p>
              <Button onClick={() => handleReview(item.id)} className="bg-yellow-500 text-white hover:bg-yellow-600">
                Leave a Review
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

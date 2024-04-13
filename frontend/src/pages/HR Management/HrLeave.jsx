import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HrLeave = () => {
  // Replace with data fetching logic (similar to HrLeave example)
  const [todayVisitors, setTodayVisitors] = useState(0);
  const [yesterdayVisitors, setYesterdayVisitors] = useState(0);
  const [lastSevenDaysVisitors, setLastSevenDaysVisitors] = useState(0);
  const [totalVisitors, setTotalVisitors] = useState(0);

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setTodayVisitors(10);
      setYesterdayVisitors(8);
      setLastSevenDaysVisitors(50);
      setTotalVisitors(120);
    }, 1000);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <VisitorCard title="Today's Visitors" count={todayVisitors} />
        <VisitorCard title="Yesterday's Visitors" count={yesterdayVisitors} />
        <VisitorCard title="Last 7 Days Visitors" count={lastSevenDaysVisitors} />
        <VisitorCard title="Total Visitors Till Date" count={totalVisitors} />
      </div>

      <Link to="/visitors" className="text-blue-500 hover:underline mt-8 block">
        View All Visitors
      </Link>
    </div>
  );
};

const VisitorCard = ({ title, count }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-2xl font-bold">{count}</p>
    </div>
  );
};

export default HrLeave;
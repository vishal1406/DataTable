import { useState, useEffect } from 'react';

export interface SortBy {
  id: string;
  desc: boolean;
}

export const useDataTable = () => {
  const [data, setData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);
  const [sortBy, setSortBy] = useState<SortBy | null>(null);
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);

    let query = `_page=${page}&_limit=${pageSize}`;

    if (sortBy) {
      query += `&_sort=${sortBy.id}&_order=${sortBy.desc ? 'desc' : 'asc'}`;
    }

    if (search) {
      query += `&q=${encodeURIComponent(search)}`;
    }

    Object.entries(filters).forEach(([key, value]) => {
      query += `&${key}=${encodeURIComponent(value as string)}`;
    });

    const res = await fetch(`http://localhost:3001/posts?${query}`);
    const json = await res.json();
    const total = res.headers.get('X-Total-Count');

    setData(json);
    if (total) setTotalCount(Number(total));

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [page, pageSize, sortBy, search, filters]);

  return {
    data,
    totalCount,
    isLoading,
    page,
    pageSize,
    setPage,
    sortBy,
    setSortBy,
    search,
    setSearch,
    filters,
    setFilters,
  };
};

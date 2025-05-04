'use client';

import React from 'react';
import DataTable from './DataTable';
import { Toaster } from "@/components/ui/sonner"

export default function Page() {
  return (
    <main className="p-6">
      <DataTable />
      <Toaster position="top-center" />
    </main>
  );
}

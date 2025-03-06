'use client';

import React, { useState } from 'react';
import { HoveredLink, Menu, MenuItem } from '@/components/ui/bar-nav-menu';
import { cn } from '@/app/lib/utils';

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">Home</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Solutions">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">Pricing</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">About Us</HoveredLink>
            <HoveredLink href="/careers">Careers</HoveredLink>
            <HoveredLink href="/">Contacts</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default function BarNav() {
  return (
  <>

    <div className="relative w-full hidden sm:block flex items-center justify-center">
      <Navbar className="top-2" />
    </div>

  </>
  );
}

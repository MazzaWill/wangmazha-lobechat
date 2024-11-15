'use client';

import { ActionIcon } from '@lobehub/ui';
import { XIcon } from 'lucide-react';
import { memo } from 'react';

import SidebarHeader from '@/components/SidebarHeader';
import { PortalHeader } from '@/features/Portal/router';
import { useChatStore } from '@/store/chat';

const Header = memo(() => {
  const [toggleInspector] = useChatStore((s) => [s.togglePortal]);

  return (
    <SidebarHeader
      actions={<ActionIcon icon={XIcon} onClick={() => toggleInspector(false)} />}
      style={{ paddingBlock: 8, paddingInline: 8 }}
      title={<PortalHeader />}
    />
  );
});

export default Header;

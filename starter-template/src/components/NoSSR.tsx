
'use client';

import { ReactNode } from 'react';

export default function NoSSR({ children }: { children: ReactNode }) {
	return <>{children}</>;
}

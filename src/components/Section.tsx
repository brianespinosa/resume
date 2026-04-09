import { Role, type RoleProps } from '@ariakit/react';
import { View } from '@react-pdf/renderer';
import { useContext } from 'react';

import { DocumentContext } from './DocumentContext';

export function Section({ children, ...rest }: RoleProps) {
  const isPDF = useContext(DocumentContext);
  const SectionComponent = isPDF ? View : 'section';

  return (
    <Role {...rest} render={<SectionComponent />}>
      {children}
    </Role>
  );
}

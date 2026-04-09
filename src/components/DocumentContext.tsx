import type { ComponentProps } from 'react';
import { createContext } from 'react';

export const DocumentContext = createContext(false);

export const PDFProvider = (
  props: Omit<ComponentProps<typeof DocumentContext.Provider>, 'value'>,
) => <DocumentContext.Provider {...props} value={true} />;

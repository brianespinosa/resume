import { Document, Page, StyleSheet, Text } from '@react-pdf/renderer';

import { Section } from './Section';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

export function ResumeDocument() {
  return (
    <Document>
      <Page size='LETTER' style={styles.page} wrap>
        <Section style={styles.section}>
          <Text>Section #1</Text>
        </Section>
        <Section style={styles.section}>
          <Text>Section #3</Text>
        </Section>
      </Page>
    </Document>
  );
}

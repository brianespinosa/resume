import fs from 'node:fs';
import path from 'node:path';

interface Settings {
  title: {
    default: string;
    template: string;
  };
  metadataBase: string;
  robots: string;
  lang: string;
}

/**
 * Parses a simple YAML file into a nested object.
 * Supports single-level nesting and quoted string values.
 */
function parseYaml(content: string): Record<string, unknown> {
  const result: Record<string, unknown> = {};
  let currentKey: string | null = null;
  let currentObject: Record<string, unknown> | null = null;

  for (const rawLine of content.split('\n')) {
    // Skip comments and empty lines
    const line = rawLine.replace(/#.*$/, '');
    if (line.trim() === '') continue;

    const indent = rawLine.search(/\S/);
    const match = line.trim().match(/^([^:]+):\s*(.*)$/);
    if (!match) continue;

    const key = match[1].trim();
    let value: string | undefined = match[2].trim();

    // Remove surrounding quotes
    if (
      (value.startsWith("'") && value.endsWith("'")) ||
      (value.startsWith('"') && value.endsWith('"'))
    ) {
      value = value.slice(1, -1);
    }

    if (indent > 0 && currentKey) {
      // Nested property
      if (!currentObject) currentObject = {};
      currentObject[key] = value || undefined;
    } else {
      // Save previous nested object
      if (currentKey && currentObject) {
        result[currentKey] = currentObject;
      }

      if (value) {
        // Top-level key with value
        result[key] = value;
        currentKey = null;
        currentObject = null;
      } else {
        // Top-level key without value (start of nested object)
        currentKey = key;
        currentObject = {};
      }
    }
  }

  // Save last nested object
  if (currentKey && currentObject) {
    result[currentKey] = currentObject;
  }

  return result;
}

const settingsPath = path.join(process.cwd(), 'src', 'settings.yml');
const fileContent = fs.readFileSync(settingsPath, 'utf8');

const settings = parseYaml(fileContent) as unknown as Settings;

export default settings;

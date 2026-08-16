import { Pressable, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export type CampusOperationalStatus = 'open' | 'closed' | 'busy';

export type CampusStatusItem = {
  id: string;
  name: string;
  status: CampusOperationalStatus;
};

type CampusStatusCardProps = {
  selectedCampus: CampusStatusItem;
  campuses: CampusStatusItem[];
  onSwitchCampus: (campusId: CampusStatusItem['id']) => void;
};

const statusLabel: Record<CampusOperationalStatus, string> = {
  open: 'Open',
  closed: 'Closed',
  busy: 'Busy',
};

const statusColor: Record<CampusOperationalStatus, string> = {
  open: '#166534',
  closed: '#991b1b',
  busy: '#9a3412',
};

export function CampusStatusCard({ selectedCampus, campuses, onSwitchCampus }: CampusStatusCardProps) {
  return (
    <ThemedView style={styles.card}>
      <ThemedText type="subtitle">Exercise 10: Milestone extension</ThemedText>
      <ThemedText>Selected campus: {selectedCampus.name}</ThemedText>
      <ThemedText style={{ color: statusColor[selectedCampus.status] }}>
        Current status: {statusLabel[selectedCampus.status]}
      </ThemedText>

      <ThemedText style={styles.switchLabel}>Switch campus</ThemedText>
      <ThemedView style={styles.switchList}>
        {campuses.map((campus) => (
          <Pressable
            key={campus.id}
            style={[
              styles.switchButton,
              campus.id === selectedCampus.id ? styles.switchButtonActive : null,
            ]}
            onPress={() => onSwitchCampus(campus.id)}>
            <ThemedText style={styles.switchButtonText}>{campus.name}</ThemedText>
          </Pressable>
        ))}
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: 10,
    marginBottom: 20,
    padding: 14,
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 12,
    backgroundColor: '#f8fafc',
  },
  switchLabel: {
    fontWeight: '600',
    marginTop: 4,
  },
  switchList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  switchButton: {
    borderWidth: 1,
    borderColor: '#94a3b8',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#ffffff',
  },
  switchButtonActive: {
    borderColor: '#0a7ea4',
    backgroundColor: '#e0f2fe',
  },
  switchButtonText: {
    color: '#0f172a',
    fontWeight: '600',
  },
});
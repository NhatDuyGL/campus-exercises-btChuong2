import { Image } from 'expo-image';
import { useState } from 'react';
import { Pressable, StyleSheet, TextInput } from 'react-native';

import {
  CampusStatusCard,
  type CampusStatusItem,
} from '@/components/campus-status-card';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { CampusService, getServiceDisplayText } from '@/constants/campus-service';

const services: CampusService[] = [
  {
    id: 'svc-001',
    name: 'Library Help Desk',
    status: 'open',
    waitTimeMinutes: 12,
    locations: ['Main Library', 'Building A'],
  },
  {
    id: 'svc-002',
    name: 'Student Affairs',
    status: 'limited',
    locations: ['Admin Office'],
  },
  {
    id: 'svc-003',
    name: 'Campus Clinic',
    status: 'closed',
    locations: ['Health Center'],
  },
];

const SHOW_EXERCISE_5_6_UI = false;
const SHOW_EXERCISE_7_UI = false;
const SHOW_EXERCISE_10_UI = true;

const mockCampuses: CampusStatusItem[] = [
  { id: 'north-campus', name: 'North Campus', status: 'open' },
  { id: 'central-campus', name: 'Central Campus', status: 'busy' },
  { id: 'south-campus', name: 'South Campus', status: 'closed' },
];

export default function HomeScreen() {
  const [draftStatusMessage, setDraftStatusMessage] = useState('Ready to study mobile development.');
  const [committedStatusMessage, setCommittedStatusMessage] = useState(
    'Ready to study mobile development.'
  );
  const [selectedCampusId, setSelectedCampusId] = useState<CampusStatusItem['id']>(
    mockCampuses[0].id
  );

  const selectedCampus =
    mockCampuses.find((campus) => campus.id === selectedCampusId) ?? mockCampuses[0];

  const handleSwitchCampus = (campusId: CampusStatusItem['id']) => {
    setSelectedCampusId(campusId);
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Exercise 10</ThemedText>
      </ThemedView>

      {SHOW_EXERCISE_10_UI ? (
        <CampusStatusCard
          selectedCampus={selectedCampus}
          campuses={mockCampuses}
          onSwitchCampus={handleSwitchCampus}
        />
      ) : null}

      {SHOW_EXERCISE_5_6_UI ? (
        <>
          <ThemedView style={styles.stepContainer}>
            <ThemedText type="subtitle">Campus Services</ThemedText>
            {services.map((service) => (
              <ThemedText key={service.id}>{getServiceDisplayText(service)}</ThemedText>
            ))}
          </ThemedView>

          <ThemedView style={styles.profileCard}>
            <ThemedText type="subtitle">Student Profile</ThemedText>
            <ThemedText>ID: 23657251</ThemedText>
            <ThemedText>Major: Information Technology</ThemedText>
            <ThemedText>Cohort: 2023-2027</ThemedText>
            <ThemedText>Status message: {committedStatusMessage}</ThemedText>
          </ThemedView>

          <ThemedView style={styles.editorCard}>
            <ThemedText type="subtitle">Exercise 6: State and events</ThemedText>
            <ThemedText>Edit status message (changes apply only after Save).</ThemedText>
            <TextInput
              value={draftStatusMessage}
              onChangeText={setDraftStatusMessage}
              placeholder="Enter status message"
              style={styles.input}
            />
            <Pressable
              style={styles.saveButton}
              onPress={() => setCommittedStatusMessage(draftStatusMessage)}>
              <ThemedText style={styles.saveButtonText}>Save</ThemedText>
            </Pressable>
          </ThemedView>
        </>
      ) : null}

      {SHOW_EXERCISE_7_UI ? (
        <ThemedView style={styles.labCard}>
          <ThemedText type="subtitle">Exercise 7: Flexbox laboratory</ThemedText>

          <ThemedText style={styles.predictionText}>
            Prediction (column): with justifyContent=&quot;space-between&quot; children spread
            vertically; with alignItems=&quot;center&quot; children stay centered horizontally.
          </ThemedText>
          <ThemedView style={styles.columnLab}>
            <ThemedView style={[styles.block, styles.blockA]}>
              <ThemedText style={styles.blockLabel}>A</ThemedText>
            </ThemedView>
            <ThemedView style={[styles.block, styles.blockB]}>
              <ThemedText style={styles.blockLabel}>B</ThemedText>
            </ThemedView>
            <ThemedView style={[styles.block, styles.blockC]}>
              <ThemedText style={styles.blockLabel}>C</ThemedText>
            </ThemedView>
          </ThemedView>

          <ThemedText style={styles.predictionText}>
            Prediction (row): with justifyContent=&quot;space-around&quot; children spread horizontally;
            with alignItems=&quot;flex-start&quot; children align to the top edge.
          </ThemedText>
          <ThemedView style={styles.rowLab}>
            <ThemedView style={[styles.block, styles.blockA]}>
              <ThemedText style={styles.blockLabel}>A</ThemedText>
            </ThemedView>
            <ThemedView style={[styles.block, styles.blockB]}>
              <ThemedText style={styles.blockLabel}>B</ThemedText>
            </ThemedView>
            <ThemedView style={[styles.block, styles.blockC]}>
              <ThemedText style={styles.blockLabel}>C</ThemedText>
            </ThemedView>
          </ThemedView>

          <ThemedText style={styles.predictionText}>
            Overflow diagnosis: the fourth block has long text and a fixed width, so content
            exceeds available space in row layout. Applying flexShrink and wrapping keeps the text
            inside.
          </ThemedText>
          <ThemedView style={styles.rowLab}>
            <ThemedView style={[styles.block, styles.blockA]}>
              <ThemedText style={styles.blockLabel}>A</ThemedText>
            </ThemedView>
            <ThemedView style={[styles.block, styles.blockB]}>
              <ThemedText style={styles.blockLabel}>B</ThemedText>
            </ThemedView>
            <ThemedView style={[styles.block, styles.blockC]}>
              <ThemedText style={styles.blockLabel}>C</ThemedText>
            </ThemedView>
            <ThemedView style={[styles.block, styles.longTextBlock]}>
              <ThemedText style={styles.longText}>
                This is a long block for overflow testing in row direction.
              </ThemedText>
            </ThemedView>
          </ThemedView>
        </ThemedView>
      ) : null}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  profileCard: {
    gap: 8,
    marginBottom: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 12,
    backgroundColor: '#f8fafc',
  },
  editorCard: {
    gap: 10,
    marginBottom: 20,
    padding: 14,
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 12,
    backgroundColor: '#ffffff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#94a3b8',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#ffffff',
    color: '#0f172a',
  },
  saveButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#0a7ea4',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  saveButtonText: {
    color: '#ffffff',
    fontWeight: '600',
  },
  labCard: {
    gap: 10,
    marginBottom: 20,
    padding: 14,
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 12,
    backgroundColor: '#f1f5f9',
  },
  predictionText: {
    lineHeight: 20,
  },
  columnLab: {
    height: 220,
    borderWidth: 1,
    borderColor: '#94a3b8',
    borderRadius: 10,
    padding: 12,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  rowLab: {
    minHeight: 90,
    borderWidth: 1,
    borderColor: '#94a3b8',
    borderRadius: 10,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
    gap: 8,
  },
  block: {
    width: 56,
    height: 56,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  blockA: {
    backgroundColor: '#93c5fd',
  },
  blockB: {
    backgroundColor: '#86efac',
  },
  blockC: {
    backgroundColor: '#fca5a5',
  },
  blockLabel: {
    fontWeight: '700',
    color: '#0f172a',
  },
  longTextBlock: {
    width: 140,
    height: 'auto',
    minHeight: 56,
    paddingHorizontal: 8,
    paddingVertical: 6,
    backgroundColor: '#fde68a',
    flexShrink: 1,
  },
  longText: {
    fontSize: 12,
    lineHeight: 16,
    color: '#0f172a',
    textAlign: 'center',
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

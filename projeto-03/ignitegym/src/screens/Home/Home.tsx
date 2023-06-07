import { useState } from 'react';
import { FlatList, Heading, HStack, Text, VStack } from 'native-base';

// COMPONENTS
import { Group } from '@components/Group/Group';
import { HomeHeader } from '@components/HomeHeader/HomeHeader';
import { ExerciseCard } from '@components/ExerciseCard/ExerciseCard';
import { Platform } from 'react-native';

export function Home() {
  const [groupSelected, setGroupSelected] = useState('Costas');
  const [groups, setGroups] = useState(['Costas', 'Bíceps', 'Tríceps', 'ombro']);
  const [exercises, setExercises] = useState(['1', '2', 'Puxada frontal', 'Remada curvada', 'Remada unilateral', 'Levantamento terras']);
  
  return (
    <VStack flex={1}>
      <HomeHeader />
      
      <HStack>
        <FlatList 
          data={groups}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Group 
              name={item}
              isActive={groupSelected.toLocaleUpperCase() === item.toLocaleUpperCase()}
              onPress={() => setGroupSelected(item)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          _contentContainerStyle={{
            px: 8,
          }}
          my={12}
          maxH={12}
        />
      </HStack>


      <VStack px={8}>
        <HStack justifyContent="space-between" mb={5}>
          <Heading color="gray.200" fontSize="md">
            Exercícios
          </Heading>

          <Text color="gray.200" fontSize="sm">
          {exercises.length}
          </Text>
        </HStack>
        
        <FlatList 
          data={exercises}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <ExerciseCard />
          )}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{
            paddingBottom: Platform.OS === 'ios' ? 20 : 80
          }}
        />

      </VStack>
    </VStack>
  );
}
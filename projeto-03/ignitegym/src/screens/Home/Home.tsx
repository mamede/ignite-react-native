import { useState, useEffect, useCallback } from 'react';
import { Platform } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { FlatList, Heading, HStack, Text, useToast, VStack } from 'native-base';

// SERVICES
import { api } from '@services/api';

// UTILS
import { AppError } from '@utils/AppError';

// COMPONENTS
import { Group } from '@components/Group/Group';
import { HomeHeader } from '@components/HomeHeader/HomeHeader';
import { ExerciseCard } from '@components/ExerciseCard/ExerciseCard';
import { Loading } from '@components/Loading/Loading';

import { AppNavigatorRoutesProps } from '@routes/app.routes';

// TYTPES
import { ExerciseDTO } from '@dtos/ExerciseDTO';

export function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [groupSelected, setGroupSelected] = useState('Costas');
  const [groups, setGroups] = useState<string[]>([]);
  const [exercises, setExercises] = useState<ExerciseDTO[]>([]);

  const toast = useToast();

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleOpenExerciseDetails(exerciseId: string) {
    navigation.navigate('exercise', { exerciseId });
  }

  async function fetchGroups() {
    try {
      const response = await api.get('/groups');
      setGroups(response.data);

    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError ? error.message : 'Não foi possível carregar os grupos musculares';

      toast.show({
        title,
        placement: 'top',
        bgColor: 'red.500'
      })
    }
  }

  async function fecthExercisesByGroup() {
    try {
      setIsLoading(true);
      const response = await api.get(`/exercises/bygroup/${groupSelected}`);
      setExercises(response.data);

    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError ? error.message : 'Não foi possível carregar os exercícios';

      toast.show({
        title,
        placement: 'top',
        bgColor: 'red.500'
      })
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchGroups();
  },[])

  useFocusEffect(
    useCallback(() => {
      fecthExercisesByGroup()
    },[groupSelected])
  )

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
          my={10}
          maxH={10}
          minH={10}
        />
      </HStack>

      {isLoading ? <Loading /> : (

      <VStack px={8}>
        <HStack justifyContent="space-between" mb={5}>
          <Heading color="gray.200" fontSize="md" fontFamily="heading">
            Exercícios
          </Heading>

          <Text color="gray.200" fontSize="sm">
          {exercises.length}
          </Text>
        </HStack>
        
        <FlatList 
          data={exercises}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <ExerciseCard onPress={() => handleOpenExerciseDetails(item.id)} data={item} />
          )}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{
            paddingBottom: Platform.OS === 'ios' ? 20 : 80
          }}
        />

      </VStack>
      )}

    </VStack>
  );
}
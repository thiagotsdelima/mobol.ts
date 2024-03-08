import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Participant } from '../../components/Participant';

import { styles } from './styles';

export function Home() {
  
  function handleParticipantAdd() {
    alert("Você clicou no botão");
  }

  return (
    <View style={styles.container}> 
      <Text style={styles.eventName}>Nome do evento</Text> 
      <Text style={styles.eventData}>Sexta, 4 de Novembro de 2022</Text>
      <View style={styles.from}>
      <TextInput 
        style={styles.input}
        placeholder="Nome do participante"
        placeholderTextColor="#FFF"
      />
     <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}> 
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      </View>
      <Participant />
      <Participant />
      <Participant />
    </View>
  );
}

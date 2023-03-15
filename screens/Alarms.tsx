import { useNavigation } from '@react-navigation/native';
import { Text, Card, FAB, Avatar, Switch, Icon } from '@rneui/themed';
import React from 'react';
import { View } from 'react-native';

export const Alarms: React.FC = ({ navigation }: { navigation: any }) => {
  return (
    <>
      <AlarmCard title="Despertar" time="7:00" when="Lunes a Viernes" />
      <AlarmCard title="Screen Off" time="16:00" when="Jueves" icon="devices" />
      <FAB
        icon={{ name: 'add' }}
        placement="right"
        onPress={() => navigation.navigate('Creación')}
      />
    </>
  );
}

function AlarmCard({ title, time, when, icon }: { title: string, time: string, when: string, icon?: string }) {
  return <Card containerStyle={{ borderRadius: 20, padding: 10 }}>
    <View style={{ flexDirection: "row" }}>
      <View style={{ width: '20%', alignItems: "center", justifyContent: "center" }}>
        <Icon
          color="#614D9E"
          size={50}
          name={icon || "alarm"}
        />
      </View>
      { /* Make the title aligned to the bottom */}
      <View style={{ width: '60%', alignItems: "center", justifyContent: "flex-end", flex: 1 }}>
        <Card.Title style={{color: '#614D9E'}} h4>{title}</Card.Title>
      </View>
      <View style={{ width: '20%', alignItems: "flex-end" }}>
        <Text style={{color: '#614D9E'}} h4>{time}</Text>
        <Switch color='#614D9E' style={{ width: '20%' }} />
      </View>
    </View>
    <Card.Divider />
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <View style={{ width: '10%' }}>
      </View>
      <View style={{ width: '80%', alignItems: "center" }}>
        <Text style={{color: '#614D9E'}}>{when}</Text>
      </View>
      <View style={{ alignItems: "center", width: '10%' }}>
        <Icon
          name="delete"
          size={30}
          color="red"
        />
      </View>
    </View>
  </Card>

}

export function AlarmCreation() {
  return <View>
    <Text style={{color: '#614D9E'}} h1>Alarm Creation</Text>
  </View>
}

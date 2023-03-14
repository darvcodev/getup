import { Text, FAB, Icon } from '@rneui/themed';
import { Calendar } from 'react-native-calendars'
import React from 'react';
import { View } from 'react-native';


export function Agenda() {
  return (
    <>
      <React.Fragment>
        <Calendar />
      </React.Fragment>
      <View style={{ marginTop: 20 }}>
        <View style={{ alignItems: "center", paddingBottom: 30 }}>
          <Text h3>Lista de Eventos</Text>
        </View>
        <AgendaCard title="Stand up" time="7:00" />
        <AgendaCard title="Parcial UX" time="10:00" />
        <AgendaCard title="Cita médica" time="15:00" />
      </View>
      <FAB
        icon={{ name: 'add' }}
        placement="right"
      />
    </>
  );
}

export function AgendaCard({ title, time }: { title: string, time: string }) {
  return <View style={{ flexDirection: "row", justifyContent: "center" }}>
    <View style={{ width: '80%', flexDirection: "row", justifyContent: "space-between", backgroundColor: "white", borderColor: "gray", borderWidth: 1, borderRadius: 20, padding: 10, marginLeft: 5, marginBottom: 15 }}>
      <Text h4 style={{ width: '70%', paddingLeft: '5%', overflow: "hidden", color: "gray" }}>{title}</Text>
      <Text h4 style={{ width: '30%', color: "gray" }}>| {time}</Text>
    </View>
    <View style={{ width: '10%', justifyContent: "center" }}>
      <Icon
        name="delete"
        size={30}
        color="red"
      />
    </View>
  </View>
}

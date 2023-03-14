import { Text, Card, FAB, Avatar, Switch, Chip } from '@rneui/themed';
import React from 'react';
import { View } from 'react-native';

export const Perfil: React.FC = () => {
  return (
    <>
      <ProfileCard nombre="Carlos Castro" email="carlos@gmail.com" />
    </>
  );
}

function ProfileCard({ nombre, email }: { nombre: string, email: string }) {
  return <Card containerStyle={{ borderRadius: 20, padding: 10 }}>
    <View style={{ flexDirection: "row" }}>
      <View style={{ width: '20%', alignItems: "center", justifyContent: "center" }}>
        <Avatar
          size={60}
          rounded
          source={{ uri: "https://randomuser.me/api/portraits/men/35.jpg" }}
        />
      </View>
      { /* Make the title aligned to the bottom */}
      <View style={{ alignItems: "center", width: '80%' }}>
        <Card.Title h4>{nombre}</Card.Title>
      </View>
    </View>
    <View style={{ alignItems: "center", paddingLeft: '20%' }}>
      <Text>{email}</Text>
    </View>
    <View style={{ alignItems: "flex-end" }}>
      <Chip
        containerStyle={{ paddingTop: 10, paddingRight: 10 }}
        title="ACTUALIZAR PLAN"
      />
    </View>
  </Card>

}


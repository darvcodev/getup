import { Text, Card, Avatar } from "@rneui/themed";
import React from "react";
import { View, StyleSheet, Pressable, ScrollView } from "react-native";
import { DonutChart } from "react-native-circular-chart";

const DATA = [
  {
    name: "Hábito 1",
    value: 82,
    color: "#614D9E",
  },
];

export const Perfil: React.FC = () => {
  return (
    <>
      <ProfileCard nombre="Carlos Castro" email="carlos@gmail.com" />
    </>
  );
};

function ProfileCard({ nombre, email }: { nombre: string; email: string }) {
  return (
    <ScrollView style={styles.container}>
      <Card containerStyle={{ borderRadius: 20, padding: 10 }}>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              width: "20%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Avatar
              size={60}
              rounded
              source={{ uri: "https://randomuser.me/api/portraits/men/35.jpg" }}
            />
          </View>
          {/* Make the title aligned to the bottom */}
          <View style={{ alignItems: "center", width: "80%" }}>
            <Text h4>{nombre}</Text>
            <Text>{email}</Text>
          </View>
        </View>
        <Pressable style={styles.buttonPlan}>
          <Text style={styles.text}>Actualizar plan</Text>
        </Pressable>
      </Card>

      <Text style={{ fontSize: 20, fontWeight: "bold", padding: 10 }}>
        {" "}
        Hábitos{" "}
      </Text>
      <View style={styles.sectionWrapper}>
        <DonutChart
          data={DATA}
          strokeWidth={15}
          radius={90}
          containerWidth={150 * 2}
          containerHeight={150 * 2}
          type="round"
          startAngle={50}
          endAngle={360}
          animationType="slide"
        />
      </View>
      {/* crear un <hr /> */}
      <View style={styles.hr} />
      <Pressable style={styles.button} onPress={() => {}}>
        <Text style={styles.text}>Cerrar Sesión</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => {}}>
        <Text style={styles.text}>Registrarse</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  sectionWrapper: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "lightgray",
    backgroundColor: "#ffffff",
    marginVertical: 8,
    marginHorizontal: 16,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginVertical: 8,
    marginHorizontal: 50,
    borderRadius: 100,
    elevation: 3,
    backgroundColor: "#614D9E",
  },
  buttonPlan: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginVertical: 8,
    marginLeft: 100,
    borderRadius: 100,
    elevation: 3,
    backgroundColor: "#614D9E",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  hr: {
    borderBottomColor: "#614D9E",
    borderBottomWidth: 1,
    marginHorizontal: 20,
    marginVertical: 10,
  },
});

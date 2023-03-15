import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Pressable,
} from "react-native";

export const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Correo Electrónico</Text>
      <TextInput style={styles.input} placeholder="Ingresar el email" />
      <Text style={styles.title}>Contraseña</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresar la contraseña"
        secureTextEntry
      />
      <Pressable style={styles.button}>
        <Text style={styles.text}>Iniciar Sesión</Text>
      </Pressable>
      <Text style={{ textAlign: "center", color: "#443D3D", fontWeight: "bold" }}>
        ¿Olvidaste tu contraseña?
      </Text>
      <View style={styles.hr} />
        <Pressable style={styles.button}>
            <Text style={styles.text}>INICIAR SESIÓN CON GOOGLE</Text>
        </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    padding: 20,
    backgroundColor: "#BAA6ED",
    margin: 20,
    borderColor: "#614D9E",
    borderWidth: 3,
    borderRadius: 30,
    marginTop: 50,
  },
  title: {
    textAlign: "left",
    color: "#443D3D",
    fontSize: 18,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    width: "100%",
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#614D9E",
    borderRadius: 100,
    backgroundColor: "#fff",
    minHeight: 60,
    fontSize: 18,
    paddingLeft: 20,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginVertical: 12,
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

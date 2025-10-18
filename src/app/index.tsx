import { Redirect } from "expo-router";
import Loading from "../components/Loading";

export default function RootIndex() {
  return (
    <>
      <Loading />
      <Redirect href="/(tabs)" />
    </>
  );
}
import { Redirect } from 'expo-router';

const RootHome = () => {
  return <Redirect href={`/home/${new Date().getFullYear()}`} />;
};

export default RootHome;
